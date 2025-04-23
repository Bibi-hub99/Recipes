import {useMyContext} from "../contextAPI"
import ReactDOM from "react-dom"

function Modal(props){

    const {closeIcon} = useMyContext()

    return (
        ReactDOM.createPortal(
        <>
            {props.viewImage && <div className={'fixed h-full w-full top-0'} style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
                <div className={'relative h-[90%] bg-white top-[10%] rounded-lg pt-5 border-box md:w-[70%] md:top-[5%] m-auto lg:w-[50%] lg:h-[70%] lg:top-[15%]'} style={{zIndex:'17'}}>
                    <button className={'relative left-1 -top-5 text-[1.9rem] px-2 hover:bg-slate-100 py-2 rounded-lg'} onClick={props.handleCloseImage}>{closeIcon}</button>
                    <img src={props.image} className={'absolute inset-0'}></img>
                </div>
            </div>}
        </>,document.getElementById("modal"))
    )

}

export default Modal