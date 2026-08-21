import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function ViewPostSearch({ posts }) {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [results, setResults] = useState([]);
const [searched, setSearched] = useState(false);

const handleSearch = () => {

    const filtered = posts.filter((post) => {

        return (

            (title === "" ||
                post.title.toLowerCase().includes(title.toLowerCase())) &&

            (category === "" ||
                post.category.toLowerCase().includes(category.toLowerCase())) &&

            (author === "" ||
                post.author.toLowerCase().includes(author.toLowerCase()))

        );

    });

    setResults(filtered);
    setSearched(true);

};

    return (
        <>
            <Navbar />

            <div className="container">

                <Sidebar />

                <main className="content">

                    <h1>Search Posts</h1>

                    <div className="post-form">

                        <label>Title</label>
                        <input
                            type="text"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <label>Category</label>
                        <input
                            type="text"
                            placeholder="Enter category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />

                        <label>Author</label>
                        <input
                            type="text"
                            placeholder="Enter author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                        <br />

                           <button
                            className="view"
                            onClick={handleSearch}
                        >
                            Search
                        </button>                     

                    </div>

                    <br />

                    {searched ? (
                  results.length === 0 ? (
                    <h2>No matching posts found.</h2>
                  ) : (
                    results.map((post) => (
                      <div key={post.id} className="card">
                
                        <h2>{post.title}</h2>
                
                        <p>
                          <strong>Category:</strong> {post.category}
                        </p>

                        <p>
                          <strong>Author:</strong> {post.author}
                        </p>

                        <p>
                          <strong>Content:</strong>
                        </p>

                       <p>
  {post.content.length > 120
    ? post.content.substring(0, 120) + "..."
    : post.content}
</p>

                      </div>
                    ))
                  )
                ) : null}

                                     <footer className="footer">
        <p>© 2026 Content Management System | All Rights Reserved</p>
    </footer>                            

                </main>

            </div>

        </>
    );
}

export default ViewPostSearch;