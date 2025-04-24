import AboutContainer from "../components/aboutContainer"

function AboutMission(){

    const image = 'https://images.unsplash.com/photo-1682996055064-599bec77fc62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvb2tpbmdzfGVufDB8fDB8fHww'

    return (


        <div>
            <AboutContainer heading={'Spices for All'} image={image}>
                <p>
                    Our Mission is to provide and share recipes with everyone accross the world while 
                    helping chefs advertise their recipes to the world for free.ranging from fast food,dining and cultural 
                    recipes the <b>Recipe foundation</b> ensures barriers are broken and mutual respect takes place.our networks 
                    extend to not chefs sharing recipes but also people enthusiastic about trying different cookings and as well 
                    those still learning to cook. 
                </p>
            </AboutContainer>
        </div>

    )

}

export default AboutMission