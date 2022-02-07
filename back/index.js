const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

var userList = [
    {
        mail: "userDefault@gmail.com",
        password: "userDefault",
        isAdmin: false,
        chatsFavori: [],
        chatsAdopter: [],
    },
    {
        mail: "admin@gmail.com",
        password: "admin",
        isAdmin: true,
        chatsFavori: [],
        chatsAdopter: [],
    },
];

/*1 - Un nom
2 - Un date de naissance (donc un âge)
3 - Un race
4 - Un sexe
5 - Une ville
6 - Une description
7 - Une photo
8 - Un statut d'adoption*/

var chatList = [
    {
        nom: "Foufou",
        race: "chat des montagnes",
        sexe: "femme",
        ville: "Melun",
        description: "je suis une description",
        photo: "https://acegif.com/wp-content/uploads/cat-typing-12.gif",
        statut: "pas adopté",
        id: 1,
    },
    {
        nom: "Sung",
        race: "chat des pleines",
        sexe: "femme",
        ville: "Lyon",
        description: "BG de la street",
        photo: "https://c.tenor.com/ItD_VgzXzewAAAAd/cat-sung-jin-woo.gif",
        statut: "pas adopté",
        id: 2,
    },
    {
        nom: "Eude",
        race: "chat des montagnes",
        sexe: "femme",
        ville: "Amiens",
        description: "je suis une description",
        photo: "https://c.tenor.com/Yi5iA_Gjp0kAAAAM/cat-eyes-cat.gif",
        statut: "pas adopté",
        id: 3,
    },
    {
        nom: "Hervé",
        race: "chat des montagnes",
        sexe: "femme",
        ville: "Melun",
        description: "je suis une description",
        photo: "https://c.tenor.com/8u5Cfelah8EAAAAM/cat-cute-cat.gif",
        statut: "pas adopté",
        id: 4,
    },
    {
        nom: "Patrick",
        race: "chat des montagnes",
        sexe: "femme",
        ville: "Paris",
        description: "je suis une description",
        photo: "https://thumbs.gfycat.com/CookedWideeyedBovine-max-1mb.gif",
        statut: "pas adopté",
        id: 5,
    },
];

app.get('/chats',(req, res) => {
    res.send(chatList);
});

app.get('/user',(req, res) => {
    res.send(userList[0]);
});

app.post('/ajouterFavoris',(req, res) => {
    if(!userList[0].chatsFavori.includes(req.body.favoris)){
        userList[0].chatsFavori.push(req.body.favoris); 
    }
});

app.post('/delete',(req, res) => {
  console.log(req);
  chatList.forEach(function(element, i) {
    if (element.id == req.body.favoris){
        console.log("element id "+ element.id);
        console.log("req body "+ req.body.favoris);
        chatList.splice(req.body.favoris - 1, 1);
//        chatList[req.body.favoris - 1] = null;
    }
  });
});

app.post('/adopter',(req, res) => {
    console.log(req);
    chatList.forEach(function(element) {
      if (element.id == req.body.favoris){
          chatList[req.body.favoris - 1].statut = "adopté";
      }
    });

    userList[0].chatsAdopter.push(req.body.favoris);
    res.send("ok");
});

app.post('/trie',(req, res) => {
    chatList = req.body.list;
});