# Open Source GitHub Project Explorer
🌐 Live Demo

https://shwetayadav122.github.io/Open-Source-GitHub-Project-Explorer/

## Project Overview

The **Open Source GitHub Project Explorer** is a web-based dashboard that allows users to explore trending open-source repositories from GitHub.

It provides filtering, sorting, analytics visualization, bookmarking, and note-taking features to help developers discover and analyze popular repositories efficiently.

This project was developed as part of an internship project to demonstrate skills in **React, API integration, and frontend analytics dashboards**.

## Features

### Repository Exploration

* Fetch trending repositories using the GitHub API
* Display repository details including:

  * Repository name
  * Description
  * Stars
  * Forks
  * Open issues
  * Repository link

### Search & Filtering

* Search repositories by name
* Filter repositories by programming language
* Tag-based filtering

### Sorting Options

Users can sort repositories by:

* Stars
* Last Updated
* Forks

### Analytics Dashboard

Using **Chart.js**, the dashboard visualizes repository data with charts such as:

* Stars vs Forks comparison
* Issues distribution
* Language popularity

### Bookmarking

Users can bookmark repositories to revisit later. Bookmarked repositories are stored locally using browser storage.

### Notes

Users can add personal notes to repositories for reference.


## Tech Stack

Frontend:

* React.js
* Tailwind CSS

Data Visualization:

* Chart.js

API Integration:

* GitHub REST API

Tools:

* Vite
* Axios

## Project Structure

```
github-explorer
│
├── src
│   ├── components
│   │   ├── RepoCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Filter.jsx
│   │   └── Charts.jsx
│   │
│   ├── services
│   │   └── githubApi.js
│   │
│   ├── pages
│   │   └── Dashboard.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```
git clone https://github.com/yourusername/github-explorer.git
```

### 2. Navigate to Project Folder

```
cd github-explorer
```

### 3. Install Dependencies

```
npm install
```

### 4. Run the Development Server

```
npm run dev
```

### 5. Open in Browser

```
http://localhost:5173
```

---

## GitHub API Endpoint Used

Example API request:

```
https://api.github.com/search/repositories?q=stars:>1000&sort=stars
```

This fetches repositories with more than **1000 stars**, sorted by popularity.

## Learning Outcomes

Through this project I gained experience in:

* React component architecture
* API integration
* Data visualization using charts
* State management
* UI design using Tailwind CSS
* Building interactive dashboardss

## Conclusion

The **GitHub Project Explorer** simplifies the process of discovering and analyzing trending open-source repositories. The project demonstrates frontend development skills along with API integration and data visualization.

