import { createSlice } from '@reduxjs/toolkit';

const _initialState = {
  isLoading: false,
  isExpanded: false,
};

const authSlice = createSlice({
  name: 'ui',
  initialState: _initialState,
  reducers: {},
});

const { reducer, actions } = authSlice;
// export const { toggleExpanded } = actions;
export default reducer;
