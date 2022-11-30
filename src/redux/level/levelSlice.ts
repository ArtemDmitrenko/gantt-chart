import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface LevelState {
  currentLevel: number;
}

const initialState: LevelState = {
  currentLevel: 1,
};

const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    changeLevel(state, action: PayloadAction<number>) {
      state.currentLevel = action.payload;
    },
  },
});

export const selectCount = (state: RootState) => state.level.currentLevel;
export default levelSlice.reducer;
export const { changeLevel } = levelSlice.actions;
