import * as WebBrowser from 'expo-web-browser';
import  React,{Component} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Icon, SafeAreaView, FlatList, ImageBackground } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MonoText } from '../components/StyledText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigator,} from 'react-navigation';



export default class HomeScreen extends Component{
  render(){
    return(
        <ImageBackground
        style ={styles.backgroundImage}
        source={require('../assets/images/homeBg.jpg')}
        imageStyle={{opacity:0.6}}
        >
        <View style={styles.texts}>
        <Text style={styles.firstTitle}>HELP TO SAVE OUR WORLD</Text>
        <Text style={styles.secondTitle}>We Pay To You For Your Recyclable Waste</Text>
        <View style={styles.button}>
        <RaisedTextButton title="Let's Recycle!" onPress={() => this.props.navigation.navigate('Report Waste')}
        titleColor="white" color="orange" shadeColor="orange" shadeOpacity={0.4} />
        </View>
        </View>
        </ImageBackground>
      
    )
  }
  }

const styles = StyleSheet.create({
  backgroundImage: {
    flex:1,
    backgroundColor: 'black',
    opacity:1,
    resizeMode:'center',
    position:'relative',
  },
  button:{
    marginTop:"5%"
  },
  texts: {
    marginTop:"30%",
    marginHorizontal: "1%",
    alignItems:"center",
  },
  screenBottom: {
    flex: .5,
    backgroundColor: 'white',
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center"
  },
  firstTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "12%",
  },
  secondTitle: {
    color: "white",
    fontSize: 15,
    marginTop: "4%",
    fontWeight:"bold"
  },
  textInputArea: {
    width: "80%",
    height: "20%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: "3%",
    marginLeft: "-7%"
  },
  textInput: {
    height: "100%",
    width: "80%",
    marginLeft: "8%",
    fontWeight: "bold",
    fontSize: 16,
  },
  thirdTitle: {
    color: "white",
    fontSize: 18,
    marginTop: "8%",
    height: "30%"
  },
  screenTopTexts: {
    marginHorizontal: "6%"
  },
  graphZone: {
    marginRight: "15%"
  },
  graph: {
    alignItems: "center"
  },
  graphTextZone: {
    alignItems: "center"
  },
  graphText: {
    transform: [{ rotate: "270deg" }],
  },
  graphTextConfig: {
    fontSize: 25,
    fontWeight: "bold",
    color: "green"
  }
});
