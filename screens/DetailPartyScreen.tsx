import React, {useEffect, useState} from 'react';
import { ContactsWrapper } from 'react-native-contacts-wrapper';

import { Button, StyleSheet } from "react-native";
import { Text, View } from '../components/Themed';

export default function DetailsPartyScreen({ route, navigation }) {
    const { party } = route.params;
    
    React.useEffect(() => {
        navigation.setOptions({
          title: party.title,
        })
      })

      function addInvitee(){
        console.log(ContactsWrapper);
        ContactsWrapper.getContact()
        .then((contact) => {
            // Replace this code
            console.log(contact);
        })
        .catch((error) => {
            console.log("ERROR CODE: ", error.code);
            console.log("ERROR MESSAGE: ", error.message);
        });
      }

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
  