export const range = (begin: number, end: number) => ([...Array(end - begin)].map((_, i) => (begin + i)))

export const isDeepEqual = (object1: Record<string, any>, object2: Record<string, any>) => {

    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);
  
    if (objKeys1.length !== objKeys2.length) { return false }
  
    for (var key of objKeys1) {
      const value1 = object1[key];
      const value2 = object2[key];
      const isObjects = isObject(value1) && isObject(value2);
  
      if (isObjects && !isDeepEqual(value1, value2)) {
        return false
      }
  
      if (!isObjects && value1 !== value2) {
        return false
      }
    }
  
    return true;
  }
  
  const isObject = (object: any) => {
    return isNonNull(object) && typeof object === "object";
  }

  export const isNonNull = (object: any) => {
    return object !== null && object !== undefined
}

