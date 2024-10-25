import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    return (
        <div className="bg-gray-300 rounded-lg p-3 text-2xl mb-3">
            <h1>{ bookmark.title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;