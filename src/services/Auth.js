import App from "./firebase";
class Auth {
  signin = (email, password) =>
    App.auth().signInWithEmailAndPassword(email, password);

  register = (email, password) =>
    App.auth().createUserWithEmailAndPassword(email, password);

  createUser = (userType, uid, data) =>
    App.firestore().collection(userType).doc(uid).set(data);

  getUser = async (uid, userType) => {
    const docRef = await App.firestore().collection(userType).doc(uid).get();
    return docRef;
  };

  createEmployee = (uid, data) =>
    App.firestore().collection("companies").doc(uid).set(data);

  createJobPost = (uid, data) =>
    App.firestore().collection("jobPosts").doc(uid).set(data);
  Logout = () => App.auth().signOut();
}

export default new Auth();
