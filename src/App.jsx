import { useState } from "react";
import "./App.css";
import Blogs from "./assets/components/Blogs/Blogs";
import Bookmarks from "./assets/components/Bookmarks/Bookmarks";
import Header from "./assets/components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  };

  const handleMarkAsRead = time => {
    setReadingTime(readingTime + time)
  }

  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <main className="px-3 lg:px-0 sm:flex sm:gap-5">
          <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </main>
      </div>
    </>
  );
}

export default App;
