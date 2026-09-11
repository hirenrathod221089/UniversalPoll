import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjz50huFlNrTJJ6p5qSHkjcp2IP3fltCQ",
  authDomain: "opinionpollweb.firebaseapp.com",
  projectId: "opinionpollweb",
  storageBucket: "opinionpollweb.firebasestorage.app",
  messagingSenderId: "752013554044",
  appId: "1:752013554044:web:4218a22c72a5c22c8074f9",
};

const app = initializeApp(firebaseConfig);

export default app;