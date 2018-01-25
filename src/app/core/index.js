import auth from './auth/index.js';
import dashboard from './dashboard/index.js';

export default angular
  .module('core', [
    'auth',
    'dashboard',
  ]).name; 