import React from 'react';
import user1 from "../../../assets/images/ceser.jpg";
import user2 from "../../../assets/images/christian.jpg";
import user3 from "../../../assets/images/julian.jpg";
import "./Testimonials.css";

const Testimonials = () => {
    return (
        <div className='py-8 testimonial'>
            <h3 className='text-4xl font-bold text-slate-800 text-center'>Reviews</h3>
            <p className='text-2xl text-gray-800 text-center pb-4 pt-3'>Here's what some of our users think about us!</p>
            <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full text-center">
                        <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                            "It was a mess managing inventories before <span className='font-semibold'>Stockpile</span>. It organized my works by a lot which speed up the work and saved my time"
                        </p>
                        <div className="mt-12 mb-6 flex justify-center">
                            <img
                                src={user1}
                                className='rounded-full w-24 h-24 shadow-lg'
                                alt=""
                            />
                        </div>
                        <p className="text-gray-500">- John Doe</p>
                    </div>
                    <div className="carousel-item relative float-left w-full text-center">
                        <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                            "If you are working in inventory or warehouse management, you need <span className='font-semibold'>Stockpile</span> in your life. Trust me! It will free you from a lot of hassel."
                        </p>
                        <div className="mt-12 mb-6 flex justify-center">
                            <img
                                src={user2}
                                className='rounded-full w-24 h-24 shadow-lg'
                                alt=""
                            />
                        </div>
                        <p className="text-gray-500">- Christian Joe</p>
                    </div>
                    <div className="carousel-item relative float-left w-full text-center">
                        <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                            "The functionality and secuirty of user data really proves their ability and makes them one of the leaders in the industry. Keep it Up!"
                        </p>
                        <div className="mt-12 mb-6 flex justify-center">
                            <img
                                src={user3}
                                className="rounded-full w-24 h-24 shadow-lg"
                                alt=""
                            />
                        </div>
                        <p className="text-gray-500">- Julian Ron</p>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Testimonials;