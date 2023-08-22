


import Home from './pages/home'
import Men from './pages/men'
import { BrowserRouter, Route, Router,Routes} from 'react-router-dom'
import Productdetails from './pages/productdetail'
import Data from './data.json'
import Cart from './pages/cart'
function App() {

const m=Data.filter((e)=> e.na==="men")
const w=Data.filter((e)=>e.na==="women")
const k=Data.filter((e)=> e.na==="kid")

  return (
    <BrowserRouter>
    
<Routes>
<Route path="/" element={<Home />}/>
      <Route path="/Men" 
      element={<Men data={m} section="Men T-shirts" about={{"categorie":["Tshirts","shirts"],"Brand":["Roudster","Friskers","HRX by Hrikthik Roshan","WRONG","V-Mart","Tommy Hilfiger"]}} />} />
    <Route path="/Women" 
    element={<Men data={w} section="Kurtis For Women" about={{"categorie":["Kurta set","Kurtis"],"Brand":["KALINI","Ethnic basket","Sangria","Anouk","Vishudha","Indo Era"]}}/>}/>
    <Route path="/Kids" 
    element={<Men data={k} section=" Kids Wear Online Store"  about={{"categorie":["Tshirts","shirts"],"Brand":["Roudster","Friskers","HRX by Hrikthik Roshan","WRONG","V-Mart","Tommy Hilfiger"]}}/>}/>
      <Route path="/product/:id" 
    element={<Productdetails/>}/>
    <Route path="/cart" 
    element={<Cart/>}/>
      </Routes>
     
    </BrowserRouter>
 
  )
}

export default App
