import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Cardetails(props) {
  const {data,t}=props;
 

 
  return (<>
    

    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.src} className="pimg" />
      <Card.Body>
        <Card.Title>{data.Brands}</Card.Title>
        <Card.Text>
       {data.description}
        </Card.Text>
        <Button className='mx-2'  as={Link} to={`/product/${t}`}>Price:{data.price}</Button>
        <Button onClick={() => props.onRemove(data.id)}  as={Link} to={`/cart`}>remove</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default Cardetails;