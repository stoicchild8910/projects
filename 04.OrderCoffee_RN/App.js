import React, { useState } from "react";
import { AppLoading } from "expo";
// import * as Font from "expo-font";
import { Text, Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./navigation/Stack.js";


/** caching **/
const cacheImages = images =>
    images.map(cur => {
        if(typeof cur === "string"){
            return Image.prefetch(cur);
        } else {
            return Asset.fromModule(cur).downloadAsync();
        }
    });
// const cacheFonts = fonts =>
//     fonts.map(cur => [Font.loadAsync(cur), Font.loadAsync(cur)]);


/** rendering **/
export default function App() {
    const [isReady, setisReady] = useState(false);
    const loadAssets = () => {
        const images = cacheImages([
            "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
            require("./assets/favicon.png")    
        ]);
        // const font = cacheFonts([Ionicons.font]);
        // return Promise.all([...images, ...fonts]);
        return Promise.all([...images]);
    }
    const onFinish = () => setisReady(true);

    return isReady ? (
    <View>
        <Text>Ready!</Text>
    </View>,
    <NavigationContainer>
        <Stack />
    </NavigationContainer>
    ) : (
    <AppLoading 
        startAsync = {loadAssets}
        onFinish = {onFinish}
        onError = {console.error}
    />
    );
}