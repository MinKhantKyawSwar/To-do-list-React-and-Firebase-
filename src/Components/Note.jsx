import Deleteicon from "../svgs/Deleteicon"

const Note = ({ note, getNotes }) => {
  //destructor note object
  const {note: text, id} = note;

  //delete note
  const deleteNote = async () => {
    try{
      const response = await fetch(
        `https://firenote-a11cd-default-rtdb.firebaseio.com/note/${id}.json`,{
        method: "DELETE",
      })
      if (!response.ok){
        throw new Error("Failed to delete this note.")
      }
      getNotes();
    }catch(err){
      console.log(err.message);
    }
    
  }
  return (
    <div className='card card-ctr'>
        <h3>+ {text}</h3>
        <div onClick={deleteNote}>
          <Deleteicon/>
        </div>
    </div>
  )
}

export default Note