import {useOutletContext} from "react-router-dom"

function MealName(){

    const [selected,setSelected] = useOutletContext()

    return(
        <h2>{selected.strMeal}</h2>
    )

}

export default MealName