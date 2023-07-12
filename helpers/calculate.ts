export const calculate = (num: string, firstNum: string, secondNum: string, action: string) => {
    switch (action) {
      case 'addition':
        const sum = Number(firstNum) + Number(secondNum)
        const sumToStr = sum.toString()
        if (sumToStr.length > 10) {
          return sumToStr.substring(0, 10)
        } else {
          return sum.toString()
        }
      case 'subtraction':
        const sub = Number(firstNum) - Number(secondNum)
        const subToStr = sub.toString()
        if (subToStr.length > 10) {
          return subToStr.substring(0, 10)
        } else {
          return sub.toString()
        }
      case 'multiplication':
        const multi = Number(firstNum) * Number(secondNum)
        const multiToStr = multi.toString()
        if (multiToStr.length > 10) {
          return multiToStr.substring(0, 10)
        } else {
          return multi.toString()
        }
      case 'division':
        const dev = Number(firstNum) / Number(secondNum)
        const devToStr = dev.toString()
        if (devToStr.length > 10) {
          return devToStr.substring(0, 10)
        } else {
          return dev.toString()
        }
      case 'percent':
        const perc = Number(secondNum) * (Number(firstNum) / 100)
        const percTooStr = perc.toString()
        if (percTooStr.length > 10) {
          return percTooStr.substring(0, 10)
        } else {
          return perc.toString()
        }
      default:
        return num
    }
  }