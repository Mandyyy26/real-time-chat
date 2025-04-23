# 🧩 Simple WebSocket Chat Application

A lightweight real-time chat application built using **Node.js** and **raw WebSockets**. This project demonstrates core WebSocket functionality with admin controls, real-time messaging, and an upvote-based interaction system.

---

## 🚀 Features

### 🔐 Admin Capabilities
- Create new chat sessions (rooms)
- Set the following room properties:
  - `Name`: Unique identifier for the chat room
  - `start_time`: When the chat session begins
  - `is_open`: Boolean flag to allow/disallow new users
  - `cool_down_time`: Time before a closed room can be reopened

### 👥 User Capabilities
- Join available chat rooms
- Send and receive real-time messages
- Upvote messages posted by others

---

## 🔁 Message Upvote Logic

- If a message receives **more than 3 upvotes**, it is **moved to a "Top Messages" section** for visibility.
- If a message receives **more than 10 upvotes**, the system **alerts the admin to respond**.

---

## 🛠️ Tech Stack

- **Node.js**
- **Raw WebSockets (no third-party WebSocket libraries)**
- Minimalist architecture for clear learning and extension

---

## 📁 Project Structure

