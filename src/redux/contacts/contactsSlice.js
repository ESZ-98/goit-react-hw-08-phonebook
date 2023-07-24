import { createSlice } from '@reduxjs/toolkit';
import opContacts from './opContacts';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePartlyFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(opContacts.fetchDisplayContacts.pending, handlePending)
      .addCase(opContacts.fetchDisplayContacts.fulfilled, (state, action) => {
        handlePartlyFulfilled(state);
        state.contacts = action.payload;
      })
      .addCase(opContacts.fetchDisplayContacts.rejected, handleRejected)
      .addCase(opContacts.postContactOnList.pending, handlePending)
      .addCase(opContacts.postContactOnList.fulfilled, (state, action) => {
        handlePartlyFulfilled(state);
        state.contacts.push(action.payload);
      })
      .addCase(opContacts.postContactOnList.rejected, handleRejected)
      .addCase(opContacts.deleteContact.pending, handlePending)
      .addCase(opContacts.deleteContact.fulfilled, (state, action) => {
        handlePartlyFulfilled(state);
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(opContacts.deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
