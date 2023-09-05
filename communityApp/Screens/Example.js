import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
//import { AdMobBanner } from 'expo-ads-admob';



const {width, height} = Dimensions.get("window");

const cat = new Audio.Sound();





export default function SoundBoard() {
    let playing = false;

    const CherryCrushYum = async () => {
        const soundObject = new Audio.Sound();
        console.log(playing);
        if (playing){
            return;
        }
        playing = true;
        try {
            await soundObject.loadAsync(require("../assets/audio/CherryCrushYum.mov"));
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        playing = false;
        
    };

    const CherryCrushNoSpicy = async () => {
        const soundObject = new Audio.Sound();
        console.log(playing);
        if (playing) {
            return;
        }
        playing = true;
        try {
            await soundObject.loadAsync(require("../assets/audio/CherryCrushNoSpicy.mov"));
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        playing = false;
        
    };

    const CherryCrushOowoo = async () => {
        const soundObject = new Audio.Sound();
        console.log(playing);
        if (playing){
            return;
        }
        playing = true;
        try {
            await soundObject.loadAsync(require("../assets/audio/CherryCrushOowoo.mov"));
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        playing = false;
        
    };

    const CherryCrushPizzaYum = async () => {
        const soundObject = new Audio.Sound();
        console.log(playing);
        if (playing){
            return;
        }
        playing = true;
        try {
            await soundObject.loadAsync(require("../assets/audio/CherryCrushPizzaYum.mov"));
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        playing = false;
        
    };

    const CherryCrushYehaw = async () => {
        const soundObject = new Audio.Sound();
        console.log(playing);
        if (playing){
            return;
        }
        playing = true;
        try {
            await soundObject.loadAsync(require("../assets/audio/CherryCrushYehaw.mov"));
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        playing = false;
        
    };

    const PinkyDollCatEars = async () => {
        const soundObject = new Audio.Sound();
        console.log(playing);
        if (playing){
            return;
        }
        playing = true;
        try {
            await soundObject.loadAsync(require("../assets/audio/PinkyDollCatEars.mov"));
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        playing = false;
        
    };

    const PinkyDollForYou = async () => {
        const soundObject = new Audio.Sound();
        console.log(playing);
        if (playing){
            return;
        }
        playing = true;
        try {
            await soundObject.loadAsync(require("../assets/audio/PinkyDollForYou.mov"));
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        playing = false;
        
    };

    const PinkyDollGangGang = async () => {
        const soundObject = new Audio.Sound();
        console.log(playing);
        if (playing){
            return;
        }
        playing = true;
        try {
            await soundObject.loadAsync(require("../assets/audio/PinkyDollGangGang.mov"));
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        playing = false;
        
    };

    const PinkyDollTakeACash = async () => {
        const soundObject = new Audio.Sound();
        console.log(playing);
        if (playing){
            return;
        }
        playing = true;
        try {
            await soundObject.loadAsync(require("../assets/audio/PinkyDollTakeACash.mov"));
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        playing = false;
        
    };

    const PinkyDollThisIsSoCool = async () => {
        const soundObject = new Audio.Sound();
        console.log(playing);
        if (playing){
            return;
        }
        playing = true;
        try {
            await soundObject.loadAsync(require("../assets/audio/PinkyDollThisIsSoCool.mov"));
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        playing = false;
        
    };

    const PinkyDollYesYesYes = async () => {
        const soundObject = new Audio.Sound();
        console.log(playing);
        if (playing){
            return;
        }
        playing = true;
        try {
            await soundObject.loadAsync(require("../assets/audio/PinkyDollYesYesYes.mov"));
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        playing = false;
        
    };

    const cat = async () => {
        const soundObject = new Audio.Sound();
        console.log(playing);
        if (playing){
            return;
        }
        playing = true;
        try {
            await soundObject.loadAsync(require("../assets/audio/cat.mp3"));
            await soundObject.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        playing = false;
        
    };










  return (
    <SafeAreaView style={styles.container}>
        <View>
            
        </View>
        <ScrollView>
            
            <View style={styles.row}>
            <Pressable style={({ pressed }) => [
                    styles.pressable,
                    {
                        backgroundColor: pressed ? '#263038' : '#751b7a',
                        opacity: pressed ? 0.7 : 1,
                        borderWidth: 5,
                        borderColor: "#d76cde",
                        borderRadius: 20,
                    },
                    ]} onPress={CherryCrushNoSpicy} >
                    <Text style={styles.buttonText}>Cherry Crush: No Spicy</Text>
                </Pressable><Pressable style={({ pressed }) => [
                    styles.pressable,
                    {
                        backgroundColor: pressed ? '#263038' : '#247e0b',
                        opacity: pressed ? 0.7 : 1,
                        borderWidth: 5,
                        borderColor: "#41e614",
                        borderRadius: 20,
                    },
                    ]} onPress={CherryCrushOowoo} >
                    <Text style={styles.buttonText}>Cherry Crush: uuwuu</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable style={({ pressed }) => [
                    styles.pressable,

                    {
                        backgroundColor: pressed ? '#263038' : '#10499e',
                        opacity: pressed ? 0.7 : 1,
                        borderWidth: 5,
                        borderColor: '#488aed',
                        borderRadius: 20,
                    },
                    ]}onPress={CherryCrushPizzaYum}>
                    <Text style={styles.buttonText}>Cherry Crush: Pizza Yum</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    styles.pressable,

                    {
                        backgroundColor: pressed ? '#263038' : 'purple',
                        opacity: pressed ? 0.7 : 1,
                        borderWidth: 5,
                        borderColor: "#d76cde",
                        borderRadius: 20,
                    },
                    ]} onPress={CherryCrushYehaw} >
                    <Text style={styles.buttonText}>Cherry Crush: Yeehaw</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
            <Pressable style={({ pressed }) => [
                    styles.pressable,
                    {
                        backgroundColor: pressed ? '#263038' : '#751b7a',
                        opacity: pressed ? 0.7 : 1,
                        borderWidth: 5,
                        borderColor: "#d76cde",
                        borderRadius: 20,
                    },
                    ]} onPress={CherryCrushYum} >
                    <Text style={styles.buttonText}>Cherry Crush: Yumm</Text>
                </Pressable><Pressable style={({ pressed }) => [
                    styles.pressable,
                    {
                        backgroundColor: pressed ? '#263038' : '#247e0b',
                        opacity: pressed ? 0.7 : 1,
                        borderWidth: 5,
                        borderColor: "#41e614",
                        borderRadius: 20,
                    },
                    ]} onPress={PinkyDollCatEars} >
                    <Text style={styles.buttonText}>PinkyDoll: Thank you</Text>
                </Pressable>
            </View>
            
            <View style={styles.row}>
                <Pressable style={({ pressed }) => [
                    styles.pressable,

                    {
                        backgroundColor: pressed ? '#263038' : '#10499e',
                        opacity: pressed ? 0.7 : 1,
                        borderWidth: 5,
                        borderColor: '#488aed',
                        borderRadius: 20,
                    },
                    ]} onPress={PinkyDollForYou} >
                    <Text style={styles.buttonText}>PinkyDoll: For you</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    styles.pressable,

                    {
                        backgroundColor: pressed ? '#263038' : 'purple',
                        opacity: pressed ? 0.7 : 1,
                        borderWidth: 5,
                        borderColor: "#d76cde",
                        borderRadius: 20,
                    },
                    ]} onPress={PinkyDollGangGang} >
                    <Text style={styles.buttonText}>PinkyDoll: Gang gang</Text>
                </Pressable>
            </View>
            
            <View style={styles.row}>
            <Pressable style={({ pressed }) => [
                    styles.pressable,
                    {
                        backgroundColor: pressed ? '#263038' : '#751b7a',
                        opacity: pressed ? 0.7 : 1,
                        borderWidth: 5,
                        borderColor: "#d76cde",
                        borderRadius: 20,
                    },
                    ]} onPress={PinkyDollTakeACash} >
                    <Text style={styles.buttonText}>PinkyDoll: Take a cash</Text>
                </Pressable><Pressable style={({ pressed }) => [
                    styles.pressable,
                    {
                        backgroundColor: pressed ? '#263038' : '#247e0b',
                        opacity: pressed ? 0.7 : 1,
                        borderWidth: 5,
                        borderColor: "#41e614",
                        borderRadius: 20,
                    },
                    ]} onPress={PinkyDollThisIsSoCool} >
                    <Text style={styles.buttonText}>PinkyDoll: This is so cool</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable style={({ pressed }) => [
                    styles.pressable,

                    {
                        backgroundColor: pressed ? '#263038' : '#10499e',
                        opacity: pressed ? 0.7 : 1,
                        borderWidth: 5,
                        borderColor: '#488aed',
                        borderRadius: 20,
                    },
                    ]} onPress={PinkyDollYesYesYes} >
                    <Text style={styles.buttonText}>PinkyDoll: Yess Yess Yess</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    styles.pressable,

                    {
                        backgroundColor: pressed ? '#263038' : 'purple',
                        opacity: pressed ? 0.7 : 1,
                        borderWidth: 5,
                        borderColor: "#d76cde",
                        borderRadius: 20,
                    },
                    ]} onPress={cat} >
                    <Text style={styles.buttonText}>Cat Meow</Text>
                </Pressable>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
  },
  image: {
    width: width,
    height: width,
  },
  test: {
    flex: 1,
    backgroundColor: "blue",
  },
  pressable: {
    backgroundColor: "#10499e",
    width: width / 2 - 5,
    height: (height - width) / 2 - 10,
    border: '#488aed',
    borderColor: "black",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});