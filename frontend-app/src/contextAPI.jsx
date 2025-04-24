import {createContext,useContext} from "react"
import { IoSearchOutline } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { IoIosTv } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { TiInfoLarge } from "react-icons/ti";
import { MdMore } from "react-icons/md";
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
    trendIcon:<FaArrowTrendUp/>,
    backIcon:<FaArrowLeft className={'inline'}/>,
    searchIcon:<IoSearchOutline className={'inline'}/>,
    homeIcon:<FaHouse className={'block'}/>,
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
            title:'See more',
            url:'see-more'
        }
    ],
    seeMoreLinks:[
        {
            id:1,
            title:<IoIosTv/>,
            url:'news'
        },
        {
            id:2,
            title:<IoIosNotifications/>,
            url:'notifications'
        },
        {
            id:3,
            title:<MdFavorite/>,
            url:'favorites'
        }
    ],
    mobileLinks:[
        {
            id:1,
            title:<MdOutlineRestaurantMenu className={'block'}/>,
            url:'menu'
        },
        {
            id:2,
            title:<TiInfoLarge className={'block'}/>,
            url:'about'
        },
        {
            id:3,
            title:<MdMore className={'block'}/>,
            url:'see-more'
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