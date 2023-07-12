import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { calculate } from './helpers/calculate';

const App: React.FC = (): React.ReactElement => {
  const [num, setNum] = useState<string>('0')
  const [firstNum, setFirstNum] = useState('0')
  const [secondNum, setSecondNum] = useState('0')
  const [action, setAction] = useState<string>('')
  const [editMode, setEditMode] = useState(false)

  const returnNumber = (number: string): string | void => {
    if (num.length <= 9) {
      if (num === '0' && number !== '.') {
        setNum(num.replace('0', number))
      }  else {
        setNum(num + number)
      }
    } else {
      return num
    }
  }

  const addition = (firstNum: string): void => {
    setFirstNum(firstNum)
    setNum('0')
    setAction('addition')
  }

  const subtraction = (firstNum: string): void => {
    setFirstNum(firstNum)
    setNum('0')
    setAction('subtraction')
  }

  const multiplication = (firstNum: string): void => {
    setFirstNum(firstNum)
    setNum('0')
    setAction('multiplication')
  }

  const division = (firstNum: string): void => {
    setFirstNum(firstNum)
    setNum('0')
    setAction('division')
  }

  const percent = (firstNum: string): void => {
    setFirstNum(firstNum)
    setNum('0')
    setAction('percent')
  }

  const signChangeAction = (): void => {
    if (num !== '0') {
      const minus = Number(num) * -1
      setNum(minus.toString())
    }
  }

  const signChange = (): void => {
    setEditMode(!editMode)
  }

  useEffect(() => {
    signChangeAction()
  }, [editMode])

  const result = (secondNum: string) => {
    setSecondNum(secondNum)
  }

  useEffect(() => {
    setNum(calculate(num, firstNum, secondNum, action))
  }, [secondNum])

  const reset = (): void => {
    setAction('')
    setNum('0')
    setFirstNum('0')
    setSecondNum('0')
    setEditMode(false)
  }
  
  return (
    <View style={styles.wrapperMain}>
      <View style={styles.wrapperOutput}>
        <Text style={num.length <= 7 && styles.number || num.length === 8 && styles.number7 ||
          num.length === 9 && styles.number8 || num.length >= 10 && styles.number9}>{num} </Text>
      </View>
      <View style={styles.wrapperCalculator}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.cellLightGray} onPress={() => reset()}>
            <Text style={styles.cellSymbolBlack}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellLightGray} onPress={() => signChange()}>
            <Text style={styles.cellSymbolBlack}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellLightGray} onPress={() => percent(num)}>
            <Text style={styles.cellSymbolBlack}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellOrange} onPress={() => division(num)}>
            <Text style={styles.cellSymbolWhite}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.cellDarkGray} onPress={() => returnNumber('7')}>
            <Text style={styles.cellSymbolWhite}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellDarkGray} onPress={() => returnNumber('8')}>
            <Text style={styles.cellSymbolWhite}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellDarkGray} onPress={() => returnNumber('9')}>
            <Text style={styles.cellSymbolWhite}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellOrange} onPress={() => multiplication(num)}>
            <Text style={styles.cellSymbolWhite}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.cellDarkGray} onPress={() => returnNumber('4')}>
            <Text style={styles.cellSymbolWhite}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellDarkGray} onPress={() => returnNumber('5')}>
            <Text style={styles.cellSymbolWhite}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellDarkGray} onPress={() => returnNumber('6')}>
            <Text style={styles.cellSymbolWhite}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellOrange} onPress={() => subtraction(num)}>
            <Text style={styles.cellSymbolWhite}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.cellDarkGray} onPress={() => returnNumber('1')}>
            <Text style={styles.cellSymbolWhite}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellDarkGray} onPress={() => returnNumber('2')}>
            <Text style={styles.cellSymbolWhite}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellDarkGray} onPress={() => returnNumber('3')}>
            <Text style={styles.cellSymbolWhite}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellOrange} onPress={() => addition(num)}>
            <Text style={styles.cellSymbolWhite}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.cellNumDarkGray} onPress={() => returnNumber('0')}>
            <Text style={styles.cellSymbolWhite}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellDarkGray} onPress={() => returnNumber('.')}>
            <Text style={styles.cellSymbolWhite}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cellOrange} onPress={() => result(num)}>
            <Text style={styles.cellSymbolWhite}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  wrapperOutput: {
    height: '35%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  number: {
    color: 'white',
    fontSize: 90,
    fontWeight: '200',
    marginRight: 0,
    textAlign: 'right'
  },
  number7: {
    color: 'white',
    fontSize: 80,
    fontWeight: '200',
    marginRight: 0,
    textAlign: 'right'
  },
  number8: {
    color: 'white',
    fontSize: 72,
    fontWeight: '200',
    marginRight: 0,
    textAlign: 'right'
  },
  number9: {
    color: 'white',
    fontSize: 65,
    fontWeight: '200',
    marginRight: 0,
    textAlign: 'right'
  },
  wrapperCalculator: {
    height: '65%',
    width: '100%',
    justifyContent: 'space-around'
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cellLightGray: {
    backgroundColor: '#A5A5A5',
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  cellOrange: {
    backgroundColor: '#FE9500',
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  cellDarkGray: {
    backgroundColor: '#333333',
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  cellNumDarkGray: {
    backgroundColor: '#333333',
    width: 185,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  cellSymbolWhite: {
    fontSize: 28,
    color: 'white'
  },
  cellSymbolBlack: {
    fontSize: 28,
    color: 'black'
  }
});

export default App