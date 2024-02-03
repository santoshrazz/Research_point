import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    loginState: false,
    isLoading: true
};

export const getUser = createAsyncThunk("getUser", () => {
    const cookie = document.cookie;
    console.log("Get User Function Called");
    const verify = cookie.slice(0, 5);
    if (verify === "uttam") {
        return true
    }
    else {
        return false
    }


})
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.isLoading = false;
            state.loginState = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            state.isLoading = true,
                state.loginState = false
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false,
                state.loginState = action.payload
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.isLoading = false,
                state.loginState = false
        })

    }
})

export const { setLogin, setInitialState } = loginSlice.actions
export default loginSlice.reducer
