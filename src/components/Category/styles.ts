import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width:104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
        paddingVertical: 7
    },
    content:{
        width: 100,
        height:116,
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    checked:{
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderRadius: 3,
    },
    check:{
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3,
    },
    title:{
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 15
    },
})