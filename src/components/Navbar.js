import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    const sampleLocation = useLocation();
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">
                        Buzón
                    </span>

                    <Link
                        to={(sampleLocation.pathname === "/" ? "/view" : "/")}
                        type="button"
                        className=" btn btn-outline-dark btn-sm navbar-btn"
                        aria-current="page"
                    >
                        {sampleLocation.pathname === "/"
                            ? "Visualizador de quejas y sugerencias"
                            : "Publicar quejas y sugerencias"}
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
