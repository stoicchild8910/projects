import React, { useState, useEffect } from "react";
// import { Component } from "react";
import { Button, View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

// function으로 했을 때 lifecyle을 어떻게 사용하는 지 모름

function handleTimeout() {
    alert('We are getting ready!');
}

export default ({ navigation, route }) => {

    const [isReady, setisReady] = useState(false);

    //DOM 이나 State가 바뀔 때 실행
    useEffect(() => {
        const timer = setTimeout(() => { setisReady(true) }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const styles = StyleSheet.create({
        titleText: {
            fontSize: 40,
            fontWeight: "bold",
            color: "black",
            textAlign:"center"
        },
        coffeeReady: {
            fontSize: 40,
            fontWeight: "bold",
            color: "blue",
            textAlign:"center"
        }
    });

    const { coffeeNum } = route.params;
    console.log(coffeeNum);

    return(
        isReady?(
            <View>
                <Image 
                    source={{ uri: "https://images.unsplash.com/photo-1574279832544-5c67e25b22ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" }}
                    style={{ width:420, height:400 }}
                />
                <Text style={ styles.coffeeReady }>Coffee Is Ready!</Text>
                <Button 
                title="Pay for Sweet Coffee"
                onPress={()=>{navigation.navigate("End", {coffeeNum})}}
                />
                <Button 
                title="Back to DETAIL"
                onPress={()=>{navigation.navigate("Detail")}}
                />
                <Button 
                title="Back to HOME"
                onPress={()=>{navigation.navigate("Home")}}
                />
            </View>
        ):(
            <View>
            <Image  
                source={{ uri: "https://images.unsplash.com/photo-1598909514165-a8c8f3f29986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }}
                style={{ width:420, height:400 }}
            />
            <Text style={ styles.titleText }>You Ordered {coffeeNum.Number} of coffee!</Text>
            <Button 
                title="Back to DETAIL"
                onPress={()=>{navigation.navigate("Detail")}}
            />
            <Button 
                title="Back to HOME"
                onPress={()=>{navigation.navigate("Home")}}
            />
            </View>
        )
    );
};


/*
// class로 선언했을 때 route 처리를 모름
const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        fontWeight: "bold"
    }
});
// const { coffeeNum } = route.params;
const AppNavigator = 
class Coffee extends Component {
    render() {

        this.componentDidMount();

        return(
            <View>
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1598909514165-a8c8f3f29986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }}
                style={{ width:420, height:400 }}
            />
            <Text style={ styles.titleText }>You Ordered {coffeeNum.Number} of coffee!</Text>
            <Button 
                title="Back to DETAIL"
                onPress={()=>{navigation.navigate("Detail")}}
            />
            <Button 
                title="Back to HOME"
                onPress={()=>{navigation.navigate("Home")}}
            />
            </View>
        );
    }
};
export default Coffee;
*/


