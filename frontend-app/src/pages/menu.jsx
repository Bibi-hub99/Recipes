import {useLoaderData,Await} from "react-router-dom"
import {Suspense,useState,useEffect} from "react"
import {useMyContext} from "../contextAPI"
import FoodCard from "../components/foodCard"
import Modal from "../components/modal"
import Notification from '../components/notification'

function Menu(){

    const {retunee} = useLoaderData()
    const {mobileWidth,favorites} = useMyContext()
    const menuStyling = `${mobileWidth} mt-20`
    const [mealMenu,setMealMenu] = useState([])
    const [myFavorites,setMyFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])

    const [viewImage,setViewImage] = useState(false)
    const [mealImage,setMealImage] = useState({})
    const [likedClicked,setLikedClicked] = useState(false)

    useEffect(()=>{
        const saveFavorites = ()=>{
            const favsToSave = JSON.stringify(myFavorites)
            localStorage.setItem("favorites",favsToSave)
        }
        saveFavorites()
    },[myFavorites])

    const handleCloseImage = ()=>{
        setViewImage(false)
    }


    const handleViewImage = (id)=>{
        const findMeal = mealMenu.find((each)=>{
            return each.idMeal === id;
        })
        setMealImage(findMeal)
        setViewImage(true)
    }

    console.log(myFavorites)

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

    return (
        <div>
            <div className={menuStyling}>

                <div>
                    <Suspense fallback={<div className={'text-3xl'}>Fetching Data.....</div>}>
                        <div className={'grid grid-cols-2 gap-x-4 gap-y-6 justify-center md:grid-cols-3 lg:grid-cols-4'}>
                            <Await resolve={retunee}>
                                    {
                                        (data)=>{
                                            useEffect(()=>{
                                                setMealMenu(data.meals)
                                            },[])
                                            return mealMenu.map((each)=>{
                                                return (
                                                    <FoodCard
                                                    image={each.strMealThumb}
                                                    key={`menu${each.idMeal}`}
                                                    name={each.strMeal}
                                                    id={each.idMeal}
                                                    handleViewImage={handleViewImage}
                                                    handleFavorite={addToFavorite}
                                                    />
                                                )
                                            })
                                        }
                                    }
                            </Await>
                        </div>
                    </Suspense>
                </div>

            </div>
            {likedClicked && <Notification/>}
            <Modal viewImage={viewImage} handleCloseImage={handleCloseImage} image={mealImage.strMealThumb}/>
        </div>
    )

}

export default Menu