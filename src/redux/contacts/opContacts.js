import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { getPromiseData } from '../../js/api';

export const fetchDisplayContacts = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const response = await getPromiseData(api.contApiGet());
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const postContactOnList = createAsyncThunk(
  'contacts/post',
  async (data, thunkAPI) => {
    try {
      const response = await getPromiseData(api.contApiNew(data));
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/:contactId',
  async (id, thunkAPI) => {
    try {
      const response = await getPromiseData(api.contApiDelete(id));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
const opContacts = { fetchDisplayContacts, postContactOnList, deleteContact };

export default opContacts;
