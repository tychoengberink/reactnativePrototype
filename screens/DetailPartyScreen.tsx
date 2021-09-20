import React, {useEffect, useState} from 'react';
import { PermissionsAndroid } from 'react-native';
import { Button, StyleSheet } from "react-native";
import { Text, View } from '../components/Themed';
import Contacts from 'react-native-contacts';

export default function DetailsPartyScreen({ route, navigation }) {
    const { party } = route.params;
    
    React.useEffect(() => {
        navigation.setOptions({
          title: party.title,
        })
      })

     async function addInvitee(){
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
          {
            title: "Cool Photo App Camera Permission",
            message:
              "Cool Photo App needs access to your camera " +
              "so you can take awesome pictures.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          var newPerson = {
            emailAddresses: [{
              label: "work",
              email: "mrniet@example.com",
            }],
            displayName: "Friedrich Nietzsche"
          }
          
          Contacts.openContactForm(newPerson).then(contact => {
            console.log(contact);
          })
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    };

    


    return(
        <View style={styles.container}>
           <Text style={styles.text}>Description: {party.description}</Text>
           <Button title='Add invitee' onPress={()=>{
              addInvitee();
           }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    item: {
      padding: 20,
    
    },  
    label: {
        margin: 20,
        marginLeft: 0,
    },
    text: {
        height: 40,
        padding: 10,
    }
  });
  