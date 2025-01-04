import {NavbarMenuVoices} from "../models/navbarMenuVoices.ts";
import React from "react";

const Navbar: React.FC<{
    menuVoices: NavbarMenuVoices[]
}> = ({menuVoices}) => {
    return (
        <nav className="flex items-center gap-x-4 border-b border-gray-200 py-3 px-5">
            {
                menuVoices.map((voice: NavbarMenuVoices) => (
                    <button className="btn" key={voice.id}>{voice.label}</button>
                ))
            }
        </nav>
    );
};

export default Navbar;