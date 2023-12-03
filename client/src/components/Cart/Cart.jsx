import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import React from 'react';
import "./Cart.scss"


const Cart = () => {
    const data =[
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            tittle: "Long Sleeve Graphic T-shirt",
            desc: "--create-reflog create the branch's reflo-edit-description list branch names \
            format to use for the output",
            isNew: true,
            oldPrice: 99.99,
            price: 59.99,
          },
          {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            tittle: "Coat",
            desc: "--create-reflog create the branch's reflo-edit-description list branch names \
            format to use for the output",
            isNew: true,
            oldPrice: 79.99,
            price: 29.99,
          },

    ];
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className='item' key={item.id}>
                <img src={item.img} alt='' />
                <div className='details'>
                    <h1>{item.tittle}</h1>
                    <p>{item.desc?.substring(0,50)}</p>
                    <div className='price'>
                        1 x ${item.price}
                    </div>

                </div>
                <DeleteOutlineOutlinedIcon className='delete' />
            </div>
        ))}

        <div className='total'>
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>

        
        
    </div>
  )
}

export default Cart