import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../store/notesSlice';


const FormBody = () => {
	const [value, setValue] = useState('');
	const [ color, setColor ] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = () => {
		if (color === '') return alert('Please choose a color !!');
		const note = {title: value, color: color };
		dispatch(addNote(note));
		setValue('');
		setColor('');
	};

	return (
		<div className='form-body'>
			<textarea
				value={value}
				onChange={(e) => setValue(e.target.value)}
				rows={15}
				placeholder='Enter your note here...'></textarea>
			<div className='buttons'>
				<div className='left-buttons'>
					<span style={{ backgroundColor: 'rgb(238,100,147)' }}>
						<input
							type='radio'
							name='color'
							value={'rgb(238,100,147)'}
							checked={color === 'rgb(238,100,147)'}
							onChange={(e) => setColor(e.target.value)}
						/>
					</span>
					<span style={{ backgroundColor: 'rgb(185,107,198)' }}>
						<input
							type='radio'
							name='color'
							value={'rgb(185,107,198)'}
							checked={color === 'rgb(185,107,198)'}
							onChange={(e) => setColor(e.target.value)}
						/>
					</span>
					<span style={{ backgroundColor: 'rgb(254,212,92)' }}>
						<input
							type='radio'
							name='color'
							value={'rgb(254,212,92)'}
							checked={color === 'rgb(254,212,92)'}
							onChange={(e) => setColor(e.target.value)}
						/>
					</span>
					<span style={{ backgroundColor: 'rgb(85,196,245)' }}>
						<input
							type='radio'
							name='color'
							value={'rgb(85,196,245)'}
							checked={color === 'rgb(85,196,245)'}
							onChange={(e) => setColor(e.target.value)}
						/>
					</span>
					<span style={{ backgroundColor: 'rgb(175,212,133)' }}>
						<input
							type='radio'
							name='color'
							value={'rgb(175,212,133)'}
							checked={color === 'rgb(175,212,133)'}
							onChange={(e) => setColor(e.target.value)}
						/>
					</span>
				</div>
				<button onClick={handleSubmit}>ADD</button>
			</div>
		</div>
	);
};

export default FormBody;
