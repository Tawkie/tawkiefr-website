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
