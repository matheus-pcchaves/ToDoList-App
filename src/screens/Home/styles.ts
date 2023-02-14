import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333333',
      padding: 24
    },

    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#272727',
      borderRadius: 5,
      color: '#fff',
      padding: 16,
      fontSize: 16,
      marginRight: 12
    },

    buttonText: {
      color: '#fff',
      fontSize: 24
    },

    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#1E6F9F',
      alignItems: 'center',
      justifyContent: 'center'
    },

    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
    },

    listEmptyText: {
      color: '#808080',
      fontSize: 24,
      textAlign: 'center',
      marginTop: 36,
      marginBottom: 16,
    },

    tasksList: {
      width: '100%',

      flexDirection: 'row',      
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 24,
    },

    numbersOfTasks: {
      color: '#808080',
      fontSize: 16,
    },

    numbersOfTasksDone: {
      color: '#808080',
      fontSize: 16,
    }
  })