import React from "react";
import { data } from "./data";
import houseimg from './house1.png'
import bed from './bed.png'
import bath from './bath.png'
import car from './car.png'
import ruler from './ruler.png'
import resize from './resize.png'
import like from './like.svg'
import like2 from './like2.svg'
import './App.css'
class House extends React.Component{
constructor(props){
    super(props)
    this.state={
    cloud:data,
    red:like,
}
}
render(){
    let redmaker=()=>{
       if(this.state.red===like) this.setState({red:like2})
       else this.setState({red:like})
        console.log(this.state.red)
    }
    return( <div className="container">{
   this.state.cloud.map((value,index)=>
  
    <div className="wrapper">
        <div><img src={houseimg}></img></div>
         <div className="wrapper2">
            <div className="title-wrap">
              <p className="title">{value.name}</p>
              <p className="title-place">{value.place}</p>  
           </div>
       <div className="description">
         <div className="aligner"><img src={bed}></img><p>{value.room}</p></div>
         <div className="aligner"><img src={bath}></img><p>{value.bath}</p></div>
         <div className="aligner"><img src={car}></img><p>{value.garage}</p></div>
         <div className="aligner"><img src={ruler}></img><p>{value.size}</p></div>
       </div>
        <div className="bottom-wrap">
              <div className="bottom-left">
                <p className="preprice">{value.preprice}</p>
                <p className="title">{value.price}</p>
              </div>
            <div className="bottom-right">
               <div><img src={resize}></img></div>
               
               <div key={index} className="like-course" onClick={redmaker}><img className="heart" src={this.state.red}></img></div>
            </div>  
             </div>
        </div>
       </div>  
   

   )}</div>
    )
}
}
export {House}
