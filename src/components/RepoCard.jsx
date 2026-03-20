import { useState, useEffect } from "react";

export default function RepoCard({ repo, toggleBookmark, isBookmarked }) {
  const [note, setNote] = useState("");
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("repoNotes")) || {};
    setNote(savedNotes[repo.id] || "");
  }, [repo.id]);

  const saveNote = () => {
    if (!note.trim()) {
      alert("Please write a note first.");
      return;
    }

    const savedNotes = JSON.parse(localStorage.getItem("repoNotes")) || {};
    savedNotes[repo.id] = note;
    localStorage.setItem("repoNotes", JSON.stringify(savedNotes));

    alert("Note saved successfully!");
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px",
        background: "#fafafa"
      }}
    >
      <h3>{repo.name}</h3>

      <p>{repo.description}</p>

      <p>
        ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
      </p>

      <button onClick={() => toggleBookmark(repo)}>
        {isBookmarked ? "⭐ Bookmarked" : "☆ Bookmark"}
      </button>

      <br /><br />

      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>

      <br /><br />

      <button onClick={() => setShowNote(!showNote)}>
        {showNote ? "Hide Note" : "📝 Add Note"}
      </button>

      {showNote && (
        <div style={{ marginTop: "10px" }}>
          <textarea
            placeholder="Write notes about this repository..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />

          <button onClick={saveNote} style={{ marginTop: "5px" }}>
            Save Note
          </button>
        </div>
      )}
    </div>
  );
}