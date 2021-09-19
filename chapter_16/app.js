// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  Timestamp,
  doc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp7pVTicojvRaRb09SNf16F5Ap3grtajM",
  authDomain: "modern-javascript-5307a.firebaseapp.com",
  projectId: "modern-javascript-5307a",
  storageBucket: "modern-javascript-5307a.appspot.com",
  messagingSenderId: "273105663069",
  appId: "1:273105663069:web:6bf4589c19df5d129a09b4",
  measurementId: "G-C13LVVMQHG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const list = document.querySelector("ul");
const form = document.querySelector("form");

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;

  list.innerHTML += html;
};

// get documents (one-time)
async function getRecipes() {
  const recipesCol = collection(db, "recipes");
  const recipeSnapshot = await getDocs(recipesCol);
  return recipeSnapshot.docs.forEach((doc) => {
    // console.log(doc.data());
    // console.log(doc.id);
    addRecipe(doc.data(), doc.id);
  });
}

const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach((recipe) => {
    if (recipe.getAttribute("data-id") === id) recipe.remove();
  });
};

onSnapshot(collection(db, "recipes"), (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      addRecipe(change.doc.data(), change.doc.id);
    }
    // if (change.type === "modified") {
    //     console.log("Modified city: ", change.doc.data());
    // }
    else if (change.type === "removed") {
      deleteRecipe(change.doc.id);
    }
  });
});

// add documents
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: Timestamp.fromDate(now),
  };
  addDoc(collection(db, "recipes"), recipe);
  console.log("recipe added");
});

// Deleting data
list.addEventListener("click", (e) => {
  // console.log(e);
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    deleteDoc(doc(db, "recipes", id));
    console.log("recipe deleted");
  }
});
