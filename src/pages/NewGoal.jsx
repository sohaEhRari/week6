import { Button, Container, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { GoalContext } from "../context/GoalContext";

export default function NewGoal() {
  const { createGoal } = useContext(GoalContext);

  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");

  const submit = () => {
    if (!title || !target) return; // simple validation

    createGoal({
      id: Date.now(),
      title,
      category: "General",
      target: Number(target),
      progress: 0,
      status: "active",
    });

    setTitle("");
    setTarget("");
    alert("Goal created!"); // optional feedback
  };

  return (
    <Container dir={language === "fa" ? "rtl" : "ltr"}>
      <h2>Create Goal</h2>
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Target"
        type="number"
        fullWidth
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button onClick={submit} variant="contained">
        Create
      </Button>
    </Container>
  );
}