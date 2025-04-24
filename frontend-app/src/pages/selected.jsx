import {Outlet,NavLink,useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import {useMyContext} from "../contextAPI"

function SelectedFav(){
    const params = useParams()
    const [favorites,setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")))
    const [selected,setSelected] = useState({})
    const {backIcon,mobileWidth} = useMyContext()
    const selectedStyle = `${mobileWidth}`

    useEffect(()=>{

        const {id} = params

        const findSelected = favorites.find((each)=>{
            return each.idMeal === id
        })

        setSelected(findSelected)

    },[])

    console.log(selected)

    return (
        <div className={'mt-20'}>
            <div className={selectedStyle}>
                <button className={'text-[1.5rem] px-5 bg-black text-white rounded-md'}><NavLink to={'..'} relative={'path'}>{backIcon}</NavLink></button>
                <div className={"md:w-[80%] lg:w-[50%]"}>
                    <div className={'h-[400px] mt-2'}>
                        <img src={selected.strMealThumb} className={'h-full w-full object-cover rounded-md'}></img>
                    </div>
                    <div className={'my-2'}>
                        <h2><a href={selected.strSource} target={"_blank"} className={'underline text-blue-600'}>Original Recipe</a></h2>
                    </div>
                    <div className={'grid grid-cols-3'}>
                        <NavLink to={'.'} className={({isActive}) => isActive ? 'text-red-500':''} end>Meal Name</NavLink>
                        <NavLink to={'meal-area'} className={({isActive}) => isActive ? 'text-red-500':''}>Meal Area</NavLink>
                        <NavLink to={'meal-category'} className={({isActive}) => isActive ? 'text-red-500':''}>Meal Category</NavLink>
                    </div>
                    <Outlet context={[selected,setSelected]}/>
                </div>
            </div>
        </div>
    )

}

export default SelectedFav