import { expect } from "chai"
import feature from "./feature"

const applyNumberofx = (numberOfx : number, x : string): string => {
  let romanNumber = ""
  for (let i=0; i < numberOfx; i++) {
    romanNumber += x
  }
  return romanNumber
}

const strPattern = (value: number, one: string , five: string, ten: string) : string => {
  let romanNumber = ""
  let numberOfx = value % 10
  if (value % 10 == 4) {
    romanNumber = one + five
    return romanNumber
  }
  if (value % 10 > 4) {
    numberOfx = value % 10 -5
    romanNumber = five
  }
  if (value % 10 == 9) {
    numberOfx = 0
    romanNumber = one + ten
  }
  return romanNumber + applyNumberofx(numberOfx, one)
}

const romanConverter = (arabicNumber: number): string => {
  
  const arabicArray = Array.from(arabicNumber.toString()).map(Number)
  const units = arabicArray[arabicArray.length-1]
  const tens = arabicArray[arabicArray.length-2] | 0
  const hundreds = arabicArray[arabicArray.length-3] | 0

  const unitResult = strPattern(units, "I", "V", "X")
  const tensResult = tens == 0 ? "" : strPattern(tens, "X", "L", "C")
  const hundredsResult = hundreds == 0 ? "" : strPattern(hundreds, "C", "D", "M")

  return hundredsResult + tensResult + unitResult
  
  
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
      { arabicNumber: 100, romanNumber: "C" },
      { arabicNumber: 101, romanNumber: "CI" },
      { arabicNumber: 112, romanNumber: "CXII" },
      { arabicNumber: 124, romanNumber: "CXXIV" },
      { arabicNumber: 149, romanNumber: "CXLIX" },
      { arabicNumber: 156, romanNumber: "CLVI" },
      { arabicNumber: 189, romanNumber: "CLXXXIX" },
      { arabicNumber: 196, romanNumber: "CXCVI" },
      { arabicNumber: 199, romanNumber: "CXCIX" },
      { arabicNumber: 245, romanNumber: "CCXLV" },
      { arabicNumber: 489, romanNumber: "CDLXXXIX" },
      { arabicNumber: 875, romanNumber: "DCCCLXXV" },
      { arabicNumber: 994, romanNumber: "CMXCIV" },
    ].forEach(({ arabicNumber, romanNumber }) => {
      describe(`When paramater is ${arabicNumber}`, function () {
        it(`Should return ${romanNumber} `, function () {
          expect(romanConverter(arabicNumber)).to.eql(romanNumber)
        })
      })
    })
  })
})
