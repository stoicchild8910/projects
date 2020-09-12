import React from "react";
import { Text, Image, View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//route: key, name을 가진 객체
export default ({navigation, route}) => {

    const styles = StyleSheet.create({
        byebye: {
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
            textAlign:"center"
        }
    });

    console.log(route);
    return (
        <View>
            <Image 
                source = {{ uri: "https://images.unsplash.com/photo-1557395120-d48fc38063d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" }}
                style = {{ width:420, height:400 }}
            />
            <Text style={ styles.byebye }>Thank You. :) {"\n"} Total is {5*(route.params.coffeeNum.Number)} Dollar.{"\n"}Have A Good Day!</Text>
            <Button 
                title="BACK TO HOME"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
};

