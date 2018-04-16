const fs = require('fs');
const path = require('path');
const ts = require("typescript");

const compilerOptions = require('./tsconfig').compilerOptions;

const source = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');

const result = ts.transpileModule(source, {compilerOptions});

console.log(result.outputText);
