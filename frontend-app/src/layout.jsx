import NavBar from './components/navbar'
import {Outlet,useNavigate,useLocation,ScrollRestoration} from 'react-router-dom'
import {useState,useEffect} from "react"
import MobileSlider from "./components/mobileSlider"

function LayOut(){

    const [searchText,setSearchText] = useState("")
    const [parentWidth,setParentWidth] = useState('0%')
    const [childWidth,setChildWidth] = useState("0%")
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname !== "/search-results"){
            setSearchText("")
        }
    },[location.pathname])
    
    const handleSearchText = (evt)=>{
        const {value} = evt.target;
        setSearchText(value)
    }

    const navigate = useNavigate()

    const handleSearchTerm = async(evt)=>{
        evt.preventDefault()
        navigate(`/search-results?searchTerm=${searchText}`)
    }

    const toggleSlideMenu = (parentWidth,childWidth)=>{
        setParentWidth(`${parentWidth}%`)
        setChildWidth(`${childWidth}%`)
    }

    return (
        <div>
            <NavBar searchText={searchText}
             handleSearchText={handleSearchText}
             handleSearchTerm={handleSearchTerm}
             showSlideMenu={toggleSlideMenu}
             />
            <Outlet/>
            <MobileSlider
            hideSlideMenu={toggleSlideMenu}
            parentWidth={parentWidth}
            childWidth={childWidth}/>
            <ScrollRestoration getKey={(location,matches)=>{return location.pathname}}/>
        </div>
    )

}

export default LayOut