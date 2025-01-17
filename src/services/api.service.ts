export const getData = async (path: string) => {
  const response = await fetch(`${import.meta.env.VITE_DUMMY_BASE}${path}`);
  return response.json();
};
