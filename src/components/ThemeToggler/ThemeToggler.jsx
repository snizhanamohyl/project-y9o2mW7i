import { useEffect, useState } from "react";
import { Switch, SwitchBody, Input } from "./ThemeToggler.styled";

export default function ThemeToggler({ customerStyles }) {
    const [colorMode, setColorMode] = useState('light');

    useEffect(() => {
        const storageStatus = localStorage.getItem('colorMode');
        storageStatus && setColorMode(storageStatus);
    }, [])

    useEffect(() => {
        switch (colorMode) {
            case 'dark':
                document.body.classList.add('dark');
                break;
             case 'light':
                document.body.classList.remove('dark');
                break;
            default:
                return;
        }
    }, [colorMode])

    const toggleMode = () => {
        setColorMode(status => {
            const newStatus = status === 'light' ? 'dark' : 'light';
            localStorage.setItem('colorMode', newStatus)

            return newStatus;
        });
    }

    return <SwitchBody $customerStyles={customerStyles}>
        <Input type="checkbox" onClick={toggleMode} value={ colorMode === 'light' ? true : false } />
        <Switch mode={colorMode} />
    </SwitchBody>
}