/**
 * @author: @AngularClass
 */

switch (process.env.FORMAT) {
  case 'dllplugin':
    module.exports = require('./config/webpack.config.dllplugin');
    break;
  case 'dllreferenceplugin':
    module.exports = require('./config/webpack.config.dllreferenceplugin');
    break;
  default:
}
