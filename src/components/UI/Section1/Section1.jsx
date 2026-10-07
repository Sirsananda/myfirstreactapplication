import Navbar from './Navbar'
import LeftText from './LeftText'
import ImageContainer from './ImageContainer'

const Section1 = () => {
    const cardsDetails = [
        {
            img: "https://images.unsplash.com/photo-1685760259914-ee8d2c92d2e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
            count: 1,
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio architecto fugiat esse rerum consequuntur quod optio eos repellat corrupti expedita sunt doloremque",
            color: "bg-blue-500"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1661590863910-69abf33b8f3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
            count: 2,
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio architecto fugiat esse rerum consequuntur quod optio eos repellat corrupti expedita sunt doloremque",
            color: "bg-green-500"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1731966051268-b891d5438fd0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg0fHx8ZW58MHx8fHx8",
            count: 3,
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio architecto fugiat esse rerum consequuntur quod optio eos repellat corrupti expedita sunt doloremque",
            color: "bg-yellow-500"
        },
        {
            img: "https://images.unsplash.com/photo-1628009658182-6df033109021?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8",
            count: 4,
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio architecto fugiat esse rerum consequuntur quod optio eos repellat corrupti expedita sunt doloremque",
            color: "bg-yellow-500"
        }
    ];
    return (
        <div className='bg-white h-130 m-18'>
            <Navbar />
            <div className='flex px-2 py-2'>
                <LeftText />
                {cardsDetails.map((elem, idx) => (
                    <ImageContainer key={idx} image={elem.img} count={elem.count} info={elem.info} color={elem.color} />
                ))
                }

            </div>
        </div>
    )
}

export default Section1