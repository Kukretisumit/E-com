
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container fluid style={{backgroundColor:'#fff'}}>
        <Link to="/"><img className='logo' src='https://findvectorlogo.com/wp-content/uploads/2019/03/myntra-vector-logo.png' /></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='mx-2 nlink' to="/Men">MEN</Link>
            <Link className='mx-2 nlink' to="/Women">WOMEN</Link>
            <Link className='mx-2 nlink' to="/Kids">KIDS</Link>
            <Link className='mx-2 nlink' to="#action2">HOME&LIVING</Link>
            <Link className='mx-2 nlink' to="#action2">BEAUTY</Link>
            <Link className='mx-2 nlink' to="#action2">STUDIO</Link>
           
          </Nav>
          <Nav>
         
          <Form className="d-flex" >
          <button className='sbtn'><img className='searchlogo' src='https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-1024.png' /></button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchbar"
              aria-label="Search"
            
            />
            
          </Form>
          
          <Nav className='logos' >
          <Link  className='mx-2 nlink1' to="#action2"><img className='logo1' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' /></Link>
            <Link  className='mx-2 nlink1' to="#action2"><img className='logo1' src='https://icons.veryicon.com/png/o/commerce-shopping/fine-edition-mall-icon/wishlist-1.png' /></Link>
            <Link  className='mx-2 nlink1' to="/cart"><img className='logo2' src='https://www.pngkit.com/png/full/335-3354832_grocery-bag-icon-png-shopping-bag-icon-png.png' /></Link>
          </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
