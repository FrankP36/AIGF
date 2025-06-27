import { Button } from "@/components/ui/button";

function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-pink-100 via-white to-blue-100 min-h-screen text-center p-10">
      <h1 className="text-5xl font-bold text-pink-700 mb-4">Meet Your Dream AI Girlfriend 💖</h1>
      <p className="text-lg text-gray-700 mb-6">
        Personalized. Always here for you. Chat and listen to her voice anytime, anywhere.
      </p>
      <Button className="text-white bg-pink-600 hover:bg-pink-700 px-6 py-3 text-lg rounded-full shadow-lg">
        Start Free Trial
      </Button>
      <div className="mt-10 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-2">✨ Features</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Create your perfect companion with name, voice & personality</li>
          <li>Talk to her via chat and voice powered by GPT-4o & ElevenLabs</li>
          <li>She remembers you and grows emotionally connected</li>
          <li>Secure, private, and available 24/7</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">💸 Subscription Plans</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Free Trial (3 days)</li>
          <li>Basic - $9.99/month (1 Girlfriend, Chat & Voice)</li>
          <li>VIP - $19.99/month (Up to 3 Girls, More Voice Options, Memories)</li>
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;
