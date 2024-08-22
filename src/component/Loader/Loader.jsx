import { Box, Modal, Typography } from '@mui/material';

const Loader = ({ msg }) => {
    return (

        <Modal
            style={{ backgroundColor: 'rgba(47,46,46, 0.7)' }}
            className='h-screen '
            open={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div>
                <div className="py-[10rem] h-screen flex flex-col justify-center">

                    <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">

                        <div class="relative flex justify-center items-center">
                            <div className="absolute border-gray-300 h-[6rem] w-[6rem] animate-spin rounded-full border-8 border-t-[#16a34a]"></div>
                            <img src="https://res.cloudinary.com/abasskola/image/upload/v1724107912/Preview_b8xkcn.jpg" className="rounded-full h-[6rem] w-[6rem]  p-[0.8rem]" />
                        </div>
                        <div className=' text-[1.5rem] text-[#ffff] mt-1 italic'>
                            <h1>{msg}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default Loader