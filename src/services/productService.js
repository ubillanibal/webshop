const API_URL = "https://fakestoreapi.com/products";

export async function fetchProducts() {
  const response = await fetch(API_URL);
  return response.json();
}
