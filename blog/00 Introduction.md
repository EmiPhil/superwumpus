# Building Superwumpus In Javascript

## Introduction

My wife came across the [*Superwumpus*](https://archive.org/details/Super-Wumpus-Jack-Emmerichs-1978) book at a thrift store and picked it up for me. I'm glad she did! I have no experience whatsoever with game programming, and I thought it would be fun to translate Superwumpus into a JavaScript application. In this mini-series, I'll document my process of building the game from scratch. Some principles:

**No Dependencies**

Everything we need to run Superwumpus on a modern browser (see below) will be made here with only standard libraries.

**Modern Browsers Only**

This is a series about Superwumpus, not a series about supporting every edge case browser that you would need to support in an enterprise application. In particular, I'll make use of ES6 JavaScript features which are [supported by major browsers](https://caniuse.com/es6).

**Always Runnable**

Each chapter will end with runnable code. This doesn't mean that the application at the end of any chapter will be any good; just that you can always run it if you are following along at home. You can find each step of the game making process in a separate directory.

## History the Wumpus

Gregory Yob's 1973 game [*Hunt the Wumpus*](https://en.wikipedia.org/wiki/Hunt_the_Wumpus) is the predecessor to the game described by Jack in *Superwumpus*. The original game is described as one of the earliest examples of a survival horror game. The horror genre is also a favorite in our household, and bringing the Wumpus to life again is really exciting.

We'll keep the survival horror context in mind as we design the user interface of the game - the original game was dark (text only!) and I want to keep that in this interpretation. Another key aspect I want to keep alive is the concept of the dodecahedron based map - this was, and is, a crucial element to the game and needs to be emphasized in our interpretation.

## The Game

In *Hunt the Wumpus*, the goal of the game was to find and kill the Wumpus somewhere in a series of dark caverns connected by tunnels forming a dodecahedron: each room has 3 corridors leading to other rooms. The player encounters bottomless pits, giant bats that randomly move the player around, and of course the Wumpus. Upon entering each room, the game would describe the three adjacent rooms but not tell the player which was which: bottomless pits emit a flow of air, the Wumpus emits a....stink, and the bats make noise flapping around. The player is left to map out the cavern to find and defeat the Wumpus by launching a crooked arrow through the twists of the dodecahedron.

In Jack's re-envisioning, the player is given a supply counter that adds pressure to take more risks - each move requires resources, so cautious players are unable to methodically map the dodecahedron and are forced to take bigger risks. I think that adds a good layer towards the survival horror theme we are going for here. Additionally, in the BASIC version, Jack replaces the crooked arrows with knockout darts that allow the player to strap a tracking device to the Wumpus and follow it to safety. Although Jack changed it to have less violence (#SaveTheWumpii), it also makes for a better horror context: you are no longer hunting the Wumpus - you are merely stuck in the Wumpus domain and are reliant on the beast to guide to back to safety.

There are some additional complexities we will need to deal with, but that's all we need for now. For the most part, we'll stay true to the Superwumpus game of Jack's re-envisioning.
