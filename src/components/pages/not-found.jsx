import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-black text-2xl">Oops Page Not Found!</h1>
        <button
          className="px-4 py-1 rounded-full mt-10 border flex items-center justify-center space-x-2 hover:bg-gray tranistion-all"
          onClick={() => navigate("/")}
        >
          <IoArrowBack />
          <span>Home Page</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
