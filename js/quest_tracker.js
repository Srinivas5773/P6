/**
 * Daily Quest Challenges and Campaign Progression Tracker
 * Tracks user level advancements, quest completions, and XP rewards.
 */

class QuestTracker {
  constructor() {
    this.quests = [
      { id: 'q1', description: 'Match 10 pairs without mistake', xp: 100, completed: false },
      { id: 'q2', description: 'Defeat AI opponent on Hard mode', xp: 250, completed: false },
      { id: 'q3', description: 'Complete time trial under 45s', xp: 150, completed: false }
    ];
    this.totalXP = 0;
  }

  completeQuest(questId) {
    const quest = this.quests.find(q => q.id === questId);
    if (quest && !quest.completed) {
      quest.completed = true;
      this.totalXP += quest.xp;
      return { success: true, earnedXP: quest.xp, totalXP: this.totalXP };
    }
    return { success: false, totalXP: this.totalXP };
  }

  getPlayerLevel() {
    return Math.floor(this.totalXP / 200) + 1;
  }

  getQuests() {
    return [...this.quests];
  }
}

module.exports = new QuestTracker();
