import firebase from '../firebase';

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
})

function getCollectionSize(collection) {
    return new Promise((resolve, reject) => {
        db.collection(collection).get().then(snaps => {
            resolve(snaps.size);
        })
        .catch(error => {
            reject(error);
        })
    })
}

function getItemsIn(collection) {
    return new Promise((resolve, reject) => {
        let items = [];
        db.collection(collection).get().then((querySnapshot) => {
            querySnapshot.forEach((item) => {
                items.push(item.data());
            })
            resolve(items);
        })
        .catch(error => {
            reject(error);
        })
    })
}

function addObjectToCollection(collection, obj) {
    console.log(obj);
    db.collection(collection).add(obj);
}

export { getCollectionSize, addObjectToCollection, getItemsIn }