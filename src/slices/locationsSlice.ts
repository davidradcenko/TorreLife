import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"


interface locationsType  {
  _id: string;
  data_map: string;
  photos: Array<string>,
  title: string;
  body_text: string;
  type_connect: string;
  media: Array<string>,
  tegs: Array<string>,
  type_location: string;
  userId: Array<string>,
  createdAt:string;
  updatedAt: string;
  __v: number
}

export const fetchUsers = createAsyncThunk('locations/fetchUsers', async () => {
  const response = await fetch('https://afternoon-depths-40587-796825b7d7a6.herokuapp.com/api/location');
  return (await response.json());
});


const locationsSlice = createSlice({
  name: "locations",
  initialState:{
    locations: [] as Array<locationsType>,
    loading: false
  },
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.locations = action.payload
      state.loading = false
    })
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false
    })
  }
})

// export const { setMessage } = messageSlice.actions
export default locationsSlice.reducer