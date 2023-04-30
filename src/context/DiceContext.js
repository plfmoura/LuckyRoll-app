import { createContext, useState } from "react";

const DiceContext = createContext()

export const DiceProvider = ({ children }) => {
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
            if (log.length > 5) {
                log.shift()
            }
            setController('auto')
        }
        setTimeout(() => {
            getData()
        }, 2000);
        console.log('Feito')
    }

    return (
        <DiceContext.Provider value={{
            handleRoll,
            roll,
            show,
            controller,
            log
        }}>
            {children}
        </DiceContext.Provider>
    )
}

export default DiceContext