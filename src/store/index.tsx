import {configureStore} from "@reduxjs/toolkit"
// import {productSlice} from './feature/productSlice' burası daha hantal bir  
// kullanım, alttaki kullanım daha pratik ve rahat
import {
	productSlice
} from './feature'

const store = configureStore({
	reducer: {
		product: productSlice
	}
})

export default store