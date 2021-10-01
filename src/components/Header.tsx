import Constants from 'expo-constants';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import userImg from '../assets/sample-pfp.jpg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>
                    Olá,
                </Text>
                <Text style={styles.userName}>
                    Victor
                </Text>
            </View>
            <Image source={userImg} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    }
})