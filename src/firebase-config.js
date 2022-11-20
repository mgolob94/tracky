import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx96Tl-nx8JjKgHXj79c3lQ9c0WqA41Z4",
  authDomain: "tracky-95c1c.firebaseapp.com",
  projectId: "tracky-95c1c",
  storageBucket: "tracky-95c1c.appspot.com",
  messagingSenderId: "499543094022",
  appId: "1:499543094022:web:2b4d6094366133f2f92487",
  measurementId: "G-FXXJ5ETK15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;