export const alphabet = [
  'Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K',
  'P', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', 'L'
] as const

export type Letter = typeof alphabet[number]

export type RotorValue = {
  key: Letter;
  value: Letter;
}

export const arr1 = [[7,8],[11,26],[12,18],[26,14],[6,22],[10,17],[18,16],[17,24],[23,23],[9,11],[16,2],[5,5],[22,20],
[13,7],[14,19],[2,10],[8,6],[24,9],[25,13],[1,3],[15,1],[19,21],[21,25],[20,15],[3,4],[4,12]]

export const arr2 = [[21,14],[3,26],[24,1],[10,7],[19,13],[15,12],[23,24],[26,10],[7,19],[16,17],[12,16],[9,5],[17,22],
[6,25],[25,2],[2,20],[22,4],[14,11],[8,18],[4,6],[13,15],[18,21],[20,8],[5,9],[11,3],[1,23]]

export const arr3 = [[20,4],[26,24],[10,16],[4,20],[3,14],[17,19],[15,11],[1,5],[18,3],[23,18],[25,],[12,13],[6,15],[5,12],[7,8],[21,10],[14,23],
[24,25],[9,17],[8,6],[16,22],[19,26],[22,2],[11,1],[13,21],[2,7]]

export const arr4 = [[2,11],[6,26],[13,21],[23,16],[5,24],[22,22],[4,1],[8,19],[16,8],[21,14],[10,5],[26,18],[20,9],[1,13],[11,4],[9,12],
[17,6],[24,15],[3,17],[15,10],[25,3],[18,2],[7,7],[12,20],[14,25],[19,23]]


export const firstRotor: RotorValue[] = [
  { key: 'A', value: 'Z'},
  { key: 'B', value: 'A'},
  { key: 'C', value: 'B'},
  { key: 'D', value: 'C'},
  { key: 'E', value: 'D'},
  { key: 'F', value: 'E'},
  { key: 'G', value: 'F'},
  { key: 'H', value: 'G'},
  { key: 'I', value: 'H'},
  { key: 'J', value: 'I'},
  { key: 'K', value: 'J'},
  { key: 'L', value: 'K'},
  { key: 'M', value: 'L'},
  { key: 'N', value: 'M'},
  { key: 'O', value: 'N'},
  { key: 'P', value: 'O'},
  { key: 'Q', value: 'P'},
  { key: 'R', value: 'Q'},
  { key: 'S', value: 'R'},
  { key: 'T', value: 'S'},
  { key: 'U', value: 'T'},
  { key: 'V', value: 'U'},
  { key: 'W', value: 'V'},
  { key: 'X', value: 'W'},
  { key: 'Y', value: 'X'},
  { key: 'Z', value: 'Y'}
];

export const secondRotor: RotorValue[] = [
  { key: 'A', value: 'Z'},
  { key: 'B', value: 'A'},
  { key: 'C', value: 'B'},
  { key: 'D', value: 'C'},
  { key: 'E', value: 'D'},
  { key: 'F', value: 'E'},
  { key: 'G', value: 'F'},
  { key: 'H', value: 'G'},
  { key: 'I', value: 'H'},
  { key: 'J', value: 'I'},
  { key: 'K', value: 'J'},
  { key: 'L', value: 'K'},
  { key: 'M', value: 'L'},
  { key: 'N', value: 'M'},
  { key: 'O', value: 'N'},
  { key: 'P', value: 'O'},
  { key: 'Q', value: 'P'},
  { key: 'R', value: 'Q'},
  { key: 'S', value: 'R'},
  { key: 'T', value: 'S'},
  { key: 'U', value: 'T'},
  { key: 'V', value: 'U'},
  { key: 'W', value: 'V'},
  { key: 'X', value: 'W'},
  { key: 'Y', value: 'X'},
  { key: 'Z', value: 'Y'}
];

export const thirdRotor: RotorValue[] = [
  { key: 'A', value: 'Z'},
  { key: 'B', value: 'A'},
  { key: 'C', value: 'B'},
  { key: 'D', value: 'C'},
  { key: 'E', value: 'D'},
  { key: 'F', value: 'E'},
  { key: 'G', value: 'F'},
  { key: 'H', value: 'G'},
  { key: 'I', value: 'H'},
  { key: 'J', value: 'I'},
  { key: 'K', value: 'J'},
  { key: 'L', value: 'K'},
  { key: 'M', value: 'L'},
  { key: 'N', value: 'M'},
  { key: 'O', value: 'N'},
  { key: 'P', value: 'O'},
  { key: 'Q', value: 'P'},
  { key: 'R', value: 'Q'},
  { key: 'S', value: 'R'},
  { key: 'T', value: 'S'},
  { key: 'U', value: 'T'},
  { key: 'V', value: 'U'},
  { key: 'W', value: 'V'},
  { key: 'X', value: 'W'},
  { key: 'Y', value: 'X'},
  { key: 'Z', value: 'Y'}
];

// export const secondRotor: Rotor[] = [
//   {position: 1, key: 'A', value: 'Z'},
//   {position: 2, key: 'B', value: 'A'},
//   {position: 3, key: 'C', value: 'B'},
//   {position: 4, key: 'D', value: 'C'},
//   {position: 5, key: 'E', value: 'D'},
//   {position: 6, key: 'F', value: 'E'},
//   {position: 7, key: 'G', value: 'F'},
//   {position: 8, key: 'H', value: 'G'},
//   {position: 9, key: 'I', value: 'H'},
//   {position: 10, key: 'J', value: 'I'},
//   {position: 11, key: 'K', value: 'G'},
//   {position: 12, key: 'L', value: 'K'},
//   {position: 13, key: 'M', value: 'L'},
//   {position: 14, key: 'N', value: 'M'},
//   {position: 15, key: 'O', value: 'N'},
//   {position: 16, key: 'P', value: 'O'},
//   {position: 17, key: 'Q', value: 'P'},
//   {position: 18, key: 'R', value: 'Q'},
//   {position: 19, key: 'S', value: 'R'},
//   {position: 20, key: 'T', value: 'S'},
//   {position: 21, key: 'U', value: 'T'},
//   {position: 22, key: 'V', value: 'U'},
//   {position: 23, key: 'W', value: 'V'},
//   {position: 24, key: 'X', value: 'W'},
//   {position: 25, key: 'Y', value: 'X'},
//   {position: 26, key: 'Z', value: 'Y'}
// ];