import React, {useEffect, useState} from 'react';
import { Keyboard, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import store from '../Shareds/store';
import { colorsDefault, styleGlobal, viewport } from '../Shareds/Styles/index';

function Login({ navigation }) {
    const [keyboardShow, setKeyboardShow] = useState(false)
    useEffect(() => {
        store.dispatch({type: "SHOW_PANEL", showPanel: false}); 
        Keyboard.addListener("keyboardDidShow", () => {
          setKeyboardShow(true);
        });
        Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardShow(false);
        });
      }, []);
    return (
        <View style={{ backgroundColor: colorsDefault.primary, flex: 1 }}>
            <View style={{ flex: 1, margin: 1 }}></View>
            <View style={{ flex: 3, display: "flex", justifyContent: "flex-start", alignItems: "center", 
            marginHorizontal: viewport.width * 0.15, maxWidth: viewport.width * 0.7 }}>
                <Image style={{
                    width: viewport.width / 2,
                    height: viewport.width / 2.8,
                    resizeMode: 'contain',
                    marginBottom: 20,
                }} source={require("../../assets/logo.png")} />
                <TextInput returnKeyType={"next"} style={styleGlobal.inputText} name="Username" placeholder="Enter your name or E-mail"/>    
                <TextInput style={styleGlobal.inputText} name="password" placeholder="Digite o usuário"/>    
                <TouchableOpacity style={styleGlobal.buttonDefault} onPress={()=>{store.dispatch({type: "NAVIGATE", btnRoutes: [], navigation}); navigation.navigate('Home')}}>
                    <Text style={styleGlobal.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{display: (keyboardShow == true ? "none" : "flex")}}>
                <TouchableOpacity>
                <Text style={{textAlign: "center", color: "#fff"}}>Forgot password</Text>
                </TouchableOpacity>
                <Text style={{textAlign: "center", fontWeight: "bold", color: "#fff", margin: 10}}>_____</Text>
                <TouchableOpacity>
                    <Text style={{textAlign: "center", color: "#fff"}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, margin: 1 }}></View>
        </View>
    )
}

export default connect(state => ({
    showPanel: state.showPanel
}))(Login)