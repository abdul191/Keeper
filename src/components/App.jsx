import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"
console.log(notes)

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {/* Function for the Note it will show all the notes in the Note Compnent */}
      {notes.map((noteItem)=>
        <Note
        key= {noteItem.key}
        title = {noteItem.title}
        content = {noteItem.content}        
        />
        )}
    </div>
  );
}

export default App;
