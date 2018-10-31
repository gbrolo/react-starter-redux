import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6-j6hFZq5QD5etKqUPaCVK6YYrt88sBU",
    authDomain: "react-starter-redux.firebaseapp.com",
    databaseURL: "https://react-starter-redux.firebaseio.com",
    projectId: "react-starter-redux",
    storageBucket: "",
    messagingSenderId: "698001840748"
};

firebase.initializeApp(config);

export default firebase;