import React from 'react';
import {Text, View, Button} from 'react-native';
import MyButton from './src/components/MyButton';

const App = () => {
  return (
    <View style = {{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    onPress={() => alert('Click!!')}>
      <Text style={{ fontSize:30, marginBottom:10}}>My Button Component</Text>
      <MyButton title="Button" onPress={() => alert('props')}/>
      <MyButton title="Button" onPress={() => alert('children')}>Children Props</MyButton>
      <MyButton onPress={() => alert('default')}></MyButton>
      {/* <Button title="Button" onPress={() => alert('Click!!!')}></Button> */}
    </View>
  )
}

export default App;