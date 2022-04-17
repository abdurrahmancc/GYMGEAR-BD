import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/Firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  const [products, setProducts] = useState({});
  const [user, loading, hooksError] = useAuthState(auth);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <header>
        <Banner></Banner>
      </header>
      {/* <main className="">
        <div>
          <h1 className="text-center mt-3">Services</h1>
          <div className="row g-5">
            {products.map((product) => (
              <Services key={product.id} product={product}></Services>
            ))}
          </div>
        </div>
      </main> */}
    </>
  );
};

export default Home;
