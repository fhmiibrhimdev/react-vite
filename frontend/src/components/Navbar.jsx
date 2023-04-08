import React from "react";
import Case from "./Case";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="tw-bg-blue-600 tw-py-2">
            <Case>
                <div className="tw-flex tw-items-center">
                    <Link
                        className="tw-mr-2 tw-text-sm tw-font-semibold tw-uppercase tw-text-white"
                        to="/"
                    >
                        React Starter
                    </Link>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </div>
            </Case>
        </div>
    );
}
