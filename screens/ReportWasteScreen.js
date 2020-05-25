import React, { Component, useState } from 'react';
import { Image, AppRegistry, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ImageBackground, TextInput, Picker, text, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import firebase from 'firebase'
import { reset } from 'expo/build/AR';

export default class ReportWasteScreen extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname: '',
            telephone: '',
            adress: '',
            state: '',
            wasteType: '',
            wasteAmount: '',
        }
    }
    updateValue(text, field) {
        if (field == 'name') {
            this.setState({
                name: text,
            })
        }
        else if (field == 'surname') {
            this.setState({
                surname: text
            })
        }
        else if (field == 'telephone') {
            this.setState({
                telephone: text
            })
        }
        else if (field == 'adress') {
            this.setState({
                adress: text
            })
        }
        else if (field == 'state') {
            this.setState({
                state: text
            })
        }
        else if (field == 'wasteType') {
            this.setState({
                wasteType: text
            })
        }
        else if (field == 'wasteAmount') {
            this.setState({
                wasteAmount: text
            })
        }
    }
    submit(name, surname, telephone, adress, state, wasteType, wasteAmount) {
        let data = {}
        data.name = this.state.name
        data.surname = this.state.surname
        data.telephone = this.state.telephone
        data.adress = this.state.adress
        data.state = this.state.state
        data.wasteType = this.state.wasteType
        data.wasteAmount = this.state.wasteAmount

        if (data.name.trim() === "") {
            this.setState(() => ({ nameError: "First name required." }));
            setTimeout(() => this.setState(() => ({ nameError: "" })), 3000)
        }
        if (data.surname.trim() === "") {
            this.setState(() => ({ surnameError: "Surname required." }));
            setTimeout(() => this.setState(() => ({ surnameError: "" })), 3000)
        }
        if (data.telephone.trim() === "") {
            this.setState(() => ({ telError: "Telephone required." }));
            setTimeout(() => this.setState(() => ({ telError: "" })), 3000)
        }
        if (data.adress.trim() === "") {
            this.setState(() => ({ adressError: "Adress required." }));
            setTimeout(() => this.setState(() => ({ adressError: "" })), 3000)
        }
        if (data.state.trim() === "") {
            this.setState(() => ({ stateError: "State required." }));
            setTimeout(() => this.setState(() => ({ stateError: "" })), 3000)
        }
        if (data.wasteAmount.trim() === "") {
            this.setState(() => ({ amountError: "Waste Amount required." }));
            setTimeout(() => this.setState(() => ({ amountError: "" })), 3000)
        }
        if (data.wasteType.trim() === "") {
            this.setState(() => ({ typeError: "Waste Type required." }));
            setTimeout(() => this.setState(() => ({ typeError: "" })), 3000)
        }
        if (data.name.trim() && data.surname.trim() && data.telephone.trim() && data.adress.trim() &&
            data.state.trim() && data.wasteAmount.trim() && data.wasteType.trim() !== "") {
            firebase.database().ref('Reports/')
                .push({ name, surname, telephone, adress, state, wasteType, wasteAmount })
                this.setState(() => ({ success: "Form submission is successful, Thank You. The team will reach you as soon as possible." }));
                setTimeout(() => this.setState(() => ({ success: "" })), 8000)
                this.setState({
                    name:'',
                    surname:'',
                    telephone:'',
                    adress:'',
                    state:'',
                    wasteType:'',
                    wasteAmount:''
                })

            //console.warn(data)
            //******************************************************************************************** */
            /*const url = 'url';
            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
            })
                .then(response => response.json())
                .then(response => {
                    console.log('Success:', response);
                    this.setState(() => ({ success: "Form Send Successfully" }));
                    setTimeout(() => this.setState(() => ({ success: "" })), 3000)
                })
                .catch((error) => {
                    console.error('Error:', error);
                    this.setState(() => ({ success: "Form Send Error" }));
                    setTimeout(() => this.setState(() => ({ success: "" })), 3000)
                });*/
        }
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../assets/images/formBg.jpg')}
                imageStyle={{ opacity: 0.5 }}>
                <ScrollView style={styles.form}>
                    <Input inputStyle={styles.input} value={this.state.name} placeholder="Name" onChangeText={(text) => this.updateValue(text, 'name')} />
                    {!!this.state.nameError && (
                        <Text style={{ color: "red" }}>{this.state.nameError}</Text>
                    )}
                    <Input inputStyle={styles.input} value={this.state.surname} placeholder="Surname" onChangeText={(text) => this.updateValue(text, 'surname')} />
                    {!!this.state.surnameError && (
                        <Text style={{ color: "red" }}>{this.state.surnameError}</Text>
                    )}
                    <Input inputStyle={styles.input} value={this.state.telephone} placeholder="Telephone Number" keyboardType={"numeric"} onChangeText={(text) => this.updateValue(text, 'telephone')} />
                    {!!this.state.telError && (
                        <Text style={{ color: "red" }}>{this.state.telError}</Text>
                    )}
                    <Input inputStyle={styles.input} value={this.state.adress} placeholder="Adress" onChangeText={(text) => this.updateValue(text, 'adress')} />
                    {!!this.state.adressError && (
                        <Text style={{ color: "red" }}>{this.state.adressError}</Text>
                    )}
                    <Input inputStyle={styles.input} value={this.state.state} placeholder="State" onChangeText={(text) => this.updateValue(text, 'state')} />
                    {!!this.state.stateError && (
                        <Text style={{ color: "red" }}>{this.state.stateError}</Text>
                    )}
                    <Picker style={{ color: "white" }}
                        onValueChange={(itemValue, itemIndex) => this.updateValue(itemValue, 'wasteType')}
                        selectedValue={this.state.wasteType} value={this.state.wasteType}>
                        <Picker.Item label="Select Waste Type" value="" />
                        <Picker.Item label="Paper" value="Paper" />
                        <Picker.Item label="Glass" value="Glass" />
                        <Picker.Item label="Battery" value="Battery" />
                    </Picker>
                    {!!this.state.typeError && (
                        <Text style={{ color: "red" }}>{this.state.typeError}</Text>
                    )}
                    <Input inputStyle={styles.input} value={this.state.wasteAmount} placeholder="Waste Amount (Kg)" keyboardType={"numeric"} onChangeText={(text) => this.updateValue(text, 'wasteAmount')} />
                    {!!this.state.amountError && (
                        <Text style={{ color: "red" }}>{this.state.amountError}</Text>
                    )}
                    <RaisedTextButton title='Report Waste' onPress={() => {this.submit(this.state.name, this.state.surname, this.state.telephone, this.state.adress, this.state.state, this.state.wasteType, this.state.wasteAmount)}}
                        titleColor="white" color="orange" shadeColor="orange" shadeOpacity={0.4} />
                    {!!this.state.success && (
                        <Text style={{ color: "white", alignSelf: "center", marginTop: "2%",marginHorizontal:"2%", fontSize: 18 }}>{this.state.success}</Text>
                    )}
                </ScrollView>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        resizeMode: 'center',
        position: 'relative',
    },
    form: {
        flex: 1,
        marginTop:"12%",
        marginHorizontal: "5%",
    },
    input: {
        color: "white"
    }
})