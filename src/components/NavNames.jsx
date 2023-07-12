import React from "react";
import { Link } from "react-router-dom";

const logo = "/src/images/logo.png";

function NavNames() {
    const data = [
        {
            nav: "Home",
            link: "/activity-router",
        },
        {
            nav: "About",
            link: "/activity-router/about",
        },
        {
            nav: "Product",
            link: "/activity-router/product",
        },
        {
            nav: "Contact",
            link: "/activity-router/contact",
        },
        {
            nav: "Login",
            link: "/activity-router/login",
        },
    ];

    const listItems = data.map((element, index) => {
        return (
            <ul key={index} style={{ listStyle: "none" }}>
                <li>
                    <Link to={element.link} className="list">
                        {element.nav}
                    </Link>
                </li>
            </ul>
        );
    });

    return (
        <div className="navigation">
            <div className="title">
                <img className="logo" src={logo} alt="" />
                <h2>Salford & Co.</h2>
            </div>
            <div className="nav-items" style={{ listStyle: "none" }}>
                {listItems}
            </div>
        </div>
    );
}

export default NavNames;