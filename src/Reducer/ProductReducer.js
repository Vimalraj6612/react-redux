import {createSlice} from '@reduxjs/toolkit'
import {createProduct, readProduct, updateProduct, deleteProduct} from '../Action/ProductAction'

//initial state

// slice(reducer)

//const ProductSlice = createSlice({name, state, slice, controller})
const ProductSlice = createSlice({
    name: "Product",
    initialState: {Products: []},
    extraReducers: (builder) => {
    //addCase(action, reducer)
    builder.addCase(createProduct.fulfilled,(state,action) => {})
           .addCase(createProduct.rejected,()=> {})
           .addCase(readProduct.fulfilled,(state,action) => {})
           .addCase(readProduct.rejected,() => {})
           .addCase(updateProduct.fulfilled,(state,action) => {})
           .addCase(updateProduct.rejected,() => {})
           .addCase(deleteProduct.fulfilled,(state,action) => {})
           .addCase(deleteProduct.rejected,() => {})
    }
})

export default ProductSlice
