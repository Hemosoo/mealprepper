import React, { useState } from "react";
import { PageFormat } from "../shared/PageFormat";
import { HeaderSignedIn } from "../shared/HeaderSignedIn";
import { Footer } from "../shared/Footer";
import { SearchIngredients } from "../shared/SearchIngredients";
import { LLM } from "../LLM/llm";
import { Ingredient } from "../types/Ingredient";

export const SearchPage: React.FC = () => {
    const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);

    const handleSelectedIngredientsChange = (ingredients: Ingredient[]) => {
        setSelectedIngredients([...ingredients]);
        // You can perform additional actions with the selected ingredients here
        console.log('Selected Ingredients:', ingredients);
    };
    
    const mainContent = <>
    <h1>Welcome to Mealprepper</h1>
    <div className="generating-content">
        <div className="left-content">
        <SearchIngredients
        selectedIngredients={selectedIngredients}   // State passed down from parent
        onSelectedIngredientsChange={handleSelectedIngredientsChange} // Callback to update parent state
        />
        </div>
        <div className="right-content">
            {selectedIngredients && <LLM selectedIngredients={selectedIngredients} />}
        </div>
    </div>
    </>
    return (
        <>
         <div className="page-format">
            <HeaderSignedIn></HeaderSignedIn>
            { mainContent }
            <Footer></Footer>
            </div>
        </>
    );
};
