import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    res.json({
        foods: [
            { name: 'Grilled chicken breast', estimated_grams: 150, calories: 248, protein: 46, carbs: 0, fat: 5 },
            { name: 'White rice', estimated_grams: 200, calories: 260, protein: 5, carbs: 56, fat: 1 },
            { name: 'Broccoli', estimated_grams: 90, calories: 31, protein: 3, carbs: 6, fat: 0 },
        ],
        totals: { calories: 539, protein: 54, carbs: 62, fat: 6 },
        confidence: 'high',
    });
});

export default router;
