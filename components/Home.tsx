"use client";
import { useEffect, useRef, useState } from "react";
import classes from "@/app/page.module.css";
import { ProductType } from "@/lib/helper";
import { ProductGrid } from "./Product";
import { ModalPage } from "./Modal";
import { makeStore } from "@/store/store";
import { Provider } from "react-redux";
const store = makeStore()


export default function MainPage() {
  let subtitle;
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [modalIsOpened,setModalIsOpened] = useState(false)



  useEffect(() => {
    const getPromiseData = async () => {
      const response = await fetch("/api/data", { method: "GET" });
      const data = await response.json();
      setFilteredProducts(data.values);
      setProducts(data.values);
    };
    getPromiseData();
  }, []);

  const filterHandler = () => {
    const updatedElements = products.filter((item) =>
      item.category.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(updatedElements);
  };

  useEffect(() => {
    filterHandler();
  }, [search]);

  return (
    <>
    <Provider store={store}>
    <main className="main">
        <div className={classes.korzina}></div>
        <div className={classes.search_div}>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by category"
          />
          <button onClick={() => setModalIsOpened(true)}>Корзина</button>
          <ModalPage modalIsOpened={modalIsOpened} setModalIsOpened={setModalIsOpened}/>
        </div>
        <div className={classes.grids}>
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
    </Provider>
      
    </>
  );
}
