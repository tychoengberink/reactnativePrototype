
import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Text } from "../Themed";
import { useForm, Controller } from "react-hook-form";
import Constants  from "expo-constants";
import AsyncStorage from '@react-native-async-storage/async-storage';


const AddPartyForm = () => {
  const {handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      description: ''
    }
  });
  const onSubmit = async (data: any) => {
     
      try {
        const keys = await AsyncStorage.getAllKeys();
        data.id = String(keys.length + 1);
        console.log(data);
        await AsyncStorage.setItem(
          data.id,
          JSON.stringify(data)
        );
      } catch (error) {
        // Error saving data
      }
  };
  

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="title"
        rules={{ required: true }}
      />
      {errors.title && <Text style={styles.error}>Title is required</Text> }
      <Text style={styles.label}>Last name</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="description"
        rules={{ required: true }}
      />
      {errors.description && <Text style={styles.error}>Description is required</Text> }
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          title="Submit"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  error: {
    color: 'red'
  },
  label: {
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default AddPartyForm;
