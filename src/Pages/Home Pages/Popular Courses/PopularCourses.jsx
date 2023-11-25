import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Tooltip } from 'react-tooltip';

const PopularCourses = () => {
    return (
        <div className='mt-32 px-[8%]'>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-12"
                autoplay

            >
                <SwiperSlide className='pb-12'>
                    <Card className="mt-6 w-96 relative">
                        <CardHeader color="blue-gray" className="relative h-56">
                            <img
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                alt="card-image"
                            />

                        </CardHeader>
                        <Typography variant="h5" color="blue-gray" className="absolute top-[9.5rem] bg-white px-4 py-1 rounded-lg left-8">
                                200
                            </Typography>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                UI/UX Review Check
                            </Typography>
                            <Typography>
                                Instructor: Nahid Alam
                            </Typography>
                            <Typography className='h-[3rem] overflow-hidden cursor-pointer'>
                                <a id="my-anchor-element">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero enim eveniet inventore nemo perspiciatis ipsa, possimus labore minima sed maiores.</a>
                                <Tooltip
                                    anchorSelect="#my-anchor-element"
                                    content="Hello world!"
                                />
                            </Typography>

                        </CardBody>

                        <div className='flex justify-between items-center'>
                            <CardFooter className="pt-0 text-xl font-semibold">
                                $400
                            </CardFooter>
                            <CardFooter className="pt-0">
                                <Button>Read More</Button>
                            </CardFooter>
                        </div>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/order/soup"><div className='swiper2 h-[22.3rem] flex justify-center items-end pb-3'>
                        <h1 className='text-black md:text-[2rem] font-bold cin'>Soups</h1>
                    </div></Link>
                </SwiperSlide>


                <SwiperSlide>
                    <Link to="/order/pizza"><div className='swiper3 h-[22.3rem] flex justify-center items-end pb-3'>
                        <h1 className='text-black md:text-[2rem] font-bold cin'>pizzas</h1>
                    </div></Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/order/dessert">
                        <div className='swiper4 h-[22.3rem] flex justify-center items-end pb-3'>
                            <h1 className='text-black md:text-[2rem] font-bold cin'>desserts</h1>
                        </div></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/order/salad"><div className='swiper5 h-[22.3rem] flex justify-center items-end pb-3'>
                        <h1 className='text-black md:text-[2rem] font-bold cin'>Salads</h1>
                    </div></Link>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default PopularCourses;