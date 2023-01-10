# eslint-plugin-function-limit

Limit the functions count of one file

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-function-limit`:

```sh
npm install eslint-plugin-function-limit --save-dev
```

## Usage

Add `function-limit` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "function-limit"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "function-limit/function-count": "error"
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->
