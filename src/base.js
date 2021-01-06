import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCyX2H5d3eta9wiOyx1I2EKwV2lRkAfcGQ",
  authDomain: "recettedecuisine-6c8e6.firebaseapp.com",
  databaseURL: "https://recettedecuisine-6c8e6-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
