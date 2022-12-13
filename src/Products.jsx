import React from 'react'
import CardHeader from './CardHeader'

function Products () {
    const products = [
        {url:'https://enter.kg/images/stories/virtuemart/product/1_3268.jpg',name:"Computer Mouse", price: 156 , currency:'som'},
        {url:'https://object.pscloud.io/cms/cms/Photo/img_0_84_272_1_1.jpg', name:"Computer speakers", price: 700, currency:'som'},
        {url:'https://asiaexpress.kg/uploads/media/product_photo/0001/05/719b0db08cf7f6e2282c79501312a12df65c0773.jpeg', name:"Router", price: 1365, currency:'som'}    
    ]
    
    return (
        <div>
            {products.map((item,i)=>{
                return <CardHeader key = {i} i = {item}/>
            })}
        </div>
    )
}

export default Products