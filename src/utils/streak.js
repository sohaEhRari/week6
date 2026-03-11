export const updateStreak = (stats) => {
    const today = new Date().toDateString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
  
    if (stats.lastLogDate === today) {
      // Already logged today, streak stays the same
      return stats;
    }
  
    if (stats.lastLogDate === yesterdayStr) {
      // Consecutive day
      return { ...stats, streak: stats.streak + 1, lastLogDate: today };
    }
  
    // Otherwise, streak resets
    return { ...stats, streak: 1, lastLogDate: today };
  };