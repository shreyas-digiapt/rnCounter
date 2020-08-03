import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {RootType} from '../redux/store/store';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {bindActionCreators} from 'redux';
import {
  DecrementCount,
  IncreamentCount,
} from '../redux/action/actions/counter_a';

// Props
interface Screen1Props {}

// Screen1 Component
export default ({}: Screen1Props) => {
  const counterState = useSelector((state: RootType) => state.CounterReducer);
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    {IncreamentCount, DecrementCount},
    dispatch,
  );
  console.log('countTest', counterState.payload);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{counterState.payload}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            console.log("screen1Test", "increClick");
            
            actions.IncreamentCount();
          }}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => actions.DecrementCount()}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  countText: {
    fontSize: 72,
  },
  btn: {
    backgroundColor: 'gray',
    margin: 40,
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 24,
  },
});
