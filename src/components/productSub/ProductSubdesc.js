import React ,{useEffect, useState } from 'react'
import { Container, Image} from 'react-bootstrap';
import { productGetOne } from '../../api/productsApi';
// import { API_SERVER_HOST } from '../../api/qnaApi';
import { API_SERVER_HOST } from '../../serverEnv'

const initState = {
  productId:0,
  pname:'',
  pdesc:'',
  price:0,  
  delFlag:false,
  uploadFileNames: []

}

const ProductSubdesc = ({productId}) => {
  const[product,setProduct] = useState(initState);
    const host = API_SERVER_HOST;

    useEffect(()=>{
        productGetOne(productId).then(data => {
            console.log(data)
            setProduct(data)
        })
    },[productId])

  return (
    <>
    <Container>
    <div className='flex-column'>
            <p>상세이미지보기</p>
            {product.uploadFileNames.map((ImgFile, i)=>
            <div key={i} className="image-container" style={{ width: '100%', maxWidth: '100%', height: 'auto', marginBottom: '1rem' }}>
             <Image src={`${host}/api/product/view/${product.uploadFileNames[i]}` } fluid /> 
             </div>
            )}
        </div>
  </Container>
    </>
  )
}

export default ProductSubdesc


