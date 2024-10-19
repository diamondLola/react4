import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

function MyCard() {
  let [data, setData] = useState([]);

  const delProduct = (id) => {
    fetch(`https://crudcrud.com/api/4dd63196ad30415c8a8c9c088cfd6e5f/posts/${id}`, {
      method: "DELETE",
    })
    .then(res=> toast.success('Deleted successfuly'))
    .catch((err) => toast.error ('Something went wrong'));
  };

  useEffect(() => {
    fetch("https://crudcrud.com/api/4dd63196ad30415c8a8c9c088cfd6e5f/posts")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {data.map((info) => (
        <div
          className="flex flex-col justify-between items-start rounded-lg border-solid bg-indigo-500/50 hover:bg-indigo-500/75 gap-4 h-80 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          key={info._id}
        >
          <h2 className="font-semibold">{info?.name}</h2>
          <p>{info?.price}</p>
          <p>{info?.color}</p>
          <p>{info?.desc}</p>
          <span className="flex justify-between items-center gap-10">
            <Link className="font-bold text-green-500" to={`/${info._id}`}>
              View more
            </Link>
            <Link className="font-bold text-green-500" to={`/update/${info._id}`}>
              Edit
            </Link>
            <button
              className="px-10 py-2 bg-green-500 rounded-lg"
              onClick={() => delProduct(info._id)}
            >
              Delete
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default MyCard;