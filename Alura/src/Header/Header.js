import React from "react";
import './Header.css';
import { RiArrowLeftFill } from "@remixicon/react";
import { RiArrowRightFill } from "@remixicon/react";
import { RiSearchLine } from "@remixicon/react";
import { RiUserAddLine } from "@remixicon/react";

function Header() {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                <RiArrowLeftFill
                    size={20} // set custom `width` and `height`
                    color="white" // set `fill` color
                    className="my-icon" // add custom class name
                />
                </button>
                <button className="arrow-right">
                    <RiArrowRightFill
                        size={20} // set custom `width` and `height`
                        color="white" // set `fill` color
                        className="my-icon" // add custom class name
                    />
                </button>
            </div>

            <div className="header__search">
                    <RiSearchLine
                        size={20} // set custom `width` and `height`
                        color="white" // set `fill` color
                        className="my-icon" // add custom class name
                    />
                <input id="search-input" type="text" maxlength="800" placeholder="O que deseja?" />
            </div>

            <div className="header__login">
                <button className="subscribe">
                    <RiUserAddLine
                        size={18} // set custom `width` and `height`
                        color="white" // set `fill` color
                        className="my-icon" // add custom class name
                    /> Criar conta
                </button>
                <button className="login">
                    <i className="ri-login-circle-fill"></i> Entrar
                </button>
            </div>

        </nav>
    );
}

export default Header;