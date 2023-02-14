import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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