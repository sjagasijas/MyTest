import React, {Component} from 'react';
import axios from 'axios';

export default class Table extends Component {

    constructor () {
      super();
      this.state={
          song:[]
        }
    }

    componentDidMount (){
      axios.get('http://mytest.test/song')
      .then(response =>{
        this.setState({song:response.data});
      });
    }

    onDelete(song_id){
      axios.delete('http://mytest.test/song/delete/'+ song_id)
      .then(response=>{

      });
    }


    render(){
    return (
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {
    this.state.song.map(song=>{
      return (

    <tr>
      <th scope="row">{song.id}</th>
      <td>{song.title}</td>
      <td>{song.created_at}</td>
      <td><a href="#" onClick={this.onDelete.bind(this,song.id)}> Delete </a> </td>
    </tr>

     )
   })
   }

    
  </tbody>
</table>

);
}

}