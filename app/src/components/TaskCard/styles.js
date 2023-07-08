import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      minHeight: 100,
      width: 356,
      marginVertical: 12,
      backgroundColor: '#fafafa',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 12,
      overflow: 'hidden',
    },

    textContainer: {
        flex: 5,
        justifyContent: 'center',
        margin: 18
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        flex: 1,
        textAlignVertical: 'center'
    },

    subtitle: {
        fontSize: 14,
        color: '#303030',
        flex: 1,
        marginLeft: 13
    },

    buttonsContainer: {
        flex: 1.2,
        height: '100%',
        backgroundColor: '#f0f0f0',
        borderLeftWidth: 1,
        borderLeftColor: '#a0a0a0'
    },

    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});