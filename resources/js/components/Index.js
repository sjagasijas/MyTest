import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

export default class Index extends Component {
    render(){
    return (
        
        <div /*style={{backgroundColor:'#C7C9CB', margin:50 }}*/ className="container">
          
           <Header/>
           
            {/* <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div> */}
            <Footer/>
        </div>
    );
 }
}

//export default Index;

if (document.getElementById('body')) {
    ReactDOM.render(<Index />, document.getElementById('body'));
}
