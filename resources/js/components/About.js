import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header';

export default class About extends Component {

	constructor (){
		super();
		this.onchangeSongTitle = this.onchangeSongTitle.bind(this);
		this.onSubmit= this.onSubmit.bind(this);
		this.state={
			title:''
		}
	}

	onchangeSongTitle(e){
		this.setState({
			title:e.target.value
		});
	}

	onSubmit(e){
		e.preventDefault();
		const song = {
			title : this.state.title
		}
		axios.post('http://mytest.test/song/store', song)
		.then(res=>console.log(res.data));
	} 


    render(){
    return (

        <div className="container">
         
         <form onSubmit={this.onSubmit}>
         	<input type="text" className="form-control" id="title" placeholder="Song Name" value={this.state.title} onChange={this.onchangeSongTitle} />
         	<input type="submit" value="Submit" />
         </form>

        </div>
    );
 }
}

