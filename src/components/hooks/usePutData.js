export default function usePutData() {
    async function handlePut(id, data) {
      try {
        const response = await fetch(
          `https://data-1-w6fe.onrender.com/notes/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to replace data");
        }
        console.log("Item replaced successfully");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  
    return handlePut;
  }
  