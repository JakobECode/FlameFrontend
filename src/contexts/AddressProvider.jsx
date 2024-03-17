import { createContext, useState } from "react";
export const AddressContext = createContext();

const AddressProvider = (props) => {
    const [chosenAddress, setChosenAddress] = useState({});
    const [editAdress, setEditAdress] = useState({});

    const handleEditAdress = async (adress) => {
         await setEditAdress(adress);
    }
    
    const handleChosenAddress = async (adress) => {
        await setChosenAddress(adress);
    }

    return (
        <>
            <AddressContext.Provider value={{ handleEditAdress, editAdress, chosenAddress, handleChosenAddress }}>
                {props.children}
            </AddressContext.Provider>
        </>
    )

}

export default AddressProvider;