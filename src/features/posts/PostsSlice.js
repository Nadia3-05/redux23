import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'


const initialState = [
    {id: '1', 
    title: 'Learn Redux. What is Redux?', 
    content: 'Redux is a predictable state container designed to help you write JS apps.',
    date: sub(new Date(), { minutes: 500 }).toISOString(),
    reactions: {
        like: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 35),
        repost: Math.floor(Math.random() * 15),
        
       

    }
},
    { 
        id: '2',
    
     title: 'Learn React. What is React?', 
     content: 'React is a free and open-source front-end JavaScript for building apps.',
     date: sub(new Date(), { minutes: 27 }).toISOString(),
        reactions: {
            like: Math.floor(Math.random() * 100),
            comments: Math.floor(Math.random() * 35),
            repost: Math.floor(Math.random() * 15),
            
        }
    }
]

const postsSlice = createSlice({
  
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return{
                    payload: {
                       
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            like: Math.floor(Math.random() * 100) ,
                            comments: Math.floor(Math.random() * 35),
                            repost: Math.floor(Math.random() * 15),
                            
                           
                    
                    }
                }
            }
        }
    },
    reactionAdded(state, action) {
        const { postId, reaction } = action.payload
        const existingPost = state.find(post => post.id === postId)
        if (existingPost) {
            existingPost.reactions[reaction]++
        }
    }
}
}
)

export const selectAllPosts = (state) => state.posts;
export const { postAdded ,reactionAdded } = postsSlice.actions

export default postsSlice.reducer