import { FaBars } from "react-icons/fa6";
import {useMyContext} from '../contextAPI'
import HeroText from './heroText'
import SearchForm from './searchForm'
import {NavLink} from 'react-router-dom'

function NavBar(props){
    const {mobileWidth,navLinks} = useMyContext()
    const navBarStyle = `${mobileWidth} py-2 flex items-center`



    return (
        <div className={'shadow-lg shadow-gray-500'} style={{position:'fixed',top:'0',width:'100%',backgroundColor:'white',zIndex:'20px'}}>
            <div className={navBarStyle}>

                <div className={'md:hidden'}>
                    <button className={'text-2xl block'}><FaBars className={''}/></button>
                </div>

                <div className={'ml-2'}>
                    <HeroText/>
                </div>

                <div className={'ml-2'}>
                    <SearchForm 
                    searchText={props.searchText} 
                    handleSearchText={props.handleSearchText}
                    handleSearchTerm={props.handleSearchTerm}
                    />
                </div>

                <div className={'hidden md:block ml-4'}>
                    <ul className={'flex font-bold'}>
                        <li><NavLink to={'.'} className={({isActive}) => isActive ? 'text-red-500':'hover:underline'}>Home</NavLink></li>
                        {navLinks.map((each)=>{
                            return <li key={`navLinksComp${each.id}`} className={'ml-10'}><NavLink to={each.url} className={({isActive}) => isActive ? 'text-red-500':'hover:underline'}>{each.title}</NavLink></li>
                        })}
                    </ul>
                </div>

            </div>

        </div>
    )

}

export default NavBar