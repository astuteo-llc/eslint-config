Astuteo's eslint configuration file

Heavily based on: https://www.npmjs.com/package/eslint-config-airbnb 

## Usage

**Install**:

Note: If the project has our @astuteo/build-config 5.4.18+ installed, you do not need to install this package seperately. That is installed and kept up-to-date in that package. 

```bash
$ yarn add --dev @astuteo/eslint-config
```

**Edit `package.json`**:

```jsonc
{
  // ...
  "eslintConfig": {
    "extends": "@astuteo/eslint-config"
  },
}
```
