import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const apiKey = (import.meta.env.VITE_FIREBASE_API_KEY as string | undefined) ?? "";
const projectId = (import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined) ?? "";

export const firebaseConfigured = !!(apiKey && projectId);

export const RSVPS_COLLECTION = "rsvps";

export const db = (() => {
  if (!firebaseConfigured) {
    // eslint-disable-next-line no-console
    console.warn(
      "[firebase] Not configured. Set VITE_FIREBASE_* env vars in .env to enable RSVP storage.",
    );
    return null;
  }

  const app = initializeApp({
    apiKey,
    authDomain: (import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined) ?? "",
    projectId,
    storageBucket: (import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined) ?? "",
    messagingSenderId: (import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined) ?? "",
    appId: (import.meta.env.VITE_FIREBASE_APP_ID as string | undefined) ?? "",
  });

  return getFirestore(app);
})();
