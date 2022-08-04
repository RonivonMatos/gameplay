import React from "react";
import {ScrollView, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";

import { styles } from './styles'

type Props = RectButtonProps & {
    title: string;
    subtitle: string;
}

export function ListHeader({
    title,
    subtitle,
    }: Props){
  return(
    <View style={styles.container}> 
        <Text style={styles.title}>
            {title}
        </Text>
        <Text style={styles.subtitle}>
            {subtitle}
        </Text>
    </View>
  )
}