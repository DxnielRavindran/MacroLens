import { StyleSheet, Text, View } from 'react-native';
import type { ClaudeAnalysisResult } from '@/types';

type MacroCardProps = {
    analysis: ClaudeAnalysisResult;
};

export default function MacroCard({ analysis }: MacroCardProps) {
    const { totals, confidence } = analysis;

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.calories}>{totals.calories} cal</Text>
                <Text style={[styles.confidence, confidenceStyle(confidence)]}>
                    {confidence} confidence
                </Text>
            </View>

            <View style={styles.macroRow}>
                <View style={styles.macroItem}>
                    <Text style={styles.macroValue}>{totals.protein}g</Text>
                    <Text style={styles.macroLabel}>Protein</Text>
                </View>
                <View style={styles.macroItem}>
                    <Text style={styles.macroValue}>{totals.carbs}g</Text>
                    <Text style={styles.macroLabel}>Carbs</Text>
                </View>
                <View style={styles.macroItem}>
                    <Text style={styles.macroValue}>{totals.fat}g</Text>
                    <Text style={styles.macroLabel}>Fat</Text>
                </View>
            </View>
        </View>
    );
}

function confidenceStyle(confidence: ClaudeAnalysisResult['confidence']) {
    if (confidence === 'high') return { color: '#2E7D32' };
    if (confidence === 'medium') return { color: '#F9A825' };
    return { color: '#C62828' };
}

// Hardcoded fake data for testing before the real Claude API call is wired up 
export const MOCK_ANALYSIS: ClaudeAnalysisResult = {
    foods: [
        { name: 'Grilled chicken breast', estimated_grams: 150, calories: 248, protein: 46, carbs: 0, fat: 5 },
        { name: 'White rice', estimated_grams: 200, calories: 260, protein: 5, carbs: 56, fat: 1 },
        { name: 'Broccoli', estimated_grams: 90, calories: 31, protein: 3, carbs: 6, fat: 0 },
    ],
    totals: { calories: 539, protein: 54, carbs: 62, fat: 6 },
    confidence: 'high',
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    calories: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    confidence: {
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    macroRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    macroItem: {
        alignItems: 'center',
        flex: 1,
    },
    macroValue: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1a1a1a',
    },
    macroLabel: {
        fontSize: 13,
        color: '#888',
        marginTop: 2,
    },
});
