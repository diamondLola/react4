import React from "react";
import { toast } from 'react-toastify';
import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'
function UpdatePage() {
  let { id } = useParams();

  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [color, setColor] = useState("");
  let [desc, setDesc] = useState("");
  let [quantity, setQuantity] = useState("");

  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/4dd63196ad30415c8a8c9c088cfd6e5f/posts/${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setName(res.name);
        setPrice(res.price);
        setColor(res.color);
        setDesc(res.desc);
        setQuantity(res.quantity);
      });
  }, [id]);

  const updateProd = (e) => {
    e.preventDefault();
    fetch(`https://crudcrud.com/api/4dd63196ad30415c8a8c9c088cfd6e5f/posts`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, color, desc, quantity }),
    })
      .then((res) => toast.success("Updated successfuly"))
      .catch((err) => toast.error("Something went wrong"));
  };
  return (
    <div>
      <h1 className="flex justify-center items-center p-4 font-semibold">
        Update Page
      </h1>
      <form
        className="flex flex-wrap justify-between items-center gap-10"
        onSubmit={(e) => updateProd(e)}
      >
        <input
          className="py-2 px-8 rounded-lg bg-yellow-300"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="py-2 px-8 rounded-lg bg-yellow-300"
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="py-2 px-8 rounded-lg bg-yellow-300"
          type="text"
          placeholder="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          className="py-2 px-8 rounded-lg bg-yellow-300"
          type="text"
          placeholder="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          className="py-2 px-8 rounded-lg bg-yellow-300"
          type="number"
          placeholder="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button className="py-2 px-8 rounded-lg bg-yellow-300">Send</button>
      </form>
    </div>
  );
}

export default UpdatePage;
