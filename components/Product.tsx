import { ProductType } from "@/lib/helper";
import classes from "@/app/page.module.css";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import { useAppDispatch, useAppSelect } from "@/store/hooks";
import { addItems } from "@/store/korzinaStore";
export const ProductGrid: React.FC<{ products: ProductType[] }> = ({
  products,
}) => {
  const [openedId, setOpenedId] = useState<number | null>(null);
  const dispatch = useAppDispatch()


  const handleClick = (id: number) => {
    setOpenedId((prev) => (prev === id ? null : id));
  };

  const buyHandler = (id:number) =>{
    const item = products.filter((value) => value.id === id)
    const title = item.map((tit) => tit.title).toString()
    const price = item.map((prc) => prc.price)[0]
    dispatch(addItems({title:title,price:price,count:1}))
  }
  return (
    <>
      {products.map((item) => (
        <div className={classes.grid} key={item.id}>
          <Image src={item.image} alt={item.title} width={500} height={200} />

          <h2>{item.title}</h2>
          <p
            className={`${classes.description} ${
              openedId === item.id ? classes.opened : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
            {openedId === item.id
              ? item.description
              : item.description.slice(0, 50)}
          </p>
          <p className={classes.category}>{item.category}</p>
          <div className={classes.btn_div}>
            <p className={classes.price}>{item.price}$</p>
            <button onClick={() => buyHandler(item.id)}>Купить</button>
          </div>
        </div>
      ))}
    </>
  );
};
