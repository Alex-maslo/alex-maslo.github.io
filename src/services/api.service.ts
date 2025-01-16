export const getData = async () => {
  const response = await fetch(import.meta.env.VITE_BASE_URL);
  return response.json();
};
