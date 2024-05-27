import { Letter } from './constants';

type RotorsPosotion = {
  firstRotorPosition: number;
  secondRotorPosition: number;
  thirdRotorPosition: number;
}

type Rotor = number[]

// const rotor1: Rotor = [[1,26], [2,25], [3,24], [4,23], [5,22], [6,21], [7,20], [8,19], [9,18], [10,17], [11,16], [12,15], [13,14]]
// const rotor2: Rotor = [[1,3], [2,4], [26,5], [6,8], [7,9], [10,11], [12,13], [14,15], [16,17], [18,19], [20,21], [22,23], [24,25]]
// const rotor3: Rotor = [[10,1], [9,2], [8,3], [7,4], [5,6], [20,26], [21,25], [22,23], [24,11], [25,12], [13,14], [15,16], [17,18]]
//const reflector: Rotor = [[1,2], [3,4], [5,6], [7,8], [9,10], [11,12], [13,14], [15,16], [17,18], [19,20], [21,22], [23,24], [25,26]]


interface EncryptorType {
  inputWheel: Letter[];
  firstRotor: Rotor;
  secondRotor: Rotor;
  thirdRotor: Rotor;
  reflector: Record<number, number>;
  //positions: RotorsPosotion

  encrypt(input: Letter, positions: RotorsPosotion): Letter;
  generateRotor: () => Rotor;
}

class EncryptorClass implements EncryptorType {
  inputWheel: Letter[];
  firstRotor: Rotor;
  secondRotor: Rotor;
  thirdRotor: Rotor;
  reflector: Record<number, number>;
  //positions: RotorsPosotion

  constructor(
    inputWheel: Letter[],
    firstRotor: Rotor,
    secondRotor: Rotor,
    thirdRotor: Rotor,
    reflector: Record<number, number>,
    ) {
      this.inputWheel = inputWheel
      this.firstRotor = firstRotor
      this.secondRotor = secondRotor
      this.thirdRotor = thirdRotor
      this.reflector = reflector
    // this.firstRotor = this.generateRotor()
    // this.secondRotor = this.generateRotor()
    // this.thirdRotor = this.generateRotor()
    // this.reflector = this.generateRotor()
  }

  encrypt(input: Letter, positions: RotorsPosotion): Letter {
    //console.log(input, positions)
    //eslint-disable-next-line no-debugger
    const {firstRotorPosition, secondRotorPosition, thirdRotorPosition} = positions
    const firstRotor = this.convertRotor(this.firstRotor, firstRotorPosition)
    const secondRotor = this.convertRotor(this.secondRotor, secondRotorPosition)
    const thirdRotor = this.convertRotor(this.thirdRotor, thirdRotorPosition)
    //debugger
    const letterIndex = this.inputWheel.indexOf(input)
    //const i1 = this.getPositionShift(letterIndex, firstRotor)
    //eslint-disable-next-line no-debugger
    //debugger
    const firstRotorPoint = firstRotor[letterIndex]
    //const i2 = this.getPositionShift(firstRotorPoint, secondRotor)
    //eslint-disable-next-line no-debugger
    //debugger
    const secondRotorPoint = secondRotor[firstRotorPoint]
    //const i3 = this.getPositionShift(secondRotorPoint, thirdRotor)
    //eslint-disable-next-line no-debugger
    //debugger
    const thirdRotorPoint = thirdRotor[secondRotorPoint]
    const reversePoint = this.reflector[thirdRotorPoint]
    //const i4 = this.getPositionShift(reversePoint, -thirdRotor)
    //eslint-disable-next-line no-debugger
    //debugger
    const fourthPoint = thirdRotor.indexOf(reversePoint)
    //const i5 = this.getPositionShift(fourthPoint, -secondRotor)
    //eslint-disable-next-line no-debugger
    //debugger
    const fifthPoint = secondRotor.indexOf(fourthPoint)
    //const i6 = this.getPositionShift(fifthPoint, -firstRotor)
    //eslint-disable-next-line no-debugger
    //debugger
    const sixthPoint = firstRotor.indexOf(fifthPoint)
    const outputLetter = this.inputWheel[sixthPoint]
    //console.log(outputLetter)
    return outputLetter
  }

  generateRotor = () => {
    const arr: number[] = []
    while (arr.length !== 26) {
      const random = Math.floor(Math.random()*26)
      if(!arr.includes(random)) arr.push(random)
    }
    return arr
  }

  getPositionShift(position: number, index: number): number {
    if(index >= 0){
      const sum = position + index
      return sum > 25 ? sum % 25 : sum
    } else {
      const sum = position + index
      return sum < 0 ? 25 + index +1 : sum
    }
  }

  convertRotor(rotor: Rotor, index: number): Rotor{
    const firstPart = rotor.slice(index)
    const secondPart = rotor.slice(0, index)
    return firstPart.concat(secondPart)
  }
}

const rotor1 = [1,16,11,12,24,5,25,21,23,6,0,10,22,9,7,17,18,8,20,4,19,3,15,14,13,2]
const rotor2 = [23,17,13,15,19,6,9,20,25,1,12,2,8,4,14,0,10,5,11,3,16,18,24,7,21,22]
const rotor3 = [10,13,1,24,4,23,19,20,9,16,11,25,22,6,5,0,21,12,3,17,18,15,2,14,7,8]
//const reflector = [8,0,6,19,5,11,10,2,22,17,18,9,20,12,14,24,25,4,13,15,21,23,16,1,7,3]

const reflector2 = {
  0: 25,
  1: 24,
  2: 23,
  3: 22,
  4: 21,
  5: 20,
  6: 19,
  7: 18,
  8: 17,
  9: 16,
  10: 15,
  11: 14,
  12: 13,
  13: 12,
  14: 11,
  15: 10,
  16: 9,
  17: 8,
  18: 7,
  19: 6,
  20: 5,
  21: 4,
  22: 3,
  23: 2,
  24: 1,
  25: 0,
}

export const inputWheel = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] as Letter[]

export const Encryptor = new EncryptorClass(inputWheel, rotor1, rotor2, rotor3, reflector2)

export default EncryptorClass