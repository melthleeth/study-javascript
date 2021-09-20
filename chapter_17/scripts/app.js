import { Chatroom } from "./chat.js";

// 일반적으로 script tag 내부에 작성된 코드들은 global scope인데
// module 내부에 저장된 코드들은 module scope로 작동한다.
// 따라서 import export가 필요하다!

// dom queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMssg = document.querySelector(".update-mssg");
const rooms = document.querySelector(".chat-rooms");

// add a new chat
newChatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => newChatForm.reset())
    .catch((err) => console.log(err));
});

// update username
newNameForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // update name via chatroom
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);

  // reset the form
  newNameForm.reset();

  // show then hide the update message
  setTimeout(() => (updateMssg.innerText = ""), 3000);
  updateMssg.innerText = `Your name was updated to ${newName}`;
});

// update the chat room
rooms.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute("id"));
    chatroom.getChats((chat) => chatUI.render(chat));
  }
});

// check local storage for a name
const username = localStorage.username ? localStorage.username : "anonymous";

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", username);

// get chats and render
chatroom.getChats((data) => chatUI.render(data));
