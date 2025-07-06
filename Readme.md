# React WebRTC Video Chat

A vibrant, modern, and fully functional video chat application built with React and Socket.io.  
This project allows users to join rooms and start peer-to-peer video calls with a beautiful, animated UI.

## ✨ Features

- **Real-time Video Chat:** Peer-to-peer video calls using Socket.io.
- **Room System:** Users can join rooms by ID and connect with others.
- **Socket.io Signaling:** Fast, reliable signaling server for call setup.
- **Modern, Colorful UI:** Custom CSS with animated backgrounds, gradients, and responsive design.
- **User Avatars & Banners:** Personalized experience with avatars and notification banners.
- **No UI Libraries:** All styling is custom, no external UI frameworks.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd VibeCall
   ```

2. **Install dependencies for both client and server:**
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

### Running the App

1. **Start the signaling server:**
   ```bash
   cd server
   node index.js
   ```
   The server will run on `localhost:8000`.

2. **Start the React client:**
   ```bash
   cd ../client
   npm start
   ```
   The client will run on `localhost:3000`.

3. **Open two browser windows/tabs, join the same room, and start a video call!**

## 🛠️ Project Structure

```
VibeCall/
  client/    # React frontend (src/, public/, theme.css, etc.)
  server/    # Node.js Socket.io signaling server
```

- **client/src/screens/Lobby.jsx:** Room join UI
- **client/src/screens/Room.jsx:** Video call UI
- **client/src/service/peer.js:** WebRTC logic
- **server/index.js:** Socket.io signaling server

## 🖌️ Customization

- All UI styles are in `client/src/theme.css`.  
  Tweak colors, gradients, and animations to your liking!

## 📦 Build

To create a production build:
```bash
cd client
npm run build
```



## 📄 License

[MIT](LICENSE)
