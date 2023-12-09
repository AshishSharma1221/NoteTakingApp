import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { AuthContext } from '../navigation/AuthProvider';
import { styles } from '../styles';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const AddNoteScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
  
    const addNote = async () => {
      await firebase.firestore().collection('notes').add({
        title,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
  
      navigation.goBack();
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter note title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Button title="Add Note" onPress={addNote} />
      </View>
    );
  };
  
  export default AddNoteScreen;
