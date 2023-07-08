import AsyncStorage from '@react-native-async-storage/async-storage';

const databaseOperations = {
    createTask: async (value) => {
        const stringValue = JSON.stringify(value)
        
        try {
            await AsyncStorage.setItem(`@ToDoList:${value.id}`, stringValue);
        } catch (e) {
            console.warn(e)
        }
    },

    removeTask: async(value) => {
        try {
            await AsyncStorage.removeItem(value[0])
        } catch (e) {
            console.warn(e)
        }
    },

    getAllTasks: async () => {
        // const keys = await AsyncStorage.getAllKeys()
        // const items = await AsyncStorage.multiGet(keys)

        // const tasks = items.map(item => {
        //     return JSON.parse(item[1])
        // }) 
        
        // try {
        //     // retorna um array com todas as tasks em formato de JSON
        //      return tasks
        // } catch (e) {
        //     console.warn(e)
        // }

        return 'test'
    }
}

export default databaseOperations