import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // width: '100%',
    // backgroundColor: 'yellow'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listItem: {
    borderBottomWidth: 5,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    marginTop:20,
    // backgroundColor: 'red',
    width: 400
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
     // backgroundColor: 'green'
  },
  listItemSubtitle: {
    fontSize: 12,
    color: '#888',
    // backgroundColor: 'blue'
  },
});
