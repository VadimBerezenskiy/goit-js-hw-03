const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  console.log(keys);
  for (const key of keys) {
    const maxTask = Math.max.apply(null, Object.values(employees));
    console.log(key);
  }
  return;

  // console.log(Object.values(employees));
  // console.log(Object.keys(maxTask));
  // return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
