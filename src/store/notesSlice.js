import { createSlice, nanoid } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
	name: 'notes',
	initialState: {
		notes: [],
		originalNotes: [],
	},
	reducers: {
		addNote: {
			reducer: (state, action) => {
                state.notes.push(action.payload);
                state.originalNotes.push(action.payload);
			},
			prepare: ({ title, color }) => {
				return {
					payload: {
						id: nanoid(),
						title,
						color,
					},
				};
			},
        },

        deleteNote: (state,action) => {
            const id = action.payload;
            state.notes=state.originalNotes.filter((note) => note.id !== id);

        },
		filteredNote: (state, action) => {
			const filterKey = action.payload;
            if (!filterKey) {
                state.notes = [ ...state.originalNotes ];
            } else {
                state.notes = state.originalNotes.filter((note) =>
                    note.title.toLowerCase().includes(filterKey.toLowerCase())
                );
            }
		},
	},
});

export default notesSlice.reducer;

export const { addNote, filteredNote, deleteNote } = notesSlice.actions;
