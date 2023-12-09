import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './navigation/AuthProvider';
import HomeScreen from './screens/HomeScreen';
import AddNoteScreen from './screens/AddNoteScreen';
import LoginScreen from './screens/LoginScreen';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBnkKL_LISbVCAikuTOVqgG4KUCwUgxn-I",
    authDomain: "notetakingapp-95a56.firebaseapp.com",
    projectId: "notetakingapp-95a56",
    storageBucket: "notetakingapp-95a56.appspot.com",
    messagingSenderId: "569901676186",
    appId: "1:569901676186:web:74ebd6cd55614a70195123"
};

 
firebase.initializeApp(firebaseConfig);
 

// export default function App() {
//   return (
//     <AuthProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="AddNote" component={AddNoteScreen} />
//           <Stack.Screen name="Login" component={LoginScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AuthProvider>
//   );
// }

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddNote" component={AddNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



