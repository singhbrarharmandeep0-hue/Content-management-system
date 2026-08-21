import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import { Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import ViewPost from "./pages/ViewPost";
import Login from "./pages/Login";
import AnalyticsPage from "./pages/AnalyticsPages";
import NotFound from "./pages/NotFound";

import dummyPosts from "./data/dummyData";
import Settings from "./pages/Settings";
import ViewPostSearch from "./pages/ViewPostSearch";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("loggedIn") === "true"
);

  const [posts, setPosts] = useState(() => {

    const savedPosts = localStorage.getItem("posts");

    return savedPosts
        ? JSON.parse(savedPosts)
        : dummyPosts;

});

useEffect(() => {

    localStorage.setItem(
        "posts",
        JSON.stringify(posts)
    );

}, [posts]);

    return (
  <Routes>

    <Route
      path="/login"
      element={
        isLoggedIn ? (
          <Navigate to="/" />
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )
      }
    />

    <Route
      path="/"
      element={
        isLoggedIn ? (
          <Dashboard
            posts={posts}
            setPosts={setPosts}
          />
        ) : (
          <Navigate to="/login" />
        )
      }
    />

    <Route
      path="/add-post"
      element={
        isLoggedIn ? (
          <AddPost
            posts={posts}
            setPosts={setPosts}
          />
        ) : (
          <Navigate to="/login" />
        )
      }
    />

    <Route
      path="/edit-post/:id"
      element={
        isLoggedIn ? (
          <EditPost
            posts={posts}
            setPosts={setPosts}
          />
        ) : (
          <Navigate to="/login" />
        )
      }
    />

    <Route
      path="/post/:id"
      element={
        isLoggedIn ? (
          <ViewPost posts={posts} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />

    <Route
      path="/settings"
      element={
        isLoggedIn ? (
          <Settings />
        ) : (
          <Navigate to="/login" />
        )
      }
    />

    <Route
      path="/view-post"
      element={
        isLoggedIn ? (
          <ViewPostSearch posts={posts} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
    <Route
    path="/analytics"
    element={
        <AnalyticsPage
            posts={posts}
        />
    }
/>
<Route path="*" element={<NotFound />} />

  </Routes>
);
}

export default App;