import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    books: [], 
    isLoadingViaAPI: false
}

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		addBook: (state, action) => {
			state.books.push(action.payload)
		},
		deleteBook: (state, action) => {
			return {
				...state,
				books: state.books.filter(book => book.id !== action.payload),
			}
		},
		toggleFavorite: (state, action) => {
			state.books.forEach(book => {
				if (book.id === action.payload) {
					book.isFavorite = !book.isFavorite
				}
			})
		},
	},
	
})

export default booksSlice.reducer

export const selectBooks = state => state.books.books

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions
