import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Item = ({ data }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.title}>{data.description}</Text>
  </View>
);

export default function UpcomingPartiesTab({ navigation }: RootTabScreenProps<'TabUpcomingParties'>) {
  const [parties, setParties] = useState([]);

  const renderItem = ({ item }) => (
    <Item data={item} />
  );

  useEffect( () => {
    
    async function fetchData() {
      // await AsyncStorage.clear();
    try {
   
      const keys = await AsyncStorage.getAllKeys();
      for (const key in keys){
      await AsyncStorage.getItem(key).then(item => {
        if(item){
          console.log(item);
        parties.push(JSON.parse(item));
        }
      });
      }
    
      setParties(parties);
    } catch(e) {
      console.log(e.message)
    }
  }

  fetchData();
  
  });

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      {/* <FlatList
        data={parties}
        renderItem={renderItem}
              />  */}
    </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item:{
    margin:5
  },  
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
