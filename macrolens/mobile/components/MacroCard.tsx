import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ClaudeAnalysisResult } from '@/types';

type MacroCardProps = {
    result: ClaudeAnalysisResult;
};

const CONFIDENCE_COLORS: Record<ClaudeAnalysisResult['confidence'], string> = {
    high: '#4CAF50',
    medium: '#FF9800',
    low: '#F44336',
};

export default function MacroCard({ result }: MacroCardProps) {
    const { foods, totals, confidence } = result;

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>Meal Summary</Text>
                <View style={[styles.badge, { backgroundColor: CONFIDENCE_COLORS[confidence] }]}>
                    <Text style={styles.badgeText}>{confidence}</Text>
                </View>
            </View>

            <View style={styles.macroRow}>
                <MacroStat label="Calories" value={totals.calories} unit="kcal" />
                <MacroStat label="Protein" value={totals.protein} unit="g" />
                <MacroStat label="Carbs" value={totals.carbs} unit="g" />
                <MacroStat label="Fat" value={totals.fat} unit="g" />
            </View>

            <View style={styles.foodList}>
                {foods.map((food) => (
                    <View key={food.name} style={styles.foodRow}>
                        <Text style={styles.foodName}>{food.name}</Text>
                        <Text style={styles.foodGrams}>{food.estimated_grams}g</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

function MacroStat({ label, value, unit }: { label: string; value: number; unit: string }) {
    return (
        <View style={styles.stat}>
            <Text style={styles.statValue}>{value}{unit === 'kcal' ? '' : unit}</Text>
            <Text style={styles.statLabel}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1a1a1a',
    },
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    macroRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    stat: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
    },
    statLabel: {
        fontSize: 12,
        color: '#888',
        marginTop: 2,
    },
    foodList: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 12,
        gap: 8,
    },
    foodRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    foodName: {
        fontSize: 14,
        color: '#333',
    },
    foodGrams: {
        fontSize: 14,
        color: '#888',
    },
});
