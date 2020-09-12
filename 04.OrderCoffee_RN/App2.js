import React, { useState } from 'react';
import { Button, Image, View, Text } from "react-native";

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
// import * as Font from "expo-font";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
// import Stack from "./navigation/Stack";

const cacheImg = (img) => img.map(cur => {
  if(typeof cur === "string"){ 
    return Image.prefetch(cur); //return Promise
  } else{
    return Asset.fromModule(cur).downloadAsync(); //return Promise
  }
});
const cacheFonts = fonts => fonts.map(cur => Font.loadAsync(cur));

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post){
      alert(route.params.post);
    }
  }, [route.params?.post]);

  return (
    <View>
      <Image 
        source={{ uri: "https://images.unsplash.com/photo-1589701161616-692b06ecf598?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" }} 
        style={{ width: 420 , height: 500}} />
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Button 
        title="Go to Detailed page" 
        onPress={()=>navigation.navigate('Details',{
          itemId: 86,
          otherParam: 'anything you want here',
        })}
        style ={{ width:300 }}  //doesn't work
      />
      <Button 
        title="Post Page"
        onPress={()=>navigation.navigate('Post')}
      />
      <Button 
        title="Create post"
        onPress={()=> navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function DetailScreen({ route, navigation }) {
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View>
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1598909514165-a8c8f3f29986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }}
        style={{ width: 420 , height: 300}} />
        <Text>Detailed Screen for you!</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)} </Text>
        <Button 
          title="Go to Details .. again"
          onPress={()=>navigation.push('Details', {
            itemId: Math.floor(Math.random()*100),
          })}
        />
        <Button 
          title="AND again!"
          onPress={()=>navigation.push('Details', {
            otherParam: "are you looking for these?",
          })}
        />
        {/* <Button
          title="Home"
          onPress={()=>navigation.navigate('Home')}
        /> */}
        {/* <Button 
          title="goBack"
          onPress={()=>navigation.goBack()}
        /> */}
        {/* <Button
          title="popToTop"
          onPress={()=>navigation.popToTop()}
        /> */}
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');
  return (
    <>
    <TextInput 
      multiline
      placeholder="What's on your mind?"
      style = {{ height:200, padding:10, backgroundColor:"ivory" }}
      value = {postText}
      onChangeText={setPostText}
    />
    <Button 
      title="Done"
      onPress={()=> {
        navigation.navigate('Home', {post: postText});
      }}
    />
    </>
  );
}

const Stack = createStackNavigator();



export default function App() {

  const [isReady, setIsReady] = useState(false); //[curStete, stateFunc] , initial curState is false
  const loadAssets = () => {
    const images = cacheImg([
      "https://images.unsplash.com/photo-1589701161616-692b06ecf598?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      require("./assets/favicon.png")
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts])
  };
  const onFinish = () => setIsReady(true);
  const onError = (e) => { console.error(e) };

  return(
    isReady?
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailScreen} initialParams={{ itemId: 42 }}/>
          <Stack.Screen name="Post" component={CreatePostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    : <AppLoading startAsync={ loadAssets } onFinish= { onFinish } onError={ onError } />
  );
}

