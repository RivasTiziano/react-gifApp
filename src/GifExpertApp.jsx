import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([]);

    const onAddCategory = (addCategory) =>{
        if( categories.includes(addCategory) ) return;
        setCategories([addCategory,...categories]);
    };

    return (
        <>
            <h1> GifExpertApp </h1>
            <AddCategory onNewCategory={onAddCategory} categories={categories}/>
            {
                categories.map( category => ( 
                    <GifGrid key={ category } category={category} />
                ))
            }
        </>
    );
};