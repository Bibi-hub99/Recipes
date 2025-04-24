import {Link} from "react-router-dom"
import {useMyContext} from "../contextAPI"

function FavCard(props){

    const {binIcon} = useMyContext()

    return (
        <div className={'flex mt-[1rem] md:w-[50%] py-2 px-2 box-border rounded-lg'} style={{boxShadow:'2px 4px 5px 4px lightgray'}}>
            <div className={'w-[25%]'}>
                <div className={'w-[90px] h-[90px]'}>
                    <Link to={props.url}>
                        <img src={props.image} className={'w-full h-full'}></img>
                    </Link>
                </div>
            </div>
            <div className={'w-[75%] text-[1.5rem]'}>
                <p>{props.name}</p>
                <button className={'mt-4 text-[1.9rem]'} onClick={()=>props.handleFavorite(props.id)}>{binIcon}</button>
            </div>
        </div>
    )

}

export default FavCard