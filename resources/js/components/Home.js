import React, {Component, useState, setState} from 'react';
import {Card,Button,Row,Col,Image,Modal} from "react-bootstrap"




export default class Home extends Component {

  

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          show: false,
          title:'',
          artist:'',
          type:'',
          song:[]
        };
      }

      




componentDidMount(){

    fetch("http://www.songsterr.com/a/ra/songs.json?pattern=" + "Song")
    .then(res => res.json())
    .then(
      (result) => {
          console.log(result)
        this.setState({
          isLoaded: true,
          items: result
        });
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

    axios.get('http://127.0.0.1:8000/song')
    .then(response =>{
      this.setState({song:response.data});
    });
}





handleClose(){ 
    this.setState({ show:false });
    }



 openModal(){
        this.setState({ show:true });
}

onSubmit(item){
    // e.preventDefault();
    const song = {
        title : item
    }
    console.log("here"+item)
    axios.post('http://127.0.0.1:8000/song/store', song)
    

    
    axios.get('http://127.0.0.1:8000/song')
    .then(response =>{
      this.setState({song:response.data});
    });
    
}


onDelete(song_id){
    axios.delete('http://127.0.0.1:8000/song/delete/'+ song_id)

    axios.get('http://127.0.0.1:8000/song')
    .then(response =>{
      this.setState({song:response.data});
    });
   
  }




render() {
 



    return (


<div className="MainContainer">

    <div className="SubContainer">
  Music

    </div>

    <h1>Featured Songs</h1>


<Row>


{this.state.items.map((item,index) => (

 index < 10 ? 
        <Col className="cardCol">
        <Card className="card">
        <Card.Img className="cardImage" variant="top" src="https://www.blhsnews.com/wp-content/uploads/2018/11/apple-music-note-800x420.jpg" />
        <Card.Body className="cardBody">
        <Card.Title className="title">{item.title}</Card.Title>
        <Card.Text className="subtitle">
         {item.artist.name}
        </Card.Text>


        <div>
        <Button style={{width:'100%'}} variant="primary" onClick={() => {this.openModal(); this.setState({ artist:item.artist.name , type:item.type,title: item.title }); }}>Show</Button>

        <Button style={{width:'100%'}} variant="primary" onClick={() => { this.onSubmit(item.title); }}>Heart</Button>
       
        </div>
        
        </Card.Body>
        </Card>
        </Col>
: null

)
)}

</Row>



<Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Song Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Title: {this.state.title} <br/>
            Artist: {this.state.artist} <br/>
            Type: {this.state.type} <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose.bind(this)}>
            Close
          </Button>
        </Modal.Footer>
</Modal>



<h1>My Playlist</h1>



{this.state.song.map((item,index) => (

<div className="songItem" >
    <div style={{flex:1}}>
         <img style={{width:80,height:80,borderRadius:10,display:'cover'}} src="https://mdbootstrap.com/img/Others/documentation/1.jpg" />
             <span >
                <span>{item.id}</span><br/>
                <span>{item.title}</span><br/>
                <span>{item.created_at}</span><br/>
                <a style={{cursor:'pointer'}} onClick={this.onDelete.bind(this,item.id)}> Delete </a>
             </span>
    </div>
</div>

)
)
}



</div>

);
 }
}

