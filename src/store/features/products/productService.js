
import axios from 'axios'

const apiURL = 'https://js2-ecommerce-api.vercel.app/api/products'

const getAllProducts = async () => {
    const res = await axios.get(apiURL)
    return res.data
}



export default {
    getAllProducts
}