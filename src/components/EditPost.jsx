import { useState } from "react";
import PropTypes from "prop-types";
export default function EditPost({ post, onEdit, isCloseForm }) {
  const [author, setAuthor] = useState(post.author);
  const [highlight, setHighlight] = useState(post.highlight);
  const updateAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const updateHighlight = (event) => {
    setHighlight(event.target.value);
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    onEdit(post.ID, author, highlight);
    isCloseForm(false);
  };
  return (
    <>
      <form className="form-edit" onSubmit={handleUpdate}>
        <div>
          <label htmlFor="ip-title">Nhập tên tác giả mới</label>
          <input
            className="input-user"
            id="ip-title"
            type="text"
            onChange={updateAuthor}
            value={author}
          />
        </div>
        <div>
          <label htmlFor="ip-url">Nhập highlight nội dung mới</label>
          <input
            className="input-user"
            id="ip-url"
            type="text"
            onChange={updateHighlight}
            value={highlight}
          />
        </div>
        <button>Cập nhật</button>
      </form>
    </>
  );
}
EditPost.propTypes = {
  post: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  isCloseForm: PropTypes.func.isRequired,
};
