const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("url", API_BASE_URL);

export const fetchPricelist = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch pricelist:", error);
    return [];
  }
};
