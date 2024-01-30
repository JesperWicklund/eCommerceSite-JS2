
import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { DetailPageImages } from "../components/DetailPageImages";
import { DetailPageInfo } from "../components/DetailPageInfo";

function DetailPage() {

    const { productId } =useParams({})
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)



    const apiURL = `https://js2-ecommerce-api.vercel.app/api/products/${productId}`
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            try {
                const res = await axios.get(apiURL)
                setProduct(res.data)
                setLoading(false)
                console.log(res);
                
            } catch (err) {
                setError('something went wrong')
                console.error(err.message);
                
            }
        }
        getProduct()
    }, [])
  
  return (
    <div className='p-2'>
        <div className="flex flex-col mx-16 lg:flex-row">
        <DetailPageImages key={product} product={product} />
        <DetailPageInfo key={product} product={product} />
      </div>
      
    </div>
  )
}

export default DetailPage