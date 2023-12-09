import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const AddNoteScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');

  const addNote = async () => {
    await firebase.firestore().collection('notes').add({ title });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        placeholder="Enter note title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Button title="Add Note" onPress={addNote} />
    </View>
  );
};

export default AddNoteScreen;
