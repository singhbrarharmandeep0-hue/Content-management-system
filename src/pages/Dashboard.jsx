import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
FaFileAlt,
FaFolder,
FaUser,
FaSearch
} from "react-icons/fa";
import Analytics from "../components/Analytics";
import PostCard from "../components/PostCard";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";


function Dashboard({ posts, setPosts }) {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {

    const updatedPosts = posts.filter((post) => post.id !== id);

    setPosts(updatedPosts);

   };
const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.category.toLowerCase().includes(search.toLowerCase()) ||
    post.author.toLowerCase().includes(search.toLowerCase())
);
    useGSAP(() => {

        gsap.from(".hero",{
            y:-60,
            opacity:0,
            duration:1,
            ease: "power3.out"
        });

  gsap.from(".box", {
    y: 60,
    opacity: 0,
    scale: 0.8,
    stagger: 0.15,
    duration: 0.8,
    ease: "back.out(1.7)"
  });
    gsap.from(".featured-card", {
    y: 80,
    opacity: 0,
    stagger: 0.2,
    duration: 1
  });

    },[]);
    
  return (
    <>
      <Navbar
    search={search}
    setSearch={setSearch}
/>

      <div className="container">

        <Sidebar />

        <main className="content">
          <div className="hero">

  <div className="hero-text">

<h1>{t("content_management_dashboard")}</h1>

{t("manage_content")}

  </div>

  <div className="hero-buttons">

    <Link to="/add-post">
      <button className="hero-btn">
        + {t("new_post")}
      </button>
    </Link>

    <Link to="/view-post">
      <button className="hero-btn-outline">
        {t("browse_posts")}
      </button>
    </Link>

  </div>

</div>
<div className="dashboard-header">

<div>

<h1>{t("dashboard")}</h1>

<p>

Monitor your content and manage posts efficiently.

</p>

</div>

</div>
<div className="search-box">

  <div className="search-wrapper">

    <FaSearch className="search-icon" />

    <input
      type="text"
      placeholder={t("search_posts")}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

  </div>

</div>
           <div className="stats">

               <div className="box">
                 <FaFileAlt className="stat-icon"/>

<h2>{filteredPosts.length}</h2>
<p>{t("total_posts")}</p>
</div>

               <div className="box">
                 <FaFolder className="stat-icon"/>
                  <h2>{new Set(posts.map(post => post.category)).size}</h2>
                 <p>{t("categories")}</p>
               </div>

               <div className="box">
                 <FaUser className="stat-icon"/>
                 <h2>{new Set(posts.map(post => post.author)).size}</h2>
                 <p>{t("authors")}</p>
               </div>
         </div>

                 {filteredPosts.length === 0 ? (
  <div className="empty-state">
    <h2>No Posts Found</h2>
    <p>Try another search or create a new post.</p>
  </div>
) : (
<div className="posts">

    {filteredPosts.map((post) => (

        <PostCard
            key={post.id}
            post={post}
            handleDelete={(id) => {
                if (window.confirm("Are you sure you want to delete this post?")) {
                    handleDelete(id);
                }
            }}
        />

    ))}

</div>
  
  
)}
<section className="featured">

    <div className="featured-header">

        <h2>{t("featured_articles")}</h2>

        <p>{t("trending_posts")}</p>

    </div>

    <div className="featured-grid">

        {filteredPosts.slice(0,6).map(post => (

            <div key={post.id} className="featured-card">

                <img
                    src={post.image}
                    alt={post.title}
                />

                <div className="featured-overlay">

                    <span>{post.category}</span>

                    <h3>{post.title}</h3>

                </div>

            </div>

        ))}

    </div>

</section>

<Analytics posts={posts} />

<footer className="footer">
  <p>© 2026 Content Management System | All Rights Reserved</p>
</footer>

        </main>

      </div>

    </>
  );
}

export default Dashboard;