import React, { Component, useState, setState } from "react";
import { Card, Button, Row, Col, Image, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      bgColor: "white",
      error: null,
      isLoaded: false,
      items: [],
      show: false,
      title: "",
      artist: "",
      type: "",
      song: [],
      searchValue:"",
    };
    
  }

  componentDidMount() {
    fetch("http://www.songsterr.com/a/ra/songs.json?pattern=" + "Song")
      .then((res) => res.json())
      .then(
        (result) => {
          //console.log(result);
          this.setState({
            isLoaded: true,
            items: result,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    axios.get("/song").then((response) => {
      this.setState({ song: response.data });
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  openModal() {
    this.setState({ show: true });
  }

  onSubmit(item,artist) {
    // e.preventDefault();
    const song = {
      title: item,
      artist:artist,
    };
    //console.log("here" + item);
    axios.post("/song/store", song);

    axios.get("/song").then((response) => {
      this.setState({ song: response.data });
    });
  }

  onDelete(song_id) {
    axios.delete("/song/delete/" + song_id);

    axios.get("/song").then((response) => {
      this.setState({ song: response.data });
    });
  }


  handleChange(e) {
     this.setState({
      searchValue: e.target.value
    });

    const search = {
			search : this.state.searchValue
		}
    //console.log(this.state.searchValue);
    axios.post("/song/search", search).then((response) => {
       this.setState({ song: response.data });
    });
    //axios.get("/song/search").then((response) => {
    //  this.setState({ song: response.data });
    //});
  }


  linkClick(){
    this.setState({
      bgColor: "red"
    })
  }

  render() {
    return (
      <div className="MainContainer">
        <div className="SubContainer">Music</div>

        <h2>Featured Songs</h2>

        <Row>
          <div id="container" className="container-fluid py-2">

          <div className="d-flex flex-row flex-nowrap">

              {this.state.items.map((item, index) =>
                index < 10 ? (
                  <Col className="cardCol">
                    <Card className="card card-body">
                      <Card.Img
                        className="cardImage"
                        variant="top"
                        src="https://www.blhsnews.com/wp-content/uploads/2018/11/apple-music-note-800x420.jpg"
                      />
                      <Card.Body className="cardBody">
                        <Card.Title className="title">{item.title}</Card.Title>
                        <Card.Text className="subtitle">
                          {item.artist.name}
                        </Card.Text>

                        
                          <a className="showMore" 
                            onClick={() => {
                              this.openModal();
                              this.setState({
                                artist: item.artist.name,
                                type: item.type,
                                title: item.title,
                              });
                            }}
                          >
                            show more 
                          </a>

                          <a className="addToPlaylist"
                            onClick={() => {
                              this.linkClick.bind(this);
                              this.onSubmit(item.title,item.artist.name);
                            }}>

                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill={this.state.bgColor} xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>

                          </a>
                        
                      </Card.Body>
                    </Card>
                  </Col>
                ) : null
              )}
              
              </div>
          </div>
        </Row>

        <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Song Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Title: {this.state.title} <br />
            Artist: {this.state.artist} <br />
            Type: {this.state.type} <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose.bind(this)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>



        <div className="playlistContainer">

        <div className="two-col-true">
        <h2>My Playlist</h2> <input className="form-control" type="text" placeholder="Search" aria-label="Search on Playlist.." value={this.state.searchValue} onChange={this.handleChange}/>
        </div>
        
        <div className="songItemContainer">

        {this.state.song.map((item, index) => (
          <div className="songItem">
            <div className="three-col-true">
              <img
                style={{
                  width: 80,
                  height: 80,
                  borderRadius:10,
                  display: "cover",
                }}
                src="https://mdbootstrap.com/img/Others/documentation/1.jpg"
              />
              <div className="songDetails" style={{ paddingTop: 25,}}>

                <div className="title card-title h5">{item.title}</div>

                <div className="subtitle card-text">{item.artist}</div>

              </div>

              <div className="colButton">
              <a style={{ cursor: "pointer" }} onClick={this.onDelete.bind(this, item.id)}>

              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>

              </a>

              </div>  

            </div>
          </div>
        ))}
        
        </div>  

        </div> 

      </div>
    );
  }
}
