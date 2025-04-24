import {useMyContext} from "../contextAPI"
import {useState,useEffect} from "react"
import FavCard from "../components/favCard"

function Favorites(){
    const {favorites,mobileWidth} = useMyContext()
    const [myFavorites,setMyFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])

    const favStyle = `mt-5 ${mobileWidth}`

    useEffect(()=>{
        const favsToAdd = JSON.stringify(myFavorites)
        localStorage.setItem("favorites",favsToAdd)
    },[myFavorites])

    const removeFav = (id)=>{

        const findMeal = myFavorites.findIndex((each)=>{
            return each.idMeal === id
        })

        setMyFavorites((oldValue)=>{
            return [
                ...oldValue.slice(0,findMeal),...oldValue.slice(findMeal+1)
            ]
        })

    }

    return (
        <div className={favStyle}>
            {
                myFavorites.map((each)=>{
                    return (
                        <FavCard
                        key={`favs${each.idMeal}`}
                        image={each.strMealThumb}
                        name={each.strMeal}
                        id={each.idMeal}
                        url={each.idMeal}
                        handleFavorite={removeFav}
                        />
                    )
                })
            }
        </div>
    )

}

export default Favorites