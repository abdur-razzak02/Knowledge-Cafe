import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const {id,cover_photo,author_name,author_image,post_date,reading_time,title,related_tag} = blog
    return (
        <div>
            <img src={ cover_photo} className="w-52"/>
            <h3>Title: {title}</h3>
            <p>{ related_tag}</p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;