import { useState } from "react";
import { Switch, SwitchBody } from "./ThemeToggler.styled";

export default function ThemeToggler() {
    const [colorMode, setColorMode] = useState('light');

    const toggleMode = () => {
        setColorMode(colorMode ===  'light' ? 'dark' : 'light')
    }

    return <SwitchBody onClick={toggleMode}>
        <Switch mode={colorMode}/>
    </SwitchBody>
}