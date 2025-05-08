'use client'
import axios from "axios";
import classes from "./modal.module.css"
import { useAppDispatch } from "@/store/hooks";
import Modal from "react-modal";
import { useAppSelect } from "@/store/hooks";
import { clearItems } from "@/store/korzinaStore";
import { setModalClose } from "@/store/korzinaStore";


const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width:"70%",
      heigh:"auto",
      background:"black"
    },
  };

Modal.setAppElement("#modal");

export const ModalPage =() => {
  const items = useAppSelect((state) => state.korzina.items)
  const dispatch = useAppDispatch()
  const modalOpened = useAppSelect((state) => state.modal.modalIsOpen)

  const clearHandler = async(title:string) =>{
    dispatch(clearItems(title))
    const response = await axios.delete("/api/modal",{
      data:{title}
    })
  }
  const closeHandler = () =>{
    dispatch(setModalClose())
  }
  return(
        <Modal
            isOpen={modalOpened}
            onRequestClose={closeHandler}
            style={customStyles}
            contentLabel="Modal"
          >
            <button onClick={closeHandler} className={classes.closeBtn}></button>
            <div className={classes.korzina_products}>
              {items.map((item,index) =>(
                <div key={index}>
                  <p className={classes.title}>{item.title}</p>
                  <p>{item.price}$</p>
                  <p>{item.count}</p>
                  <button onClick={() => clearHandler(item.title)}></button>
                </div>
              ))}
            </div>
          </Modal>
    )
}