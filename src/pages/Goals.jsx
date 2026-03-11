// src/pages/Goals.jsx
import { useContext, useState } from "react";
import { Container, Tabs, Tab, TextField } from "@mui/material";
import GoalCard from "../components/GoalCard";
import { GoalContext } from "../context/GoalContext";

export default function Goals() {
  const { goals } = useContext(GoalContext);
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = goals
    .filter(g => tab === "all" || g.status === tab)
    .filter(g => g.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <TextField
        placeholder="Search goals"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Tabs value={tab} onChange={(e, val) => setTab(val)}>
        <Tab label="All" value="all" />
        <Tab label="Active" value="active" />
        <Tab label="Completed" value="completed" />
      </Tabs>

      {filtered.map(g => <GoalCard key={g.id} goal={g} />)}
    </Container>
  );
}