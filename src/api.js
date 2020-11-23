import { db, auth } from "./firebase";

/* Auth */
export function logInUser(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signOutUser() {
  return auth.signOut();
}

export function registerUser(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function initAuth(onAuth) {
  auth.onAuthStateChanged(onAuth);
}

/* DB */

export function getCars() {
  return db.collection("cars").get().then(mapSnapshot);
}

export function getCar() {
  return db.collection("car").get().then(mapSnapshot);
}

export function getTheme() {
  return db.collection("theme").get().then(mapSnapshot);
}

export function setTheme(theme) {
  return db
    .collection("theme")
    .doc("x1IgTM5fsDIVnUMOGWOa")
    .update(theme)
    .then(() => theme);
}

export function setCar(data) {
  return db
    .collection("car")
    .doc("DIaQeRoLMJ3Cw9l6eJGa")
    .update(data)
    .then(() => ({
      ...data,
    }));
}

export function createCar(data) {
  return db
    .collection("cars")
    .add({
      ...data,
    })
    .then((docRef) => docRef.get())
    .then(mapDoc);
}

export function updateCar(carId, data) {
  return db
    .collection("cars")
    .doc(carId)
    .update(data)
    .then(() => ({
      id: carId,
      ...data,
    }));
}

export function deleteCar(todoId) {
  return db
    .collection("cars")
    .doc(todoId)
    .delete()
    .then(() => todoId);
}

// export function getListTodos(userId, listId) {
//   console.log(userId);
//   return db
//     .collection("todos")
//     .where("userId", "==", userId)
//     .where("listId", "==", listId)
//     .get()
//     .then(mapSnapshot);
// }

const mapSnapshot = (snapshot) =>
  snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

const mapDoc = (doc) => ({ id: doc.id, ...doc.data() });
