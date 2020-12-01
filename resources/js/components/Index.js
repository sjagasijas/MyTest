import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

export default class Index extends Component {
    render(){
    return (
        
        <div /*style={{backgroundColor:'#C7C9CB', margin:50 }}*/ className="container">
          
           <Header/>
           

        </div>
    );
 }
}

//export default Index;

if (document.getElementById('body')) {
    ReactDOM.render(<Index />, document.getElementById('body'));
}
