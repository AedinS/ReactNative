import React from 'react'
import {TouchableOpacity, Text} from 'react-native';

const MyButton = props => {
    console.log(props);
    return (
       
        <TouchableOpacity style = {{backgroundColor:'#3498db', padding: 16, margin:19, borderRadius: 8,}}
        onPress = {() => props.onPress()}>

            {/* <Text style={{fontSize:24}}> {props.title} </Text> */}
            <Text style={{color:'white', fontSize: 24}}>
            {props.children || props.title}
            </Text>
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title: 'Button',
    // onPress: PropTypes.func.isRequired,
};

export default MyButton;