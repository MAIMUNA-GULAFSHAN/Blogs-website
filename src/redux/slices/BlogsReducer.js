import { createSlice } from "@reduxjs/toolkit";

const BlogsReducer = createSlice({
    name:'BlogsReducer',
    initialState:{
        blogs:[]
    },
    reducers:{
        addBlogs:(state,action)=>{

            // state.blogs = action.payload
            // console.log(`in adding blog ${state.blogs}`)
            state.blogs = action.payload?.filter((val)=>{
                if(val.urlToImage){
                    // console.log('valueof blog',val)
                    return val
                }
            })
        }
    }

})

export const {addBlogs} = BlogsReducer.actions;
export default BlogsReducer.reducer;