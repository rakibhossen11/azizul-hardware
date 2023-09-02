import { useState } from "react";
import { Alert, Text } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { View } from "react-native"

const RegisterForm = () =>{
    const [userDetails,setUserDetails] = useState({
        userName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const handleLogin = async () =>{
        try{
            if(
                userDetails.userName === "" ||
                userDetails.email === "" ||
                userDetails.phoneNumber === "" ||
                userDetails.password === ""
            )
            throw Error("Please fill all the fields");
            if(userDetails.password !== userDetails.confirmPassword)
            throw Error("Password and confirm password are not the same");

            Alert.alert("Great work", "Page is runnig successfully",[
                {
                    text: 'Cancel',
                    onPress: () => "",
                    style: 'cancel'
                },
                {text: "Ok", onPress: () =>""}
            ])
        }catch (error){
            Alert.alert("Something Went Wrong", error.message, [
                {
                  text: "Cancel",
                  onPress: () => "",
                  style: "cancel",
                },
                { text: "OK", onPress: () => "" },
              ]);
        }
    }

    return(
        <View style={styles.loginPageContainer}>
            <Text style={styles.title}>User Register</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} 
                    placeholder="Name"
                    name="userName"
                    value={userDetails.userName}
                    onChangeText={(text) =>{
                        setUserDetails((prev) =>{
                            return {...prev, userName: text}
                        })
                    }}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} 
                placeholder="Email"
                name="email"
                value={userDetails.email}
                onChangeText={(text) =>{
                    setUserDetails((prev) =>{
                        return{...prev, email: text}
                    })
                }}
                 />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} 
                placeholder="Phone Number"
                name="phone"
                value={userDetails.phoneNumber}
                onChangeText={(text) =>{
                    setUserDetails((prev) =>{
                        return{...prev, phoneNumber: text}
                    })
                }}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} 
                placeholder="Password"
                name="password"
                value={userDetails.password}
                onChangeText={(text) => {
                    setUserDetails((prev) =>{
                        return {...prev, password: text}
                    })
                }}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} 
                placeholder="Confirm Password"
                name="conPassword"
                value={userDetails.confirmPassword}
                onChangeText={(text) =>{
                    setUserDetails((prev) =>{
                        return {...prev, confirmPassword: text}
                    })
                }}
                />
            </View>
            <Button onPress={handleLogin} title="Register" color={"#0F52BA"} />
        </View>
    )
}

const styles = StyleSheet.create({
    loginPageContainer: {
        flex: 1,
        backgroundColor: "#EAF2F8",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 30
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    inputContainer: {
        width: 300,
        height: 40,
        borderRadius: 10,
        borderColor: "#ccc",
        borderWidth: 1
    },
    input: {
        height: 40,
        padding: 10, 
        fontSize: 16
    },
});

export default RegisterForm;