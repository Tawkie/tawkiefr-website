---
title: "Tawkie - Foire aux questions"
description: |
  Foire aux questions de Tawkie, l'appli qui centralise tes messages et te
  permet de gagner du temps et de l'énergie mentale.
date: 2023-07-10
---


## Est-ce que je peux envoyer des messages vocaux, des vidéos, des images... ?

Oui ! Ces différents contenus peuvent être envoyés sur la plupart des réseaux
sociaux, selon les fonctionnalités supportés.

Les fichiers peuvent aussi être envoyés sur certains réseaux. Nous prévoyons
d'étendre cette fonctionnalité où l'envoi de fichier n'est pas nativement
supporté, en fournissant un lien de téléchargement.


## Est-ce que les messages que j'envoie depuis Tawkie apparaîssent sur mes réseaux sociaux ?

Oui ! Les messages envoyés depuis Tawkie seront visibles depuis les applications
des réseaux sociaux.

L'inverse n'est pas toujours vraie, sur certaines plateformes les messages que
tu envoies ne sont pas visibles sur Tawkie. En revanche les messages que tu
reçois de tes correspondants le sont.


## Qui peut utiliser Tawkie ?

Tawkie est une application disponible partout dans le monde pour les personnes majeures.

## Où puis-je me créer un compte ?

Face à la grande demande, Tawkie fonctionne pour le moment en liste d'attente. Pour s'inscrire rendez vous sur notre site [tawkie.fr][tawkie], cliquez sur "Sign Up" puis entrez et validez votre mail pour prendre votre place dans la liste d'attente. Vous pourrez alors choisir votre nom d'utilisateur et voir votre place dans la queue.

## Combien de temps dois-je attendre dans la lise d'attente ?

Nous faisons tout notre possible pour ouvrir le maximum de comptes chaque jour. Le temps d'attente moyen est autour de 7 jours. 

[tawkie]: https://www.tawkie.fr


## A quoi correspondent les serveurs alpha.tawkie.fr et loveto.party ?

Tawkie repose sur la technologie [Matrix][matrix]. Matrix se découpe en serveurs sur lesquels les différents comptes utilisateurs sont répartis. Le serveur alpha.tawkie.fr est le votre, celui des client·es et loveto.party est le serveur que nous utilisons avec nos équipes pour travailler et faire les tests. 

[matrix]: https://matrix.org/
[matrix-clients]: https://matrix.org/ecosystem/clients/


## Comment se connecter sur Tawkie ?

Après avoir téléchargé et lancé l'application Tawkie, vous pouvez rentrer votre identifiant et votre mot de passe temporaire. Attention à bien avoir choisi le serveur **alpha.tawkie.fr**.
Il est important de changer votre mot de passe au plus vite pour limiter le risque.

## Comment se connecter sur les différents réseaux sociaux ?

Il est IMPORTANT d'activer l'authentification à double facteur (2FA) avant
d'essayer de se connecter. Cela permet de renforcer la sécurité de votre compte
et éviter que les plateformes ne s'inquiètent d'une nouvelle connexion.

Une fois connecté sur Tawkie, envoie un message aux bots suivants :

```
Facebook Messenger : @facebookbot:alpha.tawkie.fr
Instagram          : @instagrambot:alpha.tawkie.fr
Whatsapp           : @whatsappbot:alpha.tawkie.fr
Signal             : @signalbot:alpha.tawkie.fr
LinkedIn           : @linkedinbot:alpha.tawkie.fr
```

Une fois la conversation lancée, envoie la commande `help` pour afficher les
commandes disponibles. Généralement, il faut se connecter avec la commande
`login` (après avoir activé la 2FA sur le réseau en question).

Une fois connecté.e, tes conversations récentes devraient s'afficher. Pour
joindre des personnes non listées, tu peux généralement utiliser la commande
`search` dans la conversation avec le bot. Sinon, essaie d'envoyer un message
depuis la messagerie en question.


## Comment se connecter sur LinkedIn ?

La connexion à LinkedIn est plus technique que pour les autres. Pour le moment, tu dois suivre la méthode suivante :

1. Ouvre une conversation avec le bot du pont LinkedIn
   (`@signalbot:alpha.tawkie.fr`)
2. Ouvre une nouvelle fenêtre de navigation privée
3. Navigue vers https://www.linkedin.com
4. Connecte-toi
5. Ouvre l'onglet Storage des outils de développement (Shift + F9 sur Firefox)
   ou le panneau affichant les cookies. Documentation pour
   [Firefox][cookies-firefox], [Chrome][cookies-chrome].
6. Localise les cookies `li_at` et `JSESSIONID`.
7. Envoie un message au bot du pont LinkedIn avec la syntaxe suivante : `login
   <li_at> <jsessionid>`. Par exemple : `login MySuperLongLiAtToken
   ajax:mysessiontoken`. Il ne devrait pas y avoir de guillemets doubles (`"`).
8. Contacte le [service d'assistance][helpdesk] en cas d'échec.

[cookies-firefox]: https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html
[cookies-chrome]: https://developer.chrome.com/docs/devtools/application/cookies/
[helpdesk]: #comment-fonctionne-honoroit-le-service-de-dépannage-


## Est-ce que je peux désinstaller les applications maintenant ?

Dans un premier temps, nous recommandons de les garder installées au moins
quelques jours, pour s'assurer que tout fonctionne bien.

Les applications dépendant du numéro de téléphone doivent être maintenues
installées, particulièrement :
- Whatsapp
- Signal
- Télégram

Les autres applications semblent pouvoir être désinstallées, mais nous
recommandons de les maintenir installées.


## Comment naviguer encore plus efficacement mes messages ?

Sur ordinateur, [Element][element] propose une multitude de raccourcis, visible
en effectuant le raccourci `ctrl + /`.

## Que veut dire l'erreur "⚠ Your reaction may not have been bridged: unknown target event " ?

Sur Instagram, lorsque quelqu'un nous envoie un post, on reçoit plusieurs
messages contenant l'image/vidéo puis la description. On peut rajouter une
réaction sur le dernier message (contenant souvent le lien du post). Lorsque
l'on réagit à un des autres messages, on obtient cette erreur.

## Comment fonctionne Honoroit, le service d'assistance ?

Pour obtenir de l'assistance de Tawkie, plus simple est d'envoyer un message à
`@honoroit:alpha.tawkie.fr`. Cette nouvelle conversation ouvrira un ticket de
support auquel nous pourrons répondre !

## Comment puis-je supprimer mon compte ?

Pour le moment le plus simple est de nous envoyer un message sur Honoroit (voir question
précédente). Alternativement, envoie-nous un mail à [contact@tawkie.fr](mailto:contact@tawkie.fr).

## Je ne trouve pas réponse à ma question, comment vous contacter ?

Désolé que cette FAQ n'ait pas pu t'aider.

Si es connecté.e sur Tawkie, envoie-nous un message via
[Honoroit][honoroit].

Sinon, envoie-nous un mail à [contact@tawkie.fr](mailto:contact@tawkie.fr).

S'il s'agit d'une question technique, envoie un mail à [root@tawkie.fr](mailto:root@tawkie.fr).
