import React, {useState} from 'react';
import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from '../components/Themed';
import { Party, RootTabScreenProps } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function UpcomingPartiesTab({ navigation }: RootTabScreenProps<'TabUpcomingParties'>) {
  const [parties, setParties] = useState([]);

 function goToNextScreen(item: Party) {
    navigation.navigate('DetailsPartyModal', {party: item});
}

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  async function fetchData() {
    // await AsyncStorage.clear();
    parties.splice(0, parties.length);
    const keys = await AsyncStorage.getAllKeys();
    for (const key in keys){
    await AsyncStorage.getItem(key).then(item => {
      if(item){
      parties.push(JSON.parse(item));
      }
    });
    }
    console.log(parties);
    setParties(parties);
}

  return (
    <View  style={styles.container}>
      { parties &&
      <FlatList
        data={parties}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {return <TouchableHighlight onPress={() => goToNextScreen(item)}>
        <View style={styles.item}  >
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
        </TouchableHighlight>}}/> 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
  
  },  
});
