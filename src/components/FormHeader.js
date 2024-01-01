import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filteredNote } from '../store/notesSlice';

const FormHeader = () => {

  const [ value, setValue ] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filteredNote(value));
  }, [value,dispatch])


  return (
      <div className='form-header'>
          <h1>NotesApp</h1>
          <input type="text" placeholder='Search...' value={value} onChange={(e)=>setValue(e.target.value)} />
    </div>
  )
}

export default FormHeader