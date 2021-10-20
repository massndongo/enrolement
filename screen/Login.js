import * as React from "react";
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from "react-native";
// import '../assets/images/Logo-DP.png';

const Login = ({navigation})=>{
    function navigate(){
        navigation.navigate('Home');
    }
    return (
        <View style={styles.mainView}>

            <View style={styles.topView}>
                <Image style={styles.imageStyle} source={require('../assets/images/Logo-DP.png')} />
            </View>

            <View style={styles.bottomView}>
                <Text style={styles.Heading}>
                    Welcome {'\n'} back
                </Text>
                <View style={styles.FormView}>
                    <TextInput placeholder={"Username*"} placeholderTextColor={"#fff"} style={styles.TextInput} />
                    <TextInput placeholder={"Password*"} placeholderTextColor={"#fff"} secureTextEntry={true} style={styles.TextInput} />
                    <TouchableOpacity style={styles.Button} onPress={navigate}>
                        <Text style={styles.ButtonText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView:{
        marginTop:40,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    topView:{
        width:'100%',
        height:'40%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    },
    bottomView:{
        width:'100%',
        height:'60%',
        backgroundColor:'#000',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    imageStyle:{
        width:'60%',
        resizeMode:'contain'
    },
    Heading:{
        color:'#fff',
        fontSize:40,
        fontWeight:"bold",
        marginLeft:30,
        marginTop:30
    },
    FormView:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:30
    },
    TextInput:{
        width:'90%',
        borderWidth:1,
        borderColor:'#fff',
        height:52,
        borderRadius:10,
        paddingLeft:5,
        marginTop:20,
        color:"#fff"
    },
    Button:{
        width:'90%',
        color:'#000',
        height:50,
        borderRadius:10,
        marginTop:20,
        backgroundColor:'#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    ButtonText:{
        fontWeight:'bold',
        fontSize:18
    }
});

export default Login;