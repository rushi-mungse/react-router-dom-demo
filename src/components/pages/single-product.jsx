import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex items-center justify-center flex-col">
        <button
          className="px-4 py-1 rounded-full mb-10 border flex items-center justify-center space-x-2 hover:bg-gray tranistion-all"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
          <span>Go Back</span>
        </button>
        <h1 className="text-primary">Product ID: {id}</h1>
      </div>
    </div>
  );
};

export default SingleProduct;
