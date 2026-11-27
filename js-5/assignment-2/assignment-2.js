const input = document.querySelector("#query");

const form = document.querySelector("form");

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
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
