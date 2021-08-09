import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDwE2z_QYgQO5f8z_Uqf6mV8d3wW1wa5gk',
  authDomain: 'slack-chat-3030e.firebaseapp.com',
  databaseURL:
    'https://slack-chat-3030e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'slack-chat-3030e',
  storageBucket: 'slack-chat-3030e.appspot.com',
  messagingSenderId: '838538681242',
  appId: '1:838538681242:web:d868927c70ba44a957f823',
  measurementId: 'G-MY5KYNMDX0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// const database = firebase.database();
// const ref = database.ref('')

export { auth, provider };
export default db;
