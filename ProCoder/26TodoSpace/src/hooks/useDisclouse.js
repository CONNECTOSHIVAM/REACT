import React, { useState } from "react";

const useDisclouse = () => {

    const [showModal, setModal] = useState(false);

    const onOpen = () => {
        setModal(true);
    }

    const onClose = () => {
        setModal(false);
    }

    return [showModal, onClose, onOpen]

}

export default useDisclouse