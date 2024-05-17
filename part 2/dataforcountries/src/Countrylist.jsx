import Country from "./Country"

const Countrylist = ({toShow, numOfMatches}) => {

    if (numOfMatches === 0) {
        return  "no matches avaliable"
    }

    if (numOfMatches > 10) {
        return "Too many matches, specify another filter"
    }

    if (numOfMatches === 1) {
        return <Country country={toShow[0]}/>
    }

    return ( 
        <div>
                {toShow.map( item => (
                    <div key={item.name}>
                    {item.name} 
                    {/* <button>toggle</button> */}
                    </div>
                ) ) }
        </div>
     );
}
 
export default Countrylist;