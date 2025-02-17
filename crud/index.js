const { initializeApp } = require('firebase/app');
const { getAuth, onAuthStateChanged } = require('firebase/auth');

const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    deleteDoc
} = require('firebase/firestore/lite');


const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDoqVNDfgruXV9LJjPfqqUNv33OSA2BlQY",
    authDomain: "primeiroserver-346e7.firebaseapp.com",
    projectId: "primeiroserver-346e7",
    storageBucket: "primeiroserver-346e7.appspot.com",
    messagingSenderId: "102326575401",
    appId: "1:102326575401:web:9f945ec7cdf9a5fe431738",
    measurementId: "G-KQ9LZPLRF5"
  });

  const db = getFirestore();
  const auth = getAuth(firebaseConfig);

onAuthStateChanged(auth, user => {
    if (user == null) {
        console.log('Usuário deslogado');
    } else {
        console.log('Usuário logado:', user.email);
    }
});

async function save(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referenceEntity.id
        }
        return savedData;
    }
}

async function get(nomeTabela) {
    const data = await getDocs(collection(db, nomeTabela));
    return data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
}

async function getById(nomeTabela, id) {
    const docRef = doc(db, nomeTabela, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("Not found!");
    }

}

async function remove(nomeTabela, id){
    const dado = await deleteDoc(doc(db, nomeTabela, id));
    return {
        message:  "Autor excluído com sucesso!"
    }
}


async function getById(table_name, id) {
    const docTable = doc(db, table_name, id);
    const docResp = await getDoc(docTable);
    
    if (docResp.exists()) {
        return docResp.data();
    }
    else {
        return new Error("Not found!");
    }
}

module.exports = {
    save,
    get,
    getById,
    remove
}