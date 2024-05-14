const Persons = ({ toShow }) => {
    return ( 
        <>
            {toShow.map(item => <p key={item.name}>{item.name} {item.number}</p>)}
        </>
     );
}
 
export default Persons;