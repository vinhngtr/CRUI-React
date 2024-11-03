import { useState, useEffect } from "react";
import Header from "./components/header.jsx";
import PostList from "./components/listPost.jsx";
import NewPost from "./components/NewPost.jsx";
function App() {
  const [ListPost, setListPost] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  });

  const [flagAdd, isAdd] = useState(false);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(ListPost));
  }, [ListPost]);

  const deletePost = (id) => {
    const updateList = ListPost.filter((item) => {
      return item.ID !== id;
    });
    setListPost(updateList);
  };
  const editPost = (id, author, highlight) => {
    const updateList = ListPost.map((curr) => {
      if (curr.ID === id) {
        return {
          ...curr,
          author: author,
          highlight: highlight,
        };
      } else {
        return curr;
      }
    });
    setListPost(updateList);
  };
  const newPost = (obj) => {
    setListPost([...ListPost, obj]);
  };
  const setFormAdd = (bool) => {
    isAdd(bool);
  };
  const emptyCourse = (
    <p style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
      Không có khóa học nào tồn tại !!!
    </p>
  );
  return (
    <>
      <div className="container">
        <Header showFormAdd={setFormAdd} />
        {ListPost.length === 0 ? (
          emptyCourse
        ) : (
          <PostList
            ListPost={ListPost}
            onDelete={deletePost}
            onEdit={editPost}
          />
        )}
      </div>
      {flagAdd && <NewPost submitPost={newPost} isCloseForm={setFormAdd} />}
    </>
  );
}

export default App;
