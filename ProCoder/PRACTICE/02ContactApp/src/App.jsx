import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";


// import the react icons
import { FiSearch } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";


const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = await contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <div className="max-w-[660px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex items-center flex-grow">
          <FiSearch className="absolute text-amber-400 text-5xl ml-2 " />
          <input
            type="text"
            placeholder="search anyone to connect.."
            className="h-15 flex-grow border-none rounded-md bg-white text-yellow-600 pl-15  outline-2 outline-amber-100 text-[23px]"
          />
        </div>
        <GoPlusCircle className="text-yellow-400 text-6xl bg-amber-50 rounded-xl cursor-pointer opacity-80 hover:opacity-100" />
      </div>

      <div className="mt-4 flex flex-col gap-2 ">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
  );
};

export default App;
