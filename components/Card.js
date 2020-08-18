import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from "../constants/colors";

const Card = props => {
    return <View style={{...styles.cardContainer, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: Colors.white,
        elevation: 8, //only for android
        padding: 20,
        borderRadius: 10
    }
});

export default Card;