import {Action, ThunkAction, createSlice} from '@reduxjs/toolkit';
import {API_ENPOINTS} from '../../api/api-endpoint';
import makeAxiosRequest from '../../api/makeAxiosRequest';
import {RootState} from '../store';

const initialState = {
  loading: false,
  error: null,
  token: null,
};

interface AuthData {
  email: string;
  password: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    apiCallStart(state) {
      state.loading = true;
      state.error = null;
    },
    apiCallSuccess(state, action) {
      state.loading = false;
      state.token = action.payload;
    },
    apiCallFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {apiCallStart, apiCallSuccess, apiCallFailure} = authSlice.actions;
export default authSlice.reducer;

//Sign In Action
export const signinAPICall =
  (body: AuthData): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(apiCallStart());
      const response = await makeAxiosRequest(API_ENPOINTS.LOGIN, 'POST', body);
      console.log(response.data);
      dispatch(apiCallSuccess(response.data));
    } catch (error: any) {
      console.log(error.response.data.error);
      dispatch(apiCallFailure(error.response.data.error));
    }
  };

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
