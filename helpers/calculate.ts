export const calculate = (num: string, firstNum: string, secondNum: string, action: string) => {
    switch (action) {
      case 'addition':
        const sum = Number(firstNum) + Number(secondNum)
        if (sum.toString().length > 10) {
          return 'result > 10'
        } else {
          return sum.toString()
        }
      case 'subtraction':
        const sub = Number(firstNum) - Number(secondNum)
        if (sub.toString().length > 10) {
          return 'result > 10'
        } else {
          return sub.toString()
        }
      case 'multiplication':
        const multi = Number(firstNum) * Number(secondNum)
        if (multi.toString().length > 10) {
          return 'result > 10'
        } else {
          return multi.toString()
        }
      case 'division':
        const dev = Number(firstNum) / Number(secondNum)
        if (dev.toString().length > 10) {
          return 'result > 10'
        } else {
          return dev.toString()
        }
      case 'percent':
        const perc = Number(secondNum) * (Number(firstNum) / 100)
        if (perc.toString().length > 10) {
          return 'result > 10'
        } else {
          return perc.toString()
        }
      default:
        return num
    }
  }