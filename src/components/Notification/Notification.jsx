import { useEffect, useState } from 'react';
import { AlertStyled } from './Notification.styled.jsx';


// severity - error
// severity - warning
// severity - info
// severity - success

const Notification = ({text, severity}) => {
    const [showAlert, setShowAlert] = useState(true)

    useEffect( () => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 1000)
        

        return () => clearTimeout(timer);
    }, []);

    return(
        <>  
            {showAlert ? (<AlertStyled severity={severity}>{text}</AlertStyled>):(null)}
        </>
    )
}

export default Notification;