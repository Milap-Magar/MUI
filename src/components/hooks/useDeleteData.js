export default function useDeleteData() {

  async function handleDelete(id) {
    try {
      const response = await fetch(
        "https://data-1-w6fe.onrender.com/notes/" + id,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete");
      }
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
}

  return handleDelete;
}
