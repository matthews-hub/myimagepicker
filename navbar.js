 import  React, { Text, View } from 'react-native';
import styles from './styles';
import {Appbar} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 

const Navbar = () => {
    return (
    
            <View style={styles.navcontainer}>
                <MaterialCommunityIcons name="cellphone-screenshot" size={35} color="red" />
                <Text style={styles.navheading}>Image Picker</Text>
                < MaterialCommunityIcons name="monitor-screenshot" size={35} color="red" />
            </View>
    )
}

export default Navbar;