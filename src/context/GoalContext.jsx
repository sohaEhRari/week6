// src/context/GoalContext.jsx
import { createContext, useState } from "react";

// Create the context
export const GoalContext = createContext();

// Provide the context
export const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState([
    { id: 1, title: "Learn React", category: "Learning", progress: 3, target: 10, status: "active" },
    { id: 2, title: "Workout", category: "Health", progress: 10, target: 10, status: "completed" },
  ]);

  const logProgress = (id) => {
    setGoals(goals.map(g => g.id === id ? { ...g, progress: g.progress + 1 } : g));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  const stats = {
    xpTotal: 100,
    streak: 5,
    completed: goals.filter(g => g.status === "completed").length,
  };

  return (
    <GoalContext.Provider value={{ goals, logProgress, deleteGoal, stats }}>
      {children}
    </GoalContext.Provider>
  );
};