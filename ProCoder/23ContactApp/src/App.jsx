import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BsSearchHeartFill } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer } from "react-toastify";
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);

  const [isOpen, onClose, onOpen] = useDisclouse();

  useEffect(() => {
    const contactsRef = collection(db, "contact");

    const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setContacts(contactLists);
      setAllContacts(contactLists);
    });

    return () => unsubscribe();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value.toLowerCase();

    if (!value) {
      setContacts(allContacts);
      return;
    }

    const filteredContacts = allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(value)
    );

    setContacts(filteredContacts);
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />

        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <BsSearchHeartFill className="text-white ml-2 text-3xl absolute" />

            <input
              onChange={filterContacts}
              type="text"
              className="h-12 flex-grow border border-white rounded-md bg-transparent pl-12 text-white"
            />
          </div>

          <FaPlusCircle
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer"
          />
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {contacts.length === 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>

      <AddAndUpdateContact
        isOpen={isOpen}
        onClose={onClose}
      />

      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;