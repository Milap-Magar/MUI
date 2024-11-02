export default function usePatchData() {
    async function handlePatch(id, data) {
      try {
        const response = await fetch(
          `https://data-1-w6fe.onrender.com/notes/${id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to patch data");
        }
        console.log("Item updated successfully");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  
    return handlePatch;
  }
  