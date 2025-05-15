import { useEffect, useState } from 'react';
import ReviewCard from '../../Components/Reviews/ReviewCard';

const AllReview = () => {
    const [reviews, setReview] = useState(null)
    const banner = 'https://i.ibb.co/6md9kxH/2111-w015-n001-617-B-p15-617.jpg'

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='lg:max-w-7xl lg:mx-auto'>
            <div className="relative z-0 flex flex-col justify-center items-center">
                <div className="hero-overlay bg-black opacity-40 absolute h-full rounded-lg z-5"></div>
                <img src={banner} className="w-full rounded-lg" alt="" />
                <h1 className="absolute  z-10 text-rose-200 text-center font-special font-bold text-6xl">Reviews </h1>
            </div>

            <div className='flex justify-center '>
                <div className='mt-6 lg:mt-12 md:mt-8'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            reviews?.map((review) => <ReviewCard key={review.review_id} review={review}></ReviewCard>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllReview;