import React from "react";
import {Image, ScrollView, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";

import { styles } from './styles'



export function GuildIcon(){
    const uri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaicvu9YrLDa65x537-fpOH2BEROxoVlBzVE65qBAtHebR_0P_ORLdLyvJXZ8_NIuVMdg&usqp=CAU"
  return(
    <Image
        source={{uri}}
        style={styles.image}
        resizeMode="cover"
    />
  )
}
