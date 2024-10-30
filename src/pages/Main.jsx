import React, { useEffect, useState } from "react";

const Main = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  return (
    <>
      <div>
        {notes.map((note) => (
          <p key={note.id}>{note.title}</p>
        ))}
      </div>
    </>
  );
};
export default Main;
