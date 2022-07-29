
// eslint-disable-next-line import/no-mutable-exports
let flag = '';
console.log(`${process.env.REACT_APP_REAL}`);

if(`process.env.MODE` === 'REAL'){
  flag = 'NoneSense&&';
  console.log('here is test.');
}

export default flag;