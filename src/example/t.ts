function getArray <T>(value: T, num: number): T[] {
  return new Array(num).fill(value)
}
console.log(getArray<number>(11, 4))
