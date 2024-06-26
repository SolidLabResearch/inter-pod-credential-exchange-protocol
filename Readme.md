# Readme

[![DOI](https://zenodo.org/badge/772253867.svg)](https://zenodo.org/doi/10.5281/zenodo.10992059)

This file shows how to setup, install and run our Inter-Pod Credential Exchange Protocol demo.

An example output of running the code can be found in [example-output.md](./example-output.md).

## Setup

We use [Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for running the code.

`npm install` to install everything. (If there is a warning about Node engines, try running it with `npm install --ignore-engines`)

## Run the code

1. Open a terminal, run `npm run serve` to start the [Community Solid Server (CSS)](https://github.com/CommunitySolidServer/CommunitySolidServer)
2. Open a second terminal, run `node index.js` to execute the demo

The demo won't run if the CSS is not running.

## Code structure

- Readme.md :: this file
- package.json :: npm package config
- index.js
- src/
  - signer.js (Issuer)
  - holder.js (Holder)
  - verifier.js (Verifier)
  - util/ :: util scripts
- example-output.md :: An example output of running our code

## Results

![figure-flow](https://github.com/j-steinbach/inter-pod-credential-exchange-protocol-demo/assets/69524139/17ce2a7d-1ae6-474e-93b8-11576c2b19d0)

We demonstrate three phases, preceded by a setup procedure (setting up three Solid Pods on the CSS, including an LDN inbox)

1. Issuer issue Verifiable Credential (VC) to Holder (A, B)
2. Holder receive and consume credential, then derive a new VC and send it to Verifier (C, D)
3. Verifier receive, consume and verify VC (E)

**==> An example output of running the code can be found in [example-output.md](./example-output.md).**

## Inspection

Notifications can be inspected via HTTP GET in the command line, e.g. `http GET http://localhost:3000/verifier/inbox/b3ffb872-d4e8-40ae-bf8b-9bdde9f8a9c2`. This requires a HTTP client to be installed.


## Advanced Inspection: Inspect the Pods

**The below is not part of our demo, but might be of interest to follow along. Use on your own, we take no guarantee**

Besides checking the console logs,
Pods can also be inspected with Solid Pod browsers, 
for example [Penny]([url](https://penny.vincenttunru.com/)), or [Bashlib](https://github.com/SolidLabResearch/Bashlib).

Below is a short reference to Bashlib.

```bash
git clone git@github.com:SolidLabResearch/Bashlib.git
cd Bashlib
npm install 
npm run build
```


```bash
# Create an authenticated session (for CSS 4.0.0 and up)
node bin/solid.js auth create-token
# -- and fill in all the questions
# http://localhost:3000

# Set the webid you want to use for authenticated session
# http://localhost:3000/signer/profile/card#me
# http://localhost:3000/holder/profile/card#me
# http://localhost:3000/verifier/profile/card#me
node bin/solid.js auth set http://localhost:3000/signer/profile/card#me

# Read data
node bin/solid.js ls http://localhost:3000/holder/inbox/ 
node bin/solid.js cat http://localhost:3000/holder/private/original

# Or, shorten this to 
node bin/solid.js ls root:/private/derivation
```
