const API_BASE = 'https://api.thecatapi.com/v1';

export const fetchRandomCat = async () => {
  const response = await fetch(`${API_BASE}/images/search?has_breeds=1`);
  const data = await response.json();
  return data;
};

export const fetchCatDetails = async (id) => {
  const response = await fetch(`${API_BASE}/images/${id}`);
  const data = await response.json();
  return data;
};
