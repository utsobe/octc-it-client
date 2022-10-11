import React from 'react';
import course1 from '../../assets/course-images/graphic-img.jpg';


const courses = [
    {
        title: 'Microsoft Office',
        image: course1,
        shortDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nesciunt provident',
        price: 7000
    },
    {
        title: 'Graphic Design',
        image: course1,
        shortDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nesciunt provident',
        price: 7000
    },
    {
        title: 'Digital Marketing',
        image: course1,
        shortDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nesciunt provident',
        price: 7000
    },
]

const CoursesSection = () => {
    return (
        <div className='lg:max-w-7xl mx-auto lg:px-12 mt-28'>
            {/* section-title */}
            <div className='text-center font-light'>
                <h1 className='text-4xl font-semibold mb-3'>Popular Courses</h1>
                <p className='px-3 lg:px-72'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nesciunt provident magnam distinctio similique modi amet consectetur adipisicing elit. A nesciunt provident</p>
            </div>
            <div className='grid grid-cols-3 gap-10 mt-12'>
                <div className='border rounded-md'>
                    <div>
                        <img src={course1} className='rounded-t-md' alt="" />
                    </div>
                    <div className='p-4'>
                        <h2 className='text-2xl font-semibold'>Graphic Design</h2>
                        <p className='font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, numquam.</p>
                        <p>Course fee: 7000$</p>
                        <div className='mt-4 flex justify-end'>
                            <button className='mr-4 text-sm text-primary font-semibold border border-primary rounded-md px-5 py-3 hover:bg-primary hover:text-base-100 duration-200'>Show More</button>
                            <button className='text-sm text-base-100 font-medium bg-primary py-3 px-5 border border-primary rounded-md hover:bg-secondary hover:border-secondary duration-200'>Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img src={course1} alt="" />
                    </div>
                    <div>
                        <h2>Graphic Design</h2>
                        <p>Course fee: 7000$</p>
                        <div>
                            <button>Show More</button>
                            <button>Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <img src={course1} alt="" />
                    </div>
                    <div>
                        <h2>Graphic Design</h2>
                        <p>Course fee: 7000$</p>
                        <div>
                            <button>Show More</button>
                            <button>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesSection;