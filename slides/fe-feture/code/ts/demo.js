function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const obj = {
  a: 1,
  b: 2,
};

const result = cloneDeep(obj);

console.log(result.a);
