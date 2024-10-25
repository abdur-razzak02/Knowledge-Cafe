import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmark,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data=>setBlogs(data))
    }, [])
    
    return (
        <div className="sm:w-full">
            <h2 className="mb-8 text-2xl font-semibold">Total Blog: { blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;