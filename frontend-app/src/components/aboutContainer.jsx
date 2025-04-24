function AboutContainer(props){

    return (
        <div className={'mt-2'}>
            <h2 className={'text-2xl font-bold'}><mark className={'bg-red-500 px-2 rounded-t-md'}>{props.heading}</mark></h2>
            <hr className={'bg-red-500 h-[.2rem] border-none'}></hr>
            <div className={'mt-1'}>
                <p>
                    {props.children}
                </p>
                <div className={'h-[400px] w-[500px] max-w-[450px]'}>
                    <img src={props.image} className={'w-full h-full object-cover'}></img>
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis facilis, voluptates exercitationem distinctio aperiam delectus, ab architecto, officiis enim quos nemo aliquid eligendi soluta est repellendus laudantium explicabo debitis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis facilis, voluptates exercitationem distinctio aperiam delectus, ab architecto, officiis enim quos nemo aliquid eligendi soluta est repellendus laudantium explicabo debitis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis facilis, voluptates exercitationem distinctio aperiam delectus, ab architecto, officiis enim quos nemo aliquid eligendi soluta est repellendus laudantium explicabo debitis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis facilis, voluptates exercitationem distinctio aperiam delectus, ab architecto, officiis enim quos nemo aliquid eligendi soluta est repellendus laudantium explicabo debitis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis facilis, voluptates exercitationem distinctio aperiam delectus, ab architecto, officiis enim quos nemo aliquid eligendi soluta est repellendus laudantium explicabo debitis!

            </div>
        </div>
    )

}

export default AboutContainer