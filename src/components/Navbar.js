import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    const sampleLocation = useLocation();
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">
                        Buzón de quejas y sugerencias
                    </span>

                    <Link
                        to={(sampleLocation.pathname === "/" ? "/view" : "/")}
                        type="button"
                        className=" btn btn-outline-primary"
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
