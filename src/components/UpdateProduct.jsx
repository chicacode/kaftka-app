import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../actions/productActions.js";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const UpdateProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productToUpdate = useSelector((state) => state.products.productUpdate);


  useEffect(() => {
    setProduct(productToUpdate);
  }, [productToUpdate]);

  const handleOnChange = (e) =>{
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updateProduct(product));

    navigate('/');
  };

  return (
    <div className="block rounded-lg text-center text-black border border-slate-100 my-5">
      <div className="border-2 border-slate-100 px-6 py-3">Edit Product</div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
          Special title treatment
        </h5>
        <p className="mb-4 text-base text-neutral-600">
          With supporting text below as a natural lead-in to additional content.
        </p>

        <div className="rounded-lg p-6 border-slate-100">
          <form onSubmit={onSubmit}>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <label htmlFor="title" className="text-black">
                Product Name
              </label>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded-lg border-2 border-slate-200 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear"
                id="title"
                name="title"
                value={product.title}
                onChange={handleOnChange}
              />
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <label htmlFor="price" className="text-black">
                Product Price
              </label>
              <input
                type="number"
                className="peer block min-h-[auto] w-full rounded-lg border-2 border-slate-200 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear"
                id="price"
                name="price"
                value={product.price}
                onChange={handleOnChange}
              />
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <label htmlFor="description" className=" text-black">
                Product Description
              </label>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded-lg border-2 border-slate-100 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="text"
                placeholder="Description"
                name="description"
                value={product.description}
                onChange={handleOnChange}
              />
            </div>

            <button
              type="submit"
              className="inline-block w-full rounde px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Save product
            </button>
          </form>
          {productToUpdate.loading ? (
            <div className="flex h-screen">
              <div className="m-auto">
                <Loader />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
