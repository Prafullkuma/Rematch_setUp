import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//With out using connect
const Post = () => {
  const dispatch = useDispatch();

  const { post: postData } = useSelector((state) => state);

  useEffect(() => {
    dispatch.post.load();
  }, []);

  const handleDelete = (id) => {
    dispatch.post.removePost(id);
  };

  const handleEdit = (ele) => {
    const title = window.prompt("Enter your Title:");
    if (title.length !== 0) {
      const payload = {
        id: ele?.id,
        title: title,
        body: ele.body,
        userId: ele.userId,
      };
      dispatch.post.editPost(payload);
    }
  };

  return (
    <div>
      {postData.map((ele) => {
        return (
          <div key={ele.id}>
            <p>{ele.title}</p>
            <span
              style={{
                paddingRight: "7px",
                color: "green",
                fontSize: "20px",
              }}
              onClick={() => handleEdit(ele)}
            >
              Edit
            </span>
            <span
              style={{
                paddingRight: "7px",
                color: "red",
                fontSize: "20px",
              }}
              onClick={() => handleDelete(ele.id)}
            >
              Delete
            </span>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Post;
