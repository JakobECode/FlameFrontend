import { createContext, useState } from "react";
export const FilterContext = createContext();

const FilterProvider = (props) => {

    const [title, setTitle] = useState("Products");

    return (
        <>
            <FilterContext.Provider value={{setTitle, title}}>
                {props.children}
            </FilterContext.Provider>
        </>
    )

}

export default FilterProvider;