# ts-exports-bug

This is a small repro for reproducing a TypeScript debug failure bug.

To see this bug, simply clone this repo and run:

```bash
cd js-package && yarn
cd ../ts-package && yarn && test
```

## Is it a ts-jest bug?

In a shallow sense, the bug is obviously in `typescript` since the assertion failure is deep in
typescript code. However it seems that the bug is somehow triggered by `ts-jest`. In order to rule
out a typecript only bug, run the following commands:

```bash
cd ts-package
yarn run build && yarn run start
yarn run build-module
```

1. `yarn run build` simply builds the package using `tsc`. There are no errors, and the build can be
   shown correct by running `yarn run start`
2. `yarn run build-module` builds the lone file as a module and outputs the transpiled source. Again
   there are no errors here

## More bug triaging

The bug is only triggered when the exports assignment is at a certain property depth. Try modifying
`./js-package/index.js` as indicated in the comment there and re-running the test to see the bug
disappear.

## System info

This repro was made using:

- node: v8.11.1
- jest: v22.4.3
- ts-jest: v22.4.3
- typescript: v2.8.1
