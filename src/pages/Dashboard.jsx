import LanguageChart from "../charts/LanguageChart";
import { useEffect, useState } from "react";
import { fetchRepositories } from "../services/githubApi";
import RepoCard from "../components/RepoCard";

export default function Dashboard() {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("stars");
  const [language, setLanguage] = useState("all");
  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (repo) => {
    if (bookmarks.find((item) => item.id === repo.id)) {
      setBookmarks(bookmarks.filter((item) => item.id !== repo.id));
    } else {
      setBookmarks([...bookmarks, repo]);
    }
  };

  useEffect(() => {
    const loadRepos = async () => {
      const data = await fetchRepositories();
      setRepos(data);
    };

    loadRepos();
  }, []);

  const filteredRepos = repos.filter((repo) => {
    const matchesSearch = repo.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLanguage =
      language === "all" || repo.language === language;

    return matchesSearch && matchesLanguage;
  });

  const sortedRepos = [...filteredRepos].sort((a, b) => {
    if (sort === "stars") {
      return b.stargazers_count - a.stargazers_count;
    }

    if (sort === "updated") {
      return new Date(b.updated_at) - new Date(a.updated_at);
    }

    return 0;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub Repository Explorer</h1>

      <input
        type="text"
        placeholder="Search repositories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          margin: "20px 0",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        style={{
          padding: "10px",
          marginLeft: "10px",
          borderRadius: "5px"
        }}
      >
        <option value="stars">Sort by Stars</option>
        <option value="updated">Sort by Last Updated</option>
      </select>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{
          padding: "10px",
          marginLeft: "10px",
          borderRadius: "5px"
        }}
      >
        <option value="all">All Languages</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Go">Go</option>
        <option value="TypeScript">TypeScript</option>
      </select>

      {/* Chart */}
      <LanguageChart repos={filteredRepos} />

      {/* Repository Cards */}
      {sortedRepos.map((repo) => (
        <RepoCard
          key={repo.id}
          repo={repo}
          toggleBookmark={toggleBookmark}
          isBookmarked={bookmarks.find((item) => item.id === repo.id)}
        />
      ))}
    </div>
  );
}