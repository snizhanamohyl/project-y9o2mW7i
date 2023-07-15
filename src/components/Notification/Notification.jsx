import Notifation from 'Notification.styled';


// severity - error
// severity - warning
// severity - info
// severity - success

const Notification = ({text, severity}) => {
    return(
        <>
            <Notifation severity={severity}>{text}</Notifation>
        </>
    )
}

export default Notification;