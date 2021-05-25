# Chapter 1 - Foundation

Welcome! In this chapter, we will set up everything we need to hack on our game. I'd like to avoid all dependencies so that, if you follow along, you will have a complete grasp of every aspect of the Superwumpus. There will be no magic left to be handled by 3rd parties (except, of course, for the giant of magic that is modern-day browsers). To keep it focused, that does mean that I'll be glossing over introductory questions about how websites work and how to use JavaScript. There are a ton of great resources out there if you need to reference them on our journey. That said, this is no [*Crafting Interpreters*](http://craftinginterpreters.com/) - if you have a decent grasp on programming generally, you should be able to follow along.

## Set Up

All you need is a text editor to write the code and a modern browser to play with it. Seriously! We are going to program Superwumpus like it's December 1997. That said, a good IDE can help in a myriad of ways, and during the writing of this mini-series I used [live-server](https://github.com/tapio/live-server) for hot-reloading the code in the browser (but you can just use the browser and open the files directly). I leave it to you.

## First Files

Let's make the files that we need to run Superwumpus:

src/
├── index.html
├── superwumpus.css
└── superwumpus.js

index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Superwumpus</title>
    <link href="superwumpus.css" content="text/css" rel="stylesheet">
</head>
<body>
<p>
    Wumpus!
</p>
</body>
<script src="superwumpus.js" content="text/javascript"></script>
</html>
```

superwumpus.css
```css
p {
    font-size: 2.5rem;
    display: inline-block;
}
```

superwumpus.js
```javascript
const element = document.querySelector('p')

function rotate (deltaTime) {
    let rotation = (deltaTime / 50) % 360
    element.setAttribute('style', `transform: rotate(${rotation}deg)`)
    window.requestAnimationFrame(rotate)
}

window.requestAnimationFrame(rotate)
```

Copy these into your files and make sure you see the word `Wumpus!` spinning in place in your browser. If so, you are good to move on to the next chapter.