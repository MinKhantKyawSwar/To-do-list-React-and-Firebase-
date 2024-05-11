import AddNote from "./Components/AddNote";
import Note from "./Components/Note";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import Intro from "./Components/Intro";

function App() {

  //defining state
  const [notes,setNotes] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  // get note when mount 
  try{
    useEffect(()=> {
      getNotes();
    },[])
  }catch(error){
    alert("no data to show")
  }
 

  // get notes 
  const getNotes = async () => {
    setLoading(true);

    try{
      const response = await fetch(
        "https://firenote-a11cd-default-rtdb.firebaseio.com/note.json"
      );

      if (!response.ok){
        throw new Error("Cannot fetch items from database")
      }

      const notes = await response.json();
      
      const modifiedNotes = [];

      for (const key in notes){
        modifiedNotes.push({
          id: key,
          note: notes[key]
        })
      }

      setNotes(modifiedNotes);
    
    }catch(err){
      setError(err.message)
    }
    setLoading(false);
    
  };

  return (
    <>
       <Navbar getNotes = {getNotes} totalNotes ={notes.length}/>
       {
        loading && !error &&<p className="message">Getting Notes ...</p>
       }
       {
        error && !loading && <p className="message error">{error}</p>
       }
       {!loading && !error && (
        <>
          <AddNote getNotes = {getNotes}/>
          {notes.map((note, index) => (
            <Note key={index} note = {note}  getNotes = {getNotes}/>
            ))
          }
        </>
        )
       }
       
       {
        notes.length === 0 && 
        <Intro />
       }
    </>
  );
}

export default App;
