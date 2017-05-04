# Underbar

This repo is a clone of the open-source project called Underscore.

[Underscore](http://underscorejs.org/) is a popular JavaScript library that supplies utility functions that facilitates programming in a more functional style.

Underscore has been around for nearly 8 years, and in that time, a lot of its facilities [have been subsumed into ES6](https://www.reindex.io/blog/you-might-not-need-underscore/).

However, we think there's considerable learning value to you closely examining a simplified implementation of Underscore.

This is a complete implementation, including tests.

## Running individual tests

Note that the `jest-cli` package was also installed into this repo, with the command:

```
npm install --save-dev jest-cli
```

This should allow you to use this syntax to just run one test file:

```
npm test isArrayLike
```

That will do a partial match on the string and find the matching test and run it.

This can save you some time as you are writing the tests, as opposed to executing the entire test suite on every run.

