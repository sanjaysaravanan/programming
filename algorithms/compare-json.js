function compareObjects(o1, o2) {
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;

  for (var p in o1) {
    if (o1.hasOwnProperty(p)) {
      if (o1[p] !== o2[p]) {
        return false;
      }
    }
  }
  for (var p in o2) {
    if (o2.hasOwnProperty(p)) {
      if (o1[p] !== o2[p]) {
        return false;
      }
    }
  }
  return true;
}

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

console.log(compareObjects(obj1, obj2));
