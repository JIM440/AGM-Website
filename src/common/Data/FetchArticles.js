const FetchArticles = () => {
  return fetch(
    'https://raw.githubusercontent.com/JIM440/AGM-Website-React/main/src/assets/Json/data.json'
  )
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching data:', error));
};

export default FetchArticles;
