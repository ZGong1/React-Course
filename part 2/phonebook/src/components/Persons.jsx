import jsonService from "../services/jsonService";

const Persons = ({ toShow, onDelete }) => {
    return ( 
        <>
            {toShow.map(item => 
            <p key={item.name}>
            {item.name} {item.number + " "}  
            <button key={item.name} onClick={() => onDelete(item.id)}>Delete</button>  </p>)}
        </>
     );
}
 
export default Persons;