import { getFirestore, collection, getDocs, getDoc, doc, where, query } from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDEm6ok9QMgk0sg6_hfX0_qqxVo9qDeQo8",
    authDomain: "mundogamingpc-5714a.firebaseapp.com",
    projectId: "mundogamingpc-5714a",
    storageBucket: "mundogamingpc-5714a.appspot.com",
    messagingSenderId: "173785303933",
    appId: "1:173785303933:web:89903aebbd53c1b4e8da14"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export async function getItems() {
    const productsCollectionRef = collection(db, "productos")
    const snapshot = await getDocs(productsCollectionRef);
    const docsData = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    })

    return docsData;
}


export async function getSingleitem(itemid) {
    const productsCollectionRef = collection(db, "productos");
    const productRef = doc(productsCollectionRef, itemid)
    const snapshot = await getDoc(productRef);

    return {
        ...snapshot.data(), id: snapshot.id
    }

}


export async function getItemsByCategory(cat) {
    const productsCollectionRef = collection(db, "productos")
    const q = query(productsCollectionRef, where("cat", "==", cat));
    const snapshot = await getDocs(q);
    const docsData = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    })

    return docsData;
}

