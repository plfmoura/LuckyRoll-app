import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Dice({ rollResult }) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const getData = () => {
            setShow(true)
        }
        setTimeout(() => {
            getData()
        }, 2000);
    }, [rollResult])

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 80, color: '#fff', textAlign: 'center', marginTop: 18 }}>{rollResult}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000a9',
        width: 150,
        height: 150,
        borderRadius: 100,
        position: 'absolute',
    },
});
