import React from "react";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
export default function App() {
    return (
        <>
            <Navbar />
            <main className="tw-min-h-screen tw-pt-8">
                <Router />
            </main>
        </>
    );
}
