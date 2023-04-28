import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  updateProductAction,
  deleteProductAction,
} from "../actions/productActions";

import {
  addToCart,
  removeFromCart
} from '../actions/cartActions'

import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  // console.log("que llega en producto desde cart", product)
  const { id, title, image, price, category, description, rating } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductAction(id));
      }
    });
  };

  const redirect = (product) => {
    dispatch(updateProductAction(product));
    navigate(`/products/update/${product.id}`);
  };

  const handleAddToCart = () => {
    const product = {
      id,
      title,
      image,
      description,
      category,
      price
    }

    dispatch(addToCart(product))
  }

  const handleRemoveFromCart = () => {
    const product = {
      id,
      title,
      image,
      description,
      category,
      price
    }

    dispatch(removeFromCart(product))
  }
  
  return (
    <div
      key={title}
      className="flex flex-col justify-center items-center rounded-lg bg-white border p-3 my-2  hover:shadow-lg hover:shadow-black/30"
    >
      <img
        src={image}
        alt={image}
        className="h-auto max-w-xs rounded-lg shadow-none xl:h-auto w-64 transition-shadow duration-300 ease-in-out"
      />
     <div className="items-start">
     <h3 className="text-gray-800 m-2 font-bold text-xl mx-0">{title}</h3>
      <p className="py-1 text-gray-600">{description}</p>
      <p className="font-bold items-center text-2xl py-2">${Number(price)}</p>
      <p className="items-center text-sm text-gray-400">
        Category: {category}
      </p>
      <p className="text-sm text-gray-400">
        Rating: {rating?.rate}
      </p>
     </div>
      {/* Handle this if its a product page then only show add to cart otherwise show removefromcart */}
      <div className="flex justify-start py-3">
        <button
          type="button"
          onClick={() => redirect(product)}
          className="border-blue-100 bg-blue-300 text-white hover:bg-blue-600 rounded-3xl py-2 px-4 flex items-center mx-2"
        >
          Edit Product
        </button>

        <button
          type="button"
          onClick={() => handleDeleteProduct(id)}
          className="bg-gray-300 text-white  hover:text-black hover:bg-red-200 rounded-3xl py-2 px-4 flex items-center"
        >
          Delete
        </button>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleAddToCart}
          className="border-green-100 bg-green-300 text-white hover:bg-green-600 focus:border-blue-500 rounded-3xl py-2 px-4 flex items-center mx-2"
        >
          Add to Cart
        </button>

        <button
          type="button"
          onClick={handleRemoveFromCart}
          className="bg-gray-300 text-white  hover:text-black hover:bg-red-200 rounded-3xl py-2 px-4 flex items-center"
        >
          Remove from Cart
        </button>
      </div>

    </div>
  );
};

export default ProductCard;
