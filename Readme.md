## HTML5

## Tailwind

https://tailwindcss.com/docs/installation

```sh
node -v
npm -v
npm init -y (package.json)

npm install -D tailwindcss
npx tailwindcss init (tailwind.config.js)
package.json{
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "tailwind": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  }
}
npm run tailwind
```
