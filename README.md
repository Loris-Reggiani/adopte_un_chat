## AUXILIA : Test de recrutement

Nous sommes en plein développement de notre premier produit : Chadopt'.
Chadopt' est l'équivalent du celèbre site https://www.adopteunmec.com/ mais pour adopter un chat.

Objectif de l'exercice : Réaliser une première version de l'interface qui permettra de voir les chats à adopter.
Cette interface devra également permettre l'administration de cette liste de chats.

Remarque : il n'est pas demandé de gérer le login de l'utilisateur.

### Specs :

Un chat est défini par : 

  -  1 - Un nom
  -  2 - Un date de naissance (donc un âge)
  -  3 - Un race
  -  4 - Un sexe
  -  5 - Une ville
  -  6 - Une description
  -  7 - Une photo
  -  8 - Un statut d'adoption

### Front-end

En configuration client (visiteur du site), on souhaite :

  -  1 - Lister les chats à adopter au format "Card" avec au moins sa photo et son nom
  -  2 - Cliquer sur un chat pour obtenir l'ensemble des informations (via une modale)
  -  3 - Pouvoir mettre un chat en favori et pouvoir filtrer la liste des chats selon les favoris ou non
  -  4 - Pouvoir trier l'affichage par nom, ville ou statut d'adoption
  -  5 - Cliquer sur un bouton pour adopter le chat.
 

En configuration admin (gestion de la liste des chats), on souhaite :

  -  1 - Pouvoir modifier l'ensemble des infos pour chaque chat existant (via la modale du point 2 du mode client)
  -  2 - Pouvoir ajouter ou supprimer un chat de la liste


Infos complémentaires : 

  -  1 - L'action "Adopter" aura pour but d'envoyer une demande d'adoption. Le client ne pourra plus refaire une demande pour le même chat mais pourra annuler sa demande en cours. Les statuts possibles pour un chat sont : Adoptable, Demande en cours, Adopté. Bien évidemment, on ne peut adopter un chat déjà adopté par quelqu'un d'autre.
  -  2 - Un chat peut faire l'objet de plusieurs adoptions en même temps (par différents clients). Cette info devra apparaitre côté admin
  -  3 - Les photos des chats peuvent être récupérées via ce lien http://aws.random.cat/meow. 
  Il fournit une image de chat aléatoirement et à la volée.
  -  4 - L'interface doit être sensiblement la même dans les deux configs. Les composants doivent s'adapter pour afficher ou masquer les éléments nécéssaires ou non dans l'une ou l'autre des configs.

### Back-end

- 1 - Des routes permettent d'ajouter, supprimer, modifier, lister les chats existants (avec, si possible, des paramètres de filtrages)
- 3 - Il n'y a pas de base de données, les données sont uniquement gérées dans un tableau/liste (ou autre) côté serveur.

### Technos :

- Front :  React
- Back : Framework Js au choix (Node/Express/Next/etc.)
- Il est permis d'utiliser d'autres modules en supplément (ex : Redux).

### Rendu :

- Le design et les couleurs sont libres (impressionne nous !).
- Sur un repos Github (n'hésite pas à pousser régulièrement et pas tout en une seule fois ^^)
- README.md (les choses nécessaires à une reprise de projet, setup dépendance, etc. )

### Bonus

- Une évolution interessante serait de rajouter un indicateur exploitant le nombre de personnes ayant ajouté un chat en favori pour montrer la popularité de chaque chat
- Idéalement, on souhaiterais que notre site ait une mémoire !
Il faudrait mettre en place une base de données permettant de stocker les infos de chaque chat (avec historique des chats déjà adoptés mais plus visibles, etc. )
- On aimerait quand même avoir une page de login pour donner l'accès à plusieurs clients
- Si l'application est responsive, c'est un +
- Toute initiative permettant d'améliorer l'UX est la bienvenue.

### Temps imparti

Il n'y a pas de temps imparti a proprement dit. Cependant, nous estimons que, selon le profil, le test ne devrait pas prendre plus de (en heure de travail):

- Junior : 24h. Le fait de ne pas avoir fini le projet n'est pas éliminatoire !
- Senior : 12h
