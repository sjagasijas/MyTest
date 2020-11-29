import React, {Component} from 'react';
import Header from './Header';

export default class About extends Component {
   
    render(){

    return (

        <div style={MainContainer}>
        Thi is al MUsics
        <div style={SubContainer}>


        </div>
            
        </div>
    );
 }
}


const MainContainer = {

  backgroundColor:'#C7C9CB',
  margin:50,
  width:'100%',
  borderRadius:5
};

const SubContainer = {
    backgroundColor:'#FFFFFF',
    borderRadius:5
};



