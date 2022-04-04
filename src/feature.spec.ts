import { expect } from "chai"
import feature from "./feature"

const applyNumberOfI = (numberOfI: number): string => {
  let romanNumber = ""
  for (let i = 0; i < numberOfI; i++) {
    romanNumber += "I"
  }
  return romanNumber
}

const applyNumberofX = (numberOfX : number): string => {
  let romanNumber = ""
  for (let i=0; i < numberOfX; i++) {
    romanNumber += "X"
  }
  return romanNumber
}

const applyFifty = (arabicNumber: number) : string => {
  const fiftyPrefix = arabicNumber < 40 || arabicNumber > 89 ? "" : arabicNumber % 50 > 39 && arabicNumber < 50 ? "XL" : "L"
  return fiftyPrefix
}

const applyNumberOfC = (numberOfC: number) : string => {
  let romanNumber= ""
  for (let i=0; i < numberOfC; i++) {
    romanNumber += "C"
  }
  return romanNumber

}

const romanConverter = (arabicNumber: number): string => {
  let romanNumber = ""
  const isInTheNineties = arabicNumber.toString().charAt(arabicNumber.toString().length-2) == '9' ? true : false
  let numberOfI = arabicNumber % 10 < 4 ? arabicNumber % 10 : arabicNumber % 10 - 5
  let numberOfX = isInTheNineties ? 0 : arabicNumber / 10 < 4 ? arabicNumber / 10 -1  : arabicNumber / 10 - 6
  let numberOfC = isInTheNineties ? 0 : arabicNumber / 100 < 4 ? arabicNumber / 100 -1 : arabicNumber / 100 - 6
  if (arabicNumber % 10 == 4) {
    romanNumber = "IV"
  }
  if (arabicNumber % 10 > 4) {
    romanNumber = "V"
  }
  if (arabicNumber % 10 == 9) {
    numberOfI = 0
    romanNumber = "IX"
  }
  if (arabicNumber % 10 == 0) {
    romanNumber = isInTheNineties ? "" : arabicNumber / 10 < 4 || arabicNumber / 10 > 5 ? "X" : ""
  }
  if (isInTheNineties) {
    romanNumber = "XC"
  }
  return applyNumberOfC(numberOfC) + applyFifty(arabicNumber) + applyNumberofX(numberOfX)+ romanNumber + applyNumberOfI(numberOfI)
}
describe(`Unit`, function () {
  describe(`romanConverter`, function () {
    ;[
      { arabicNumber: 1, romanNumber: "I" },
      { arabicNumber: 2, romanNumber: "II" },
      { arabicNumber: 3, romanNumber: "III" },
      { arabicNumber: 4, romanNumber: "IV" },
      { arabicNumber: 5, romanNumber: "V" },
      { arabicNumber: 6, romanNumber: "VI" },
      { arabicNumber: 7, romanNumber: "VII" },
      { arabicNumber: 8, romanNumber: "VIII" },
      { arabicNumber: 9, romanNumber: "IX" },
      { arabicNumber: 10, romanNumber: "X" },
      { arabicNumber: 11, romanNumber: "XI" },
      { arabicNumber: 13, romanNumber: "XIII" },
      { arabicNumber: 14, romanNumber: "XIV" },
      { arabicNumber: 24, romanNumber: "XXIV" },
      { arabicNumber: 34, romanNumber: "XXXIV" },
      { arabicNumber: 15, romanNumber: "XV" },
      { arabicNumber: 25, romanNumber: "XXV" },
      { arabicNumber: 35, romanNumber: "XXXV" },
      { arabicNumber: 16, romanNumber: "XVI" },
      { arabicNumber: 26, romanNumber: "XXVI" },
      { arabicNumber: 36, romanNumber: "XXXVI" },
      { arabicNumber: 19, romanNumber: "XIX" },
      { arabicNumber: 29, romanNumber: "XXIX" },
      { arabicNumber: 39, romanNumber: "XXXIX" },
      { arabicNumber: 20, romanNumber: "XX" },
      { arabicNumber: 30, romanNumber: "XXX" },
      { arabicNumber: 40, romanNumber: "XL" },
      { arabicNumber: 44, romanNumber: "XLIV" },
      { arabicNumber: 45, romanNumber: "XLV" },
      { arabicNumber: 46, romanNumber: "XLVI" },
      { arabicNumber: 49, romanNumber: "XLIX" },
      { arabicNumber: 50, romanNumber: "L" },
      { arabicNumber: 51, romanNumber: "LI" },
      { arabicNumber: 52, romanNumber: "LII" },
      { arabicNumber: 53, romanNumber: "LIII" },
      { arabicNumber: 54, romanNumber: "LIV" },
      { arabicNumber: 55, romanNumber: "LV" },
      { arabicNumber: 56, romanNumber: "LVI" },
      { arabicNumber: 59, romanNumber: "LIX" },
      { arabicNumber: 60, romanNumber: "LX" },
      { arabicNumber: 70, romanNumber: "LXX" },
      { arabicNumber: 89, romanNumber: "LXXXIX" },
      { arabicNumber: 90, romanNumber: "XC" },
      { arabicNumber: 91, romanNumber: "XCI" },
      { arabicNumber: 92, romanNumber: "XCII" },
      { arabicNumber: 94, romanNumber: "XCIV" },
      { arabicNumber: 95, romanNumber: "XCV" },
      { arabicNumber: 96, romanNumber: "XCVI" },
      { arabicNumber: 99, romanNumber: "XCIX" },
    ].forEach(({ arabicNumber, romanNumber }) => {
      describe(`When paramater is ${arabicNumber}`, function () {
        it(`Should return ${romanNumber} `, function () {
          expect(romanConverter(arabicNumber)).to.eql(romanNumber)
        })
      })
    })
  })
})
