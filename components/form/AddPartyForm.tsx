import React from 'react';
 import { Button, TextInput } from 'react-native-paper';
 import { View } from 'react-native';
 import { Formik } from 'formik';

export const AddPartyForm = (props: any) => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          label="test"
        />
        <Button style={{margin: '10px'}} mode="contained" onPress={handleSubmit}>Submit</Button>
      </View>
    )}
  </Formik>
);
