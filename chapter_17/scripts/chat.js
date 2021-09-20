import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  Timestamp,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

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
const db = getFirestore(app);

// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

export class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = collection(db, "chats");
    this.unsub;
  }
  async addChat(message) {
    // format a chat object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: Timestamp.fromDate(now),
    };

    // save the chat document
    const response = await addDoc(this.chats, chat);
    return response;
  }
  getChats(callback) {
    const q = query(
      this.chats,
      where("room", "==", this.room),
      orderBy("created_at")
    );
    this.unsub = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          //update the ui
          // addRecipe(change.doc.data(), change.doc.id);
          callback(change.doc.data());
        }
        // if (change.type === "modified") {
        //     console.log("Modified city: ", change.doc.data());
        // }
        else if (change.type === "removed") {
          // deleteRecipe(change.doc.id);
        }
      });
    });
  }
  updateName(username) {
    this.username = username;
    localStorage.setItem("username", username);
  }
  updateRoom(room) {
    this.room = room;
    console.log("room updated");
    if (this.unsub) this.unsub();
  }
}

// setTimeout(() => {
//   chatroom.updateRoom("gaming");
//   chatroom.updateName("Yoshi");
//   chatroom.getChats((data) => console.log(data));
//   chatroom.addChat("hello");
// }, 3000);
