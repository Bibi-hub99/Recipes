import NavBar from './components/navbar'
import {Outlet,useNavigate,useLocation,useMatch} from 'react-router-dom'
import {useState,useEffect} from "react"


function LayOut(){

    const [searchText,setSearchText] = useState("")
    const [searchTerm,setSearchTerm] = useState("")
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

    return (
        <div>
            <NavBar searchText={searchText}
             handleSearchText={handleSearchText}
             handleSearchTerm={handleSearchTerm}
             />
            <Outlet/>
        </div>
    )

}

export default LayOut