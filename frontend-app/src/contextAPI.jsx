import {createContext,useContext} from "react"
import { IoSearchOutline } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";

//this is a contextAPI declaration

const Context = createContext()

export const useMyContext = ()=>{
    return useContext(Context)
}

const sharedValues = {
    mobileWidth:'w-[98%] m-auto',
    tabletWidth:'',
    likeIcon:<FaThumbsUp/>,
    closeIcon:<MdOutlineClear/>,
    binIcon:<RiDeleteBin7Fill/>,
    searchIcon:<IoSearchOutline className={'inline'}/>,
    favorites:JSON.parse(localStorage.getItem("favorites")),
    navLinks:[
        {
            id:2,
            title:'Menu',
            url:'menu'
        },
        {
            id:3,
            title:'About',
            url:'about'
        },
        {
            id:4,
            title:'Favorites',
            url:'favorites'
        }
    ],
    accountLinks:[
        {
            id:1,
            title:'recent purchases',
            url:'recent-purchases'
        },
        {
            id:2,
            title:'messages',
            url:'messages'
        },
        {
            id:3,
            title:'favorites',
            url:'favorites'
        }
    ]
}

function ContextAPI({children}){

    return (
        <Context.Provider value={sharedValues}>
            {children}
        </Context.Provider>
    )
}

export default ContextAPI