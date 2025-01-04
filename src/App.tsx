import Navbar from "./components/Navbar.tsx";
import {NAVBAR_MENU_VOICES} from "./settings.ts";

const navbarMenuVoices = [...NAVBAR_MENU_VOICES]

export default function App() {

    return (
       <Navbar menuVoices={navbarMenuVoices}/>
    )
}