import React, { useEffect, useRef, useState } from 'react'
import AnimatedLottieView from 'lottie-react-native'
import { Text, TouchableOpacity } from 'react-native'

export default function DiceMotion({rollDice}) {
    const dice = useRef(null)
    const [show, setShow] = useState(true)

    const handleTouch = () => {
        dice.current.play(0, 180)
        setShow(true)
        rollDice()
    }

    useEffect(() => {
        dice.current.play(180, 180)
    }, [])

    return (
        <TouchableOpacity onPress={handleTouch}>
            <AnimatedLottieView
                source={require('./dice-motion.json')}
                loop={false}
                autoPlay={false}
                style={{ width: 400, height: 400 }}
                resizeMode='cover'
                ref={dice}
            />
        </TouchableOpacity>
    )
}
