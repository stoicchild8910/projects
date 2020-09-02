import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Modal } from 'react-native';


export default ({ navigation, route }) => {

  const styles = StyleSheet.create({
    ask: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        textAlign:"center"
      }
    });

  const [Number, setNumber] = useState(0);

  return(
    <View>
      <Text style={ styles.ask } >How many Coffee{"\n"}Do you want?</Text>
      <Text style={{ fontSize:50, textAlign:"center", color:"orange", margin:20 }}>{Number}</Text>
      <Button 
        title="+"
        onPress={()=>{setNumber(Number+1)}}
      />
      <Button 
        title="-"
        onPress={()=>{setNumber(Number-1)}}
      />
      <Button 
        title="Go To Order Coffee"
        onPress={()=>{navigation.navigate('Coffee',{
          coffeeNum:{Number}
        })}}
      />
      <Button 
        title="Go Back"
        onPress={()=>{navigation.goBack();}}
      />
      
    </View>
  );
};