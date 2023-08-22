import { useState ,useEffect} from "react";
import Product from '../product';
import Navbar from '../navbar';
import Side from './side';
import Footer from "../footer";
import { useLocation } from 'react-router-dom';
import {CgMenuRound} from 'react-icons/cg'

export default function Men(props) {
    const location =useLocation();
    let ans=props.data;
    const [filteredData, setFilteredData] = useState(props.data);
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    useEffect(() => {
      // Reset filters and data when the route changes
      setFilteredData(props.data);
    }, [location.pathname]);
  
    const applyFilters = (selectedFilters) => {
      const filteredData = props.data.filter((item) => {
        return (
          selectedFilters.includes(item.categories) ||
          selectedFilters.includes(item.Brands) ||
          selectedFilters.includes(item.color)  ||
          selectedFilters.includes(item.discount) 
        );
      });
      setFilteredData(filteredData);
    };
    
  

    return (
        <>
        <Navbar/>
        <div className="men">
        <div className="heading">
            <span>Home / Clothing / {props.section}</span>
        </div>
        <div className="heading">
            <span>{props.section}</span>
        </div>
        <div className="men1">
        <div className="hamburger-menu">
       <p className="smenu"><CgMenuRound className="Hamburger" size="40px" onClick={()=>setIsMenuOpen(!isMenuOpen)}/> FILTER</p> 
       {isMenuOpen && <Side locationPathname={location.pathname} details={props.about} onsubmit={applyFilters}/>}
   </div>
    <div className="product">
    {filteredData.map((e, index) => (
    <Product key={index} data={e} t={e.id}/>
  ))}
    </div>
        </div>
        </div>
        <Footer/>
    </>
       
   
  );
}
