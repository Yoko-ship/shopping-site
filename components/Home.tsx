"use client";
import { useEffect, useState } from "react";
import { getData } from "@/lib/helper";
import classes from "@/app/page.module.css";
import { ProductType } from "@/lib/helper";
import Image from "next/image";
import { useRef } from "react";
export default function MainPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [fullDescription, setFullDescription] = useState<string>("");
  const [openedId, setOpenedId] = useState<number | null>(null);

  useEffect(() => {
    const getPromiseData = async () => {
      const product = await getData();
      setProducts(product);
    };
    getPromiseData();
  }, []);

  const handleClick = (id: number) => {
    setOpenedId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <main className={classes.main}>
        <div className={classes.grids}>
          {products.map((item) => (
            <div className={classes.grid} key={item.id}>
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
              />
              <h2>{item.title}</h2>
              <p
                className={classes.description}
                ref={descriptionRef}
                onClick={() => handleClick(item.id)}
              >
                {openedId === item.id
                  ? item.description
                  : item.description.slice(0, 50)}
              </p>
              <p className={classes.rating}>{item.rating.rate}</p>
              <div className={classes.btn_div}>
              <p className={classes.price}>{item.price}$</p>
              <button>Купить</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
