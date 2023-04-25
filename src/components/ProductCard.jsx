import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { productDeleteAction } from "../actions/productActions";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  //   console.log("que llega desde Productos", product);
  const { id, title, image, price, category, description, rating } = product;
  const dispatch = useDispatch();

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
        dispatch(productDeleteAction(id));
      }
    });

  };
  return (
    <div
      key={title}
      className="flex flex-col justify-center items-center rounded-lg border border-gray-400 p-3 my-2"
    >
      <img
        src={image}
        alt={image}
        className="h-auto max-w-xs rounded-lg shadow-none xl:h-auto w-64 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="font-bold">${price}</p>
      <p>
        <b>Category: {category}</b>
      </p>
      <p>
        <b>rating: {rating?.rate}</b>
      </p>
      {/* Handle this if its a product page then only show add to cart otherwise show removefromcart */}
      <div className="flex justify-center">
        <Link
          to={`/products/update/${id}`}
          className="border-2 border-blue-100 hover:border-blue-600 focus:border-blue-500 rounded-lg p-2 flex items-center mx-2"
        >
          Edit Product
        </Link>

        <button
          type="button"
          onClick={() => handleDeleteProduct(id)}
          className="border-2 border-red-200 hover:border-red-600 rounded-lg p-2 flex items-center"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
