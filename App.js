import { StyleSheet, Text, View } from 'react-native';
import Dice from './src/components/Dice';
import DiceMotion from './assets/animations/Dice';
import { useState } from 'react';

export default function App() {
  const [roll, setRoll] = useState(null)
  const [show, setShow] = useState(false)
  const [log, setLog] = useState([])
  const [controller, setController] = useState('auto')
  const [initial, setInitial] = useState(true)

  const handleRoll = () => {
    setInitial(false)
    setRoll(null)
    setShow(false)
    setController('none')
    let difference = 6 - 1
    let random = Math.round(difference * Math.random()) + 1
    const getData = () => {
      setRoll(random)
      setShow(true)
      log.push(` ${random} `)
      if (log.length > 5) {
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
      {initial ? <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 40}}>Toque no dado para iniciar!</Text> :
        <Text style={{ marginTop: 60, fontSize: 18 }}>{show ? 'Toque para jogar novamente' : 'Calculando...'}</Text>}
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <DiceMotion rollDice={handleRoll} />
        {show && <Dice rollResult={roll} />}
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{ marginTop: 60 }}>{show ? 'Últimos resultados' : ''}</Text>
        <Text style={{ fontSize: 20}}>{show ? log : ''}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
