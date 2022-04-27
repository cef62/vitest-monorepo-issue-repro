This repository reproduces an issue found with `vitest >= 0.9.0`.
This PR [1097](https://github.com/vitest-dev/vitest/pull/1097) introduces a change that affects some edge cases.

Specifically, your tests will fail if

- you are in a monorepo
- your package A consumes another local package B
- package B transpile to files with the `.js` extension, and its package.json type is set to `module.`

When `shouldExternalize` validates the imports `isValidNodeImport` from `mlly` will consider it a valid import and therefore mark it as externalized, the tests will fail.

A possible workaround is to mark your local dependencies not to be externalized in your configuration

```ts
test: {
  [..]
  deps: {
    inline: [/\/packages\/.*\/esm\/(.*\.js)$/],
  },
  [..]
},
```
