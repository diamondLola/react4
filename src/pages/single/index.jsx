import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function SinglePage() {
  let { id } = useParams();
  let [single, setSingle] = useState();

  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/4dd63196ad30415c8a8c9c088cfd6e5f/posts/${id}`
    )
      .then((res) => res.json())
      .then((res) => setSingle(res));
  }, [id]);
  return (
    <div>
      <h1 className="flex justify-center items-center p-4 font-semibold">
        Single Page
      </h1>
      <div className="flex flex-col justify-center items-center gap-2 m-8">
        <h1 className="font-bold">{single?._id} card</h1>
        <h2>{single?.name}</h2>
        <p>{single?.price} </p>
        <p>{single?.color}</p>
        <p>{single?.desc}</p>
      </div>
    </div>
  );
}

export default SinglePage;
