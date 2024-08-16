import React, { useState } from "react";
import backgroundImage from "../assets/background.jpeg";
import { useNavigate } from "react-router-dom";

const StreetzGamePoster = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleEmailSubmit = () => {
    if (email === "") {
      setError("The email is required.");
    } else {
      console.log(email, "email");
      navigate("/game");
    }
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center z-0 text-yellow-400 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center p-4 z-10 pt-10">
        <h1 className="text-7xl font-[900] text-yellow-400 mb-4 mt-12 font-helvetica-neue">
          STREETZ GAME
        </h1>
        <p className="text-lg  mt-12 font-frente">
          PLAY TO WIN TICKETS TO 'STREETZ FESTIVAL 2024'
        </p>
        <p className="font-semibold" style={{ fontSize: "8px" }}>
          MUST FOLLOW
          <a
            href="https://www.instagram.com/streetzfestival"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1"
          >
            @STREETZFESTIVAL
          </a>
          ON INSTAGRAM BEFORE PLAYING TO BE ELIGIBLE
        </p>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 text-black rounded-l-md  border-yellow-400 outline-none"
          />
          <button
            className="p-2 bg-yellow-400 hover:bg-yellow-500 rounded-r-md text-white"
            onClick={handleEmailSubmit}
          >
            SUBMIT
          </button>
        </div>
          <div className="text-red-600 block">{error}</div>
        <p className="font-semibold" style={{ fontSize: "8px" }}>
          IMPORTANT: SUBMIT CORRECT EMAIL ADDRESS TO RECEIVE YOUR PRIZES.
        </p>
      </div>
    </div>
  );
};

export default StreetzGamePoster;
