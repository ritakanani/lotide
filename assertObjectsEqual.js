const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 
  for(let key of Object.keys(object1)) {
    if (Object.keys(object2)[key] !== Object.keys(object1)[key]) {
      return false;
    }
  }  
  for(let key of Object.keys(object1)) {
    if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])){
        return false;
      }
    }
    else {
        return false;
      }
  } 
  return true;
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: '2' }, { b: 2, a: '1' });