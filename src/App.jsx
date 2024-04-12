import React, { useEffect, useState } from 'react'
import './App.css'
import btp from './assets/btp.png'
import logo from './assets/logo.png'
import search from './assets/search.png'

import imgbg from './assets/imgbg.png'

import MenuIcon from '@mui/icons-material/Menu';


// import shopping from './assets/shopping.png'
import user from './assets/user.png'
import Switcher from './Dark/Switcher'
import star from './assets/star.png'
import im from './assets/im.png'
import k from './assets/k.png'
import x from './assets/x.png'
import truee from './assets/true.png'
import calendar from './assets/calendar.png'
import im2 from './assets/im2.png'
import amp from './assets/amp.png'
import im3 from './assets/im3.png'
import im4 from './assets/im4.png'
import im5 from './assets/im5.png'
import woman from './assets/woman.png'
import footerlogo from './assets/footerlogo.png'
import face from './assets/face.png'
import ggg from './assets/ggg.png'



import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next'
import TemporaryDrawer from './Components/TemporaryDrawer'




const App = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }




  const [todos, setTodos] = useState([
    {
      id: 1,
      avatar: `${imgbg}`,
      title: 'The curious corner of chamarel'
    },
    {
      id: 2,
      avatar: `${imgbg}`,
      title: 'The curious corner of chamarel'
    },
    {
      id: 3,
      avatar: `${imgbg}`,
      title: 'The curious corner of chamarel'
    },
  ])




  const deleteUser = (id) => {
    let arr = todos.filter((e) => e.id != id)
    setTodos(arr)
  }


  const [text, setText] = useState("")
  const [image, setImage] = useState("")

  const addUser = () => {
    if (text.trim().length == 0 && image.trim().length == 0) {
      alert("Hello World")
    }
    else {
      let newUser = {
        id: new Date().getTime(),
        avatar: image,
        title: text
      }
      let a = [...todos, newUser]
      setTodos(a)
      setImage("")
      setText("")
    }
  }


  const [modal, setModal] = useState(false)
  const [idx, setIdx] = useState(null)
  const [text2, setText2] = useState("")
  const [image2, setImage2] = useState("")
  const handlModal = (elem) => {
    setModal(true)
    setText2(elem.title)
    setImage2(elem.avatar)
    setIdx(elem.id)
  }

  const editUser = (event) => {
    event.preventDefault()
    let arr = todos.map((e) => {
      if(e.id === idx) {
        e.title = event.target['name'].value
        e.avatar = event.target['img'].value
      }
      return e
    })
    setTodos(arr)
    setModal(false)
  }

  return (
    <div className='bg-[#e5f3ff]  dark:bg-[#0b5958] '>
      


      <div className="section_1">
        <div className='sm:hidden md:block bg-[#F5FAFE]'>
          <div className="container">
            <nav className='flex justify-between items-center pb-[10px] pt-[10px]'>1
              <div>
                <h1 className=' text-[#333333] text-[10px]'>{t("t4")}</h1>
              </div>
              <div className='flex gap-[80px]'>
                <div>
                  <img src={btp} alt="" />
                </div>
                <div>
                  <img src={btp} alt="" />
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div>
          <div className="container">
            <nav className='md:flex items-center pt-[20px] pb-[20px] justify-between'>
              <div className='sm:flex justify-between'>
                <div>
                  <img src={logo} alt="" />
                </div>
                <div className='md:hidden'>
                  <TemporaryDrawer />
                </div>
              </div>
              <div className='sm:hidden md:flex'>
                <input className='bg-[white] pl-[20px]' type="text" placeholder='Search Location' />
                <div className='bg-[#EC1F46] px-[20px] py-[10px]'>
                  <img src={search} alt="" />
                </div>
              </div>
              <div className='flex items-center justify-between sm:mt-[10px] md:mt-[0] md:w-[40%]'>
                <div className='dark:text-[white] '>
                  <ShoppingCartIcon />
                </div>
                <div className='lg:flex sm:hidden'>
                  <div>
                    <img src={user} alt="" />
                  </div>
                  <select className='bg-[#ff000000] dark:text-[white]'>
                    <option value="Nathan">Nathan</option>
                    <option value="Olimkhuja">bakha</option>
                  </select>
                </div>
                <div className='flex gap-[10px] dark:text-[white]'>
                  <button onClick={() => changeLanguage("en")} className='border-2 px-[10px] border-[black] dark:border-[#fbfbfb]'>en</button>
                  <button onClick={() => changeLanguage("ru")} className='border-2 px-[10px] border-[black] dark:border-[#fbfbfb]'>ru</button>
                </div>
                <div>
                  <Switcher />
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className='bg-[#0A223D]'>
          <div className="container">
            <nav>
              <ul className='flex justify-between text-[white] pt-[15px] pb-[15px]'>
                <li>{t("t1")}</li>
                <li>{t("t2")}</li>
                <li>{t("t3")}</li>
                <li className='sm:hidden md:block'>{t("t5")}</li>
                <li className='sm:hidden md:block'>{t("t6")}</li>
                <li className='sm:hidden md:block'>{t("t7")}</li>
                <li className='sm:hidden md:block'>{t("t8")}</li>
              </ul>
            </nav>
          </div>
        </div>

        <div>
          <div className="container">
            <div>
              <p className='text-[10px] text-[#0A223D] mt-[10px]'>{t("t9")}</p>
              <div className='flex gap-[5px] mt-[50px]'>
                <div><img src={star} alt="" /></div>
                <div><img src={star} alt="" /></div>
                <div><img src={star} alt="" /></div>
                <div><img src={star} alt="" /></div>
                <div><img src={star} alt="" /></div>
              </div>
              <div className='md:flex gap-[15px] mt-[10px]'>
                <h1 className='text-[#333333] text-[24px] font-bold'>{t("t10")}</h1>
                <button className='px-[10px] py-[5px] bg-[#EC1F46] text-[white]'>{t("t11")}</button>
              </div>
              <p className='text-[#333333] text-[12px] mt-[15px]'>{t("t12")}</p>
              <div className='xl:flex justify-between'>
                <div className='md:flex md:justify-center'>
                  <img src={im} alt="" />
                </div>
                <div className='sm:mt-[20px] md:flex md:justify-evenly md:mt-[30px] xl:mt-[0]  xl:inline-block'>
                  <div>
                    <img src={k} alt="" />
                  </div>
                  <div className='sm:mt-[20px] md:mt-[0] xl:mt-[30px]'>
                    <img src={x} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:hidden xl:block mt-[50px]'>
          <div className="container">
            <ul data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" className='flex justify-between dark:text-[white] text-[#333333]'>
              <li className='text-[#EC1F46] font-bold'>{t("t13")}</li>
              <li>{t("t14")}</li>
              <li>{t("t15")}</li>
              <li>{t("t16")}</li>
              <li>{t("t17")}</li>
              <li>{t("t18")}</li>
              <li>{t("t19")}</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="section_2">
        <div className="container">
          <h1 className='text-[#333333] text-[24px] font-bold mt-[40px] mb-[40px]'>Package Summery</h1>
          <div className='w-[95%] m-auto xl:flex justify-between'>
            <div className='bg-[white] xl:w-[48%] rounded-[10px]'>
              <div className='bg-[#0A223D] rounded-[8px] pt-[15px] pb-[15px]'>
                <h1 className='text-[14px] font-bold w-[90%] m-auto text-[white]'>Package Highlights</h1>
              </div>
              <div className='w-[90%] m-auto md:flex justify-between '>
                <div className='mt-[20px] pb-[20px]'>
                  <div className='flex gap-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Half Board/ All Inclusive</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Child Under 11 Years Stay Free</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>LUX* Me Spa</p>
                  </div>
                </div>
                <div className='mt-[20px] sm:pb-[20px] md:pb-[0]'>
                  <div className='flex gap-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Half Board/ All Inclusive</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Child Under 11 Years Stay Free</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[white] sm:mt-[60px] xl:mt-[0] xl:w-[48%] rounded-[10px]'>
              <div className='bg-[#0A223D] rounded-[8px] pt-[15px] pb-[15px]'>
                <h1 className='text-[14px] font-bold w-[90%] m-auto text-[white]'>Offer Details</h1>
              </div>
              <div className='w-[90%] m-auto md:flex mt-[20px] pb-[20px]'>
                <div className=' md:w-[60%]'>
                  <div className='flex gap-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='w-[40%] text-[#333333] text-[12px]'>Benefit from a special discounted CHILL’OUT OFFER at Grand Hilton Hotel. * Valid until 30 April 2020</p>
                  </div>
                </div>
                <div className='sm:mt-[10px] md:mt-[0]'>
                  <div className='flex gap-[20px]'>
                    <div><img src={calendar} alt="" /></div>
                    <p className=' text-[#333333] text-[12px]'>10th March - 30th April 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className='w-[95%] m-auto'>
            <div className='bg-[white] rounded-[10px] mt-[60px]'>
              <div className='bg-[#0A223D] rounded-[8px] pt-[15px] pb-[15px]'>
                <h1 className='text-[14px] font-bold w-[90%] m-auto text-[white]'>Package Summery Details</h1>
              </div>
              <div className='w-[90%] m-auto md:flex justify-between mt-[20px] pb-[20px]'>
                <div className='mt-[30px]'>
                  <p className='text-[#EC1F46] text-[13px] font-bold'>Purchase Inclusions</p>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Room as per selection</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Half Board or All Inclusive Meal Plan</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Complimentary Land & Water activities</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Child Under 11 years old stays free</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Free Wi-Fi</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Free Secure Parking</p>
                  </div>
                </div>
                <div className='mt-[30px]'>
                  <p className='text-[#EC1F46] text-[13px] font-bold'>Purchase Inclusions</p>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Room as per selection</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Half Board or All Inclusive Meal Plan</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Complimentary Land & Water activities</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Child Under 11 years old stays free</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Free Wi-Fi</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Free Secure Parking</p>
                  </div>
                </div>
                <div className='mt-[30px]'>
                  <p className='text-[#EC1F46] text-[13px] font-bold'>Purchase Inclusions</p>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Room as per selection</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Half Board or All Inclusive Meal Plan</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Complimentary Land & Water activities</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Child Under 11 years old stays free</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Free Wi-Fi</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Free Secure Parking</p>
                  </div>
                </div>
              </div>
              <div className='w-[90%] m-auto h-[0.3vh] mt-[30px] bg-[#828282] '></div>
              <div className='w-[90%] m-auto md:flex justify-between mt-[20px] pb-[20px]'>
                <div className='mt-[30px]'>
                  <p className='text-[#EC1F46] text-[13px] font-bold'>Purchase Inclusions</p>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Room as per selection</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Half Board or All Inclusive Meal Plan</p>
                  </div>
                </div>
                <div className='mt-[30px]'>
                  <p className='text-[#EC1F46] text-[13px] font-bold'>Purchase Inclusions</p>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Room as per selection</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Half Board or All Inclusive Meal Plan</p>
                  </div>
                </div>
                <div className='mt-[30px]'>
                  <p className='text-[#EC1F46] text-[13px] font-bold'>Purchase Inclusions</p>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Room as per selection</p>
                  </div>
                  <div className='flex gap-[20px] mt-[20px]'>
                    <div><img src={truee} alt="" /></div>
                    <p className='text-[#333333] text-[12px]'>Half Board or All Inclusive Meal Plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="section_3">
        <div className="container">
          <div className='mt-[100px]'>
            <h1 className='text-[#333333] text-[36px] text-center font-bold'>Other Packages</h1>
            <div className='xl:flex justify-between mt-[40px]'>
              <div data-aos="zoom-in" data-aos-duration="3000" className='sm:hidden lg:flex xl:w-[65%]'>
                <div><img src={im2} alt="" /></div>
                <div className='bg-[#0A223D] linear w-[55%]'>
                  <div className='w-[80%] m-auto pt-[60px]'>
                    <div className='flex gap-[5px]'>
                      <div><img src={star} alt="" /></div>
                      <div><img src={star} alt="" /></div>
                      <div><img src={star} alt="" /></div>
                      <div><img src={star} alt="" /></div>
                      <div><img src={star} alt="" /></div>
                    </div>
                    <h1 className='text-[white] font-bold text-[18px]'>Hotel Blue Haven</h1>
                    <p className='text-[white] text-[14px] mt-[20px]'>Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit. Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit ea ullamco do</p>
                    <div className='flex gap-[10px] items-center mt-[30px]'>
                      <div><img src={amp} alt="" /></div>
                      <p className='text-[white] text-[14px]'>1749 Wheeler Ridge  Delaware</p>
                    </div>
                    <div className='flex gap-[10px] items-center mt-[5px]'>
                      <div><img src={amp} alt="" /></div>
                      <p className='text-[white] text-[14px]'>2 x Guests</p>
                    </div>
                    <div className='flex gap-[10px] items-center mt-[5px]'>
                      <div><img src={amp} alt="" /></div>
                      <p className='text-[white] text-[14px]'>1 x Room</p>
                    </div>
                    <h1 className='text-[#ea5f5f] text-[14px] mt-[30px]'>$ 10,500</h1>
                    <div className='flex justify-between '>
                      <h1 className='text-[30px] font-bold text-[white]'>$ 8,500</h1>
                      <button className='bg-[#EC1F46] text-[white] px-[20px] rounded-[5px] py-[10px]'>Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="3000" className='sm:mt-[50px] xl:mt-[0] sm:flex sm:justify-center'>
                <div>
                  <div><img src={im3} alt="" /></div>
                  <div className='xl:w-[100%] radius bg-[#0A223D]'>
                    <div className='w-[80%] m-auto pt-[20px] pb-[31px]'>
                      <h1 className='text-[white] font-bold text-[18px]'>LUX* Belle Mare</h1>
                      <div className='flex gap-[10px] items-center mt-[10px]'>
                        <div><img src={amp} alt="" /></div>
                        <p className='text-[white] text-[14px]'>1749 Wheeler Ridge  Delaware</p>
                      </div>
                      <div className='flex gap-[10px] items-center mt-[5px]'>
                        <div><img src={amp} alt="" /></div>
                        <p className='text-[white] text-[14px]'>2 x Guests</p>
                      </div>
                      <div className='flex gap-[10px] items-center mt-[5px]'>
                        <div><img src={amp} alt="" /></div>
                        <p className='text-[white] text-[14px]'>1 x Room</p>
                      </div>
                      <h1 className='text-[#ea5f5f] text-[14px] mt-[10px]'>$ 8,500</h1>
                      <div className='flex justify-between '>
                        <h1 className='text-[30px] font-bold text-[white]'>$ 3,000</h1>
                        <button className='bg-[#EC1F46] text-[white] px-[20px] rounded-[5px] py-[10px]'>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='xl:flex justify-between mt-[65px]'>
              <div data-aos="zoom-in" data-aos-duration="3000" className='sm:mt-[50px] xl:mt-[0] sm:flex sm:justify-center'>
                <div>

                  <div><img src={im4} alt="" /></div>
                  <div className='radius bg-[#0A223D]'>
                    <div className='w-[80%] m-auto pt-[20px] pb-[31px]'>
                      <h1 className='text-[white] font-bold text-[18px]'>LUX* Belle Mare</h1>
                      <div className='flex gap-[10px] items-center mt-[10px]'>
                        <div><img src={amp} alt="" /></div>
                        <p className='text-[white] text-[14px]'>1749 Wheeler Ridge  Delaware</p>
                      </div>
                      <div className='flex gap-[10px] items-center mt-[5px]'>
                        <div><img src={amp} alt="" /></div>
                        <p className='text-[white] text-[14px]'>2 x Guests</p>
                      </div>
                      <div className='flex gap-[10px] items-center mt-[5px]'>
                        <div><img src={amp} alt="" /></div>
                        <p className='text-[white] text-[14px]'>1 x Room</p>
                      </div>
                      <h1 className='text-[#ea5f5f] text-[14px] mt-[10px]'>$ 8,500</h1>
                      <div className='flex justify-between '>
                        <h1 className='text-[30px] font-bold text-[white]'>$ 3,000</h1>
                        <button className='bg-[#EC1F46] text-[white] px-[20px] rounded-[5px] py-[10px]'>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="3000" className='sm:mt-[50px] xl:mt-[0] sm:flex sm:justify-center'>
                <div>

                  <div><img src={im3} alt="" /></div>
                  <div className='radius bg-[#0A223D]'>
                    <div className='w-[80%] m-auto pt-[20px] pb-[31px]'>
                      <h1 className='text-[white] font-bold text-[18px]'>LUX* Belle Mare</h1>
                      <div className='flex gap-[10px] items-center mt-[10px]'>
                        <div><img src={amp} alt="" /></div>
                        <p className='text-[white] text-[14px]'>1749 Wheeler Ridge  Delaware</p>
                      </div>
                      <div className='flex gap-[10px] items-center mt-[5px]'>
                        <div><img src={amp} alt="" /></div>
                        <p className='text-[white] text-[14px]'>2 x Guests</p>
                      </div>
                      <div className='flex gap-[10px] items-center mt-[5px]'>
                        <div><img src={amp} alt="" /></div>
                        <p className='text-[white] text-[14px]'>1 x Room</p>
                      </div>
                      <h1 className='text-[#ea5f5f] text-[14px] mt-[10px]'>$ 8,500</h1>
                      <div className='flex justify-between '>
                        <h1 className='text-[30px] font-bold text-[white]'>$ 3,000</h1>
                        <button className='bg-[#EC1F46] text-[white] px-[20px] rounded-[5px] py-[10px]'>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="3000" className='sm:mt-[50px] xl:mt-[0] sm:flex sm:justify-center'>
                <div>

                  <div><img src={im5} alt="" /></div>
                  <div className='radius bg-[#0A223D]'>
                    <div className='w-[80%] m-auto pt-[20px] pb-[31px]'>
                      <h1 className='text-[white] font-bold text-[18px]'>LUX* Belle Mare</h1>
                      <div className='flex gap-[10px] items-center mt-[10px]'>
                        <div><img src={amp} alt="" /></div>
                        <p className='text-[white] text-[14px]'>1749 Wheeler Ridge  Delaware</p>
                      </div>
                      <div className='flex gap-[10px] items-center mt-[5px]'>
                        <div><img src={amp} alt="" /></div>
                        <p className='text-[white] text-[14px]'>2 x Guests</p>
                      </div>
                      <div className='flex gap-[10px] items-center mt-[5px]'>
                        <div><img src={amp} alt="" /></div>
                        <p className='text-[white] text-[14px]'>1 x Room</p>
                      </div>
                      <h1 className='text-[#ea5f5f] text-[14px] mt-[10px]'>$ 8,500</h1>
                      <div className='flex justify-between '>
                        <h1 className='text-[30px] font-bold text-[white]'>$ 3,000</h1>
                        <button className='bg-[#EC1F46] text-[white] px-[20px] rounded-[5px] py-[10px]'>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="section_4">
        <div className="container">
          <div className='mt-[60px]'>
            <h1 className='text-[#333333] text-center font-bold text-[36px]'>What people thinks about us</h1>
            <div data-aos="zoom-out-down" data-aos-duration="3000" className='md:w-[90%] m-auto mt-[30px]'>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><div className='bg rounded-[20px] md:w-[60%] m-auto'>
                  <div className='flex justify-center pt-[20px]'>
                    <img src={woman} alt="" />
                  </div>
                  <p className='text-center text-[#EC1F46] text-[12px] font-bold'>Megan Fox</p>
                  <p className='text-center text-[black] text-[12px]'>Stayed 18 Nov, 2019</p>
                  <div className='flex justify-center gap-[10px] mt-[5px]'>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                  </div>
                  <div className='w-[80%] m-auto mt-[20px]'>
                    <p className='text-[#333333] text-[12px] pb-[20px]'>It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg rounded-[20px] md:w-[60%] m-auto'>
                  <div className='flex justify-center pt-[20px]'>
                    <img src={woman} alt="" />
                  </div>
                  <p className='text-center text-[#EC1F46] text-[12px] font-bold'>Megan Fox</p>
                  <p className='text-center text-[black] text-[12px]'>Stayed 18 Nov, 2019</p>
                  <div className='flex justify-center gap-[10px] mt-[5px]'>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                  </div>
                  <div className='w-[80%] m-auto mt-[20px]'>
                    <p className='text-[#333333] text-[12px] pb-[20px]'>It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg rounded-[20px] md:w-[60%] m-auto'>
                  <div className='flex justify-center pt-[20px]'>
                    <img src={woman} alt="" />
                  </div>
                  <p className='text-center text-[#EC1F46] text-[12px] font-bold'>Megan Fox</p>
                  <p className='text-center text-[black] text-[12px]'>Stayed 18 Nov, 2019</p>
                  <div className='flex justify-center gap-[10px] mt-[5px]'>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                  </div>
                  <div className='w-[80%] m-auto mt-[20px]'>
                    <p className='text-[#333333] text-[12px] pb-[20px]'>It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg rounded-[20px] md:w-[60%] m-auto'>
                  <div className='flex justify-center pt-[20px]'>
                    <img src={woman} alt="" />
                  </div>
                  <p className='text-center text-[#EC1F46] text-[12px] font-bold'>Megan Fox</p>
                  <p className='text-center text-[black] text-[12px]'>Stayed 18 Nov, 2019</p>
                  <div className='flex justify-center gap-[10px] mt-[5px]'>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                  </div>
                  <div className='w-[80%] m-auto mt-[20px]'>
                    <p className='text-[#333333] text-[12px] pb-[20px]'>It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg rounded-[20px] md:w-[60%] m-auto'>
                  <div className='flex justify-center pt-[20px]'>
                    <img src={woman} alt="" />
                  </div>
                  <p className='text-center text-[#EC1F46] text-[12px] font-bold'>Megan Fox</p>
                  <p className='text-center text-[black] text-[12px]'>Stayed 18 Nov, 2019</p>
                  <div className='flex justify-center gap-[10px] mt-[5px]'>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                  </div>
                  <div className='w-[80%] m-auto mt-[20px]'>
                    <p className='text-[#333333] text-[12px] pb-[20px]'>It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg rounded-[20px] md:w-[60%] m-auto'>
                  <div className='flex justify-center pt-[20px]'>
                    <img src={woman} alt="" />
                  </div>
                  <p className='text-center text-[#EC1F46] text-[12px] font-bold'>Megan Fox</p>
                  <p className='text-center text-[black] text-[12px]'>Stayed 18 Nov, 2019</p>
                  <div className='flex justify-center gap-[10px] mt-[5px]'>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                  </div>
                  <div className='w-[80%] m-auto mt-[20px]'>
                    <p className='text-[#333333] text-[12px] pb-[20px]'>It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg rounded-[20px] md:w-[60%] m-auto'>
                  <div className='flex justify-center pt-[20px]'>
                    <img src={woman} alt="" />
                  </div>
                  <p className='text-center text-[#EC1F46] text-[12px] font-bold'>Megan Fox</p>
                  <p className='text-center text-[black] text-[12px]'>Stayed 18 Nov, 2019</p>
                  <div className='flex justify-center gap-[10px] mt-[5px]'>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                  </div>
                  <div className='w-[80%] m-auto mt-[20px]'>
                    <p className='text-[#333333] text-[12px] pb-[20px]'>It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg rounded-[20px] md:w-[60%] m-auto'>
                  <div className='flex justify-center pt-[20px]'>
                    <img src={woman} alt="" />
                  </div>
                  <p className='text-center text-[#EC1F46] text-[12px] font-bold'>Megan Fox</p>
                  <p className='text-center text-[black] text-[12px]'>Stayed 18 Nov, 2019</p>
                  <div className='flex justify-center gap-[10px] mt-[5px]'>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                  </div>
                  <div className='w-[80%] m-auto mt-[20px]'>
                    <p className='text-[#333333] text-[12px] pb-[20px]'>It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. </p>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg rounded-[20px] md:w-[60%] m-auto'>
                  <div className='flex justify-center pt-[20px]'>
                    <img src={woman} alt="" />
                  </div>
                  <p className='text-center text-[#EC1F46] text-[12px] font-bold'>Megan Fox</p>
                  <p className='text-center text-[black] text-[12px]'>Stayed 18 Nov, 2019</p>
                  <div className='flex justify-center gap-[10px] mt-[5px]'>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                    <div><img src={star} alt="" /></div>
                  </div>
                  <div className='w-[80%] m-auto mt-[20px]'>
                    <p className='text-[#333333] text-[12px] pb-[20px]'>It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. </p>
                  </div>
                </div></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>


      <div className="section_5 bbg">
        <div className='rgba'>
          <div className="container">
            <div className='lg:flex justify-between items-center lg:w-[70%] m-auto pt-[60px] pb-[60px] mt-[70px]'>
              <div className='lg:w-[20%]'>
                <h1 className='text-[white] text-[20px]'>subscribe to our</h1>
                <h1 className='text-[white] text-[50px]'>Newsletter</h1>
              </div>
              <div className='lg:w-[50%]'>
                <div className='flex'>
                  <input type="text" placeholder='Your email address' className='w-[60%] pl-[20px]' />
                  <div className='bg-[#EC1F46] px-[30px] py-[10px] text-white'>Send</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="section_6">
      {
          modal ? <div className='modal'>
            <div className='modal-content pt-[20px] pb-[20px]'>
              <div className='flex justify-between w-[90%]  m-auto'>
              <form onSubmit={(event) => editUser(event)}>
                <input name='img' value={image2} onChange={(event) => setImage2(event.target.value)} className='border-2 border-[black] ml-[20px]' type="text" />
                <input name='name' value={text2} onChange={(event) => setText2(event.target.value)} className='border-2 border-[black] ml-[20px]' type="text" />
                <button className='bg-[green] text-[white] ml-[40px] px-[40px] py-[7px] rounded-[7px'>Edit</button>
              </form>
              <div><h1 onClick={() => setModal(false)} className='cursor-pointer font-bold'>X  </h1></div>
              </div>
            </div>
          </div>
            :
            null
        }
        <div className="container">
          <div className='mt-[60px]'>
            <h1 className='text-[24px] font-bold'>Other Activities</h1>
            <div className='md:flex justify-center gap-[20px]'>
              <input value={image} onChange={(event) => setImage(event.target.value)} className='pl-[20px] md:w-[30%] sm:w-[80%] sm:m-auto sm:mt-[20px]' placeholder='image' type="text" />
              <input value={text} onChange={(event) => setText(event.target.value)} className='pl-[20px]   md:w-[30%] sm:w-[80%] sm:m-auto sm:mt-[20px]' placeholder='title' type="text" />
            </div>
            <div className='flex justify-center mt-[20px]'>
              <button onClick={() => addUser()} className='bg-[purple] text-[white] px-[60px]'>Add</button>
            </div>
            <div className='flex flex-wrap gap-[50px] justify-around  mt-[90px]'>
              {
                todos.map((elem) => {
                  return <div key={elem.id} className='relative  w-[250px]'>
                    <div><img src={elem.avatar} alt="" /></div>
                    <div className=' nd bg-[#0a223da8] absolute bottom-0'>
                      <div className='w-[80%] m-auto'>
                        <h1 className='text-[white] font-bold text-[16px]'>{elem.title}</h1>
                        <div className='flex justify-between mt-[10px] pb-[15px] '>
                          <button onClick={() => deleteUser(elem.id)} className='bg-[#EC1F46] py-[5px] rounded-[5px] text-[white] px-[15px]'>Delete</button>
                          <button onClick={() => handlModal(elem)} className='bg-[purple]  py-[5px] rounded-[5px] text-[white] px-[30px]'>Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>


      <div className="section_7">
        <div className='bg-[#0A223D] mt-[100px]'>
          <div className="container">
            <footer>
              <div className='flex flex-wrap gap-[20px] justify-between pt-[50px]'>
                <div>
                  <img src={footerlogo} alt="" />
                </div>
                <div>
                  <ul className='text-[#a8a8a8] text-[16px]'>
                    <li className='font-bold text-[24px] text-white'>ALL CATEGORIES</li>
                    <li className='mt-[10px]'>All Deals</li>
                    <li className='mt-[10px]'>Hotells</li>
                    <li className='mt-[10px]'>Activities</li>
                    <li className='mt-[10px]'>Spa Packages</li>
                    <li className='mt-[10px]'>Hotel Day Packages</li>
                    <li className='mt-[10px]'>Restaurants</li>
                    <li className='mt-[10px]'>Fitness</li>
                    <li className='mt-[10px]'>Rodrigues</li>
                  </ul>
                </div>
                <div>
                  <ul className='text-[#a8a8a8] text-[16px]'>
                    <li className='font-bold text-[24px] text-white'>ALL CATEGORIES</li>
                    <li className='mt-[10px]' >All Deals</li>
                    <li className='mt-[10px]' >Hotells</li>
                    <li className='mt-[10px]' >Activities</li>
                    <li className='mt-[10px]' >Spa Packages</li>
                    <li className='mt-[10px]' >Hotel Day Packages</li>
                    <li className='mt-[10px]' >Restaurants</li>
                  </ul>
                  <div className='flex items-center mt-[20px]'>
                    <h1 className='text-[white] text-[24px] font-bold'>Social Network</h1>
                    <div className='pl-[10px]'><img src={face} alt="" /></div>
                    <div><img src={face} alt="" /></div>
                    <div><img src={face} alt="" /></div>
                  </div>
                </div>
                <div>
                  <ul className='text-[#a8a8a8] text-[16px]'>
                    <li className='font-bold text-[24px] text-white'>ALL CATEGORIES</li>
                    <li className='mt-[10px]'>All Deals</li>
                    <li className='mt-[10px]'>Hotells</li>
                    <li className='mt-[10px]'>Activities</li>
                    <li className='mt-[10px]'>Spa Packages</li>
                    <li className='mt-[10px]'>Hotel Day Packages</li>
                  </ul>
                </div>
              </div>
              <div className='mt-[70px] lg:flex justify-between'>
                <div>
                  <h1 className='text-[24px] text-white font-bold'>CONTACT</h1>
                  <p className='text-[#a8a8a8] text-[16px] mt-[20px]'>Feel free to contact us by phone,email or by  our contact form</p>
                  <div className='mt-[30px]'>
                    <div className='flex items-center gap-[10px]'>
                      <div><img src={amp} alt="" /></div>
                      <p className='text-[#a8a8a8] text-[16px]'>9748 Blossom Hill Rd undefined Lansing , Idaho 68545 United States</p>
                    </div>
                  </div>
                  <div className='mt-[10px]'>
                    <div className='flex items-center gap-[10px]'>
                      <div><img src={amp} alt="" /></div>
                      <p className='text-[#a8a8a8] text-[16px]'>9748 Blossom Hill Rd undefined Lansing , Idaho 68545 United States</p>
                    </div>
                  </div>
                  <div className='mt-[10px]'>
                    <div className='flex items-center gap-[10px]'>
                      <div><img src={amp} alt="" /></div>
                      <p className='text-[#a8a8a8] text-[16px]'>9748 Blossom Hill Rd undefined Lansing , Idaho 68545 United States</p>
                    </div>
                  </div>
                </div>
                <div className='md:w-[50%]'>
                  <h1 className='text-[24px] text-white font-bold'>Send us a message</h1>
                  <div className='flex justify-between mt-[20px]'>
                    <input className='bg-[white] py-[15px] rounded-[10px] pl-[20px] w-[47%]' type="text" placeholder='Your Full Name*' />
                    <input className='bg-[white] py-[15px] rounded-[10px] pl-[20px] w-[47%]' type="text" placeholder='Phone Number*' />
                  </div>
                  <div>
                    <textarea className='rounded-[10px] mt-[30px] pl-[20px] pt-[20px] w-[100%]' placeholder='Message'></textarea>
                    <div className='flex justify-between items-center'>
                      <button className='bg-[#EC1F46] text-[white] px-[50px] rounded-[5px] py-[10px] mt-[10px] mb-[10px]'>Send</button>
                      <h1 className='text-[#E0E0E0] text-[16px]'>* Required Fields</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:flex justify-end mt-[50px] pb-[10px]'>
                <div className='lg:flex justify-between w-[60%]'>
                  <h1 className='text-[white] text-[12px]'>Disclaimer    Conditions of use    Cancellation policy</h1>
                  <img src={ggg} alt="" />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App