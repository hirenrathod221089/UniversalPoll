import app from "./firebase";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    query,
    orderBy,
    setDoc
} from "firebase/firestore";

const db = getFirestore(app);

const categoriesRef = collection(db, "categories");


// ---------------------------------
// Get Categories
// ---------------------------------

export async function getCategories() {

    const q = query(
        categoriesRef,
        orderBy("order", "asc")
    );

    const snapshot = await getDocs(q);

    const categories = [];

    snapshot.forEach(doc => {

        categories.push({
            id: doc.id,
            ...doc.data()
        });

    });

    return categories;
}


// ---------------------------------
// Create Category
// ---------------------------------

export async function createCategory(category) {

    const categoryId = category.id;

    await setDoc(
        doc(db, "categories", categoryId),
        {
            name: category.name,
            icon: category.icon,
            order: category.order,
            isActive: category.isActive
        }
    );

}


// ---------------------------------
// Update Category
// ---------------------------------

export async function updateCategory(id, category) {

    await updateDoc(
        doc(db, "categories", id),
        {
            name: category.name,
            icon: category.icon
        }
    );

}


// ---------------------------------
// Toggle Category
// ---------------------------------

export async function toggleCategory(id, isActive) {

    await updateDoc(
        doc(db, "categories", id),
        {
            isActive: !isActive
        }
    );

}