import {NavLink,Outlet} from "react-router-dom"
import {useMyContext} from "../contextAPI"

function About(){

    const {mobileWidth} = useMyContext()

    const aboutStyle = `${mobileWidth} mt-24`
    const linkStyle = {
        fontWeight:'bolder'
    }

    return (
        <div className={aboutStyle}>
            <div className={'bg-white border-2 fixed top-14'}>
                <ul className={'flex'}>

                    <li><NavLink to={'.'} className={({isActive}) => isActive ? 'text-red-500':'hover:underline'} style={linkStyle} end>Mission</NavLink></li>
                    <li className={'ml-5'}><NavLink to={'vision'} className={({isActive}) => isActive ? 'text-red-500':'hover:underline'} style={linkStyle}>Vision</NavLink></li>
                    <li className={'ml-5'}><NavLink to={'blog'} className={({isActive}) => isActive ? 'text-red-500':'hover:underline'} style={linkStyle}>Blog</NavLink></li>

                </ul>
            </div>
            <div><Outlet/></div>
        </div>
    )

}

export default About