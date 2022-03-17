# Encounter Companion

-The Encounter Companion is an app that is designed to mitigate the frustrations of constant questions mid-encounter / combat during TableTop RPGs being played online by larger groups of friends. It does this by displaying all vital information for turn-based play in front of each player, so that they can make informed decisions while on deck without having to pester the other players for things like their HP and Status Conditions.

-This was started as a favor to some friends, and thus will be updated for the forseeable future to help make their games run smoother and combat take less time.
---

### Installation:

Currently only:
```
npm install
```

and you're good to go. 
---

### API Repo
https://github.com/dojjidi/encounter-companion-api
---

### Deployed Sites
-FrontEnd: https://dojjidi.github.io/encounter-companion/
-API: https://enigmatic-fjord-69565.herokuapp.com/
---

### Tech Used:
-React
-Express

### User Stories:

#### As A ... I want to:

#### Unregistered User:
-Sign Up
-View and Understand what the app does
-Be prompted to sign up / log in

#### Registered User:
-Sign In
-Change Password

#### Signed In User:
-View my input forms
-Submit my info
-See my info update on the collective page
-See the collective encounter order
-See the other user's forms

### WireFrames
![Wireframe](https://i.imgur.com/f7IUGG0.png)

# Unsolved Problems / Updates in V2
- Adding View / Edit / Delete functionality
- .sort methods to filter all playerForms by Initiative order
- Shared game functionality, so that players are able to submit forms to a collaborative lobby, so that you only have to enter YOUR information and everyone is able to see it

# Planning / Problem Solving Philosophy
- There were initially problems with the original design philosophy that will be fixed going forward. Components will be designed individually and integrated before others are conceptualized.