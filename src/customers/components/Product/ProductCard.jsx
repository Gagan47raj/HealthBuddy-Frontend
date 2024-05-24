import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${product.id}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
        <div className="h-[16rem]">
            <img className="object-cover object-center mx-auto" 
            src={product.imageUrl} alt="" />
        </div>

        <div className="textPart bg-gray-200 p-1 ">
            <div>
                <p className="font-bold opacity-60">{product.title}</p>
                <p>{product.brand}</p>
            </div>

            <div className="flex items-center space-x-2">
                <p className="font-semibold">₹{product.discountedPrice}</p>
                <p className="line-through opacity-50">₹{product.price}</p>
                <p className="text-green-600 font-semibold">30%</p>
            </div>

        </div>
    </div>
  );
};

export default ProductCard;
