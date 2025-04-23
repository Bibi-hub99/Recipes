import {Link} from 'react-router-dom'

function Home(){

    return (
        <div className={'bg-no-repeat flex flex-col justify-center bg-cover bg-center h-[100vh] bg-[url(https://media.istockphoto.com/id/1151678615/photo/top-view-of-fresh-guacamole-ingredients-natural-organic-vegetables-on-the-table-home-cookings.jpg?s=612x612&w=0&k=20&c=pjt9TtjgDErx_UhALXbFNM6N9AdyEN0cQL5H06DRMs4=)]'}>
            <div className={'text-white text-center'}>
                <h2 className={'text-3xl'}>Checkout your favorite recipe but simply clicking</h2><br></br>
                <h3 className={'text-2xl'}><Link to={'menu'} className={'bg-black px-5 py-2 rounded-md'} style={{boxShadow:'20px 10px 10px 5px gray'}}>Menu</Link></h3><br></br>
            </div>
 
        </div>
    )

}

export default Home