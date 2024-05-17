import Country from "./Country"

const Countrylist = ({toShow, setToShow, numOfMatches}) => {

    if (numOfMatches === 0) {
        return  "no matches avaliable"
    }

    if (numOfMatches > 10) {
        return "Too many matches, specify another filter"
    }

    if (numOfMatches === 1) {
        return <Country country={toShow[0].name}/>
    }

    const onToggle = e => {
        var toEdit = toShow.find(item => item.name === e.target.dataset.value)
        var toInsert = {...toEdit, showToggle: !toEdit.showToggle}
        var newToShow = toShow.map(item => item.name === toInsert.name ? toInsert : item)
        setToShow(newToShow)
        
        // console.log(toShow)
        // console.log("newToShow: ", newToShow)
    }

    return ( 
        <div>
                {toShow.map( item => (
                    <div key={item.name}>
                    {item.name} 
                    {(item.showToggle) 
                        ? <button onClick={onToggle} data-value={item.name}>hide</button>
                        : <button onClick={onToggle} data-value={item.name}>show</button>}
                    {item.showToggle ? <Country country={item.name}/> : ""}
                    </div>
                ) ) }
        </div>
     );
}
 
export default Countrylist;