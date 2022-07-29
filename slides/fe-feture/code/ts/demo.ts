function cloneDeepTs<T>(obj: T) {
  return JSON.parse(JSON.stringify(obj)) as T;
}

const obj = {
  a: 1,
  b: 2,
};

const result = cloneDeepTs(obj);

console.log(result.a);

export {};
