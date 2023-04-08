import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ href, children }) {
    return (
        <Link
            className="tw-inline-flex tw-px-4 tw-py-2 tw-text-blue-300 hover:tw-text-white"
            to={href}
        >
            {children}
        </Link>
    );
}
