import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import PostForm from "../components/PostForm";

function EditPost({ posts, setPosts }) {

    const { id } = useParams();
    const navigate = useNavigate();

    const post = posts.find(
        (item) => item.id === Number(id)
    );



    const [title, setTitle] = useState(post.title);
    const [category, setCategory] = useState(post.category);
    const [author, setAuthor] = useState(post.author);
    const [content, setContent] = useState(post.content);
      if (!post) {
    return <h2>Post not found!</h2>;
}


const handleSubmit = (e) => {

    e.preventDefault();

    const updatedPosts = posts.map((item) => {

        if (item.id === Number(id)) {

            return {
                ...item,
                title,
                category,
                author,
                content,
            };

        }

        return item;

    });

    setPosts(updatedPosts);

    navigate("/");

};

    return (

        <>
            <Navbar />

            <div className="container">

                <Sidebar />

                <main className="content">
                      <h1>Edit Post</h1>



                    <PostForm
                      title={title}
                      setTitle={setTitle}
                      category={category}
                      setCategory={setCategory}
                      author={author}
                      setAuthor={setAuthor}
                      content={content}
                      setContent={setContent}
                      handleSubmit={handleSubmit}
                      buttonText="Update Post"
                     />

                         <footer className="footer">
        <p>© 2026 Content Management System | All Rights Reserved</p>
    </footer>

                </main>

            </div>

        </>

    );

}

export default EditPost;