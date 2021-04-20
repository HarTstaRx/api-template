const path = require('path');
const dotenv = require('dotenv');

const params = process.argv;
if (params.length < 3) throw Error('Expected parameters');

const indexOfEnv = params.indexOf('-e');
const environment = params[indexOfEnv + 1];
if (typeof environment === 'undefined') throw Error('Environment not specified');

const resultPath = path.join(__dirname, `../config/env/.env.${environment}`);
const result = dotenv.config({ path: resultPath });
if (typeof result.error !== 'undefined') throw result.error;
