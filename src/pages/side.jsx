import { useState ,useEffect} from "react"
import { useLocation } from "react-router-dom";
export default function Side(props){
 const location=useLocation();
    const [selected,setselected]=useState([]);
    
    useEffect(()=>{
        setselected([]);
    },[location.pathname]);

    const handlechange = (e, value) => {
        const updatedSelected = e.target.checked
          ? [...selected, value]
          : selected.filter(item => item !== value);
    
        setselected(updatedSelected);
        props.onsubmit(updatedSelected);
      };

    
    return(<div className="side ">

         <div className="side1">
            <span className="sideh">Categories</span>
            <ul>
                <li>
                <input type={"checkbox"} value={props.details.categorie[0]} id={props.details.categorie[0]} onChange={(e)=>handlechange(e,props.details.categorie[0])} name="categories" />
                <label>{props.details.categorie[0]}</label>
                
                </li>
                <li>
                <input type={"checkbox"} value={props.details.categorie[1]} onChange={(e)=>handlechange(e,props.details.categorie[1])}  name="categories" />
                <label>{props.details.categorie[1]}</label>
                 
                </li>
            </ul>
         </div>
         <div className="side1">
            <span  className="sideh">Brands</span>
            <ul>
                <li>
                <input type={"checkbox"} value={props.details.Brand[0]} onChange={(e)=>handlechange(e,props.details.Brand[0])} name="Brands" />
                <label>{props.details.Brand[0]}</label>
                
                </li>
                <li>
                <input type={"checkbox"} value={props.details.Brand[1]}  name="Brands"  onChange={(e)=>handlechange(e,props.details.Brand[1])}/>
                <label>{props.details.Brand[1]}</label>
                
                </li>
                <li>
                <input type={"checkbox"} value={props.details.Brand[2]}  name="Brands"  onChange={(e)=>handlechange(e,props.details.Brand[2])}/>
                <label>{props.details.Brand[2]}</label>
                 
                </li>
                <li>
                <input type={"checkbox"} value={props.details.Brand[3]}  name="Brands"  onChange={(e)=>handlechange(e,props.details.Brand[3])}/>
                <label>{props.details.Brand[3]}</label>
                 
                </li>
                <li>
                <input type={"checkbox"} value={props.details.Brand[4]}  name="Brands"  onChange={(e)=>handlechange(e,props.details.Brand[4])}/>
                <label>{props.details.Brand[4]}</label>
                
                </li>
                <li>
                <input type={"checkbox"} value={props.details.Brand[5]}  name="Brands"  onChange={(e)=>handlechange(e,props.details.Brand[5])}/>
                <label>{props.details.Brand[5]}</label>
                 
                </li>
            </ul>
         </div>
         <div className="side1">
            <span  className="sideh">Prices</span>
            <ul>
                <li>
                <input type={"checkbox"} value='9112' />
                <label>Rs.149 to Rs.9112</label>

                </li>
                <li>
                <input type={"checkbox"} value='18075' />
                <label>Rs.9112 to Rs.18075</label>
                 
                </li>
                <li>
                <input type={"checkbox"} value='27038' />
                <label>Rs.18075 to Rs.27038</label>
                
                </li>
                <li>
                <input type={"checkbox"} value='36001' />
                <label>Rs.27038 to Rs.36001</label>
                 
                </li>
                <li>
                <input type={"checkbox"} value='46001' />
                <label>Rs.36001 to Rs.46001</label>
                 
                </li>
                <li>
                <input type={"checkbox"} value='56000' />
                <label>Rs.46001 to Rs.56000</label>
                 
                </li>
            </ul>
         </div>
         <div className="side1">
            <span  className="sideh">colors</span>
            <ul>
                <li>
                <input type={"checkbox"} value='black' onChange={(e)=>handlechange(e,"black")}/>
                <label>Black</label>
                
                </li>
                <li>
                <input type={"checkbox"} value='blue' onChange={(e)=>handlechange(e,"blue")}/>
                <label>Blue</label>
               
                </li>
                <li>
                <input type={"checkbox"} value='white' onChange={(e)=>handlechange(e,"white")}/>
                <label>White</label>
                
                </li>
                <li>
                <input type={"checkbox"} value='Navy Blue' onChange={(e)=>handlechange(e,"Navy Blue")}/>
                <label>Navy Blue</label>
                
                </li>
                <li>
                <input type={"checkbox"} value='green' onChange={(e)=>handlechange(e,"green")}/>
                <label>Green</label>

                </li>
                <li>
                <input type={"checkbox"} value='grey' onChange={(e)=>handlechange(e,"grey")}/>
                <label>Grey</label>
               
                </li>
                <li>
                <input type={"checkbox"} value='red' onChange={(e)=>handlechange(e,"red")}/>
                <label>Red</label>
                
                </li>
            </ul>
         </div>
         <div className="side1 sside">
            <span  className="sideh">Discount Range</span>
            <ul>
                <li>
                <input type={"checkbox"} value='10' onChange={(e)=>handlechange(e,10)}/>
                <label>10% and above</label>
               
                </li>
                <li>
                <input type={"checkbox"} value='20' onChange={(e)=>handlechange(e,20)}/>
                <label>20% and above</label>
                 
                </li>
                <li>
                <input type={"checkbox"} value='30' onChange={(e)=>handlechange(e,30)}/>
                <label>30% and above</label>
                 
                </li>
                <li>
                <input type={"checkbox"} value='40' onChange={(e)=>handlechange(e,40)}/>
                <label>40% and above</label>
                 
                </li>
                <li>
                <input type={"checkbox"} value='50' onChange={(e)=>handlechange(e,50)}/>
                <label>50% and above</label>
                 
                </li>
                <li>
                <input type={"checkbox"} value='60' onChange={(e)=>handlechange(e,60)}/>
                <label>60% and above</label>
                 
                </li>
                <li>
                <input type={"checkbox"} value='70' onChange={(e)=>handlechange(e,70)}/>
                <label>70% and above</label>
               
                </li>
                <li>
                <input type={"checkbox"} value='80' onChange={(e)=>handlechange(e,80)}/>
                <label>80% and above</label>
            
                </li>
                
            </ul>
         </div>
        
    </div>
    )
}