import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState("");

  let content;
  if (view === "books") {
    content = <BookDetails />;
  } else if (view === "blogs") {
    content = <BlogDetails />;
  } else if (view === "courses") {
    content = <CourseDetails />;
  }

  return (
    <div className="App">
      <h1>Blogger App</h1>
      <div className="buttons">
        <button onClick={() => setView("books")}>Show Book Details</button>
        <button onClick={() => setView("blogs")}>Show Blog Details</button>
        <button onClick={() => setView("courses")}>Show Course Details</button>
        <button onClick={() => setView("")}>Hide All</button>
      </div>
      <div className="content">
        {view && content}
      </div>
    </div>
  );
}

export default App;
