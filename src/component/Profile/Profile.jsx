import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { searchContext } from '../../App'
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader'


const Profile = () => {
    const context = useContext(searchContext)
    const { user } = useSelector(state => state.signinSlce)
    if (!user) return <Loader/> 
    return (
        <div className='md:w-[70%] w-[90%] mx-auto mt-[5rem] mb-[3rem]'>
            <div className={` md:flex justify-center gap-[10rem] align-center`}>
                <div className={`flex-1 mb-4`}>
                    <h1 className={`text-[2rem] mb-[1.5rem]`}>My Profile</h1>
                    <div className={`object-contain py-3`}>
                        <img src={user?.photo.url} alt="" className={` mx-auto rounded-full w-72 h-72 object-cover`} />
                    </div>
                    <Link to='/profile/me/edit'>
                        <div className=' transition-all duration-[500ms] bg-[#44dbbd] py-2 text-white hover:bg-white border-[2px] border-[#44dbbd] hover:text-[#44dbbd] rounded-sm text-[1.2rem] text-center'>
                            Edit Profile
                        </div>
                    </Link>
                </div>
                <div className={`flex-1 mb-4`}>
                    <div className='my-2'>
                        <label htmlFor="" className={`text-[2rem]`}>First Name</label>
                        <p className={`text-[1.5rem] capitalize`}>{user?.firstName}</p>
                    </div>
                    <div className='my-2'>
                        <label htmlFor="" className={`text-[2rem]`}>Last Name</label>
                        <p className={`text-[1.5rem] capitalize`}>{user?.lastName}</p>
                    </div>
                    <div className='my-2'>
                        <label htmlFor="" className={`text-[2rem]`}>Email Address</label>
                        <p className={`text-[1.5rem]`}>{user?.email}</p>
                    </div>
                    <div className='my-2'>
                        <label htmlFor="" className={`text-[2rem]`}>Joined On</label>
                        <p className={`text-[1.5rem]`}>{new Date(user?.createdAt).toLocaleDateString()}</p>
                    </div>
                    {user?.role !== 'admin' &&
                        (<Link to='/Oders/me' className={``}>
                            <div className={`text-[1.5rem] bg-orange-500 py-2 text-center text-white`}>
                                Orders
                            </div>
                        </Link>)}
                    <Link to="/password/edit" className='w-full'>
                        <div className={`bg-blue-950 text-center text-white text-[1.2rem] mt-2 py-2 transition-all duration-[500ms] hover:bg-slate-800`}>
                            Change Password
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile