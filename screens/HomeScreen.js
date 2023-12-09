import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
// import firebase from 'firebase/app';
import { initializeApp, getApps } from 'firebase/app';
// import 'firebase/firestore';

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
        if (!getApps().length) {
          console.error('Firebase is not initialized');
          return;
        }
    
        const notesCollection = await firebase.firestore().collection('notes').get();
        const notesData = notesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNotes(notesData);
      };
    
      fetchNotes();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      {notes.map(note => (
        <Text key={note.id}>{note.title}</Text>
      ))}
      <Button title="Add Note" onPress={() => navigation.navigate('AddNote')} />
    </View>
  );
};

export default HomeScreen;
