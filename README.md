# TWEB TE2
## Introduction
Le but de ce travail écrit est de réaliser une application web offrant de la visualisation graphique d'informations récupérées sur une API (GitHub, StackExchange, CrunchBase) ou alors d'étudier le mécanisme de sécurité CORS selon le sujet choisi.

Voici les 4 sujets proposés :

- **Sujet 1:** Développer une application AngularJS pour afficher du contenu obtenu via l'API 
- **Sujet 2:** Développer une application AngularJS pour afficher du contenu obtenu via l'API GitHub
- **Sujet 3:** Développer une application AngularJS pour afficher du contenu obtenu via l'API CrunchBase
- **Sujet 4:** Développer une application AngularJS pour illustrer le fonctionnement du mécanisme CORS

J'ai choisi le *sujet 2*.

##Étude "API Github"
L'API github est disponible à l'URL suivante : [https://api.github.com](https://api.github.com).

La documentation complète de l'API peut être visualisé à l'adresse suivante : [Documentation Developper](https://developer.github.com/v3/).

###Possibilitée(s)
Il est possible, depuis cette API, tout d'abord, d'effectuer des recherches, d'utilisateurs, de dépots. Également, à l'aide du nom de login de l'utilisateur, on peut récupérer des informations plus précises à propos de l'utilisateur, des informations sur ces dépôts et autres statistiques.

###Limite(s)
![Limite API](doc/img/limit.png)
L'API Github possède une limite en terme de nombre de réquètes par adresse ip selon deux cas :

1. Identifié : *5,000 requêtes par heure*
2. Non-identifié : *60 requêtes par heure*  

Il est donc nécessaire de s'authentifier pour que notre application ne soit pas handicapée par cette limite. J'ai utilisé des requêtes utilisant la **Basic Authentification**.

##Implémentation technique
Pour commencer, je suis parti du générateur yeoman **Angular** proposé par la team Yeoman justement.

### Générateur Yeoman 
Ce projet a été généré à l'aide de la commande [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.
#### Compilation & développement

Utilisez `grunt` pour compiler et  `grunt serve` pour afficher.

#### Test

Utilisez `grunt test` pour lancer les procédures de test avec Karma.

#### Authentification
Pour passer en mode authentifié et profiter des 5,000 requêtes par heure, je me suis basé sur des requêtes **Basic Authentification** dont voici l'implémentation technique :
![Basic Auth](doc/img/auth.png)


