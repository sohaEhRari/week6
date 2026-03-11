import { useContext } from "react";
import { Container, Typography } from "@mui/material";
import GoalCard from "../components/GoalCard";
import { GoalContext } from "../context/GoalContext";
import { useLanguage } from "../LTR/LanguageContext";

export default function Dashboard() {

  const { t } = useLanguage();
  const { goals, stats } = useContext(GoalContext);

  const active = goals.filter(g => g.status === "active");
  const completed = goals.filter(g => g.status === "completed");

  return (
    <Container>

      <Typography variant="h4">{t("dashboard")}</Typography>

      <Typography>{t("xp")}: {stats.xpTotal}</Typography>
      <Typography>{t("streak")}: {stats.streak}</Typography>
      <Typography>{t("completed")}: {stats.completed}</Typography>

      <Typography variant="h5" sx={{ mt: 3 }}>
        {t("activeGoals")}
      </Typography>

      {active.map(g => <GoalCard key={g.id} goal={g} />)}

      <Typography variant="h5" sx={{ mt: 3 }}>
        {t("completedGoals")}
      </Typography>

      {completed.map(g => <GoalCard key={g.id} goal={g} />)}

    </Container>
  );
}