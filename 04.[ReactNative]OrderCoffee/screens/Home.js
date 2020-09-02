import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

export default ({ navigation }) => {
    // console.log(navigation);
    
    const styles = StyleSheet.create({
        hello: {
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
            textAlign:"center"
        }
    });
    
    return(
        <View>
            <Image 
                source={{ uri:"https://images.unsplash.com/photo-1533567956068-98ef0cb68ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1060&q=80" }}
                style={{ width:420, height:400 }}
            />
            <Text style={ styles.hello }>Hello,{"\n"}How Can I Help You?</Text>
            <Button 
                title="Order Coffee"
                onPress={()=> navigation.navigate("Detail")} 
            />
        </View>
    )
};