import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const parties: Object[] = [];
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e.message)
  }
}


export default function UpcomingPartiesTab({ navigation }: RootTabScreenProps<'TabUpcomingParties'>) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      {/* <FlatList
        data={parties.push(getData)}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
