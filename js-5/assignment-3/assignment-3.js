const input = document.querySelector("#query");
const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const value_from_input = input.value;
  fetchData(value_from_input);
});

async function fetchData(value_from_input) {
  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${value_from_input}`,
    );
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
    const data = await response.json();
    results.innerHTML = "";

    data.forEach((tvShow) => {
      const article = document.createElement("article");
      results.appendChild(article);
      const title = document.createElement("h2");
      title.textContent = tvShow.show.name;
      article.appendChild(title);
      const link = document.createElement("a");
      link.href = tvShow.show.url;
      link.target = "_blank";
      link.textContent = "More information";
      article.appendChild(link);
      const image = document.createElement("img");
      image.src = tvShow.show.image?.medium;
      image.alt = tvShow.show.name;
      article.appendChild(image);
      const summary = document.createElement("div");
      summary.innerHTML = tvShow.show.summary;
      article.appendChild(summary);
    });
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
