import {View, Text, Image} from 'react-native';
import React, { ReactNode } from "react";
import { styles } from "./styles";
import { Avatar } from '../Avatar';

export function Profile(){
    return (
        <View style={styles.container}>
            <Avatar 
                urlImage= "https://github.com/ronivonmatos.png"
            />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        Ronivon
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    )
}