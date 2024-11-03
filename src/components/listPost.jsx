import Post from "./post.jsx";
import "./listpost.css";
import PropTypes from "prop-types";
// const dataReal = [
//   {
//     author: "NGUYEN TRONG VINH",
//     text: "Cộng hòa xã hội chủ nghĩa Việt Nam - Độc lập tự do hạnh phúc",
//   },
//   {
//     author: "NGUYEN TRONG VINH",
//     text: "Cộng hòa xã hội chủ nghĩa Việt Nam - Độc lập tự do hạnh phúc",
//   },
//   {
//     author: "NGUYEN TRONG VINH",
//     text: "Cộng hòa xã hội chủ nghĩa Việt Nam - Độc lập tự do hạnh phúc",
//   },
//   {
//     author: "NGUYEN TRONG VINH",
//     text: "Cộng hòa xã hội chủ nghĩa Việt Nam - Độc lập tự do hạnh phúc",
//   },
//   {
//     author: "NGUYEN TRONG VINH",
//     text: "Cộng hòa xã hội chủ nghĩa Việt Nam - Độc lập tự do hạnh phúc",
//   },
//   {
//     author: "NGUYEN TRONG VINH",
//     text: "Cộng hòa xã hội chủ nghĩa Việt Nam - Độc lập tự do hạnh phúc",
//   },
//   {
//     author: "NGUYEN TRONG VINH",
//     text: "Cộng hòa xã hội chủ nghĩa Việt Nam - Độc lập tự do hạnh phúc",
//   },
//   {
//     author: "NGUYEN TRONG VINH",
//     text: "Cộng hòa xã hội chủ nghĩa Việt Nam - Độc lập tự do hạnh phúc",
//   },
//   {
//     author: "Truyện ngụ ngôn Việt Nam",
//     text: "Vấn đề nằm ở chỗ bạn đang sử dụng dấu ngoặc nhọn trong hàm map mà không có từ khóa return. Khi sử dụng dấu ngoặc nhọn, bạn cần phải sử dụng từ khóa return để trả về giá trị",
//   },
// ];
export default function PostList({ ListPost, onDelete, onEdit }) {
  return (
    <div className="listPost">
      {ListPost.map((item) => (
        <Post key={item.ID} post={item} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
PostList.propTypes = {
  ListPost: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
