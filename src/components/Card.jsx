import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="top">
                <img src={props.logo} alt="" />
                <button>save <Bookmark size={12} /></button>
            </div>
            <div>
                <div className="center">
                    <h3>{props.company} <span>{props.postedDate}</span></h3>
                    <h2>{props.postName}</h2>
                    <div className='tag'>
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button className='bg-blue-600'>Apply</button>
            </div>
        </div>
    )
}

export default Card