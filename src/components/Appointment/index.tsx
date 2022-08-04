import React from "react";
import {ScrollView, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";

import { styles } from './styles'
import { GuildIcon } from "../GuildIcon";
import { categories } from "../../utils/categories";

import PlayerSvg from "../../assets/player.svg"
import CalendarSvg from "../../assets/calendar.svg"

export type GuildProps = {
    id: string,
    owner: boolean,
    name: string,
    icon: null  
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps; 
}

export function Appointment({
    data,
    ...rest
    }: Props){
    const [category] = categories.filter(item => item.id === data.category)
    const {owner} = data.guild
  return(
    <RectButton
        {...rest}
    >
        <View style={styles.container}>
            <GuildIcon/>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text  style={styles.title}>
                        {data.guild.name}
                    </Text>

                    <Text style={styles.category}>
                        {category.title}
                    </Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.dateInfo}>
                        <CalendarSvg/>
                        <Text style={styles.date}>
                            {data.date}
                        </Text>
                    </View>
                <View style={styles.playersInfo}>
                    <PlayerSvg fill={owner ? theme.colors.primary : theme.colors.on }/>
                    <Text style={[styles.player, {color:owner ? theme.colors.primary : theme.colors.on }]}>
                        {owner ? "Anfitrião" : "Visitante"}
                    </Text>
                </View>
                </View>

            </View>
        </View>
    </RectButton>
  )
}
