import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewProduct } from "../actions/productActions";
import { showAlert, hideAlert } from "../actions/alertActions";
import Loader from "./Loader";

const NewProduct = () => {
  const [title, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products } = useSelector((state) => state);
  const { alert } = useSelector((state) => state.alert);

  const addNewProduct = (product) => dispatch(createNewProduct(product));

  const submitNewProduct = (e) => {
    e.preventDefault();
    // Validate form

    if (title.trim() === "" || price <= 0) {
      const alert = {
        message: "Fill in all fields",
        classes: "border border-red-500 py-2 text-center mt-2",
      };

      dispatch(showAlert(alert));
      return;
    }

    // check errors

    dispatch(hideAlert());

    // add product
    addNewProduct({
      title,
      price,
      description,
    });

    navigate("/");
  };

  return (
    <div className="block rounded-lg text-center text-black border border-slate-100 my-5">
      <div className="border-2 border-slate-100 px-6 py-3">Add New Product</div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
          Add Product
        </h5>
        {alert ? <p className={alert.classes}>{alert.message}</p> : null}

        <div className="rounded-lg p-6 border-2 border-slate-100">
          <form onSubmit={submitNewProduct}>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded-lg border-2 border-slate-200 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="title"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Product Name
              </label>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="number"
                className="peer block min-h-[auto] w-full rounded-lg border-2 border-slate-200 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <label
                htmlFor="price"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Product Price
              </label>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded-lg border-2 border-slate-100 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label
                htmlFor="description"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Product Description
              </label>
            </div>

            <button
              type="submit"
              className="inline-block w-full rounde px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Add new product
            </button>
          </form>
          {products.loading ? (
            <div className="flex h-screen">
              <div className="m-auto">
                <Loader />
              </div>
            </div>
          ) : null}
          {products.error ? (
            <div className="border border-red-500 py-2 text-center mt-2">
              Error: Failed request
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
