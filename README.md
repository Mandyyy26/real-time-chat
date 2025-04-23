# 🧩 Simple WebSocket Chat Application

> ⚠️ This project is currently **under development**. I'm actively building it to learn and explore raw WebSocket communication in Node.js. Contributions, suggestions, or feedback are always welcome!

---

A lightweight real-time chat application built using **Node.js** and **raw WebSockets**. This project demonstrates core WebSocket functionality with admin controls, real-time messaging, and an upvote-based interaction system.

---

## 🚀 Features (Planned & In Progress)

### 🔐 Admin Capabilities
- [x] Create new chat sessions (rooms)
- [ ] Set the following room properties:
  - `Name`: Unique identifier for the chat room
  - `start_time`: When the chat session begins
  - `is_open`: Boolean flag to allow/disallow new users
  - `cool_down_time`: Time before a closed room can be reopened

### 👥 User Capabilities
- [ ] Join available chat rooms
- [ ] Send and receive real-time messages
- [ ] Upvote messages posted by others

---

## 🔁 Message Upvote Logic (Coming Soon)

- [ ] If a message receives **more than 3 upvotes**, it will be **moved to a "Top Messages" section**.
- [ ] If a message receives **more than 10 upvotes**, the system will **alert the admin to respond**.

---

## 🛠️ Tech Stack

- **Node.js**
- **Raw WebSockets (no third-party libraries)**
- Minimalist architecture for maximum learning

---

## 📁 Project Structure (Work in Progress)

