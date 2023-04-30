import { StyleSheet, Text, View } from 'react-native';
import Dice from './src/components/Dice';
import DiceMotion from './assets/animations/Dice';
import { useState } from 'react';

export default function App() {
  const [roll, setRoll] = useState(1)
  const [show, setShow] = useState(true)
  const [log, setLog] = useState([])
  const [controller, setController] = useState('auto')

  const handleRoll = () => {
    setRoll(null)
    setShow(false)
    setController('none')
    let difference = 6 - 1
    let random = Math.round(difference * Math.random()) + 1
    const getData = () => {
      setRoll(random)
      setShow(true)
      log.push(` ${random} `)
      if(log.length > 5){
        log.shift()
      }
      setController('auto')
    }
    setTimeout(() => {
      getData()
    }, 2000);
  }

  return (
    <View style={styles.container} pointerEvents={controller}>
      <Text>{show ? 'Toque para Jogar' : 'Aguarde'}</Text>
      <DiceMotion rollDice={handleRoll} />
      {show && <Dice rollResult={roll} />}
      <Text style={{marginTop: 60}}>Últimas jogadas{log}</Text>
      <Text>{log}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
