import {NavLink} from "react-router-dom"
import {useMyContext} from "../contextAPI"

function MobileSlider(props){

    const {homeIcon,closeIcon,mobileLinks} = useMyContext()

    const activeLink = 'bg-black text-white'
    const inActiveLink = "hover:bg-gray-200"

    const linkStyle = {

        display:'block',
        padding:'.5rem 0',
        width:'98%',
        margin:'0 auto',
        borderRadius:'.5rem',
        marginBottom:'.2rem'
    }

    return (
        <div className={'fixed top-0 h-full overflow-x-hidden duration-100'} style={{backgroundColor:'rgba(0,0,0,0.8)',zIndex:'30',width:props.parentWidth}}>
            <div className={`bg-white h-full relative pt-12 duration-100`} style={{width:props.childWidth}}>
                <button className={'absolute top-1 right-2 text-[1.9rem] py-1 px-2 hover:bg-gray-200 rounded-md'} onClick={()=>props.hideSlideMenu('0','0')}>{closeIcon}</button>
                <div className={''}>
                    <NavLink to={''} onClick={()=>props.hideSlideMenu('0','0')} className={({isActive}) => isActive ? activeLink:inActiveLink} style={linkStyle}>{homeIcon} Home</NavLink>
                    {
                        mobileLinks.map((each)=>{

                            let titlePatch;
                            if(each.id === 1){
                                titlePatch = 'Menu'
                            }else if(each.id === 2){
                                titlePatch = 'About'
                            }else{
                                titlePatch = 'See More'
                            }

                            return (
                                <NavLink to={each.url} onClick={()=>props.hideSlideMenu('0','0')} key={`mobileLinks${each.id}`} className={({isActive}) => isActive ? activeLink:inActiveLink} style={linkStyle}>{each.title} {titlePatch}</NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default MobileSlider