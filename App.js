import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Pressable, SafeAreaView } from 'react-native';
import  * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import icon from './assets/icon.png';
import styles from './styles';
import Navbar from './navbar';

export default function App() {
  const [image, setImage] = useState('');
  // const [photo, setPhoto] = useState();
const [status, requestPermission] = ImagePicker.useCameraPermissions();
  async function openCamera(){
    if(status.status==="denied"){
      requestPermission();
    }else{
      let result =await ImagePicker.launchCameraAsync({mediaTypes: ImagePicker.MediaTypeOptions.All});
      console.log(result);
      setImage(result)
    }
    
  }
  async function openLibrary(){
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    setImage(result)
    console.log(status);
  }

  return (
    <SafeAreaView>
    <View style={{flex:1, alignItems:'center',flexDirection:'column',padding:15}}>
     <Navbar/>
     <Image source={image?image:icon} resizeMode='contain' style={{ width: 200, height: 200, borderRadius:10,marginTop:50 }} />
     
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop:50,flexDirection: 'row',width: '100%', height: 100, }}>
 
        <Pressable onPress={openLibrary}  >
        <FontAwesome name="picture-o" size={45} color="red"/>
        </Pressable>
        <View style={{width: 50}} />
        <Pressable onPress={openCamera} >
        <Octicons name="device-camera" size={45} color="red" />
        </Pressable>
      </View>
      
     </View>
     </SafeAreaView>
  );
}
