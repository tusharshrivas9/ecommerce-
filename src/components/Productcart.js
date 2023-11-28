import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBRipple
} from 'mdb-react-ui-kit';
import {useSelector,useDispatch} from 'react-redux'
import { addtocart } from '../features/cartSlice';

const Productcart = () => {

 const items = useSelector((state)=>state.allcart.items)

 const dispatch = useDispatch();


  return (
    <>
    <div className="m-2">
    <MDBContainer>
    <MDBRow className='mb-3'>
      {items.map((item)=>(
      <MDBCol key={item.id} size='md-4'>
       <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={item.image} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardText>
          {item.price}
        </MDBCardText>
        <MDBBtn onClick={()=>dispatch(addtocart(item))}>Add to cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    ))
      
      }
    </MDBRow>
    </MDBContainer>
    </div>
    </>
  )
}

export default Productcart
