import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Props
interface Screen2Props {}

// Screen2 Component
export default ({}: Screen2Props) => {
  return (
    <View style={styles.container}>
     <View  style={{height:40, width:40, backgroundColor:'red'}} />
     <View  style={{height:40, width:40, backgroundColor:'blue'}} />
     <View  style={{height:40, width:40, backgroundColor:'green'}} />
     <View  style={{height:40, width:40, backgroundColor:'purple'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
});
