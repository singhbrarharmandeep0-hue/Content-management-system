import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

function AddPost({ posts, setPosts }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
        setImage(reader.result);
    };

    reader.readAsDataURL(file);

};
    const handleSubmit = (e) => {
       e.preventDefault();
       if (!title || !category || !author || !content) {
       alert("Please fill all fields.");
       return;  }

 const newPost = {
    id: Date.now(),
    title,
    category,
    author,
    content,
    image,
};


        setPosts([...posts, newPost]);

        setTitle("");
        setCategory("");
        setAuthor("");
        setContent("");
        setImage("");
        navigate("/");
    };
  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />


        <main className="content">

          <h1>Add New Post</h1>

<PostForm
    title={title}
    setTitle={setTitle}
    category={category}
    setCategory={setCategory}
    author={author}
    setAuthor={setAuthor}
    content={content}
    setContent={setContent}

    image={image}
    handleImageChange={handleImageChange}

    handleSubmit={handleSubmit}
    buttonText="Save Post"
/>
               <footer className="footer">
        <p>© 2026 Content Management System | All Rights Reserved</p>
    </footer>

        </main>

      </div>
    </>
  );
}

export default AddPost;