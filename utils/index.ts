export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "9dcc688694mshc2955fcbe2e39c2p11edc2jsne39c3fa8164a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
