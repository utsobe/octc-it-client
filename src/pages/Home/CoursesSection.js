import React from 'react';
import MsOffice from '../../assets/course-images/ms-img.jpg';
import Graphic from '../../assets/course-images/graphic-img.jpg';
import Digital from '../../assets/course-images/digital-img.jpg';


const courses = [
    {
        title: 'Microsoft Office',
        image: MsOffice,
        shortDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nesciunt provident',
        price: 7000
    },
    {
        title: 'Graphic Design',
        image: Graphic,
        shortDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nesciunt provident',
        price: 7000
    },
    {
        title: 'Digital Marketing',
        image: Digital,
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
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12'>
                {
                    courses.map(data =>
                        <div className='border rounded-md'>
                            <div>
                                <img src={data.image} className='rounded-t-md' alt="" />
                            </div>
                            <div className='p-4'>
                                <h2 className='text-2xl font-semibold'>{data.title}</h2>
                                <p className='font-light my-3'>{data.shortDescription}.</p>
                                <p className='font-semibold'>Course fee {data.price}&#2547;</p>
                                <div className='mt-4 flex '>
                                    <button className='mr-4 text-sm text-primary font-semibold border border-primary rounded-md px-5 py-3 hover:bg-primary hover:text-base-100 duration-200'>Overview</button>
                                    <button className='text-sm text-base-100 font-medium bg-primary py-3 px-5 border border-primary rounded-md hover:bg-secondary hover:border-secondary duration-200'>Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CoursesSection;