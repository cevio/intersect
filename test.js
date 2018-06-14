const ins = require('./index');
const res = ins([ 'auth-u51-inc-com', 'dbo', 'dbo-health' ], [ 'auth-u51-inc-com',
  'dbo-health',
  'cache',
  'dbo',
  'consul',
  'health',
  'logger',
  'qywx',
  'schedule',
  'static',
  'swagger' ]);
console.log(res);