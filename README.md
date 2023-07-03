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

## Charte graphique

Logo (png, lourd sans compression):

![logo](./logo-v1.2-lourd.png)

```
jaune clair : #feea77
jaune/orangé : #faab22
rose : #a34bb0
violet : #3614a6
```
