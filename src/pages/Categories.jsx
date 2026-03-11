// src/pages/Categories.jsx
import { useContext } from "react";
import { Container, Typography } from "@mui/material";
import { GoalContext } from "../context/GoalContext";

export default function Categories() {
  const { goals } = useContext(GoalContext);

  const categories = {};
  goals.forEach(g => {
    if (!categories[g.category]) categories[g.category] = 0;
    categories[g.category]++;
  });

  return (
    <Container>
      <Typography variant="h5">Categories</Typography>
      {Object.keys(categories).map(cat => (
        <Typography key={cat}>{cat}: {categories[cat]} goals</Typography>
      ))}
    </Container>
  );
}