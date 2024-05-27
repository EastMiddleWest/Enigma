

// export const generateRotor = (): [number, number][] => {
//   const getValues = () => {
//     const arr: number[] = []
//     while (arr.length !== 26) {
//       const random = Math.floor(Math.random()*(26-1 +1)+1)
//       if(!arr.includes(random)) arr.push(random)
//     }
//   return arr
//   }
//   const arr1 = getValues();
//   const arr2 = getValues();
//   const result = arr1.map((num, i )=> [num, arr2[i]] as [number, number])
//   return result
// }

export const generateRotor = () => {
  const arr: number[] = []
  while (arr.length !== 26) {
    const random = Math.floor(Math.random()*(26-1 +1)+1)
    if(!arr.includes(random)) arr.push(random)
  }
  return arr
}