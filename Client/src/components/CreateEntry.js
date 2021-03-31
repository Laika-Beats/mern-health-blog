import { useState } from "react";

const CreatEntry = () => {
  const [blogEntry, setBlogEntry] = useState("");
  const [blogEntries, setBlogEntries] = useState([]);

  const inputText = (e) => {
    setBlogEntry(e.target.value);
    console.log(blogEntry);
  };

  const blogEntryHandler = (e) => {
    e.preventDefault();
    setBlogEntries([...blogEntries, blogEntry]);
  };

  return (
    <form onSubmit={blogEntryHandler}>
      <textarea onChange={inputText}></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreatEntry;
