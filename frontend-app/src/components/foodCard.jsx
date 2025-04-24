import {useMyContext} from "../contextAPI"

function FoodCard(props){

    const {likeIcon,binIcon} = useMyContext()

    return (
        <div className={'bg-white rounded-md'} style={{boxShadow:'3px 5px 6px lightgray'}}>
            <div className={'h-[200px]'}>
                <img src={props.image} className={'w-full h-full object-cover rounded-md cursor-pointer'}onClick={()=>props.handleViewImage(props.id)}></img>
            </div>
            <div className={'flex w-[95%] m-auto py-3 text-[1.9rem]'}>
                <div className={'w-3/4'}>
                    <p>{props.name}</p>
                </div>
                <div className={'w-1/4 text-end'}>
                    <button onClick={()=>props.handleFavorite(props.id)}>{props.isFav ? binIcon : likeIcon}</button>
                </div>
            </div>
        </div>
    )

}

export default FoodCard