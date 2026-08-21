import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";


function PostCard({ post, handleDelete }) {


    return (
        <div className="card">

            <img
                src={post.image}
                alt={post.title}
            />

            <div className="card-content">

                <span className="category-tag">
                    {post.category}
                </span>

                <h2>{post.title}</h2>

                <p className="author">
                    By {post.author}
                </p>

                <p className="preview">

                    {post.content.length > 90
                        ? post.content.substring(0, 90) + "..."
                        : post.content}

                </p>

                <div className="buttons">

                    <Link to={`/post/${post.id}`}>
                        <button className="view">
                            View
                        </button>
                    </Link>

                    <Link to={`/edit-post/${post.id}`}>
                        <button className="edit">
                            Edit
                        </button>
                    </Link>

                    <button
                        className="delete"
                        onClick={() => handleDelete(post.id)}
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}

export default PostCard;