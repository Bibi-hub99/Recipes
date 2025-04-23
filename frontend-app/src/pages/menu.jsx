import {useLoaderData,Await} from "react-router-dom"
import {Suspense,useState} from "react"
import {useMyContext} from "../contextAPI"
import FoodCard from "../components/foodCard"
import Modal from "../components/modal"

function Menu(){

    const {retunee} = useLoaderData()
    const {mobileWidth} = useMyContext()
    const menuStyling = `${mobileWidth} mt-20`
    const [mealMenu,setMealMenu] = useState(retunee || [])

    const [viewImage,setViewImage] = useState(false)
    const [mealImage,setMealImage] = useState({})

    const handleCloseImage = ()=>{
        setViewImage(false)
    }

    const handleViewImage = (id)=>{
        setViewImage(true)
    }

    return (
        <div>
            <div className={menuStyling}>

                <div>
                    <Suspense fallback={<div className={'text-3xl'}>Fetching Data.....</div>}>
                        <div className={'grid grid-cols-2 gap-x-4 gap-y-6 justify-center md:grid-cols-3 lg:grid-cols-4'}>
                            <Await resolve={mealMenu}>
                                    {
                                        (data)=>{
                                            return data.meals.map((each)=>{
                                                return (
                                                    <FoodCard
                                                    image={each.strMealThumb}
                                                    key={`menu${each.idMeal}`}
                                                    name={each.strMeal}
                                                    id={each.idMeal}
                                                    handleViewImage={handleViewImage}
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
            <Modal viewImage={viewImage} handleCloseImage={handleCloseImage}/>
        </div>
    )

}

export default Menu