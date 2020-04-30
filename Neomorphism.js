import React, { Component } from 'react';
import "./neomorphism.css";
export default class Neomorphism extends Component {
  render() {
    return (
        <div className="row" style={{padding:"0px",margin:"0px"}}>
            <div className="col-sm-6">
            <div className="parent" style={{backgroundColor:"#afd275",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
       <div className="child child-1">
            <h3 style={{alignSelf:"center"}}>Drop Shadow</h3>
       </div>
       <div className="child child-2">
       <h3 style={{alignSelf:"center"}}>Inset Shadow</h3>
       </div>
       <br/>
       
      </div>
            </div>
            <div className="col-sm-6">
            <div className="parent" style={{backgroundColor:"#afd275",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
       <div className="child-side child-3">
            <h3 style={{alignSelf:"center"}}>Convex</h3>
       </div>
       <div className="child-side child-4">
       <h3 style={{alignSelf:"center"}}>Concave</h3>
       </div>
       <br/>
       
      </div> 
                </div>
        </div>
     
    );
  }
}
