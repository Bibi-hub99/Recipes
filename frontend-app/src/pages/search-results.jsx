import {searchMeal} from "../http/requests"
import {useState,useEffect} from "react"
import {useSearchParams} from "react-router-dom"
import {useMyContext} from "../contextAPI"
import FoodCard from "../components/foodCard"
import Modal from "../components/modal"
import Notification from "../components/notification"

function SearchResults(){

    const {mobileWidth,favorites} = useMyContext()
    const searchStyle = `${mobileWidth} mt-20`

    const [mySearchParams,setMySearchParams] = useSearchParams()
    const [mealMenu,setMealMenu] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [myFavorites,setMyFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
    const [viewImage,setViewImage] = useState(false)
    const [mealImage,setMealImage] = useState({})
    const [likedClicked,setLikedClicked] = useState(false)


    const searchTerm = mySearchParams.get("searchTerm")

    useEffect(()=>{
        const searchResults = async()=>{
            try{
                setIsLoading(true)
                const response = await searchMeal(searchTerm)
                setMealMenu(response)
                setIsLoading(false)
            }catch(err){
                console.log(err)
            }
        }

        searchResults()

    },[mySearchParams])

    useEffect(()=>{
        const favsTosave = JSON.stringify(myFavorites)
        localStorage.setItem("favorites",favsTosave)
    },[myFavorites])

    const handleViewImage = (id)=>{
        const findMeal = mealMenu.find((each)=>{
            return each.idMeal === id
        })
        setMealImage(findMeal)
        setViewImage(true)
    }

    const handleCloseImage = ()=>{
        setViewImage(false)
    }

    const addToFavorite = (id)=>{
        const findMeal = mealMenu.find((each)=>{
            return each.idMeal === id;
        })

        const findInFavs = myFavorites.find((each)=>{
            return each.idMeal === id;
        })

        if(!findInFavs){
            setMyFavorites((oldValue)=>{
                return [
                    ...oldValue,
                    findMeal
                ]
            })
        }
        setLikedClicked(true)
        setTimeout(()=>{
            setLikedClicked(false)
        },3000)
    }


    if(isLoading){

        return (
            <div className={'mt-20'}>
                <p className={'text-3xl'}>Fetching Data...</p>
            </div>
        )

    }

    return (
        <div className={searchStyle}>
            <div className={'grid grid-cols-2 gap-x-4 gap-y-6 justify-center md:grid-cols-3 lg:grid-cols-4'}>
                {
                    mealMenu.map((each)=>{
                        return (
                        <FoodCard
                        key={`results${each.idMeal}`}
                        id={each.idMeal}
                        name={each.strMeal}
                        image={each.strMealThumb}
                        handleViewImage={handleViewImage}
                        handleFavorite={addToFavorite}
                        />
                        )
                    })
                }
            </div>
            <Modal viewImage={viewImage} handleCloseImage={handleCloseImage} image={mealImage.strMealThumb}/>
            {likedClicked && <Notification/>}
        </div>
    )

}


export default SearchResults