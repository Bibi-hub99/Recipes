import AboutContainer from "../components/aboutContainer"

function AboutVision(){

    const image = "https://images.unsplash.com/photo-1603827457577-609e6f42a45e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D"

    return (
        <AboutContainer heading={'Cooking Free'} image={image}>
            We believe nobody should pay a price to learn what is a need for people unless it is a need to an individual.
            our vision stands on making cooking information and tips accessible to anyone irrespective of the location and time hence 
            our worldwide network rich in both <b>experts, professionals, enthusiasts and learners</b> is the biggest and most accessible to people.
        </AboutContainer>
    )

}

export default AboutVision