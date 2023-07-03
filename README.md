# tawkie.fr
Website for Tawkie

Uses [Hugo][hugo] and [Tailwind][tailwindcss].

[hugo]: https://gohugo.io/
[tailwindcss]: https://tailwindcss.com/docs/

## Building

```
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/index.css --jit --minify
hugo --gc --minify
```

Output should be in `./public`.
