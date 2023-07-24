import { createSlice } from '@reduxjs/toolkit';
import opSandbox from './opSandbox';

const sandboxInitialState = {
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

const sandboxSlice = createSlice({
  name: 'sandbox',
  initialState: sandboxInitialState,
  extraReducers: builder => {
    builder
      .addCase(opSandbox.fetchDisplaySandbox.pending, handlePending)
      .addCase(opSandbox.fetchDisplaySandbox.fulfilled, (state, action) => {
        handlePartlyFulfilled(state);
        state.contacts = action.payload;
      })
      .addCase(opSandbox.fetchDisplaySandbox.rejected, handleRejected)
      .addCase(opSandbox.postSandboxOnList.pending, handlePending)
      .addCase(opSandbox.postSandboxOnList.fulfilled, (state, action) => {
        handlePartlyFulfilled(state);
        state.contacts.push(action.payload);
      })
      .addCase(opSandbox.postSandboxOnList.rejected, handleRejected)
      .addCase(opSandbox.deleteContactSandbox.pending, handlePending)
      .addCase(opSandbox.deleteContactSandbox.fulfilled, (state, action) => {
        handlePartlyFulfilled(state);
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(opSandbox.deleteContactSandbox.rejected, handleRejected);
  },
});

export const sandboxReducer = sandboxSlice.reducer;
