# Building Superwumpus In Javascript

## Introduction

My wife came across the Superwumpus book at a thrift store and picked it up for me. I'm glad she did! I have no experience whatsoever with game programming, and I thought it would be fun to translate Superwumpus into a JavaScript application. In this mini-series, I'll document my process of building the game from scratch. Some principles:

**No Dependencies**

Everything we need to run Superwumpus on a modern browser (see below) will be made here with only standard libraries.

**Modern Browsers Only**

This is a series about Superwumpus, not a series about supporting every edge case browser that you would need to support in an enterprise application. In particular, I'll make use of ES6 JavaScript features which are [supported by major browsers.](https://caniuse.com/es6).

**Always Runnable**

Each chapter will end with runnable code. This doesn't mean that the application at the end of any chapter will be any good; just that you can always run it if you are following along at home. You can find each step of the game making process in a separate directory.


