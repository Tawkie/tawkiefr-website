# tawkie.fr
Website for [Tawkie][tawkie].

Uses [Hugo][hugo] and [Tailwind][tailwindcss].

[tawkie]: https://www.tawkie.fr/
[hugo]: https://gohugo.io/
[tailwindcss]: https://tailwindcss.com/docs/

## Building

```
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/index.css --jit --minify
hugo --gc --minify
```

Output should be in `./public`.

## Ajouter du contenu dans la FAQ

Pour ajouter une question dans la FAQ, ouvrez le fichier
`content/faq/index.fr.md` (`content/faq/index.en.md` pour la FAQ en anglais) et
ajoutez-y une question/réponse en utilisant [le
Markdown][markdown].

[markdown]: https://fr.wikipedia.org/wiki/Markdown

Pour ajouter une image à une question, ajoutez le fichier dans le dossier
`static/faq/` et référencez-le dans le fichier `content/faq/index.fr.md`
(`content/faq/index.en.md` pour la FAQ en anglais) en utilisant la syntaxe
suivante :

``` markdown
![Texte alternatif](/faq/nom-du-fichier.png)
```

## Charte graphique

Logo (png, lourd sans compression):

![logo](./logo-v1.2-lourd.png)

```
jaune clair : #feea77
jaune/orangé : #faab22
rose : #a34bb0
violet : #3614a6
```
