import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const AddCartRequired = () => {
    const location = useLocation()
    console.log(location);

    const navigate = useNavigate()
    const goToCart = () => {
        navigate('/buy-now');
    }
    let pathname = location?.pathname;
    let newPathname = pathname?.replace("/", "");
    return (
        <>
            <section className=' container p-4'>
                <h1 className='text-[2rem] font-[600] capitalize'>{newPathname}</h1>
            </section>
            <section className='container mx-auto my-6 p-3 max-w-[30rem]'>

                <div className='flex justify-center text-center'>
                    <div>
                        <img src='https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                        <div>
                            <h1 className='text-[2rem] font-[500] my-2'>You are required to add cart</h1>
                            <p className='mb-6 text-[#F6510B] text-[1rem]'>Your cart is currently empty. Please add some items to continue shopping.</p>
                        </div>
                        <div>
                            <button className='p-3 text-white hover:bg-white hover:text-[#44dbbd] bg-[#44dbbd] border-2 border-[#44dbbd] transition-all duration-500 ' onClick={goToCart}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddCartRequired