import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ProgressBarProps = {
    label: string;
    current: number;
    goal: number;
    unit?: string;
    color?: string;
};

export default function ProgressBar({ label, current, goal, unit = '', color = '#FF6B35' }: ProgressBarProps) {
    const percent = goal > 0 ? Math.min(current / goal, 1) * 100 : 0;

    return (
        <View style={styles.container}>
            <View style={styles.labelRow}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{Math.round(current)} / {goal}{unit}</Text>
            </View>
            <View style={styles.track}>
                <View style={[styles.fill, { width: `${percent}%`, backgroundColor: color }]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1a1a1a',
    },
    value: {
        fontSize: 14,
        color: '#888',
    },
    track: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#eee',
        overflow: 'hidden',
    },
    fill: {
        height: '100%',
        borderRadius: 5,
    },
});
