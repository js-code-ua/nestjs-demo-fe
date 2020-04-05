import *  as _ from 'lodash';

const environment = process.env.NODE_ENV || 'development';

interface IConfig {
  environment: string;
  BASE_URL: string;
}

export default _.extend<IConfig>({
  environment,
},
require(`${__dirname}/env/${environment}`).default, /* eslint "import/no-dynamic-require": 0 */
);
