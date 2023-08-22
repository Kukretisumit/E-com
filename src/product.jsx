import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Product(props) {
  const {data,t}=props;
  const addToCart = () => {
    const clickedProducts = JSON.parse(localStorage.getItem('clickedProducts')) || [];
        clickedProducts.push(data);
        localStorage.setItem('clickedProducts', JSON.stringify(clickedProducts));
    
  };
 
  return (<>
    

    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.src} className="pimg" />
      <Card.Body>
        <Card.Title>{data.Brands}</Card.Title>
        <div className='btns'>
        <Button className='mx-2'  as={Link} to={`/product/${t}`}>Price:{data.price}</Button>
        <Button  
                as={Link}
                to={{
                    pathname: '/cart'
                }}
                onClick={() => addToCart()}>ADD TO BAG</Button>
  </div>
      </Card.Body>
    </Card>
    </>
  );
}

export default Product;