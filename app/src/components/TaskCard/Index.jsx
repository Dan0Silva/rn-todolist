import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';
const Icon = FontAwesome

export default props => {
  const task = props.task

  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>
                {task.title}
            </Text>
            <Text style={styles.subtitle}>
                {task.subtitle}
            </Text>
        </View>

        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
                <Icon name="check-square" size={22} color="#36373b" />
            </TouchableOpacity>
        </View>
    </View>
  );
}
