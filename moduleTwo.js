// This is coomon js import export we can do both way
// const simple=require('./moduleOne')

// with ESM module (Node js supports ES 6) 
// For ESM import export there must be extension .mjs of importing file
import { simple } from "./moduleOne.mjs";

// for this, we have make export default function  in moduleOne.mjs
import simpleDefualt  from "./moduleOne.mjs";

// This is will import everything as given entity
// import * as chanmol from './moduleOne.mjs'

simple();
simpleDefualt()
