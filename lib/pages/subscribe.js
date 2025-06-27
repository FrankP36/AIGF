import { useEffect, useRef } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function SubscribePage() {
  const paypalRef = useRef();
  const db = getFirestore();

  useEffect(() => {
    const loadPayPal = async () => {
      const user = auth.currentUser;
      if (!user) return alert("Please login first to subscribe");

      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            const selectedPlan = "basic";
            const amount = selectedPlan === "vip" ? "19.99" : "9.99";

            return actions.order.create({
              purchase_units: [{
                amount: { value: amount },
                description: selectedPlan.toUpperCase() + " Plan",
              }],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            const subRef = doc(db, "users", user.uid);
            await setDoc(subRef, {
              email: user.email,
              subscription: {
                status: "active",
                plan: "basic",
                orderId: order.id,
              },
            }, { merge: true });
            alert("Subscription successful! You can now access the chat.");
          },
          onError: (err) => {
            console.error("PayPal Checkout error", err);
            alert("Payment failed");
          }
        }).render(paypalRef.current);
      }
    };

    onAuthStateChanged(auth, (user) => {
      if (user) loadPayPal();
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 via-white to-blue-100">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Choose Your Plan</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        <p className="mb-2">💖 Basic Plan — $9.99/month</p>
        <p className="mb-6">💎 VIP Plan — $19.99/month (upgrade manually after payment)</p>
        <div ref={paypalRef} />
      </div>
    </div>
  );
}
