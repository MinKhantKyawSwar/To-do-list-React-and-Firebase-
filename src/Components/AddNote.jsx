import React, { useState } from 'react'

const AddNote = ({ getNotes }) => {

    // defining states
    const [note,setNote] = useState("");


    //add new note
    const addNote = async (e) => {
        e.preventDefault();

        if(note.trim().length === 0){
            alert("Please enter an character.");
            return
        }

        try{
            await fetch(
                "https://firenote-a11cd-default-rtdb.firebaseio.com/note.json", 
            {
                method : "POST",
                body : JSON.stringify(note),
                header : {
                    "Content-Type" : "application/json",
                },
            }
         );
         setNote("");
         getNotes();
        }catch(error){
            alert("Something went wrong. Try again later.")
        }
    };

  return (
    <section>
        <form className='card' onSubmit={addNote}>
            <input 
                type="text" 
                placeholder='Enter note' 
                value={note}
                onChange={e=> setNote(e.target.value)} 
            />
            <button 
                className='submit-btn'
            >
                Add Note
            </button>
        </form>
    </section>
  )
}

export default AddNote