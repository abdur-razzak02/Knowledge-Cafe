import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks,readingTime }) => {
    
    return (
        <div className="sm:w-1/3 mb-5">
            <div className="bg-purple-200 rounded-lg mb-3 border-2 border-purple-500">
                <h1 className="px-5 py-3 rounded-lg font-semibold">Reading Time: { readingTime}</h1>
            </div>
            <div className="bg-slate-200 p-5 rounded-lg">
                <h1 className="mb-2 text-xl font-semibold">Bookmarked Blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;