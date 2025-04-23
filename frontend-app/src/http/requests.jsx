import axios from "axios"
import {defer} from "react-router-dom"

export const fetchMeals = ()=>{

        const response = axios.get("https://themealdb.com/api/json/v1/1/search.php?s=")
        .then(({data})=>{
            return data
        })
        .catch((err)=>{
            console.log(err)
            return err
        })

    return defer({retunee:response})

}

export const searchMeal = (searchTerm)=>{
    const response = axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then(({data})=>{
        return data
    })
    .catch((err)=>{
        console.log(err)
        return err
    })
    return defer({retunee:response})
}