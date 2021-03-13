export const getUsers = async () => {
  const response = await window.fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Could not fetch users.");
  }
};
