import React from "react";

export const Footer: React.FC = () => {
    return (
        <>
           {/* Footer */}
           <footer className="footer">
                <div className="footer-logo">Mealprepper</div>
                <nav>
                <a href="/">Home</a>
                <a href="/about-team">About</a>
                </nav>
                <p>© Mealprepper 2025</p>
            </footer>
        </>
    );
};
