import {collection, getDocs, query, where} from "firebase/firestore/lite";

export async function getAllItems(db) {
    const productsSnapshot = await getDocs(collection(db, 'products'));
    return productsSnapshot.docs.map(doc => doc.data());
}

export async function getItemById(db, id) {
    const productsSnapshot = await getDocs(query(collection(db, 'products'), where("id", "==", parseInt(id))));
    return productsSnapshot.docs.map(doc => doc.data());
}

export async function getItemsByCategory(db, category) {
    const productsSnapshot = await getDocs(query(collection(db, 'products'), where("category", "==", category)));
    return productsSnapshot.docs.map(doc => doc.data());
}