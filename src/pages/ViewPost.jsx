import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser, FaFolder, FaArrowLeft, FaEdit } from "react-icons/fa";
import "../styles/ViewPost.css";

function ViewPost({ posts }) {

    const { id } = useParams();

    const post = posts.find(
        (item) => item.id === Number(id)
    );

    if (!post) {
        return <h2>Post not found!</h2>;
    }
    const date = new Date(post.id).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
});

    return (
        <>
            <Navbar />

            <div className="container">

                <Sidebar />

               <main className="content">

<div className="view-post">

    <img
        src={post.image}
        alt={post.title}
        className="view-image"
    />

    <div className="view-header">

        <span className="category-badge">
            {post.category}
        </span>

        <h1>{post.title}</h1>

        <div className="post-meta">

            <span>
                <FaUser />
                {post.author}
            </span>

            <span>
                <FaFolder />
                {date}
            </span>

        </div>

    </div>

    <div className="post-content">

        {post.content}

    </div>

    <div className="view-buttons">

        <Link to="/">
            <button className="back-btn">

                <FaArrowLeft />

                Back

            </button>

        </Link>

        <Link to={`/edit-post/${post.id}`}>
            <button className="edit-btn">

                <FaEdit />

                Edit Post

            </button>
        </Link>

    </div>

</div>

<footer className="footer">
<p>© 2026 Content Management System | All Rights Reserved</p>
</footer>

</main>

            </div>
        </>
    );
}

export default ViewPost;