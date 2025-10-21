import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef(null);

  useEffect(() => {
    // Create socket once
    socket.current = io("http://localhost:5000");

    // Listen for new messages
    socket.current.on("broadcastMsg", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    //  Listen for online users
    socket.current.on("updateOnlineUsers", (users) => {
      setOnlineUsers(users);
    });

    // Cleanup on unmount
    return () => {
      socket.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      const msg = {
        sender: "You",
        text: input,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        read: false,
      };

      //  Emit to backend (don’t push locally)
      socket.current.emit("sendMsg", msg);

      // Clear input
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-teal-700 text-white p-3 flex justify-between items-center">
        <h2 className="font-bold">School Portal Chat </h2>
        <p className="text-sm">Online: {onlineUsers.length}</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-2xl max-w-xs shadow-md ${
              msg.sender === "You"
                ? "bg-teal-600 text-white self-end ml-auto"
                : "bg-gray-300 text-black self-start"
            }`}
          >
            <p className="font-bold">{msg.sender}</p>
            <p>{msg.text}</p>
            <div className="flex justify-between items-center text-xs mt-1">
              <span>{msg.time}</span>
              {msg.sender === "You" && (
                <span>{msg.read ? "✔✔ Read" : "✔ Sent"}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t flex">
        <input
          type="text"
          className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-teal-700 text-white px-4 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}







