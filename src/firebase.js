// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQpyQ8acxNAqrCMIURUrJiNS3PH8pOqCE",
  authDomain: "slack-clone-b0095.firebaseapp.com",
  databaseURL:
    "https://slack-clone-b0095-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "slack-clone-b0095",
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
initFirebase();
export { firebase };
