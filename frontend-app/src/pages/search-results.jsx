import {searchMeal} from "../http/requests"
import {useState,useEffect} from "react"
import {useSearchParams} from "react-router-dom"

function SearchResults(){

    const searchParams = useSearchParams()
    console.log(searchParams[0])

    return (
        <div>
            <h1>Search Results</h1>
        </div>
    )

}


export default SearchResults