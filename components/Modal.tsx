'use client'
import { SetStateAction, useState } from "react";
import classes from "@/app/page.module.css"
import Modal from "react-modal";
import { useAppSelect } from "@/store/hooks";
import { title } from "process";
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

Modal.setAppElement("#modal");

export const ModalPage =({modalIsOpened,setModalIsOpened}:{modalIsOpened:boolean,setModalIsOpened:React.Dispatch<SetStateAction<boolean>>})=>{
  const items = useAppSelect((state) => state.korzina.items)
  console.log(items)  
  let subtitle;
    return(
        <Modal
            isOpen={modalIsOpened}
            onRequestClose={() => setModalIsOpened(false)}
            style={customStyles}
            contentLabel="Modal"
          >
            <button onClick={() => setModalIsOpened(false)} className={classes.closeBtn}>close</button>
            <div className={classes.korzina_products}>
              {items.map((item) =>(
                <div key={item.title}>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                  <p>{item.count}</p>
                </div>
              ))}
            </div>
          </Modal>
    )
}