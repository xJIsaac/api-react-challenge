import "./App.css";
import React, { useState } from "react";

function App() {
  const [news, setNews] = useState({ articles: [] });
  const [keyword, setKeyword] = useState("");
  const formChangeHandler = (event) => {
    setKeyword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    async function search() {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?q=${keyword}&apiKey=e6655ea4acfa4cefa42e9d92ea49e091`
      );
      const searchResults = await response.json();
      setNews(searchResults);
    }
    search();
    setKeyword("");
  };

  return (
    <div>
      {/* Build up a form that connects to The news org API: https://newsapi.org/docs */}
      {/* The form only requires a text field so that the user can input the search criteria and a button for submission */}
      {/* On the submission of the form you must connect to the API, grab the information of the top headlines with the search criteria and update the array of news in the state*/}
      {/* Display the array of news in the page. Place, for each new, the title, the image and a description */}
      <form onSubmit={formSubmitHandler}>
        <label>Search news: </label>
        <input
          type="text"
          name="keyword"
          onChange={formChangeHandler}
          value={keyword}
        ></input>
        <button>Search</button>
      </form>
      <br />
      <h3>Total articles {news.totalResults}</h3>
      <ul style={{ listStyleType: "none" }}>
        {news.articles.map(({ title, urlToImage, description }, index) => {
          return (
            <li key={index}>
              <h3>{title}</h3>
              <img src={urlToImage} style={{ width: "300px" }} />
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
