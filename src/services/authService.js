import app from "./firebase";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc
} from "firebase/firestore";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({

    prompt: "select_account"

});

const db = getFirestore(app);

export async function login() {

    try {

        const result = await signInWithPopup(auth, provider);

        return result.user;

    }
    catch (error) {

        throw error;

    }

}

export async function logout() {

    try {

        await signOut(auth);

    }
    catch (error) {

        throw error;

    }

}

export function getCurrentUser() {

    return auth.currentUser;

}

export async function isAdmin(email) {
    const normalizedEmail = email.trim().toLowerCase();

    const adminRef = doc(db, "admins", normalizedEmail);
    const adminDoc = await getDoc(adminRef);

    return adminDoc.exists();
}

export function waitForAuth() {

    return new Promise((resolve) => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            unsubscribe();

            resolve(user);

        });

    });

}

export { auth };