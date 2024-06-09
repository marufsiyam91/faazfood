import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

const Blog = () => {

    const blogs = [
        {
            'title': 'FROM DRIVE-THRUS TO DELIGHTS: FAST FOOD STORIES',
            'description': 'Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum dui...',
            'type': 'BUSINESS',
            'date': 'OCTOBER 19, 2023',
            'image': 'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_12-1000x720.jpg'
        },
        {
            'title': 'ON-THE-GO GOODNESS: FAST FOOD FEASTS',
            'description': 'Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum dui...',
            'type': 'CREATIVITY',
            'date': 'OCTOBER 19, 2023',
            'image': 'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_7-1000x720.jpg'
        },
        {
            'title': 'FLAVORS IN A FLASH: EXPLORING FAST FOOD',
            'description': 'Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum dui...',
            'type': 'LIFE LESSONS',
            'date': 'OCTOBER 19, 2023',
            'image': 'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_6-1000x720.jpg'
        },
        {
            'title': 'FAST FOOD ADVENTURES: A CULINARY RUSH',
            'description': 'Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum dui...',
            'type': 'STARTUP',
            'date': 'OCTOBER 19, 2023',
            'image': 'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_5-1000x720.jpg'
        },
        {
            'title': 'BITE-SIZED BLISS: THE WORLD OF FAST FOOD',
            'description': 'Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum dui...',
            'type': 'BUSINESS',
            'date': 'OCTOBER 19, 2023',
            'image': 'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_12-1000x720.jpg'
        },
        {
            'title': 'FAST FOOD FRENZY: A TASTE OF CONVENIENCE',
            'description': 'Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum dui...',
            'type': 'STARTUP',
            'date': 'OCTOBER 19, 2023',
            'image': 'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_10-1000x720.jpg'
        },
        {
            'title': 'SAVORING SPEED: FAST FOOD FAVORITES',
            'description': 'Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum dui...',
            'type': 'LIFE LESSONS',
            'date': 'OCTOBER 19, 2023',
            'image': 'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_9-1000x720.jpg'
        },
    ]

    return(
        <div className='py-20 PX-6'>
            <p className='text-center text-red-600 text-lg text-medium mb-4'>WHAT'S UP BLOG</p>
            <h3 className='text-center text-gray-700 text-6xl font-bold mb-12'>FAZZFOOD & SAUCE NEWS</h3>
            <Swiper
                    breakpoints={{
                        220:{
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        1280: {
                          slidesPerView: 4,
                          spaceBetween: 40,
                        },
                      }}
            modules={[ Autoplay]}
            spaceBetween={40}   
            slidesPerView={4}
            autoplay
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>
                {
                    blogs.map(blog => (
                        <SwiperSlide key={blog.image}>
                            <div className='w-full h-auto rounded-3xl overflow-hidden'>
                                <img src={blog.image} alt="" />
                            </div>
                            <div className='flex gap-4 py-2 mt-2'>
                                <p className='text-sm font-medium text-red-700'>{blog.type}</p>
                                <p className='text-sm font-medium text-slate-400'>{blog.date}</p>
                            </div>
                            <h2 className='text-3xl font-semibold mb-4'>{blog.title}</h2>
                            <p className=''>{blog.description}</p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Blog