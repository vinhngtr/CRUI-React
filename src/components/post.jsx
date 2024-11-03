import "./post.css";
import PropTypes from "prop-types";
import { useState } from "react";
import EditPost from "./EditPost";

export default function Post({ post, onDelete, onEdit }) {
  const [editShow, setEditShow] = useState(false);
  const handleDelete = () => {
    onDelete(post.ID);
    console.log(post.ID);
  };

  const handleEdit = () => {
    setEditShow(!editShow);
  };
  const setFormEdit = (bool) => {
    setEditShow(bool);
  };

  let content = (
    <>
      <h2 className="author">{post.author}</h2>
      <hr />
      <p key={post.highlight} className={`text text-${post.ID}`}>
        {post.highlight}
      </p>
    </>
  );
  if (editShow) {
    content = (
      <EditPost post={post} onEdit={onEdit} isCloseForm={setFormEdit} />
    );
  } else {
    content = (
      <>
        <h2 className="author">{post.author}</h2>
        <hr />
        <p key={post.highlight} className={`text text-${post.ID}`}>
          {post.highlight}
        </p>
        <div className="action">
          <button className="btn-edit" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn-del" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </>
    );
  }
  return <div className="cpPost">{content}</div>;
}

// ! importan in VITE - REACT JS
Post.propTypes = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
