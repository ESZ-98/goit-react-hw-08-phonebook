import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { getPromiseData } from '../../js/apiUrl';

const register = createAsyncThunk('users/signup', async (regCred, thunkAPI) => {
  try {
    const response = await getPromiseData(api.contApiUserCreate(regCred));
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const logIn = createAsyncThunk('users/login', async (logCred, thunkAPI) => {
  try {
    const response = await getPromiseData(api.contApiUserLogin(logCred));
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const logOut = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    const response = await getPromiseData(api.contApiUserLogout());
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const refresh = createAsyncThunk('users/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user.');
  }

  try {
    const response = await getPromiseData(
      api.contApiUserCurrent(persistedToken)
    );
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const opAuth = { register, logIn, logOut, refresh };

export default opAuth;
