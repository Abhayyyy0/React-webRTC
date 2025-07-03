import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import './theme.css';

function App() {
  return (
    <>
      <div className="animated-bg" />
      <div>
        <div className="banner">Welcome to the Colorful React WebRTC App!</div>
        <div className="card">
          <Routes>
            <Route path="/" element={<LobbyScreen />} />
            <Route path="/room/:roomId" element={<RoomPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
