# Readme

1. `yarn run serve` to start the CSS
2. `node index.js` to run the demo

## Tests (TODO)

using Jest

## Debug

Either use Penny or [Bashlib](https://github.com/SolidLabResearch/Bashlib)

```bash
git clone git@github.com:SolidLabResearch/Bashlib.git
cd Bashlib
npm install 
npm run build
```


```node
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

