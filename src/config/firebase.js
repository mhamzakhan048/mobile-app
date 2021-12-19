import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBWrE8pje8rugRE5aOqEtWv_1iHkMqcxFM",
  authDomain: "finalhackathonr.firebaseapp.com",
  projectId: "finalhackathonr",
  storageBucket: "finalhackathonr.appspot.com",
  messagingSenderId: "265911613903",
  appId: "1:265911613903:web:04d984b1f510c6f58e7aba"
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
export default app
