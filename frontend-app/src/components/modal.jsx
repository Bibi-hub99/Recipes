import {useMyContext} from "../contextAPI"
import ReactDOM from "react-dom"

function Modal(props){

    const {closeIcon} = useMyContext()

    return (
        ReactDOM.createPortal(
        <>
            {props.viewImage && <div className={'fixed h-full w-full top-0'} style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
                <div className={'relative m-auto h-[90%] bg-white top-[5%] md:w-[70%] xl:w-[50%] rounded-lg'} style={{zIndex:'17'}}>
                    <button className={'relative left-1 top-0 text-[1.9rem] px-2 hover:bg-slate-100 py-2 rounded-lg'} style={{zIndex:'17'}} onClick={props.handleCloseImage}>{closeIcon}</button>
                    <div className={'absolute left-0 right-0 top-0 bottom-0 rounded-lg'}>
                        <img src={props.image} className={'h-full w-full object-cover rounded-lg'}></img>
                    </div>
                </div>
            </div>}
        </>,document.getElementById("modal"))
    )

}

export default Modal