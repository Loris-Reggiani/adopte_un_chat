import React from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import CardGroup from 'react-bootstrap/CardGroup'
import Toast from 'react-bootstrap/Toast'
import Carousel from 'react-bootstrap/Carousel'
import ToastContainer from 'react-bootstrap/ToastContainer'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

/*
3 - pouvoir filtrer la liste des chats selon les favoris ou non
4 - Pouvoir trier l'affichage par nom, ville ou statut d'adoption

En configuration admin (gestion de la liste des chats), on souhaite :

1 - Pouvoir modifier l'ensemble des infos pour chaque chat existant (via la modale du point 2 du mode client)
2 - Pouvoir ajouter ou supprimer un chat de la liste

Infos complémentaires :

1 - L'action "Adopter" aura pour but d'envoyer une demande d'adoption. Le client ne pourra plus refaire une demande pour le même chat mais pourra annuler sa demande en cours. Les statuts possibles pour un chat sont : Adoptable, Demande en cours, Adopté. Bien évidemment, on ne peut adopter un chat déjà adopté par quelqu'un d'autre.
2 - Un chat peut faire l'objet de plusieurs adoptions en même temps (par différents clients). Cette info devra apparaitre côté admin
3 - Les photos des chats peuvent être récupérées via ce lien http://aws.random.cat/meow. Il fournit une image de chat aléatoirement et à la volée.
4 - L'interface doit être sensiblement la même dans les deux configs. Les composants doivent s'adapter pour afficher ou masquer les éléments nécéssaires ou non dans l'une ou l'autre des configs.

Sur un repos Github (n'hésite pas à pousser régulièrement et pas tout en une seule fois ^^)
README.md (les choses nécessaires à une reprise de projet, setup dépendance, etc. )
Bonus
Une évolution interessante serait de rajouter un indicateur exploitant le nombre de personnes ayant ajouté un chat en favori pour montrer la popularité de chaque chat
Idéalement, on souhaiterais que notre site ait une mémoire ! Il faudrait mettre en place une base de données permettant de stocker les infos de chaque chat (avec historique des chats déjà adoptés mais plus visibles, etc. )
On aimerait quand même avoir une page de login pour donner l'accès à plusieurs clients
Si l'application est responsive, c'est un +*/

class Admin extends React.Component {

    constructor(props) {
      super(props);
    } 
  
    render() {
      return(
        <a href="/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
      );
    }
  }

export default Admin;