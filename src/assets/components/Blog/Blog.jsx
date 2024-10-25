import PropTypes from 'prop-types';

const Blog = ({ blog,handleBookmark,handleMarkAsRead }) => {
    const {id, cover_photo, author_name, author_image, post_date, reading_time, title, related_tag } = blog;
   
    return (
        <div className='mb-7 space-y-2'>
            <img src={cover_photo} alt='banner' className="w-full lg:h-[400px] mb-2 rounded-lg" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <img src={author_image} alt='authorImage' className='w-12 h-12 rounded-full'/>
                    <div>
                    <h1 className='font-semibold text-xl'>{author_name}</h1>
                    <h2 className='text-gray-500'>{post_date}</h2>
                    </div>
                </div>
                <p className='flex gap-2 text-gray-500 font-medium items-center'>{reading_time} minute read <button onClick={() => handleBookmark(blog)}><img src={`https://cdn-icons-png.flaticon.com/128/9511/9511721.png`} alt='saveIcon' className='w-5 h-5' /></button></p>
            </div>
            <h3 className='font-bold text-4xl'>Title: {title}</h3>
            <p className='mb-3 text-gray-500 font-light'>{related_tag}</p>
            <button onClick={()=>handleMarkAsRead(id, reading_time)} className='underline text-blue-700'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;