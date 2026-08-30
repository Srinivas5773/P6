/**
 * AI Memory Retention and Adaptive Difficulty Model
 * Simulates human-like imperfect memory decay and difficulty adjustments.
 */

class AIRetentionModel {
  constructor() {
    this.memorySlots = new Map();
    this.decayRate = 0.15;
  }

  rememberCard(cardId, cardValue, turnNumber) {
    this.memorySlots.set(cardId, {
      value: cardValue,
      turn: turnNumber,
      confidence: 1.0
    });
  }

  getBestMatch(currentTurn, targetValue) {
    let bestCardId = null;
    let highestConfidence = -1;

    for (const [cardId, entry] of this.memorySlots.entries()) {
      const turnsElapsed = currentTurn - entry.turn;
      const effectiveConfidence = Math.max(0, entry.confidence - turnsElapsed * this.decayRate);
      if (entry.value === targetValue && effectiveConfidence > 0.4 && effectiveConfidence > highestConfidence) {
        highestConfidence = effectiveConfidence;
        bestCardId = cardId;
      }
    }
    return bestCardId;
  }

  forgetMatched(cardId) {
    this.memorySlots.delete(cardId);
  }
}

module.exports = new AIRetentionModel();
