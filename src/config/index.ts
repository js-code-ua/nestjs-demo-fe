import *  as _ from 'lodash';

const environment = process.env.NODE_ENV || 'development';

export default _.extend({
  environment,
},
require(`${__dirname}/env/${environment}`), /* eslint "import/no-dynamic-require": 0 */
);
