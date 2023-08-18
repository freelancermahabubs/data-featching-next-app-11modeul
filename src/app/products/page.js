"use client";
import {useState, useEffect} from "react";
const ProductPage = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUser(data);
    })();
  });
  return (
    <div>
      <h1>This is Product Page</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default ProductPage;
