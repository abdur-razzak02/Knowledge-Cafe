import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data=>setBlogs(data))
    }, [])
    
    return (
        <div>
            <h2 className="mb-2">Total Blog: { blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;