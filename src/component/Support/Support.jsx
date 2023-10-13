import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLink } from 'react-icons/bi'
import { ImTwitter } from 'react-icons/im'
import { Link } from 'react-router-dom';


export default function Support() {
  return (
    <div>
      <div className='bg-[#f5f5f5] pt-[5rem] pb-[4rem]'>
        <div className='mx-auto md:w-[70%] w-[90%] text-[42px] font-[400] text-[#2f2e2e]'>
          <h1>Need Help with Your Order?</h1>
        </div>
      </div>
      <div className='pt-[5rem] pb-[3rem]'>
        <div className='mx-auto md:w-[70%] w-[90%]'>
          <div className="grid sm:grid-cols-2 gap-10 justify-center items-center">
            <div>
              <div>
                <div className='text-center text-[15px] text-[#44dbbd] mb-[2rem]'>
                  <p>Frequently asked questions</p>
                </div>
                <div className='text-[15px] text-[#605e5e] font-[400] mb-[2rem]'>
                  <span className=' me-5'>General</span>
                  <span>Setting up FAQs</span>
                </div>
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography><p className='text-[15px] text-[#605e5e] font-[400]'>What is an FAQ section?</p></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <p className='text-[15px] text-[#605e5e] font-[400] my-[1rem]'>
                          An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".
                        </p>
                        <div>
                          <a href="">
                            <BiLogoFacebookCircle />
                          </a>
                          <a href="">
                            <ImTwitter />
                          </a>
                          <a href="">
                            <BiLogoLinkedinSquare />
                          </a>
                          <a href="">
                            <BiLink />
                          </a>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography><p className='text-[15px] text-[#605e5e] font-[400] my-[1rem] border--[1px] border-green-600'>Why do FAQs matter?</p></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <p className='text-[15px] text-[#605e5e] font-[400]'>
                          FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.
                        </p>
                        <div>
                          <a href="">
                            <BiLogoFacebookCircle />
                          </a>
                          <a href="">
                            <ImTwitter />
                          </a>
                          <a href="">
                            <BiLogoLinkedinSquare />
                          </a>
                          <a href="">
                            <BiLink />
                          </a>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography><p className='text-[15px] text-[#605e5e] font-[400]'>Where can I add my FAQs</p>?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <p className='text-[15px] text-[#605e5e] font-[400]'>
                          FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.
                        </p>
                        <div>
                          <a href="">
                            <BiLogoFacebookCircle />
                          </a>
                          <a href="">
                            <ImTwitter />
                          </a>
                          <a href="">
                            <BiLogoLinkedinSquare />
                          </a>
                          <a href="">
                            <BiLink />
                          </a>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className='py-3 text-center border-[1px] border-[#44dbbd] bg-[#44dbbd] hover:bg-white hover:text-[#44dbbd] text-white mb-5'>
                  <Link to='#'>Download Our User Manual</Link>
                </div>
                <div className='text-[15px] text-[#605e5e] font-[400]'>
                  <span>Contact Us</span>
                  <div>
                    <input type="text"  className='w-full py-2 ps-4 outline-none border-[1px] hover:border-[3px] border-black' placeholder='Name'/><br />
                    <input type="email"  className='w-full py-2 ps-4 outline-none border-[1px] border-black hover:border-[3px] mt-2' placeholder='Email'/>
                    <div className='mt-2'>
                      <textarea name="" id="" className='w-full h-[8rem] outline-none pt-4 ps-4 border-[1px] border-black hover:border-[3px]' placeholder='Type your message here'></textarea>
                    </div>
                    <div className="text-end text-white mt-2">
                      <button className='p-[5px] rounded-sm border-[1px] border-[#44dbbd] bg-[#44dbbd] hover:bg-white hover:text-[#44dbbd]'>Submit Your Inquiry</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
