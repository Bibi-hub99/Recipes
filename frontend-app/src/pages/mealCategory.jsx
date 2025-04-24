import {useOutletContext} from "react-router-dom"

function MealCategory(){

    const [selected,setSelected] = useOutletContext()

    return (
        <h2>{selected.strCategory}</h2>
    )

}

export default MealCategory