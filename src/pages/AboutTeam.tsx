import React from "react";
import { PageFormat } from "../shared/PageFormat";
import ProfileGrid from "../shared/ProfileGrid";
import hemo from '../assets/hemosoo.png';

export const AboutTeamPage: React.FC = () => {
    const mainContent = (
        <>
            <div
                className="about"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    padding: "20px",
                }}
            >
                <div
                    className="left"
                    style={{
                        flex: "1",
                        marginRight: "20px",
                    }}
                >
                    <h1>Meet the Mealprepper Creator!</h1>
                    <p>
                        Hemosoo loves playing basketball and poker, going to the gym, singing, playing instruments, and listening to music.
                    </p>
                </div>
                <div
                    className="right"
                    style={{
                        flex: "1",
                    }}
                >
                    <img
                                src={hemo}
                                alt="hemosooflic"
                                style={{
                                    maxWidth: "65%",
                                    height: "auto",
                                }}
                            />
                </div>
            </div>
        </>
    );
    return (
        <>
            <PageFormat mainContent={mainContent}/>
        </>
    );
};
