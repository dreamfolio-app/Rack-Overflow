import "./PostBox.css"
import { useDispatch } from "react-redux";
import { deletePost } from "../../../store/posts";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


function PostBox ({ post: { _id, text, author, title, tags }}) {
  const dispatch = useDispatch();
  const { username } = author;
  const history = useHistory();
  // console.log(_id);
  // const history = useHistory();

  const remove = () => {
    dispatch(deletePost(_id));
    // let path = '/posts';
    // history.push(path);
  // console.log(_id);
  }

  const goUpdatePost = () => {
    let path = `/posts/${_id}/update/`;
    history.push(path);
  }

  return (
    <div className="post">

      <div id="container-link-show-page">
        <Link to={`posts/${_id}`}  className='posts-show-link'>
          {title}
        </Link>
      </div>
      <div>
        <p className="post-box-body">{text}</p>
      </div>
      <div>
        <div className="post-box-tags-div">
          <span>tag 1</span><span>tag 2</span><span>tag 3</span><span>tag 4</span><span>tag 5</span><span>tag 6</span>
        </div>
        <div className="post-box-ratings-comments-username">
          <div className="post-box-ratings-comments">
            <button>
              Comments
            </button>
            <button>
              Ratings
            </button>
          </div>
          <div className="post-box-username">
            <div><span>{String.fromCodePoint(0x2B24)}</span> {username}</div>
          </div>
        </div>
      </div>
      <div id="container-bottons-functional">
        <button onClick={remove}>Delete Post</button>
        <button onClick={goUpdatePost}>Update Post</button>
      </div>
    </div>
  );
}

export default PostBox;