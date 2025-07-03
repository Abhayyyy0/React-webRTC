import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="card" style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
      <div className="avatar" style={{ margin: '0 auto 1rem auto' }}>{email ? email[0].toUpperCase() : '?'}</div>
      <h2 style={{ color: 'var(--primary)' }}>Join a Room</h2>
      <input
        className="input"
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Room ID"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          socket.emit("room:join", { email, room });
        }}
        style={{ width: '100%' }}
      >
        Join
      </button>
    </div>
  );
};

export default LobbyScreen;
