import React, { ChangeEvent, useEffect, useState } from "react";
import popularIngredients from "./popularIngredients";
import { Ingredient } from "../types/Ingredient";

interface SearchIngredientsProps {
    selectedIngredients: Ingredient[];
    onSelectedIngredientsChange: (ingredients: Ingredient[]) => void;
}

export const SearchIngredients: React.FC<SearchIngredientsProps> = ({
    selectedIngredients,
    onSelectedIngredientsChange,
}) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>(popularIngredients);

    useEffect(() => {
        const results = popularIngredients.filter((ingredient) =>
            ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredIngredients(results);
    }, [searchTerm]);

    const toggleChipActive = (ingredient: Ingredient) => {
        const isSelected = selectedIngredients.some((item) => item.id === ingredient.id);
        const updatedSelectedIngredients = isSelected
            ? selectedIngredients.filter((item) => item.id !== ingredient.id)
            : [...selectedIngredients, ingredient];
        onSelectedIngredientsChange(updatedSelectedIngredients);
    };

    return (
        <div
            className="search-container"
            style={{
                width: "100%",
                maxWidth: "100%",
                padding: "20px",
                boxSizing: "border-box",
            }}
        >
            <input
                className="search-bar"
                type="text"
                value={searchTerm}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                placeholder="Search for ingredients..."
                style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    marginBottom: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                }}
            />
            {selectedIngredients.length > 0 && (
                <div className="chip-container" style={{ marginBottom: "20px" }}>
                    {selectedIngredients.map((ingredient) => (
                        <button
                            key={ingredient.id}
                            className="hasIngredients"
                            style={{
                                color: "white",
                                backgroundColor: "#001f54",
                                display: "inline-flex",
                                margin: "5px",
                                padding: "10px 15px",
                                borderRadius: "20px",
                                border: "none",
                                cursor: "pointer",
                            }}
                            onClick={() => toggleChipActive(ingredient)}
                        >
                            <span>{ingredient.name}</span>
                        </button>
                    ))}
                </div>
            )}
            <div
                className="chips-container"
                style={{
                    width: "670px", // Static width for the grid (160px * 4 columns)
                    height: "480px", // Static height for the grid
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 160px)", // Four columns, 160px each
                    gridAutoRows: "120px", // Fixed height for each row
                    gap: "5px", // Spacing between grid items
                    border: "1px solid #ccc",
                    padding: "10px",
                    boxSizing: "border-box",
                    overflow: "auto", // Enable scrolling if content overflows
                }}
            >
                {filteredIngredients.length > 0 ? (
                    filteredIngredients.map((ingredient) => (
                        <button
                            key={ingredient.id}
                            className="chip-button"
                            style={{
                                color: selectedIngredients.some((item) => item.id === ingredient.id)
                                    ? "white"
                                    : "black",
                                backgroundColor: selectedIngredients.some(
                                    (item) => item.id === ingredient.id
                                )
                                    ? "#001f54"
                                    : "#f1f1f1",
                                padding: "10px",
                                borderRadius: "10px",
                                border: "1px solid #ccc",
                                cursor: "pointer",
                                textAlign: "center",
                                width: "100%",
                                height: "100%",
                            }}
                            onClick={() => toggleChipActive(ingredient)}
                        >
                            <span>{ingredient.name}</span>
                        </button>
                    ))
                ) : (
                    <div
                        style={{
                            gridColumn: "span 4",
                            textAlign: "center",
                            padding: "20px",
                            color: "#999",
                        }}
                    >
                        No ingredients found
                    </div>
                )}
            </div>
        </div>
    );
};
