
function PostForm({
  title,
  setTitle,
  category,
  setCategory,
  author,
  setAuthor,
  content,
  setContent,
  image,
  handleImageChange,
  handleSubmit,
  buttonText,
}) {
  return (
    <form className="post-form" onSubmit={handleSubmit}>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          placeholder="Enter author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Upload Image</label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {image && (
          <img
            src={image}
            alt="Preview"
            className="preview-image"
          />
        )}
      </div>

      <div className="form-group">
        <label>Content</label>

        <textarea
          rows="6"
          placeholder="Write your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button type="submit">
        {buttonText}
      </button>

    </form>
  );
}

export default PostForm;