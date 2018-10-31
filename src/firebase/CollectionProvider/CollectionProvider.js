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

function addObjectToCollection(collection, obj) {
    db.collection(collection).add(obj);
}

export { getCollectionSize, addObjectToCollection }