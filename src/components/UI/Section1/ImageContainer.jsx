
import { ArrowRight } from 'lucide-react'


const ImageContainer = (props) => {

    return (
        <div className="w-2/3 flex">
            <div className="h-90 w-80 overflow-hidden relative rounded-3xl">

                <img
                    className="h-full w-full object-cover"
                    src={props.image}
                    alt={props.info}
                />

                <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">

                    <h2 className="bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center">
                        {props.count}
                    </h2>

                    <div>
                        <p className="text-lg text-amber-50 leading-normal">
                            {props.info}
                        </p>

                        <div className="flex gap-2">
                            <button className={`${props.color} text-white font-semibold px-7 py-3 rounded-full`}>
                                Satisfied
                            </button>

                            <button className={`${props.color} text-white font-semibold px-4 py-3 rounded-full`}>
                                <ArrowRight />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ImageContainer



