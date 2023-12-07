import React, { useEffect, useState } from "react";

const FormInputs = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });

  return (
    <form className="flex flex-col justify-center border p-4 w-1/3 mx-auto space-y-3 my-6">
      <label htmlFor="title">Title</label>
      <input className="border p-1 bg-gray-100" type="text" id="title" />

      <label htmlFor="price">Price</label>
      <input className="border p-1 bg-gray-100" type="number" id="price" />

      <label htmlFor="category">Category</label>
      <input className="border p-1 bg-gray-100" type="text" id="category" />
      <label htmlFor="imgUrl">Image Url</label>
      <input className="border p-1 bg-gray-100" type="text" id="imgUrl" />

      <button className="default-btn">Add Product</button>
    </form>
  );
};

export default FormInputs;
