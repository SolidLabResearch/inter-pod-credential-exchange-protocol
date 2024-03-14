# Readme



## Setup

`npm install` to install everything. 

## Run the code

1. `yarn run serve` to start the CSS
2. `node index.js` to run the demo

TODO: just do it with npm run, remove yarn. Also test this again!

## Results

Running the code will show the following 

TODO: screenshot, clean console logs



## Inspect the Pods

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
