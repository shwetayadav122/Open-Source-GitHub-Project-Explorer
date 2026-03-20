import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function LanguageChart({ repos }) {

  const languageCount = {};

  repos.forEach((repo) => {
    const lang = repo.language || "Other";
    languageCount[lang] = (languageCount[lang] || 0) + 1;
  });

  const data = {
    labels: Object.keys(languageCount),
    datasets: [
      {
        label: "Repositories by Language",
        data: Object.values(languageCount),
        backgroundColor: [
          "#f1c40f",
          "#3498db",
          "#2ecc71",
          "#e74c3c",
          "#9b59b6",
          "#1abc9c",
          "#e67e22"
        ],
        borderWidth: 1
      },
    ],
  };

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h2>Language Distribution</h2>
      <Pie data={data} />
    </div>
  );
}