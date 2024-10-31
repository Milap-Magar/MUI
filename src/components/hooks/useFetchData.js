import { useEffect, useState } from "react";

export default function useFetachData() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("https://data-1-w6fe.onrender.com/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return notes;
}
