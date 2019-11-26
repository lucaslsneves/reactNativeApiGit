import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  view:{
    flex: 1,

  }
})

export default class App extends Component {
  render(){
    return (
      <View style={styles.view}>
        <Text style={{fontWeight:'bold'}}>Nikodemos</Text>
      </View>
    );
  }
  
};



