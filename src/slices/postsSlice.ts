import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"


export interface postsType  {
  _id: string;
  type_posts: string;
  title: string;
  body_text: string;
  type_connect: string;
  userId: Array<string>,

  createdAt:string;
  updatedAt: string;
  __v: number
}



export const fetchPosts = createAsyncThunk('posts/fetchUsers', async () => {
  const response = await fetch('https://afternoon-depths-40587-796825b7d7a6.herokuapp.com/api/posts');
  return (await response.json());
});


const postsSlice = createSlice({
  name: "posts",
  initialState:{
    posts: [] as Array<postsType>,
    loading: false
  },
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload
      state.loading = false
    })
    builder.addCase(fetchPosts.rejected, state => {
      state.loading = false
    })
  }
})

// export const { setMessage } = messageSlice.actions
export default postsSlice.reducer