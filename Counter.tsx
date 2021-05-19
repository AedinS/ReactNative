import React, { useState} from 'react';
import {View, Text} from 'react-native';
import MyButton from './CustomComp';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 30, margin:10}}>{count}</Text>
            <Text style={{fontSize: 30, margin:10}}>{double}</Text>
            <MyButton title="+" onPress={() => {setCount(count+1); setDouble(double+2);}} ></MyButton>
            <MyButton title="-" onPress={() => {setCount(count-1); setDouble(double-2);}}></MyButton>
        </View>


    );
};

const App = () => {
    return (
      <View style = {{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => alert('Click!!')}>
        <Counter/>
      </View>
    )
  }

export default App;
