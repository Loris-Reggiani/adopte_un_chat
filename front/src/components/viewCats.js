import React, { useState } from 'react';
import App from '../App';
import backgroundVideo from '../vidbg.mp4'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import CardGroup from 'react-bootstrap/CardGroup'
import Toast from 'react-bootstrap/Toast'
import Carousel from 'react-bootstrap/Carousel'
import ToastContainer from 'react-bootstrap/ToastContainer'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

class viewCats extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        chatList: [],
        userInfo: [],
        itemModal: [],
        nameColor: "success",
        isAdmin: "client",
        checkButtonFavorisTrie: false,
        checkButtonNomTrie: false,
        checkButtonVilleTrie: false,
        checkButtonStatutTrie: false,
        show: false,
      };
      this.ToutesLesInfos = this.ToutesLesInfos.bind(this);
      this.ajouterFavoris = this.ajouterFavoris.bind(this);
      this.delete = this.delete.bind(this);
      this.adopter = this.adopter.bind(this);
      this.getAll = this.getAll.bind(this);
      this.changeFavorisTrie = this.changeFavorisTrie.bind(this);
      this.changeNomTrie = this.changeNomTrie.bind(this);
      this.changeVilleTrie = this.changeVilleTrie.bind(this);
      this.changeStatutTrie = this.changeStatutTrie.bind(this);
      this.administrator = this.administrator.bind(this);
    } 

    administrator() {
      if (this.state.isAdmin == "admin")
        this.setState({isAdmin:"client", nameColor: "success"});
      else if(this.state.isAdmin == "client")
        this.setState({isAdmin:"admin", nameColor: "danger"});
    }
  
    getAll() {
      Axios.get('http://localhost:8000/chats')
      .then((response) => {
        this.setState({chatList: response.data})
      });
      Axios.get('http://localhost:8000/user')
      .then((response) => {
        this.setState({userInfo: response.data})
      });
    }

    componentDidMount() {
      this.interval = setInterval(() => this.getAll(), 500);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }    

    ToutesLesInfos(item) {
      this.setState({show:true, itemModal: item});
    }

    ajouterFavoris(item) {
      Axios.post('http://localhost:8000/ajouterFavoris',{favoris: item.id});
      this.setState({show:false});
    }

    delete(item) {
      Axios.post('http://localhost:8000/delete',{favoris: item.id});
      this.setState({show:false});
    }

    adopter(item) {
      Axios.post('http://localhost:8000/adopter',{favoris: item.id});
      this.setState({show:false});
    }

    changeFavorisTrie(){
      if(this.state.checkButtonFavorisTrie){
        this.setState({checkButtonFavorisTrie:false});
        //PAS ACTIVER
      }
      else{
        this.setState({checkButtonFavorisTrie:true});

        //

        /*const chatsList = this.state.chatList;
        var newList = chatsList.sort(function (a, b) {
          return a.ville.localeCompare(b.ville);
        });
        Axios.post('http://localhost:8000/trie',{list: newList}).then((response) => {});*/
        
      }
    }
      changeNomTrie(){
      if(this.state.checkButtonNomTrie){
        this.setState({checkButtonNomTrie:false});
        //PAS ACTIVER
      }
      else{
        this.setState({checkButtonNomTrie:true});
        //ACTIVER
        const chatsList = this.state.chatList;
        var newList = chatsList.sort(function (a, b) {
          return a.nom.localeCompare(b.nom);
        });
        Axios.post('http://localhost:8000/trie',{list: newList}).then((response) => {});
      }
    }
    changeVilleTrie(){
      if(this.state.checkButtonVilleTrie){
        this.setState({checkButtonVilleTrie:false});
        //PAS ACTIVER
      }
      else{
        this.setState({checkButtonVilleTrie:true});
        const chatsList = this.state.chatList;
        var newList = chatsList.sort(function (a, b) {
          return a.ville.localeCompare(b.ville);
        });
        Axios.post('http://localhost:8000/trie',{list: newList}).then((response) => {});

      }
    }
    changeStatutTrie(){
      if(this.state.checkButtonStatutTrie){
        this.setState({checkButtonStatutTrie:false});
        //PAS ACTIVER
      }
      else{
        this.setState({checkButtonStatutTrie:true});
        //ACTIVER
        const chatsList = this.state.chatList;
        var newList = chatsList.sort(function (a, b) {
          return a.statut.localeCompare(b.vistatutlle);
        });
        Axios.post('http://localhost:8000/trie',{list: newList}).then((response) => {});
      }
    }

    render() {

      return(
        <div className="container text-center" style={{maxWidth: "100%",maxHeight:"100%"}}>
          <video autoPlay loop muted>
            <source src={backgroundVideo} type='video/mp4'/>
            <source src='https://www.youtube.com/watch?v=MV-AtvCp9-k' type='video/mp4'/>
            <source
                src="../vidbg.mp4"
                type="video/mp4"
        />
        Your browser does not support the video tag.

          </video>
          
          <div className="container my-3">
          <Link to="/administration">  <Button variant="warning" className="py-3 px-5">Administration</Button> </Link>
          </div>
          
          <div className="container my-3">
          <Button variant={this.state.nameColor} className="py-3 px-5" onClick={() => this.administrator()}>{this.state.isAdmin}</Button>
          </div>

          {this.state.userInfo ? 
          <div>
            <div class="w-100"><hr/></div>
            Bienvenue : {this.state.userInfo.mail}<div class="w-100"></div>
            
            {this.state.userInfo.chatsFavori ?
              <div>
              Favoris : {this.state.userInfo.chatsFavori}
              </div>
            : <div></div>
            }

            <div class="w-100"></div>
            <div class="w-100"><hr/></div>
          </div>
          : <div></div>}
          
          <ToggleButton
            key="1"
            className="mb-2 mx-3"
            id="1"
            type="checkbox"
            variant="outline-primary"
            checked={this.state.checkButtonFavorisTrie}
            value="1"
            onChange={(e1) => this.changeFavorisTrie()
          }
          >
            Favoris
          </ToggleButton>
          
          <ToggleButton
            key="2"
            className="mb-2 mx-3"
            id="2"
            type="checkbox"
            variant="outline-danger"
            checked={this.state.checkButtonNomTrie}
            value="2"
            onChange={(e2) => this.changeNomTrie()
          }
          >
            Nom
          </ToggleButton>

          <ToggleButton
            key="3"
            className="mb-2 mx-3"
            id="3"
            type="checkbox"
            variant="outline-info"
            checked={this.state.checkButtonVilleTrie}
            value="3"
            onChange={(e3) => this.changeVilleTrie()
          }
          >
            Ville
          </ToggleButton>

          <ToggleButton
            key="4"
            className="mb-2 mx-3"
            id="4"
            type="checkbox"
            variant="outline-dark"
            checked={this.state.checkButtonStatutTrie}
            value="4"
            onChange={(e4) => this.changeStatutTrie()
          }
          >
            Statut
          </ToggleButton>

          <div class="w-100"><hr/></div>

          <CardGroup className="d-flex justify-content-center">
          {this.state.chatList.map((item, i) => (
          <Button className="mx-2" style={{ backgroundColor:"transparent", border:"transparent"}} onClick={() => this.ToutesLesInfos(item)}>
            <Card key={i} style={{width: '18rem'}}>
              <Card.Img variant="top" src={item.photo} height={250} width={250} />
              <Card.Body>
                <Card.Title style={{color:"black"}}>{item.nom}</Card.Title>
              </Card.Body>
            </Card>
          </Button>
          ))}   
          </CardGroup>

        <Modal className="container text-center" style={{width: '25rem'}} show={this.state.show} onHide={() => this.setState({show:false})}>
          <Modal.Header>
            <Modal.Title style={{margin: "0 auto"}}>{this.state.itemModal.nom}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.itemModal.photo} class="img-fluid"></img><div class="w-100"></div>
            nom : {this.state.itemModal.race}<div class="w-100"></div>
            sexe : {this.state.itemModal.sexe}<div class="w-100"></div>
            ville : {this.state.itemModal.ville}<div class="w-100"></div>
            description : {this.state.itemModal.description}<div class="w-100"></div>
            statut : {this.state.itemModal.statut}
          </Modal.Body>
          <Modal.Footer style={{margin: "0 auto"}}>
            <Button variant="secondary" onClick={() => this.setState({show:false})}>
              Fermer
            </Button>
            <Button variant="primary" onClick={() => this.ajouterFavoris(this.state.itemModal)}>
              Ajouter en favoris
            </Button>
            {this.state.itemModal.statut === "pas adopté" ?
            <div>
            <Button variant="dark" onClick={() => this.adopter(this.state.itemModal)}>
              Adopter
            </Button>
            </div>
            : <div></div>}

            {this.state.isAdmin === "admin" ?
            <div>
            <Button variant="danger" onClick={() => this.delete(this.state.itemModal)}>
              Supprimer
            </Button>
            </div>
            : <div></div>}

          </Modal.Footer>
        </Modal>
        </div>
      );
    }
  }

export default viewCats;