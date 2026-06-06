import React from "react";
import { RiDeleteBin4Fill, RiMapPinUserFill } from "react-icons/ri";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { db } from "../config/firebase";
import { deleteDoc, doc } from 'firebase/firestore'
import { toast } from "react-toastify";


const ContactCard = ({ contact }) => {

    const [isOpen, onClose, onOpen] = useDisclouse();

    const deleteContact = async(id) => {

        try {

            await deleteDoc(doc(db,"contacts",id));
            toast("Contact deleted sucessfully",{
                style:{
                    background: "#e1300d",
                    color: "#cecdcd"
                }
            })
            
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <>
      <div className="bg-amber-50 h-21 flex items-center justify-between rounded-2xl p-4 shadow-xl opacity-75">
        <div className="flex gap-2">
          <RiMapPinUserFill className="text-5xl text-amber-400 opacity-100" />
          <div>
            <h1 className="font-medium">{contact.name}</h1>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="text-5xl flex gap-5 hover:opacity-100">
          <MdOutlineTipsAndUpdates onClick={onOpen} className="text-amber-400 opacity-75 transition-opacity ease-in-out duration-500 hover:opacity-100 cursor-pointer" />
          <RiDeleteBin4Fill onClick={()=>(deleteContact(contact.id))} className="text-amber-900 opacity-75 transition-opacity ease-in-out duration-500 hover:opacity-100 cursor-pointer" />
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} isUpdate onClose={onClose} contact={contact}/>
    </>
  );
};

export default ContactCard;
