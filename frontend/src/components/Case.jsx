import React from "react";

export default function Case({ children }) {
    return (
        <div className="tw-grid tw-grid-cols-12">
            <section className="tw-col-span-10 tw-col-start-2">
                {children}
            </section>
        </div>
    );
}
