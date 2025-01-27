
import React from "react";
import { HeaderSignedIn } from "../shared/HeaderSignedIn";
import { Footer } from "../shared/Footer";
import logo from '../assets/Mealprepper.png';

export const SignInPage: React.FC = () => {
    return (
        <>
            <HeaderSignedIn></HeaderSignedIn>

            {/* Main Content Section */}
            <main
    className="main-content"
    style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 auto",
    }}
>
    <div
        className="left"
        style={{
            flex: "1",
            marginRight: "20px",
        }}
    >
        <h1>Mealprepper</h1>
        <p>
            <strong>Leftover Ingredients to High Protein Meals</strong>
        </p>
        <p>
            Don't know what to cook after a long workout? Just type in the ingredients leftover in your kitchen, and we will come up with some high-protein recipes using ingredients you provided!
        </p>
        <p>
            Don't believe us? Just try searching for recipes now:
            <a href="/search-recipes">
                <button
                    className="button-search"
                    style={{
                        marginTop: "10px",
                        padding: "10px 15px",
                        backgroundColor: "#007BFF",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Start finding recipes!
                </button>
            </a>
        </p>
    </div>
    <div
        className="right"
        style={{
            flex: "1",
            textAlign: "center",
        }}
    >
        <img
            src={logo}
            alt="Mealprepper Logo"
            style={{
                maxWidth: "100%",
                height: "auto",
            }}
        />
    </div>
</main>


            <Footer></Footer>
        </>
    );
};