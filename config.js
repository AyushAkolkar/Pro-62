import firebase from 'firebase';

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyBjDPM1DGJQa9-GBrNFrCCY29X0GRJhvbU",
  authDomain: "school-attendance-cb470.firebaseapp.com",
  databaseURL: "https://school-attendance-cb470-default-rtdb.firebaseio.com",
  projectId: "school-attendance-cb470",
  storageBucket: "school-attendance-cb470.appspot.com",
  messagingSenderId: "147160005692",
  appId: "1:147160005692:web:90f1ca9bf979e175949739"
}
// Initialize Firebase
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}
  export default firebase.database()