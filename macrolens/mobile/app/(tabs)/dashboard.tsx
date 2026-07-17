import { StyleSheet, Text} from 'react-native';
import ProgressBar from '@/components/ProgressBar';
import { DailyGoals, MacroNutrients } from '@/types';
import { SafeAreaView } from 'react-native-safe-area-context';

// Placeholder until Day 8+ wires this up to Supabase
const todayTotals: MacroNutrients = { calories: 1450, protein: 88, carbs: 140, fat: 42 };
const goals: DailyGoals = { calories: 2200, protein: 150, carbs: 250, fat: 70 };

export default function DashboardScreen() {
  return (
   <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Today's Progress</Text>
      <ProgressBar label="Calories" current={todayTotals.calories} goal={goals.calories} unit=" kcal" color="#FF6B35" />
      <ProgressBar label="Protein" current={todayTotals.protein} goal={goals.protein} unit="g" color="#0a7ea4" />
      <ProgressBar label="Carbs" current={todayTotals.carbs} goal={goals.carbs} unit="g" color="#4CAF50" />
      <ProgressBar label="Fat" current={todayTotals.fat} goal={goals.fat} unit="g" color="#9C27B0" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#cbcda8',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 20,
  },
});