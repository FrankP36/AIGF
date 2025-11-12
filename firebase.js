import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// 🔥 Replace with your Firebase config:
const firebaseConfig = {
  apiKey: "AIzaSyB3-EXAMPLEKEY12345",
  authDomain: "my-virtual-companion.firebaseapp.com",
  projectId: "my-virtual-companion",
  storageBucket: "my-virtual-companion.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sections
const authSection = document.getElementById("auth-section");
const chatSection = document.getElementById("chat-section");
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message");

// Auth Buttons
const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");
const sendBtn = document.getElementById("send");

// 🔐 Sign Up
signupBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful!");
  } catch (error) {
    alert(error.message);
  }
});

// 🔐 Login
loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(error.message);
  }
});

// 🔐 Logout
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
});

// 👀 Auth State Listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    authSection.classList.add("hidden");
    chatSection.classList.remove("hidden");
    loadChat(user.uid);
  } else {
    chatSection.classList.add("hidden");
    authSection.classList.remove("hidden");
  }
});

// 💬 Send Message
sendBtn.addEventListener("click", async () => {
  const msg = messageInput.value.trim();
  if (!msg) return;

  appendMessage("You", msg);
  messageInput.value = "";

  // Simple AI response simulation (replace later with API)
  setTimeout(() => {
    const reply = "💖 I'm here for you. Tell me more!";
    appendMessage("Companion", reply);
  }, 1000);
});

function appendMessage(sender, text) {
  const msgEl = document.createElement("div");
  msgEl.className = "mb-2";
  msgEl.innerHTML = `<strong class="text-rose-400">${sender}:</strong> <span>${text}</span>`;
  chatBox.appendChild(msgEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// 🧠 Load Chat (Future Firestore integration)
async function loadChat(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    appendMessage("Companion", "Welcome back 💕");
  } else {
    await setDoc(docRef, { createdAt: Date.now() });
    appendMessage("Companion", "Hi there 💖 I'm your new companion!");
  }
}
