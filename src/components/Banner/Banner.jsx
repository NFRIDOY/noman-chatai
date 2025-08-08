import { NavLink } from 'react-router'
import bannerImg from './../../assets/banner.png'
export default function Banner() {
    return (
        <div className='flex flex-row items-center justify-between mx-10 relative bg-gradient-to-r from-purple-700 to-purple-900 text-white overflow-hidden px-6 lg:px-40 rounded-bl-3xl'>
            <div className='w-1/2 space-y-10'>
                <h1 className='text-5xl'>
                    Plan Your <br />
                    Coaching Sessions In Seconds
                </h1>
                <p>
                    Transform how you plan your sessions with our cutting-edge AI tool designed specifically for sports coaches. Whether you’re planning an entire training session, searching for fresh and creative ideas, or looking for the perfect drill to challenge your athletes, our AI has you covered. Save precious hours in planning and get back to doing what you love most—coaching and inspiring your team.
                </p>
                <div>
                    <button className='bg-purple-500 px-10 py-2 rounded-3xl text-white'>
                        {/* TODO: Use Auth  */}
                        <NavLink to={'/login'}>
                            Start for Free
                        </NavLink>
                    </button>
                </div>
                <p>* No credit card required</p>
            </div>
            <div>
                <img src={bannerImg} alt="" srcset="" />
            </div>
        </div>
    )
}
