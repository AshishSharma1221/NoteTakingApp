import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, Icon, ListItem } from 'react-native-elements';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { AuthContext } from '../navigation/AuthProvider';
import { styles } from '../styles';

const HomeScreen = ({ navigation }) => {
    const [notes, setNotes] = useState([]);
  
    useEffect(() => {
        // Set up a real-time listener for the 'notes' collection
        const unsubscribe = firebase.firestore().collection('notes')
          .orderBy('createdAt', 'desc')
          .onSnapshot(querySnapshot => {
            const notesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setNotes(notesData);
          });
    
        // Clean up the listener when the component unmounts
        return () => {
          unsubscribe();
        };
      }, []);
    
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Your Notes</Text>
          
          <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem containerStyle={styles.listItem}>
            <ListItem.Content>
              <ListItem.Title style={styles.listItemTitle}>{item.title}</ListItem.Title>
              <ListItem.Subtitle style={styles.listItemSubtitle}>
                {item.createdAt ? item.createdAt.toDate().toDateString() : 'No date'}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
      />
          <Button title="Add Note" onPress={() => navigation.navigate('AddNote')} />
        </View>
      );
    };
    
    export default HomeScreen;
