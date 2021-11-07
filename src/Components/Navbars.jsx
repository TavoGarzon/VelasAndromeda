import React, {useState, useEffect} from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";



const Navbars = () => {
    const {loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently} = useAuth0();
    const [textButton, setTextButton] = useState('Ingresar')
    const [Name, setName] = useState('')
    useEffect(() => {
        if(isAuthenticated){
            setTextButton('Salir')
            setName(user.name)
        }else{
            setTextButton('Ingresar')
        }
        
    }, [isAuthenticated])
    
    useEffect(() => {
       const getToken = async ()=>{
           const accessToken = await getAccessTokenSilently();
           localStorage.setItem('token', accessToken)
      }  
      if(isAuthenticated){
          getToken();
      }
    }, [isAuthenticated, getAccessTokenSilently])
    return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand ><img className="Logo" link to='/public/'
    src= "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/i/istock-504484134.jpg" alt="Logo"/></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link ><Link to='/'>Home</Link></Nav.Link> 
      <Nav.Link ><Link to='/Features'>Features</Link></Nav.Link>
      <Nav.Link ><Link to='/'>Pricing</Link></Nav.Link>
      {
          isAuthenticated ?
          <NavDropdown title={Name} id="navbarScrollingDropdown">
          <NavDropdown.Item><Link to='/prod'>Productos</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to='/ventas'>Ventas</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item><Link to='/user'>Usuarios</Link>
          </NavDropdown.Item>
        </NavDropdown>:
        null
      }
    </Nav>
    </Container>
    {
        isAuthenticated ?
        <button
        onClick={()=>logout({returnTo: window.location.origin})}
        className="btn btn-primary"> {textButton} </button> :
        <button
        onClick={()=>loginWithRedirect()}
        className="btn btn-primary"> {textButton} </button> 
    }
  </Navbar>
    )
}

export default Navbars
