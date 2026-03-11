export const loadGoals = () => {
    const data = localStorage.getItem("goals");
    return data ? JSON.parse(data) : [];
  };
  
  export const saveGoals = (goals) => {
    localStorage.setItem("goals", JSON.stringify(goals));
  };
  
  export const loadStats = () => {
    const data = localStorage.getItem("stats");
    return data ? JSON.parse(data) : { xpTotal: 0, streak: 0, completeCount: 0, lastLogDate: null };
  };