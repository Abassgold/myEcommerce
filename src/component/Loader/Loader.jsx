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
                            <div className="absolute border-gray-300 md:h-[5rem] h-[4rem] w-[4rem] md:w-[5rem] animate-spin rounded-full border-[4px] border-y-[#16a34a]"></div>
                            <img src="https://res.cloudinary.com/abasskola/image/upload/v1724107912/Preview_b8xkcn.jpg" className="rounded-full md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem]  p-[0.8rem]" />
                        </div>
                        <div className='text-[#ffff] mt-[0.1rem] italic'>
                            <h1>{msg}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default Loader