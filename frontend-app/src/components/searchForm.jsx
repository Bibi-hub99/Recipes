import {useMyContext} from '../contextAPI'

function SearchForm(props){

    const {searchIcon} = useMyContext()

    return (
        <form autoComplete={'off'}>
            <input type={'text'} name={'searchText'} placeholder={'Search by letter'} value={props.searchText} onChange={props.handleSearchText} className={'border-2 outline-none px-[.2rem] py-1 rounded-md'}></input>
            <button className={'px-4 ml-2 border-black border-2 py-1 rounded-md bg-black text-white'} type={'submit'} onClick={props.handleSearchTerm}>{searchIcon}</button>
        </form>
    )

}

export default SearchForm