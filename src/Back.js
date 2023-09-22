import { doc, addDoc, getDoc, getDocs, collection, getFirestore, query, where, } from "firebase/firestore";

export const getProduct = async (id) => {
    try {
        const db = getFirestore();
        const itemDoc = doc(db, 'items', id);
        const docSnapshot = await getDoc(itemDoc);

        if (docSnapshot.exists()) {
            return { id: docSnapshot.id, ...docSnapshot.data() };
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
};
export const getProducts = async (categoryId) => {
    try {
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        let q;

        if (categoryId) {
            q = query(itemCollection, where('categoryId', '==', categoryId));
        } else {
            q = query(itemCollection);
        }

        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return products;
    } catch (error) {
        throw error;
    }
};

export const createOrder = (order) => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    return addDoc(ordersCollection, order)
}