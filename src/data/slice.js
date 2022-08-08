import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-native-uuid';

const deviceSlice = createSlice({
  name: 'devices',
  initialState: [],
  reducers: {
    add(state, action) {
        state.push({
          id: uuid.v4(),
          model: action.payload.model,
          os: action.payload.os,
          owner: action.payload.owner,
          notes: action.payload.notes,
        });
    },
    edit(state, action) {
        const deviceIndex = state.findIndex(device => device.id === action.payload.id);
        state[deviceIndex] = { ...state[deviceIndex], ...action.payload };
    },
    deleteDevice(state, action) {
        const deviceIndex = state.findIndex(device => device.id === action.payload.id);
        state.splice(deviceIndex, 1);
    },
  }
})

export const { add, edit, deleteDevice } = deviceSlice.actions
export default deviceSlice.reducer