import "./newPost.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import PropTypes from "prop-types";

export default function NewPost({ submitPost, isCloseForm }) {
  const [author, setAuthor] = useState("");
  const [highlight, setHigh] = useState("");
  const handlerAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handlerHigh = (event) => {
    setHigh(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(event);
    const newID = uuidv4().substring(0, 4);
    const newPost = {
      ID: newID,
      author: author,
      highlight: highlight,
    };
    submitPost(newPost);
    setAuthor("");
    setHigh("");
    isCloseForm(false);
  };
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("overlay")) {
      // console.log(event.target);
      isCloseForm(false);
    }
  };
  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <form onSubmit={handleSubmit} action="" className="newPost">
        <p>
          <label htmlFor="valAuthor">Name Course:</label>
          <input
            value={author}
            onChange={handlerAuthor}
            type="text"
            id="valAuthor"
            required
            placeholder="Name author"
          />
        </p>
        <p>
          <label htmlFor="valHigh">Highlight:</label>
          <textarea
            value={highlight}
            onChange={handlerHigh}
            id="valHigh"
            required
            rows={3}
            placeholder="Highlight of course"
          ></textarea>
        </p>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
NewPost.propTypes = {
  submitPost: PropTypes.func.isRequired,
  isCloseForm: PropTypes.func.isRequired,
  // show: PropTypes.bool.isRequired,
};
