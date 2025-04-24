import {useOutletContext} from "react-router-dom"

function MealArea(){

    const [selected,setSelected] = useOutletContext()

    return <h2>{selected.strArea}</h2>

}

export default MealArea