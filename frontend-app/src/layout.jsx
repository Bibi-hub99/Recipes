import NavBar from './components/navbar'
import {Outlet,useNavigate} from 'react-router-dom'
import {useState,useEffect} from "react"


function LayOut(){

    const [searchText,setSearchText] = useState("")
    const [searchTerm,setSearchTerm] = useState("")

    const handleSearchText = (evt)=>{
        const {value} = evt.target;
        setSearchText(value)
    }

    const handleSearchTerm = async(evt)=>{
        evt.preventDefault()
        setSearchTerm(searchText)
    }

    const navigate = useNavigate()

    useEffect(()=>{

        const searchMenu = ()=>{
            /*try{

            }*/
            navigate(`/search-results?searchTerm=${searchTerm}`)
        }

        if(searchTerm){
            searchMenu()
        }

    },[searchTerm])

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