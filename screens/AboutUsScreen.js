import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, ImageBackground, View } from 'react-native';

export default function AboutUsScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/images/aboutUsBg.jpg')}
                imageStyle={{ opacity: 0.6 }}>
                <View style={styles.imageTextContainer}>
                    <Text style={styles.imageText}>About Us</Text>
                    <Text style={styles.line}>___________</Text>
                    <Text style={styles.imageText2}>A b o u t  G r e e n B i n</Text>
                </View>
            </ImageBackground>
            <ImageBackground style={styles.text} source={require('../assets/images/1.jpg')}
                imageStyle={{ opacity: 0.2 }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>OUR MISSION</Text>
                    <Text style={styles.goldenLine}>__________________</Text>
                    <Text style={styles.secondTitle}>Why us? Because we love the world and living. We want to leave a good legacy for our future generations!</Text>
                    <Text style={styles.mainText}>Every living thing needs soil, water and air. The general name of all this is nature. All these blessings are for man. Our richness of nature is decreasing day by day. Industrialization and population density in cities caused an increase in environmental problems. We Can Save All Humanity by Recycling!</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: .4,
        resizeMode: 'center',
        position: 'relative',
    },
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    text: {
        flex: .6,
        resizeMode: 'center',
        position: 'relative',
    },
    imageText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 30
    },
    imageText2: {
        color: "white",
        fontSize: 20,
        marginTop: "3%"
    },
    imageTextContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10%"
    },
    line: {
        color: "white"
    },
    goldenLine:{
        color:"orange",
        fontWeight:"bold"
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30
    },
    secondTitle:{
        color:"white",
        fontSize:18,
        marginHorizontal:"10%",
        marginTop:"2%"
    },
    mainText:{
        color:"white",
        fontSize:14,
        marginStart:"2%",
        marginTop:"4%"
    },
    titleContainer:{
        flex: 1,
        alignItems: "center",
        marginTop:"4%",
    }
})