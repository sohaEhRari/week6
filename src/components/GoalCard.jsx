// src/components/GoalCard.jsx
import { useContext } from "react";
import { Card, CardContent, Typography, LinearProgress, Button } from "@mui/material";
import { GoalContext } from "../context/GoalContext";

export default function GoalCard({ goal }) {
  const { logProgress, deleteGoal } = useContext(GoalContext);
  const progress = (goal.progress / goal.target) * 100;

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">{goal.title}</Typography>
        <Typography>{goal.category}</Typography>

        <LinearProgress variant="determinate" value={progress} sx={{ mt: 2 }} />
        <Typography>{goal.progress} / {goal.target}</Typography>

        <Button variant="contained" onClick={() => logProgress(goal.id)}>Log</Button>
        <Button color="error" onClick={() => deleteGoal(goal.id)}>Delete</Button>
      </CardContent>
    </Card>
  );
}