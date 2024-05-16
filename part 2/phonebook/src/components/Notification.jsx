
const Notification = ({message}) => {
    const notificationStyle = {
        color: message[1],
        fontSize: 16,
        backgroundColor: 'gray',
        border: `3px solid ${message[1]}`,
        padding: 10
      }

    if (message[0] == null) {
        return
    }

    return ( 
        <div style={notificationStyle}>
            <h1>{message[0]}</h1>
        </div>
     );
}
 
export default Notification;