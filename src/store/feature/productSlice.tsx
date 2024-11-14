import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialStateProduct = {
	productList: [],
	isLoading: false,
	product: {},
	isProductLoading: false,
	findProduct: {},
	isFindProductLoading: false
}

export const fetchGetAllProducts = createAsyncThunk(
    'product/fetchGetAllProducts',
   async ()=>{
     console.log('2- fetchGetAllProducts çalıştı');
       return await fetch('https://dummyjson.com/products')
        .then(data=>data.json())
    }
)

const productSlice = createSlice({
	name: 'product',
	initialState: initialStateProduct,
	reducers: {},
	extraReducers: (build)=>{
		build.addCase(fetchGetAllProducts.pending, (state)=>{
			// eğer fetch işlemi devam ediyor, bitmemiş ise yüklenir true olsun
			state.isLoading=true
		})
		build.addCase(fetchGetAllProducts.fulfilled, (state, action)=>{
			// fetch işlemi tamamlandı.
			state.isLoading = false
			state.productList = action.payload.products
		})
		build.addCase(fetchGetAllProducts.rejected, (state)=>{
			// fetch işlemi hatalı bir şekilde sonlanır ise
			state.isLoading=false;
		})
	}
})

export default productSlice.reducer;