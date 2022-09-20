import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [addCategory, setAddCategory] = useState(""); 

    const handleChange = ({target}) => {
        setAddCategory(target.value.trim());
    };

    const handlePress = ({key, target}) => {
        if(key === 'Enter' && addCategory.length >= 1){
            onNewCategory(addCategory);
            setAddCategory("");
            target.value = "";
        };
    };

    return (
        <input 
            type="text"
            placeholder="Introduce your Category"
            onChange={ handleChange }
            onKeyDown={ handlePress }
        />
  );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}


