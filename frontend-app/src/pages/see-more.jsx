import {NavLink,Outlet} from "react-router-dom"
import {useMyContext} from "../contextAPI"

function SeeMore(){

    const {seeMoreLinks,trendIcon,mobileWidth} = useMyContext()
    const seeMoreStyle = `${mobileWidth}`


    return (
        <div className={'mt-20'}>
            <div className={seeMoreStyle}>
                <div>
                    <ul className={'text-[1.8rem] flex'}>
                        <li><NavLink to={'.'} className={({isActive}) => isActive ? 'text-red-500':'hover:underline'} end>{trendIcon}</NavLink></li>
                        {
                            seeMoreLinks.map((each)=>{
                                return <li className={'ml-10'} key={`seeMoreLinks${each.id}`}><NavLink to={each.url} className={({isActive}) => isActive ? 'text-red-500':'hover:underline'}>{each.title}</NavLink></li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={'mt-5'}>
                <Outlet/>
            </div>
        </div>
    )

}

export default SeeMore