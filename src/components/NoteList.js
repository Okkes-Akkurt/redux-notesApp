import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../store/notesSlice';

const NoteList = () => {

	const notes = useSelector((state) => state.notesApp.notes);
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteNote(id));
		}
	}


  return (
		<div className='note-list'>
			{[...notes].reverse().map((note) => (
				<div
					className='note'
					key={note.id}
					style={{ backgroundColor: `${note.color}` }}>
					<p>{note.title}</p> <p onClick={()=>handleDelete(note.id)}>X</p>
				</div>
			))}
		</div>
  );
}

export default NoteList