# Contentify – Content Management System

A modern **Content Management System (CMS)** built with **React and Vite** for creating, managing, searching, and analyzing digital content through an administrator dashboard.

## 🚀 Features

- 🔐 Admin Login & Protected Routes
- 📊 Dashboard with content statistics
- ➕ Create new posts
- ✏️ Edit existing posts
- 👁️ View individual posts
- 🗑️ Manage posts
- 🔎 Search posts by:
  - Title
  - Category
  - Author
- 🖼️ Image upload and preview
- 📈 Analytics dashboard
- 🌙 Dark mode
- 💾 LocalStorage-based data persistence
- 📱 Responsive user interface
- 🚪 Logout functionality
- 🌐 Multi-language support:
  - English
  - Hindi
  - Punjabi

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

### Libraries

- React Router DOM
- React Icons
- Recharts
- i18next

### Data Storage

- Browser LocalStorage

## 📂 Project Structure

```text
Content-management-system/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Analytics.jsx
│   │   ├── Navbar.jsx
│   │   ├── PostCard.jsx
│   │   ├── PostForm.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── data/
│   │   └── dummyData.js
│   │
│   ├── locales/
│   │   ├── en/
│   │   ├── hi/
│   │   └── pa/
│   │
│   ├── pages/
│   │   ├── AddPost.jsx
│   │   ├── AnalyticsPages.jsx
│   │   ├── Dashboard.jsx
│   │   ├── EditPost.jsx
│   │   ├── Login.jsx
│   │   ├── NotFound.jsx
│   │   ├── Settings.jsx
│   │   ├── ViewPost.jsx
│   │   └── ViewPostSearch.jsx
│   │
│   ├── styles/
│   │   ├── analytics.css
|   |   ├── Login.css
│   │   ├── navbar.css
│   │   ├── postform.css
│   │   ├── sidebar.css
│   │   └── ViewPost.css
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── i18n.js
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/singhbrarharmandeep0-hue/Content-management-system.git
```

Open the project:

```bash
cd Content-management-system
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL shown in the terminal, usually:

```text
http://localhost:5173
```

## 🔑 Admin Login

The project contains an administrator login system for accessing protected dashboard pages.

> For a production application, authentication should be connected to a secure backend instead of storing authentication information only in browser storage.

## 📊 Dashboard

The dashboard provides an overview of the content system, including:

* Total posts
* Categories
* Authors
* Posts containing images
* Recent content

## 📈 Analytics

The analytics section provides visual statistics about the content using **Recharts**.

It can display information such as:

* Number of posts
* Categories
* Authors
* Image usage

## 🖼️ Image Upload

Users can upload an image while creating a post.

The application generates a preview before the post is saved.

## 🌙 Dark Mode

Contentify includes a dark-mode interface that can be enabled from the Settings page.

The selected theme is saved using LocalStorage.

## 🔍 Search

Posts can be searched and filtered using:

* Post title
* Category
* Author

This makes it easier for administrators to locate specific content.

## 💾 Data Persistence

The current version uses **LocalStorage** to persist posts and application settings in the browser.

This makes the project suitable for learning and demonstration purposes without requiring a backend database.

## 🔮 Future Improvements

Planned improvements include:

* Backend API
* MongoDB / PostgreSQL database
* JWT authentication
* Role-based access control
* User management
* Cloud image storage
* Rich text editor
* Post categories and tags
* Pagination
* Advanced analytics
* REST API
* Deployment
* Admin activity logs
* Notifications

## 🎯 Purpose

Contentify was developed as a college/project-based application to demonstrate practical skills in:

* React development
* Component-based architecture
* State management
* Routing
* UI/UX design
* CRUD operations
* Data persistence
* Data visualization
* Authentication concepts

## 👨‍💻 Developer

**Harmandeep Singh**

BCA Student | React Developer | Python & AI Enthusiast

---

⭐ If you find this project useful, consider giving it a star!

### 3. Save it

In Notepad:

**Ctrl + S**

Then close Notepad.

### 4. Tell Git about the new README

Back in CMD:

```cmd
git add README.md

Then: 
</>cmd

git commit -m "Improve project documentation"

Then:
</> cmd
git push origin main

# Content-management-system
A modern **Content Management System (CMS)** built with **React and Vite** for creating, managing, searching, and analyzing digital content through an administrator dashboard.
