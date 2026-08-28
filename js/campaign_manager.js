/* ==========================================================================
   MEMORY MATCH - QUEST CAMPAIGN MANAGER & LEVEL REGISTRY
   ========================================================================== */

class ExtendedCampaignManager {
  constructor() {
    this.levels = [];
    this.buildCampaign();
  }

  buildCampaign() {
    this.levels.push({
      id: 1,
      name: "Quest Level 1",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 31,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 2,
      name: "Quest Level 2",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 32,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 3,
      name: "Quest Level 3",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 33,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 4,
      name: "Quest Level 4",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 34,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 5,
      name: "Quest Level 5",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 35,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 6,
      name: "Quest Level 6",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 36,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 7,
      name: "Quest Level 7",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 37,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 8,
      name: "Quest Level 8",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 38,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 9,
      name: "Quest Level 9",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 39,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 10,
      name: "Quest Level 10",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 40,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 11,
      name: "Quest Level 11",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 41,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 12,
      name: "Quest Level 12",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 42,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 13,
      name: "Quest Level 13",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 43,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 14,
      name: "Quest Level 14",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 44,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 15,
      name: "Quest Level 15",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 45,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 16,
      name: "Quest Level 16",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 46,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 17,
      name: "Quest Level 17",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 47,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 18,
      name: "Quest Level 18",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 48,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 19,
      name: "Quest Level 19",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 49,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 20,
      name: "Quest Level 20",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 50,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 21,
      name: "Quest Level 21",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 51,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 22,
      name: "Quest Level 22",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 52,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 23,
      name: "Quest Level 23",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 53,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 24,
      name: "Quest Level 24",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 54,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 25,
      name: "Quest Level 25",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 55,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 26,
      name: "Quest Level 26",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 56,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 27,
      name: "Quest Level 27",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 57,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 28,
      name: "Quest Level 28",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 58,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 29,
      name: "Quest Level 29",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 59,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 30,
      name: "Quest Level 30",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 60,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 31,
      name: "Quest Level 31",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 61,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 32,
      name: "Quest Level 32",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 62,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 33,
      name: "Quest Level 33",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 63,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 34,
      name: "Quest Level 34",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 64,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 35,
      name: "Quest Level 35",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 65,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 36,
      name: "Quest Level 36",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 66,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 37,
      name: "Quest Level 37",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 67,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 38,
      name: "Quest Level 38",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 68,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 39,
      name: "Quest Level 39",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 69,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 40,
      name: "Quest Level 40",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 70,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 41,
      name: "Quest Level 41",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 71,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 42,
      name: "Quest Level 42",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 72,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 43,
      name: "Quest Level 43",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 73,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 44,
      name: "Quest Level 44",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 74,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 45,
      name: "Quest Level 45",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 75,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 46,
      name: "Quest Level 46",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 76,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 47,
      name: "Quest Level 47",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 77,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 48,
      name: "Quest Level 48",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 78,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 49,
      name: "Quest Level 49",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 79,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 50,
      name: "Quest Level 50",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 80,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 51,
      name: "Quest Level 51",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 81,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 52,
      name: "Quest Level 52",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 82,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 53,
      name: "Quest Level 53",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 83,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 54,
      name: "Quest Level 54",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 84,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 55,
      name: "Quest Level 55",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 85,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 56,
      name: "Quest Level 56",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 86,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 57,
      name: "Quest Level 57",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 87,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 58,
      name: "Quest Level 58",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 88,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 59,
      name: "Quest Level 59",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 89,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 60,
      name: "Quest Level 60",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 90,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 61,
      name: "Quest Level 61",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 91,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 62,
      name: "Quest Level 62",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 92,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 63,
      name: "Quest Level 63",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 93,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 64,
      name: "Quest Level 64",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 94,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 65,
      name: "Quest Level 65",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 95,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 66,
      name: "Quest Level 66",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 96,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 67,
      name: "Quest Level 67",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 97,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 68,
      name: "Quest Level 68",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 98,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 69,
      name: "Quest Level 69",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 99,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 70,
      name: "Quest Level 70",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 100,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 71,
      name: "Quest Level 71",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 101,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 72,
      name: "Quest Level 72",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 102,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 73,
      name: "Quest Level 73",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 103,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 74,
      name: "Quest Level 74",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 104,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 75,
      name: "Quest Level 75",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 105,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 76,
      name: "Quest Level 76",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 106,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 77,
      name: "Quest Level 77",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 107,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 78,
      name: "Quest Level 78",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 108,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 79,
      name: "Quest Level 79",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 109,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 80,
      name: "Quest Level 80",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 110,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 81,
      name: "Quest Level 81",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 111,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 82,
      name: "Quest Level 82",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 112,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 83,
      name: "Quest Level 83",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 113,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 84,
      name: "Quest Level 84",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 114,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 85,
      name: "Quest Level 85",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 115,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 86,
      name: "Quest Level 86",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 116,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 87,
      name: "Quest Level 87",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 117,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 88,
      name: "Quest Level 88",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 118,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 89,
      name: "Quest Level 89",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 119,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 90,
      name: "Quest Level 90",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 30,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 91,
      name: "Quest Level 91",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 31,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 92,
      name: "Quest Level 92",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 32,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 93,
      name: "Quest Level 93",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 33,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 94,
      name: "Quest Level 94",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 34,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 95,
      name: "Quest Level 95",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 35,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 96,
      name: "Quest Level 96",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 36,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 97,
      name: "Quest Level 97",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 37,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 98,
      name: "Quest Level 98",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 38,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 99,
      name: "Quest Level 99",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 39,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 100,
      name: "Quest Level 100",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 40,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 101,
      name: "Quest Level 101",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 41,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 102,
      name: "Quest Level 102",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 42,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 103,
      name: "Quest Level 103",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 43,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 104,
      name: "Quest Level 104",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 44,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 105,
      name: "Quest Level 105",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 45,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 106,
      name: "Quest Level 106",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 46,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 107,
      name: "Quest Level 107",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 47,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 108,
      name: "Quest Level 108",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 48,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 109,
      name: "Quest Level 109",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 49,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 110,
      name: "Quest Level 110",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 50,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 111,
      name: "Quest Level 111",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 51,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 112,
      name: "Quest Level 112",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 52,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 113,
      name: "Quest Level 113",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 53,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 114,
      name: "Quest Level 114",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 54,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 115,
      name: "Quest Level 115",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 55,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 116,
      name: "Quest Level 116",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 56,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 117,
      name: "Quest Level 117",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 57,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 118,
      name: "Quest Level 118",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 58,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 119,
      name: "Quest Level 119",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 59,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 120,
      name: "Quest Level 120",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 60,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 121,
      name: "Quest Level 121",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 61,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 122,
      name: "Quest Level 122",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 62,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 123,
      name: "Quest Level 123",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 63,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 124,
      name: "Quest Level 124",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 64,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 125,
      name: "Quest Level 125",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 65,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 126,
      name: "Quest Level 126",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 66,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 127,
      name: "Quest Level 127",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 67,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 128,
      name: "Quest Level 128",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 68,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 129,
      name: "Quest Level 129",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 69,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 130,
      name: "Quest Level 130",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 70,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 131,
      name: "Quest Level 131",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 71,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 132,
      name: "Quest Level 132",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 72,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 133,
      name: "Quest Level 133",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 73,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 134,
      name: "Quest Level 134",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 74,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 135,
      name: "Quest Level 135",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 75,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 136,
      name: "Quest Level 136",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 76,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 137,
      name: "Quest Level 137",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 77,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 138,
      name: "Quest Level 138",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 78,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 139,
      name: "Quest Level 139",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 79,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 140,
      name: "Quest Level 140",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 80,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 141,
      name: "Quest Level 141",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 81,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 142,
      name: "Quest Level 142",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 82,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 143,
      name: "Quest Level 143",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 83,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 144,
      name: "Quest Level 144",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 84,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 145,
      name: "Quest Level 145",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 85,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 146,
      name: "Quest Level 146",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 86,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 147,
      name: "Quest Level 147",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 87,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 148,
      name: "Quest Level 148",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 88,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 149,
      name: "Quest Level 149",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 89,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 150,
      name: "Quest Level 150",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 90,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 151,
      name: "Quest Level 151",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 91,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 152,
      name: "Quest Level 152",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 92,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 153,
      name: "Quest Level 153",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 93,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 154,
      name: "Quest Level 154",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 94,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 155,
      name: "Quest Level 155",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 95,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 156,
      name: "Quest Level 156",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 96,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 157,
      name: "Quest Level 157",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 97,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 158,
      name: "Quest Level 158",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 98,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 159,
      name: "Quest Level 159",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 99,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 160,
      name: "Quest Level 160",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 100,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 161,
      name: "Quest Level 161",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 101,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 162,
      name: "Quest Level 162",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 102,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 163,
      name: "Quest Level 163",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 103,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 164,
      name: "Quest Level 164",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 104,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 165,
      name: "Quest Level 165",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 105,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 166,
      name: "Quest Level 166",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 106,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 167,
      name: "Quest Level 167",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 107,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 168,
      name: "Quest Level 168",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 108,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 169,
      name: "Quest Level 169",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 109,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 170,
      name: "Quest Level 170",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 110,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 171,
      name: "Quest Level 171",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 111,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 172,
      name: "Quest Level 172",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 112,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 173,
      name: "Quest Level 173",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 113,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 174,
      name: "Quest Level 174",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 114,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 175,
      name: "Quest Level 175",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 115,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 176,
      name: "Quest Level 176",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 116,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 177,
      name: "Quest Level 177",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 117,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 178,
      name: "Quest Level 178",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 118,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 179,
      name: "Quest Level 179",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 119,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 180,
      name: "Quest Level 180",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 30,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 181,
      name: "Quest Level 181",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 31,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 182,
      name: "Quest Level 182",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 32,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 183,
      name: "Quest Level 183",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 33,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 184,
      name: "Quest Level 184",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 34,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 185,
      name: "Quest Level 185",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 35,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 186,
      name: "Quest Level 186",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 36,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 187,
      name: "Quest Level 187",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 37,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 188,
      name: "Quest Level 188",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 38,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 189,
      name: "Quest Level 189",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 39,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 190,
      name: "Quest Level 190",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 40,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 191,
      name: "Quest Level 191",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 41,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 192,
      name: "Quest Level 192",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 42,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 193,
      name: "Quest Level 193",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 43,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 194,
      name: "Quest Level 194",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 44,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 195,
      name: "Quest Level 195",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 45,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 196,
      name: "Quest Level 196",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 46,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 197,
      name: "Quest Level 197",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 47,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 198,
      name: "Quest Level 198",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 48,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 199,
      name: "Quest Level 199",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 49,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 200,
      name: "Quest Level 200",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 50,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 201,
      name: "Quest Level 201",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 51,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 202,
      name: "Quest Level 202",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 52,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 203,
      name: "Quest Level 203",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 53,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 204,
      name: "Quest Level 204",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 54,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 205,
      name: "Quest Level 205",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 55,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 206,
      name: "Quest Level 206",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 56,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 207,
      name: "Quest Level 207",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 57,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 208,
      name: "Quest Level 208",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 58,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 209,
      name: "Quest Level 209",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 59,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 210,
      name: "Quest Level 210",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 60,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 211,
      name: "Quest Level 211",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 61,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 212,
      name: "Quest Level 212",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 62,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 213,
      name: "Quest Level 213",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 63,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 214,
      name: "Quest Level 214",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 64,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 215,
      name: "Quest Level 215",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 65,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 216,
      name: "Quest Level 216",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 66,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 217,
      name: "Quest Level 217",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 67,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 218,
      name: "Quest Level 218",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 68,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 219,
      name: "Quest Level 219",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 69,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 220,
      name: "Quest Level 220",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 70,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 221,
      name: "Quest Level 221",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 71,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 222,
      name: "Quest Level 222",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 72,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 223,
      name: "Quest Level 223",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 73,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 224,
      name: "Quest Level 224",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 74,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 225,
      name: "Quest Level 225",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 75,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 226,
      name: "Quest Level 226",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 76,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 227,
      name: "Quest Level 227",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 77,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 228,
      name: "Quest Level 228",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 78,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 229,
      name: "Quest Level 229",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 79,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 230,
      name: "Quest Level 230",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 80,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 231,
      name: "Quest Level 231",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 81,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 232,
      name: "Quest Level 232",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 82,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 233,
      name: "Quest Level 233",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 83,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 234,
      name: "Quest Level 234",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 84,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 235,
      name: "Quest Level 235",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 85,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 236,
      name: "Quest Level 236",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 86,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 237,
      name: "Quest Level 237",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 87,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 238,
      name: "Quest Level 238",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 88,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 239,
      name: "Quest Level 239",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 89,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 240,
      name: "Quest Level 240",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 90,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 241,
      name: "Quest Level 241",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 91,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 242,
      name: "Quest Level 242",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 92,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 243,
      name: "Quest Level 243",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 93,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 244,
      name: "Quest Level 244",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 94,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 245,
      name: "Quest Level 245",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 95,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 246,
      name: "Quest Level 246",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 96,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 247,
      name: "Quest Level 247",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 97,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 248,
      name: "Quest Level 248",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 98,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 249,
      name: "Quest Level 249",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 99,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 250,
      name: "Quest Level 250",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 100,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 251,
      name: "Quest Level 251",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 101,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 252,
      name: "Quest Level 252",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 102,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 253,
      name: "Quest Level 253",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 103,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 254,
      name: "Quest Level 254",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 104,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 255,
      name: "Quest Level 255",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 105,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 256,
      name: "Quest Level 256",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 106,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 257,
      name: "Quest Level 257",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 107,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 258,
      name: "Quest Level 258",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 108,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 259,
      name: "Quest Level 259",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 109,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 260,
      name: "Quest Level 260",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 110,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 261,
      name: "Quest Level 261",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 111,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 262,
      name: "Quest Level 262",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 112,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 263,
      name: "Quest Level 263",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 113,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 264,
      name: "Quest Level 264",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 114,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 265,
      name: "Quest Level 265",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 115,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 266,
      name: "Quest Level 266",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 116,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 267,
      name: "Quest Level 267",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 117,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 268,
      name: "Quest Level 268",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 118,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 269,
      name: "Quest Level 269",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 119,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 270,
      name: "Quest Level 270",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 30,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 271,
      name: "Quest Level 271",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 31,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 272,
      name: "Quest Level 272",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 32,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 273,
      name: "Quest Level 273",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 33,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 274,
      name: "Quest Level 274",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 34,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 275,
      name: "Quest Level 275",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 35,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 276,
      name: "Quest Level 276",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 36,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 277,
      name: "Quest Level 277",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 37,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 278,
      name: "Quest Level 278",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 38,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 279,
      name: "Quest Level 279",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 39,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 280,
      name: "Quest Level 280",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 40,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 281,
      name: "Quest Level 281",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 41,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 282,
      name: "Quest Level 282",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 42,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 283,
      name: "Quest Level 283",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 43,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 284,
      name: "Quest Level 284",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 44,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 285,
      name: "Quest Level 285",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 45,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 286,
      name: "Quest Level 286",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 46,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 287,
      name: "Quest Level 287",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 47,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 288,
      name: "Quest Level 288",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 48,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 289,
      name: "Quest Level 289",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 49,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 290,
      name: "Quest Level 290",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 50,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 291,
      name: "Quest Level 291",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 51,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 292,
      name: "Quest Level 292",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 52,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 293,
      name: "Quest Level 293",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 53,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 294,
      name: "Quest Level 294",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 54,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 295,
      name: "Quest Level 295",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 55,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 296,
      name: "Quest Level 296",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 56,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 297,
      name: "Quest Level 297",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 57,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 298,
      name: "Quest Level 298",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 58,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 299,
      name: "Quest Level 299",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 59,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 300,
      name: "Quest Level 300",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 60,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 301,
      name: "Quest Level 301",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 61,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 302,
      name: "Quest Level 302",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 62,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 303,
      name: "Quest Level 303",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 63,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 304,
      name: "Quest Level 304",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 64,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 305,
      name: "Quest Level 305",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 65,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 306,
      name: "Quest Level 306",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 66,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 307,
      name: "Quest Level 307",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 67,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 308,
      name: "Quest Level 308",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 68,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 309,
      name: "Quest Level 309",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 69,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 310,
      name: "Quest Level 310",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 70,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 311,
      name: "Quest Level 311",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 71,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 312,
      name: "Quest Level 312",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 72,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 313,
      name: "Quest Level 313",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 73,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 314,
      name: "Quest Level 314",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 74,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 315,
      name: "Quest Level 315",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 75,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 316,
      name: "Quest Level 316",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 76,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 317,
      name: "Quest Level 317",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 77,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 318,
      name: "Quest Level 318",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 78,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 319,
      name: "Quest Level 319",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 79,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 320,
      name: "Quest Level 320",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 80,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 321,
      name: "Quest Level 321",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 81,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 322,
      name: "Quest Level 322",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 82,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 323,
      name: "Quest Level 323",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 83,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 324,
      name: "Quest Level 324",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 84,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 325,
      name: "Quest Level 325",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 85,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 326,
      name: "Quest Level 326",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 86,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 327,
      name: "Quest Level 327",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 87,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 328,
      name: "Quest Level 328",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 88,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 329,
      name: "Quest Level 329",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 89,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 330,
      name: "Quest Level 330",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 90,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 331,
      name: "Quest Level 331",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 91,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 332,
      name: "Quest Level 332",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 92,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 333,
      name: "Quest Level 333",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 93,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 334,
      name: "Quest Level 334",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 94,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 335,
      name: "Quest Level 335",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 95,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 336,
      name: "Quest Level 336",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 96,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 337,
      name: "Quest Level 337",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 97,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 338,
      name: "Quest Level 338",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 98,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 339,
      name: "Quest Level 339",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 99,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 340,
      name: "Quest Level 340",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 100,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 341,
      name: "Quest Level 341",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 101,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 342,
      name: "Quest Level 342",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 102,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 343,
      name: "Quest Level 343",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 103,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 344,
      name: "Quest Level 344",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 104,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 345,
      name: "Quest Level 345",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 105,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 346,
      name: "Quest Level 346",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 106,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 347,
      name: "Quest Level 347",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 107,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 348,
      name: "Quest Level 348",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 108,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 349,
      name: "Quest Level 349",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 109,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 350,
      name: "Quest Level 350",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 110,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 351,
      name: "Quest Level 351",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 111,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 352,
      name: "Quest Level 352",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 112,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 353,
      name: "Quest Level 353",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 113,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 354,
      name: "Quest Level 354",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 114,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 355,
      name: "Quest Level 355",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 115,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 356,
      name: "Quest Level 356",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 116,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 357,
      name: "Quest Level 357",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 117,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 358,
      name: "Quest Level 358",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 118,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 359,
      name: "Quest Level 359",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 119,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 360,
      name: "Quest Level 360",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 30,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 361,
      name: "Quest Level 361",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 31,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 362,
      name: "Quest Level 362",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 32,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 363,
      name: "Quest Level 363",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 33,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 364,
      name: "Quest Level 364",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 34,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 365,
      name: "Quest Level 365",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 35,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 366,
      name: "Quest Level 366",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 36,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 367,
      name: "Quest Level 367",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 37,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 368,
      name: "Quest Level 368",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 38,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 369,
      name: "Quest Level 369",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 39,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 370,
      name: "Quest Level 370",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 40,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 371,
      name: "Quest Level 371",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 41,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 372,
      name: "Quest Level 372",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 42,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 373,
      name: "Quest Level 373",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 43,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 374,
      name: "Quest Level 374",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 44,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 375,
      name: "Quest Level 375",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 45,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 376,
      name: "Quest Level 376",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 46,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 377,
      name: "Quest Level 377",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 47,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 378,
      name: "Quest Level 378",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 48,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 379,
      name: "Quest Level 379",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 49,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 380,
      name: "Quest Level 380",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 50,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 381,
      name: "Quest Level 381",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 51,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 382,
      name: "Quest Level 382",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 52,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 383,
      name: "Quest Level 383",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 53,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 384,
      name: "Quest Level 384",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 54,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 385,
      name: "Quest Level 385",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 55,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 386,
      name: "Quest Level 386",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 56,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 387,
      name: "Quest Level 387",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 57,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 388,
      name: "Quest Level 388",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 58,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 389,
      name: "Quest Level 389",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 59,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 390,
      name: "Quest Level 390",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 60,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 391,
      name: "Quest Level 391",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 61,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 392,
      name: "Quest Level 392",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 62,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 393,
      name: "Quest Level 393",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 63,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 394,
      name: "Quest Level 394",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 64,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 395,
      name: "Quest Level 395",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 65,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 396,
      name: "Quest Level 396",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 66,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 397,
      name: "Quest Level 397",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 67,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 398,
      name: "Quest Level 398",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 68,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 399,
      name: "Quest Level 399",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 69,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 400,
      name: "Quest Level 400",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 70,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 401,
      name: "Quest Level 401",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 71,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 402,
      name: "Quest Level 402",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 72,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 403,
      name: "Quest Level 403",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 73,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 404,
      name: "Quest Level 404",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 74,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 405,
      name: "Quest Level 405",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 75,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 406,
      name: "Quest Level 406",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 76,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 407,
      name: "Quest Level 407",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 77,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 408,
      name: "Quest Level 408",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 78,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 409,
      name: "Quest Level 409",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 79,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 410,
      name: "Quest Level 410",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 80,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 411,
      name: "Quest Level 411",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 81,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 412,
      name: "Quest Level 412",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 82,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 413,
      name: "Quest Level 413",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 83,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 414,
      name: "Quest Level 414",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 84,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 415,
      name: "Quest Level 415",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 85,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 416,
      name: "Quest Level 416",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 86,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 417,
      name: "Quest Level 417",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 87,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 418,
      name: "Quest Level 418",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 88,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 419,
      name: "Quest Level 419",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 89,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 420,
      name: "Quest Level 420",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 90,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 421,
      name: "Quest Level 421",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 91,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 422,
      name: "Quest Level 422",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 92,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 423,
      name: "Quest Level 423",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 93,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 424,
      name: "Quest Level 424",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 94,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 425,
      name: "Quest Level 425",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 95,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 426,
      name: "Quest Level 426",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 96,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 427,
      name: "Quest Level 427",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 97,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 428,
      name: "Quest Level 428",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 98,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 429,
      name: "Quest Level 429",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 99,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 430,
      name: "Quest Level 430",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 100,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 431,
      name: "Quest Level 431",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 101,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 432,
      name: "Quest Level 432",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 102,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 433,
      name: "Quest Level 433",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 103,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 434,
      name: "Quest Level 434",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 104,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 435,
      name: "Quest Level 435",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 105,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 436,
      name: "Quest Level 436",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 106,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 437,
      name: "Quest Level 437",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 107,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 438,
      name: "Quest Level 438",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 108,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 439,
      name: "Quest Level 439",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 109,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 440,
      name: "Quest Level 440",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 110,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 441,
      name: "Quest Level 441",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 111,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 442,
      name: "Quest Level 442",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 112,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 443,
      name: "Quest Level 443",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 113,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 444,
      name: "Quest Level 444",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 114,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 445,
      name: "Quest Level 445",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 115,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 446,
      name: "Quest Level 446",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 116,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 447,
      name: "Quest Level 447",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 117,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 448,
      name: "Quest Level 448",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 118,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 449,
      name: "Quest Level 449",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 119,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 450,
      name: "Quest Level 450",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 30,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 451,
      name: "Quest Level 451",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 31,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 452,
      name: "Quest Level 452",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 32,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 453,
      name: "Quest Level 453",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 33,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 454,
      name: "Quest Level 454",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 34,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 455,
      name: "Quest Level 455",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 35,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 456,
      name: "Quest Level 456",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 36,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 457,
      name: "Quest Level 457",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 37,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 458,
      name: "Quest Level 458",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 38,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 459,
      name: "Quest Level 459",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 39,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 460,
      name: "Quest Level 460",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 40,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 461,
      name: "Quest Level 461",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 41,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 462,
      name: "Quest Level 462",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 42,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 463,
      name: "Quest Level 463",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 43,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 464,
      name: "Quest Level 464",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 44,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 465,
      name: "Quest Level 465",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 45,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 466,
      name: "Quest Level 466",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 46,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 467,
      name: "Quest Level 467",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 47,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 468,
      name: "Quest Level 468",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 48,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 469,
      name: "Quest Level 469",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 49,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 470,
      name: "Quest Level 470",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 50,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 471,
      name: "Quest Level 471",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 51,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 472,
      name: "Quest Level 472",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 52,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 473,
      name: "Quest Level 473",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 53,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 474,
      name: "Quest Level 474",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 54,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 475,
      name: "Quest Level 475",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 55,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 476,
      name: "Quest Level 476",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 56,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 477,
      name: "Quest Level 477",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 57,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 478,
      name: "Quest Level 478",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 58,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 479,
      name: "Quest Level 479",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 59,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 480,
      name: "Quest Level 480",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 60,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 481,
      name: "Quest Level 481",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 61,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 482,
      name: "Quest Level 482",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 62,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 483,
      name: "Quest Level 483",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 63,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 484,
      name: "Quest Level 484",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 64,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 485,
      name: "Quest Level 485",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 65,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 486,
      name: "Quest Level 486",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 66,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 487,
      name: "Quest Level 487",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 67,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 488,
      name: "Quest Level 488",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 68,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 489,
      name: "Quest Level 489",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 69,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 490,
      name: "Quest Level 490",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 70,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 491,
      name: "Quest Level 491",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 71,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 492,
      name: "Quest Level 492",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 72,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 493,
      name: "Quest Level 493",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 73,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 494,
      name: "Quest Level 494",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 74,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 495,
      name: "Quest Level 495",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 75,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 496,
      name: "Quest Level 496",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 76,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 497,
      name: "Quest Level 497",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 77,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 498,
      name: "Quest Level 498",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 78,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 499,
      name: "Quest Level 499",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 79,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 500,
      name: "Quest Level 500",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 80,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 501,
      name: "Quest Level 501",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 81,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 502,
      name: "Quest Level 502",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 82,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 503,
      name: "Quest Level 503",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 83,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 504,
      name: "Quest Level 504",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 84,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 505,
      name: "Quest Level 505",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 85,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 506,
      name: "Quest Level 506",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 86,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 507,
      name: "Quest Level 507",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 87,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 508,
      name: "Quest Level 508",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 88,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 509,
      name: "Quest Level 509",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 89,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 510,
      name: "Quest Level 510",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 90,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 511,
      name: "Quest Level 511",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 91,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 512,
      name: "Quest Level 512",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 92,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 513,
      name: "Quest Level 513",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 93,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 514,
      name: "Quest Level 514",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 94,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 515,
      name: "Quest Level 515",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 95,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 516,
      name: "Quest Level 516",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 96,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 517,
      name: "Quest Level 517",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 97,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 518,
      name: "Quest Level 518",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 98,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 519,
      name: "Quest Level 519",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 99,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 520,
      name: "Quest Level 520",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 100,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 521,
      name: "Quest Level 521",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 101,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 522,
      name: "Quest Level 522",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 102,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 523,
      name: "Quest Level 523",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 103,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 524,
      name: "Quest Level 524",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 104,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 525,
      name: "Quest Level 525",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 105,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 526,
      name: "Quest Level 526",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 106,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 527,
      name: "Quest Level 527",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 107,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 528,
      name: "Quest Level 528",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 108,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 529,
      name: "Quest Level 529",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 109,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 530,
      name: "Quest Level 530",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 110,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 531,
      name: "Quest Level 531",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 111,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 532,
      name: "Quest Level 532",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 112,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 533,
      name: "Quest Level 533",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 113,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 534,
      name: "Quest Level 534",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 114,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 535,
      name: "Quest Level 535",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 115,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 536,
      name: "Quest Level 536",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 116,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 537,
      name: "Quest Level 537",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 117,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 538,
      name: "Quest Level 538",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 118,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 539,
      name: "Quest Level 539",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 119,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 540,
      name: "Quest Level 540",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 30,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 541,
      name: "Quest Level 541",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 31,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 542,
      name: "Quest Level 542",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 32,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 543,
      name: "Quest Level 543",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 33,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 544,
      name: "Quest Level 544",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 34,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 545,
      name: "Quest Level 545",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 35,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 546,
      name: "Quest Level 546",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 36,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 547,
      name: "Quest Level 547",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 37,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 548,
      name: "Quest Level 548",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 38,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 549,
      name: "Quest Level 549",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 39,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 550,
      name: "Quest Level 550",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 40,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 551,
      name: "Quest Level 551",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 41,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 552,
      name: "Quest Level 552",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 42,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 553,
      name: "Quest Level 553",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 43,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 554,
      name: "Quest Level 554",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 44,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 555,
      name: "Quest Level 555",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 45,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 556,
      name: "Quest Level 556",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 46,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 557,
      name: "Quest Level 557",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 47,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 558,
      name: "Quest Level 558",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 48,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 559,
      name: "Quest Level 559",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 49,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 560,
      name: "Quest Level 560",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 50,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 561,
      name: "Quest Level 561",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 51,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 562,
      name: "Quest Level 562",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 52,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 563,
      name: "Quest Level 563",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 53,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 564,
      name: "Quest Level 564",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 54,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 565,
      name: "Quest Level 565",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 55,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 566,
      name: "Quest Level 566",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 56,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 567,
      name: "Quest Level 567",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 57,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 568,
      name: "Quest Level 568",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 58,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 569,
      name: "Quest Level 569",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 59,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 570,
      name: "Quest Level 570",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 60,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 571,
      name: "Quest Level 571",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 61,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 572,
      name: "Quest Level 572",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 62,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 573,
      name: "Quest Level 573",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 63,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 574,
      name: "Quest Level 574",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 64,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 575,
      name: "Quest Level 575",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 65,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 576,
      name: "Quest Level 576",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 66,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 577,
      name: "Quest Level 577",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 67,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 578,
      name: "Quest Level 578",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 68,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 579,
      name: "Quest Level 579",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 69,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 580,
      name: "Quest Level 580",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 70,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 581,
      name: "Quest Level 581",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 71,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 582,
      name: "Quest Level 582",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 72,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 583,
      name: "Quest Level 583",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 73,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 584,
      name: "Quest Level 584",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 74,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 585,
      name: "Quest Level 585",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 75,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 586,
      name: "Quest Level 586",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 76,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 587,
      name: "Quest Level 587",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 77,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 588,
      name: "Quest Level 588",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 78,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 589,
      name: "Quest Level 589",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 79,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 590,
      name: "Quest Level 590",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 80,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 591,
      name: "Quest Level 591",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 81,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 592,
      name: "Quest Level 592",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 82,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 593,
      name: "Quest Level 593",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 83,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 594,
      name: "Quest Level 594",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 84,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 595,
      name: "Quest Level 595",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 85,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 596,
      name: "Quest Level 596",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 86,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 597,
      name: "Quest Level 597",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 87,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 598,
      name: "Quest Level 598",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 88,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 599,
      name: "Quest Level 599",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 89,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 600,
      name: "Quest Level 600",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 90,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 601,
      name: "Quest Level 601",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 91,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 602,
      name: "Quest Level 602",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 92,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 603,
      name: "Quest Level 603",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 93,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 604,
      name: "Quest Level 604",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 94,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 605,
      name: "Quest Level 605",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 95,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 606,
      name: "Quest Level 606",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 96,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 607,
      name: "Quest Level 607",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 97,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 608,
      name: "Quest Level 608",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 98,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 609,
      name: "Quest Level 609",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 99,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 610,
      name: "Quest Level 610",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 100,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 611,
      name: "Quest Level 611",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 101,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 612,
      name: "Quest Level 612",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 102,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 613,
      name: "Quest Level 613",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 103,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 614,
      name: "Quest Level 614",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 104,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 615,
      name: "Quest Level 615",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 105,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 616,
      name: "Quest Level 616",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 106,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 617,
      name: "Quest Level 617",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 107,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 618,
      name: "Quest Level 618",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 108,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 619,
      name: "Quest Level 619",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 109,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 620,
      name: "Quest Level 620",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 110,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 621,
      name: "Quest Level 621",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 111,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 622,
      name: "Quest Level 622",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 112,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 623,
      name: "Quest Level 623",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 113,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 624,
      name: "Quest Level 624",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 114,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 625,
      name: "Quest Level 625",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 115,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 626,
      name: "Quest Level 626",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 116,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 627,
      name: "Quest Level 627",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 117,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 628,
      name: "Quest Level 628",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 118,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 629,
      name: "Quest Level 629",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 119,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 630,
      name: "Quest Level 630",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 30,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 631,
      name: "Quest Level 631",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 31,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 632,
      name: "Quest Level 632",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 32,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 633,
      name: "Quest Level 633",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 33,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 634,
      name: "Quest Level 634",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 34,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 635,
      name: "Quest Level 635",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 35,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 636,
      name: "Quest Level 636",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 36,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 637,
      name: "Quest Level 637",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 37,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 638,
      name: "Quest Level 638",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 38,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 639,
      name: "Quest Level 639",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 39,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 640,
      name: "Quest Level 640",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 40,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 641,
      name: "Quest Level 641",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 41,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 642,
      name: "Quest Level 642",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 42,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 643,
      name: "Quest Level 643",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 43,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 644,
      name: "Quest Level 644",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 44,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 645,
      name: "Quest Level 645",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 45,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 646,
      name: "Quest Level 646",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 46,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 647,
      name: "Quest Level 647",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 47,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 648,
      name: "Quest Level 648",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 48,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 649,
      name: "Quest Level 649",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 49,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 650,
      name: "Quest Level 650",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 50,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 651,
      name: "Quest Level 651",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 51,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 652,
      name: "Quest Level 652",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 52,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 653,
      name: "Quest Level 653",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 53,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 654,
      name: "Quest Level 654",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 54,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 655,
      name: "Quest Level 655",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 55,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 656,
      name: "Quest Level 656",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 56,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 657,
      name: "Quest Level 657",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 57,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 658,
      name: "Quest Level 658",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 58,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 659,
      name: "Quest Level 659",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 59,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 660,
      name: "Quest Level 660",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 60,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 661,
      name: "Quest Level 661",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 61,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 662,
      name: "Quest Level 662",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 62,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 663,
      name: "Quest Level 663",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 63,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 664,
      name: "Quest Level 664",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 64,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 665,
      name: "Quest Level 665",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 65,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 666,
      name: "Quest Level 666",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 66,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 667,
      name: "Quest Level 667",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 67,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 668,
      name: "Quest Level 668",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 68,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 669,
      name: "Quest Level 669",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 69,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 670,
      name: "Quest Level 670",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 70,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 671,
      name: "Quest Level 671",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 71,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 672,
      name: "Quest Level 672",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 72,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 673,
      name: "Quest Level 673",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 73,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 674,
      name: "Quest Level 674",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 74,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 675,
      name: "Quest Level 675",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 75,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 676,
      name: "Quest Level 676",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 76,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 677,
      name: "Quest Level 677",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 77,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 678,
      name: "Quest Level 678",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 78,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 679,
      name: "Quest Level 679",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 79,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 680,
      name: "Quest Level 680",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 80,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 681,
      name: "Quest Level 681",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 81,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 682,
      name: "Quest Level 682",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 82,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 683,
      name: "Quest Level 683",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 83,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 684,
      name: "Quest Level 684",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 84,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 685,
      name: "Quest Level 685",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 85,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 686,
      name: "Quest Level 686",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 86,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 687,
      name: "Quest Level 687",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 87,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 688,
      name: "Quest Level 688",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 88,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 689,
      name: "Quest Level 689",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 89,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 690,
      name: "Quest Level 690",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 90,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 691,
      name: "Quest Level 691",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 91,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 692,
      name: "Quest Level 692",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 92,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 693,
      name: "Quest Level 693",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 93,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 694,
      name: "Quest Level 694",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 94,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 695,
      name: "Quest Level 695",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 95,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 696,
      name: "Quest Level 696",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 96,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 697,
      name: "Quest Level 697",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 97,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 698,
      name: "Quest Level 698",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 98,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 699,
      name: "Quest Level 699",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 99,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 700,
      name: "Quest Level 700",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 100,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 701,
      name: "Quest Level 701",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 101,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 702,
      name: "Quest Level 702",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 102,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 703,
      name: "Quest Level 703",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 103,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 704,
      name: "Quest Level 704",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 104,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 705,
      name: "Quest Level 705",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 105,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 706,
      name: "Quest Level 706",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 106,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 707,
      name: "Quest Level 707",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 107,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 708,
      name: "Quest Level 708",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 108,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 709,
      name: "Quest Level 709",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 109,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 710,
      name: "Quest Level 710",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 110,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 711,
      name: "Quest Level 711",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 111,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 712,
      name: "Quest Level 712",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 112,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 713,
      name: "Quest Level 713",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 113,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 714,
      name: "Quest Level 714",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 114,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 715,
      name: "Quest Level 715",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 115,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 716,
      name: "Quest Level 716",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 116,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 717,
      name: "Quest Level 717",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 117,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 718,
      name: "Quest Level 718",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 118,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 719,
      name: "Quest Level 719",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 119,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 720,
      name: "Quest Level 720",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 30,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 721,
      name: "Quest Level 721",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 31,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 722,
      name: "Quest Level 722",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 32,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 723,
      name: "Quest Level 723",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 33,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 724,
      name: "Quest Level 724",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 34,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 725,
      name: "Quest Level 725",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 35,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 726,
      name: "Quest Level 726",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 36,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 727,
      name: "Quest Level 727",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 37,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 728,
      name: "Quest Level 728",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 38,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 729,
      name: "Quest Level 729",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 39,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 730,
      name: "Quest Level 730",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 40,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 731,
      name: "Quest Level 731",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 41,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 732,
      name: "Quest Level 732",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 42,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 733,
      name: "Quest Level 733",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 43,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 734,
      name: "Quest Level 734",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 44,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 735,
      name: "Quest Level 735",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 45,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 736,
      name: "Quest Level 736",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 46,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 737,
      name: "Quest Level 737",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 47,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 738,
      name: "Quest Level 738",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 48,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 739,
      name: "Quest Level 739",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 49,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 740,
      name: "Quest Level 740",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 50,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 741,
      name: "Quest Level 741",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 51,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 742,
      name: "Quest Level 742",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 52,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 743,
      name: "Quest Level 743",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 53,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 744,
      name: "Quest Level 744",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 54,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 745,
      name: "Quest Level 745",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 55,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 746,
      name: "Quest Level 746",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 56,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 747,
      name: "Quest Level 747",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 57,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 748,
      name: "Quest Level 748",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 58,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 749,
      name: "Quest Level 749",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 59,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 750,
      name: "Quest Level 750",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 60,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 751,
      name: "Quest Level 751",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 61,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 752,
      name: "Quest Level 752",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 62,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 753,
      name: "Quest Level 753",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 63,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 754,
      name: "Quest Level 754",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 64,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 755,
      name: "Quest Level 755",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 65,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 756,
      name: "Quest Level 756",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 66,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 757,
      name: "Quest Level 757",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 67,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 758,
      name: "Quest Level 758",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 68,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 759,
      name: "Quest Level 759",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 69,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 760,
      name: "Quest Level 760",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 70,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 761,
      name: "Quest Level 761",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 71,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 762,
      name: "Quest Level 762",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 72,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 763,
      name: "Quest Level 763",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 73,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 764,
      name: "Quest Level 764",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 74,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 765,
      name: "Quest Level 765",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 75,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 766,
      name: "Quest Level 766",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 76,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 767,
      name: "Quest Level 767",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 77,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 768,
      name: "Quest Level 768",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 78,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 769,
      name: "Quest Level 769",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 79,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 770,
      name: "Quest Level 770",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 80,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 771,
      name: "Quest Level 771",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 81,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 772,
      name: "Quest Level 772",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 82,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 773,
      name: "Quest Level 773",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 83,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 774,
      name: "Quest Level 774",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 84,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 775,
      name: "Quest Level 775",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 85,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 776,
      name: "Quest Level 776",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 86,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 777,
      name: "Quest Level 777",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 87,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 778,
      name: "Quest Level 778",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 88,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 779,
      name: "Quest Level 779",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 89,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 780,
      name: "Quest Level 780",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 90,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 781,
      name: "Quest Level 781",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 91,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 782,
      name: "Quest Level 782",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 92,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 783,
      name: "Quest Level 783",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 93,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 784,
      name: "Quest Level 784",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 94,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 785,
      name: "Quest Level 785",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 95,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 786,
      name: "Quest Level 786",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 96,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 787,
      name: "Quest Level 787",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 97,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 788,
      name: "Quest Level 788",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 98,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 789,
      name: "Quest Level 789",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 99,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 790,
      name: "Quest Level 790",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 100,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 791,
      name: "Quest Level 791",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 101,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 792,
      name: "Quest Level 792",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 102,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 793,
      name: "Quest Level 793",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 103,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 794,
      name: "Quest Level 794",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 104,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 795,
      name: "Quest Level 795",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 105,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 796,
      name: "Quest Level 796",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 106,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 797,
      name: "Quest Level 797",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 107,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 798,
      name: "Quest Level 798",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 108,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 799,
      name: "Quest Level 799",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 109,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 800,
      name: "Quest Level 800",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 110,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 801,
      name: "Quest Level 801",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 111,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 802,
      name: "Quest Level 802",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 112,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 803,
      name: "Quest Level 803",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 113,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 804,
      name: "Quest Level 804",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 114,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 805,
      name: "Quest Level 805",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 115,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 806,
      name: "Quest Level 806",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 116,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 807,
      name: "Quest Level 807",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 117,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 808,
      name: "Quest Level 808",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 118,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 809,
      name: "Quest Level 809",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 119,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 810,
      name: "Quest Level 810",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 30,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 811,
      name: "Quest Level 811",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 31,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 812,
      name: "Quest Level 812",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 32,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 813,
      name: "Quest Level 813",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 33,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 814,
      name: "Quest Level 814",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 34,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 815,
      name: "Quest Level 815",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 35,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 816,
      name: "Quest Level 816",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 36,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 817,
      name: "Quest Level 817",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 37,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 818,
      name: "Quest Level 818",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 38,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 819,
      name: "Quest Level 819",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 39,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 820,
      name: "Quest Level 820",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 40,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 821,
      name: "Quest Level 821",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 41,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 822,
      name: "Quest Level 822",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 42,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 823,
      name: "Quest Level 823",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 43,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 824,
      name: "Quest Level 824",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 44,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 825,
      name: "Quest Level 825",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 45,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 826,
      name: "Quest Level 826",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 46,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 827,
      name: "Quest Level 827",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 47,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 828,
      name: "Quest Level 828",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 48,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 829,
      name: "Quest Level 829",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 49,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 830,
      name: "Quest Level 830",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 50,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 831,
      name: "Quest Level 831",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 51,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 832,
      name: "Quest Level 832",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 52,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 833,
      name: "Quest Level 833",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 53,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 834,
      name: "Quest Level 834",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 54,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 835,
      name: "Quest Level 835",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 55,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 836,
      name: "Quest Level 836",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 56,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 837,
      name: "Quest Level 837",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 57,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 838,
      name: "Quest Level 838",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 58,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 839,
      name: "Quest Level 839",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 59,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 840,
      name: "Quest Level 840",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 60,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 841,
      name: "Quest Level 841",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 61,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 842,
      name: "Quest Level 842",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 62,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 843,
      name: "Quest Level 843",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 63,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 844,
      name: "Quest Level 844",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 64,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 845,
      name: "Quest Level 845",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 65,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 846,
      name: "Quest Level 846",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 66,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 847,
      name: "Quest Level 847",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 67,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 848,
      name: "Quest Level 848",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 68,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 849,
      name: "Quest Level 849",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 69,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 850,
      name: "Quest Level 850",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 70,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 851,
      name: "Quest Level 851",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 71,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 852,
      name: "Quest Level 852",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 72,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 853,
      name: "Quest Level 853",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 73,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 854,
      name: "Quest Level 854",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 74,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 855,
      name: "Quest Level 855",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 75,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 856,
      name: "Quest Level 856",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 76,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 857,
      name: "Quest Level 857",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 77,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 858,
      name: "Quest Level 858",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 78,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 859,
      name: "Quest Level 859",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 79,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 860,
      name: "Quest Level 860",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 80,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 861,
      name: "Quest Level 861",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 81,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 862,
      name: "Quest Level 862",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 82,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 863,
      name: "Quest Level 863",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 83,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 864,
      name: "Quest Level 864",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 84,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 865,
      name: "Quest Level 865",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 85,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 866,
      name: "Quest Level 866",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 86,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 867,
      name: "Quest Level 867",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 87,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 868,
      name: "Quest Level 868",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 88,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 869,
      name: "Quest Level 869",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 89,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 870,
      name: "Quest Level 870",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 90,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 871,
      name: "Quest Level 871",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 91,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 872,
      name: "Quest Level 872",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 92,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 873,
      name: "Quest Level 873",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 93,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 874,
      name: "Quest Level 874",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 94,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 875,
      name: "Quest Level 875",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 95,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 876,
      name: "Quest Level 876",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 96,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 877,
      name: "Quest Level 877",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 97,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 878,
      name: "Quest Level 878",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 98,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 879,
      name: "Quest Level 879",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 99,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 880,
      name: "Quest Level 880",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 100,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 881,
      name: "Quest Level 881",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 101,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 882,
      name: "Quest Level 882",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 102,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 883,
      name: "Quest Level 883",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 103,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 884,
      name: "Quest Level 884",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 104,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 885,
      name: "Quest Level 885",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 105,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 886,
      name: "Quest Level 886",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 106,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 887,
      name: "Quest Level 887",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 107,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 888,
      name: "Quest Level 888",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 108,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 889,
      name: "Quest Level 889",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 109,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 890,
      name: "Quest Level 890",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 110,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 891,
      name: "Quest Level 891",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 111,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 892,
      name: "Quest Level 892",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 112,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 893,
      name: "Quest Level 893",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 113,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 894,
      name: "Quest Level 894",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 114,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 895,
      name: "Quest Level 895",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 115,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 896,
      name: "Quest Level 896",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 116,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 897,
      name: "Quest Level 897",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 117,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 898,
      name: "Quest Level 898",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 118,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 899,
      name: "Quest Level 899",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 119,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 900,
      name: "Quest Level 900",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 30,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 901,
      name: "Quest Level 901",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 31,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 902,
      name: "Quest Level 902",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 32,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 903,
      name: "Quest Level 903",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 33,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 904,
      name: "Quest Level 904",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 34,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 905,
      name: "Quest Level 905",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 35,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 906,
      name: "Quest Level 906",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 36,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 907,
      name: "Quest Level 907",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 37,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 908,
      name: "Quest Level 908",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 38,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 909,
      name: "Quest Level 909",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 39,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 910,
      name: "Quest Level 910",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 40,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 911,
      name: "Quest Level 911",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 41,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 912,
      name: "Quest Level 912",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 42,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 913,
      name: "Quest Level 913",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 43,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 914,
      name: "Quest Level 914",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 44,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 915,
      name: "Quest Level 915",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 45,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 916,
      name: "Quest Level 916",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 46,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 917,
      name: "Quest Level 917",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 47,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 918,
      name: "Quest Level 918",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 48,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 919,
      name: "Quest Level 919",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 49,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 920,
      name: "Quest Level 920",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 50,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 921,
      name: "Quest Level 921",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 51,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 922,
      name: "Quest Level 922",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 52,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 923,
      name: "Quest Level 923",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 53,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 924,
      name: "Quest Level 924",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 54,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 925,
      name: "Quest Level 925",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 55,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 926,
      name: "Quest Level 926",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 56,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 927,
      name: "Quest Level 927",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 57,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 928,
      name: "Quest Level 928",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 58,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 929,
      name: "Quest Level 929",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 59,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 930,
      name: "Quest Level 930",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 60,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 931,
      name: "Quest Level 931",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 61,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 932,
      name: "Quest Level 932",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 62,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 933,
      name: "Quest Level 933",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 63,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 934,
      name: "Quest Level 934",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 64,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 935,
      name: "Quest Level 935",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 65,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 936,
      name: "Quest Level 936",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 66,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 937,
      name: "Quest Level 937",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 67,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 938,
      name: "Quest Level 938",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 68,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 939,
      name: "Quest Level 939",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 69,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 940,
      name: "Quest Level 940",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 70,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 941,
      name: "Quest Level 941",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 71,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 942,
      name: "Quest Level 942",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 72,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 943,
      name: "Quest Level 943",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 73,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 944,
      name: "Quest Level 944",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 74,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 945,
      name: "Quest Level 945",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 75,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 946,
      name: "Quest Level 946",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 76,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 947,
      name: "Quest Level 947",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 77,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 948,
      name: "Quest Level 948",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 78,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 949,
      name: "Quest Level 949",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 79,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 950,
      name: "Quest Level 950",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 80,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 951,
      name: "Quest Level 951",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 81,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 952,
      name: "Quest Level 952",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 82,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 953,
      name: "Quest Level 953",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 83,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 954,
      name: "Quest Level 954",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 84,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 955,
      name: "Quest Level 955",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 85,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 956,
      name: "Quest Level 956",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 86,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 957,
      name: "Quest Level 957",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 87,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 958,
      name: "Quest Level 958",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 88,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 959,
      name: "Quest Level 959",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 89,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 960,
      name: "Quest Level 960",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 90,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 961,
      name: "Quest Level 961",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 91,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 962,
      name: "Quest Level 962",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 92,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 963,
      name: "Quest Level 963",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 93,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 964,
      name: "Quest Level 964",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 94,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 965,
      name: "Quest Level 965",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 95,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 966,
      name: "Quest Level 966",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 96,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 967,
      name: "Quest Level 967",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 97,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 968,
      name: "Quest Level 968",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 98,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 969,
      name: "Quest Level 969",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 99,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 970,
      name: "Quest Level 970",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 100,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 971,
      name: "Quest Level 971",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 101,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 972,
      name: "Quest Level 972",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 102,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 973,
      name: "Quest Level 973",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 103,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 974,
      name: "Quest Level 974",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 104,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 975,
      name: "Quest Level 975",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 105,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 976,
      name: "Quest Level 976",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 106,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 977,
      name: "Quest Level 977",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 107,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 978,
      name: "Quest Level 978",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 108,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 979,
      name: "Quest Level 979",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 109,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 980,
      name: "Quest Level 980",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 110,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 981,
      name: "Quest Level 981",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 111,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 982,
      name: "Quest Level 982",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 112,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 983,
      name: "Quest Level 983",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 113,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 984,
      name: "Quest Level 984",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 114,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 985,
      name: "Quest Level 985",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 115,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 986,
      name: "Quest Level 986",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 116,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 987,
      name: "Quest Level 987",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 117,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 988,
      name: "Quest Level 988",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 118,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 989,
      name: "Quest Level 989",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 119,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 990,
      name: "Quest Level 990",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 30,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 991,
      name: "Quest Level 991",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 31,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 992,
      name: "Quest Level 992",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 32,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 993,
      name: "Quest Level 993",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 33,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 994,
      name: "Quest Level 994",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 34,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 995,
      name: "Quest Level 995",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 35,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 996,
      name: "Quest Level 996",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 36,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 997,
      name: "Quest Level 997",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 37,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 998,
      name: "Quest Level 998",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 38,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 999,
      name: "Quest Level 999",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 39,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1000,
      name: "Quest Level 1000",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 40,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1001,
      name: "Quest Level 1001",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 41,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1002,
      name: "Quest Level 1002",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 42,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1003,
      name: "Quest Level 1003",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 43,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1004,
      name: "Quest Level 1004",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 44,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1005,
      name: "Quest Level 1005",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 45,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1006,
      name: "Quest Level 1006",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 46,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1007,
      name: "Quest Level 1007",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 47,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1008,
      name: "Quest Level 1008",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 48,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1009,
      name: "Quest Level 1009",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 49,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1010,
      name: "Quest Level 1010",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 50,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1011,
      name: "Quest Level 1011",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 51,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1012,
      name: "Quest Level 1012",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 52,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1013,
      name: "Quest Level 1013",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 53,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1014,
      name: "Quest Level 1014",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 54,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1015,
      name: "Quest Level 1015",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 55,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1016,
      name: "Quest Level 1016",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 56,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1017,
      name: "Quest Level 1017",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 57,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1018,
      name: "Quest Level 1018",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 58,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1019,
      name: "Quest Level 1019",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 59,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1020,
      name: "Quest Level 1020",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 60,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1021,
      name: "Quest Level 1021",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 61,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1022,
      name: "Quest Level 1022",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 62,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1023,
      name: "Quest Level 1023",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 63,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1024,
      name: "Quest Level 1024",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 64,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1025,
      name: "Quest Level 1025",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 65,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1026,
      name: "Quest Level 1026",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 66,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1027,
      name: "Quest Level 1027",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 67,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1028,
      name: "Quest Level 1028",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 68,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1029,
      name: "Quest Level 1029",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 69,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1030,
      name: "Quest Level 1030",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 70,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1031,
      name: "Quest Level 1031",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 71,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1032,
      name: "Quest Level 1032",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 72,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1033,
      name: "Quest Level 1033",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 73,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1034,
      name: "Quest Level 1034",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 74,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1035,
      name: "Quest Level 1035",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 75,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1036,
      name: "Quest Level 1036",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 76,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1037,
      name: "Quest Level 1037",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 77,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1038,
      name: "Quest Level 1038",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 78,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1039,
      name: "Quest Level 1039",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 79,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1040,
      name: "Quest Level 1040",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 80,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1041,
      name: "Quest Level 1041",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 81,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1042,
      name: "Quest Level 1042",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 82,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1043,
      name: "Quest Level 1043",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 83,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1044,
      name: "Quest Level 1044",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 84,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1045,
      name: "Quest Level 1045",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 85,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1046,
      name: "Quest Level 1046",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 86,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1047,
      name: "Quest Level 1047",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 87,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1048,
      name: "Quest Level 1048",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 88,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1049,
      name: "Quest Level 1049",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 89,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1050,
      name: "Quest Level 1050",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 90,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1051,
      name: "Quest Level 1051",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 91,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1052,
      name: "Quest Level 1052",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 92,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1053,
      name: "Quest Level 1053",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 93,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1054,
      name: "Quest Level 1054",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 94,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1055,
      name: "Quest Level 1055",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 95,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1056,
      name: "Quest Level 1056",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 96,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1057,
      name: "Quest Level 1057",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 97,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1058,
      name: "Quest Level 1058",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 98,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1059,
      name: "Quest Level 1059",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 99,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1060,
      name: "Quest Level 1060",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 100,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1061,
      name: "Quest Level 1061",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 101,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1062,
      name: "Quest Level 1062",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 102,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1063,
      name: "Quest Level 1063",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 103,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1064,
      name: "Quest Level 1064",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 104,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1065,
      name: "Quest Level 1065",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 105,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1066,
      name: "Quest Level 1066",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 106,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1067,
      name: "Quest Level 1067",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 107,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1068,
      name: "Quest Level 1068",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 108,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1069,
      name: "Quest Level 1069",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 109,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1070,
      name: "Quest Level 1070",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 110,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1071,
      name: "Quest Level 1071",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 111,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1072,
      name: "Quest Level 1072",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 112,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1073,
      name: "Quest Level 1073",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 113,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1074,
      name: "Quest Level 1074",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 114,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1075,
      name: "Quest Level 1075",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 115,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1076,
      name: "Quest Level 1076",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 116,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1077,
      name: "Quest Level 1077",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 117,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1078,
      name: "Quest Level 1078",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 118,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1079,
      name: "Quest Level 1079",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 119,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1080,
      name: "Quest Level 1080",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 30,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1081,
      name: "Quest Level 1081",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 31,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1082,
      name: "Quest Level 1082",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 32,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1083,
      name: "Quest Level 1083",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 33,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1084,
      name: "Quest Level 1084",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 34,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1085,
      name: "Quest Level 1085",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 35,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1086,
      name: "Quest Level 1086",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 36,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1087,
      name: "Quest Level 1087",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 37,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1088,
      name: "Quest Level 1088",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 38,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1089,
      name: "Quest Level 1089",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 39,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1090,
      name: "Quest Level 1090",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 40,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1091,
      name: "Quest Level 1091",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 41,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1092,
      name: "Quest Level 1092",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 42,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1093,
      name: "Quest Level 1093",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 43,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1094,
      name: "Quest Level 1094",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 44,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1095,
      name: "Quest Level 1095",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 45,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1096,
      name: "Quest Level 1096",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 46,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1097,
      name: "Quest Level 1097",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 47,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1098,
      name: "Quest Level 1098",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 48,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1099,
      name: "Quest Level 1099",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 49,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1100,
      name: "Quest Level 1100",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 50,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1101,
      name: "Quest Level 1101",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 51,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1102,
      name: "Quest Level 1102",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 52,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1103,
      name: "Quest Level 1103",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 53,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1104,
      name: "Quest Level 1104",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 54,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1105,
      name: "Quest Level 1105",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 55,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1106,
      name: "Quest Level 1106",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 56,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1107,
      name: "Quest Level 1107",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 57,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1108,
      name: "Quest Level 1108",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 58,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1109,
      name: "Quest Level 1109",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 59,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1110,
      name: "Quest Level 1110",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 60,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1111,
      name: "Quest Level 1111",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 61,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1112,
      name: "Quest Level 1112",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 62,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1113,
      name: "Quest Level 1113",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 63,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1114,
      name: "Quest Level 1114",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 64,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1115,
      name: "Quest Level 1115",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 65,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1116,
      name: "Quest Level 1116",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 66,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1117,
      name: "Quest Level 1117",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 67,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1118,
      name: "Quest Level 1118",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 68,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1119,
      name: "Quest Level 1119",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 69,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1120,
      name: "Quest Level 1120",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 70,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1121,
      name: "Quest Level 1121",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 71,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1122,
      name: "Quest Level 1122",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 72,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1123,
      name: "Quest Level 1123",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 73,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1124,
      name: "Quest Level 1124",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 74,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1125,
      name: "Quest Level 1125",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 75,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1126,
      name: "Quest Level 1126",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 76,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1127,
      name: "Quest Level 1127",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 77,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1128,
      name: "Quest Level 1128",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 78,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1129,
      name: "Quest Level 1129",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 79,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1130,
      name: "Quest Level 1130",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 80,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1131,
      name: "Quest Level 1131",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 81,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1132,
      name: "Quest Level 1132",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 82,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1133,
      name: "Quest Level 1133",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 83,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1134,
      name: "Quest Level 1134",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 84,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1135,
      name: "Quest Level 1135",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 85,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1136,
      name: "Quest Level 1136",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 86,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1137,
      name: "Quest Level 1137",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 87,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1138,
      name: "Quest Level 1138",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 88,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1139,
      name: "Quest Level 1139",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 89,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1140,
      name: "Quest Level 1140",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 90,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1141,
      name: "Quest Level 1141",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 91,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1142,
      name: "Quest Level 1142",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 92,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1143,
      name: "Quest Level 1143",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 93,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1144,
      name: "Quest Level 1144",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 94,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1145,
      name: "Quest Level 1145",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 95,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1146,
      name: "Quest Level 1146",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 96,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1147,
      name: "Quest Level 1147",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 97,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1148,
      name: "Quest Level 1148",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 98,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1149,
      name: "Quest Level 1149",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 99,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1150,
      name: "Quest Level 1150",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 100,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1151,
      name: "Quest Level 1151",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 101,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1152,
      name: "Quest Level 1152",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 102,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1153,
      name: "Quest Level 1153",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 103,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1154,
      name: "Quest Level 1154",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 104,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1155,
      name: "Quest Level 1155",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 105,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1156,
      name: "Quest Level 1156",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 106,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1157,
      name: "Quest Level 1157",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 107,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1158,
      name: "Quest Level 1158",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 108,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1159,
      name: "Quest Level 1159",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 109,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1160,
      name: "Quest Level 1160",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 110,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1161,
      name: "Quest Level 1161",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 111,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1162,
      name: "Quest Level 1162",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 112,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1163,
      name: "Quest Level 1163",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 113,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1164,
      name: "Quest Level 1164",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 114,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1165,
      name: "Quest Level 1165",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 115,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1166,
      name: "Quest Level 1166",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 116,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1167,
      name: "Quest Level 1167",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 117,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1168,
      name: "Quest Level 1168",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 118,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1169,
      name: "Quest Level 1169",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 119,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1170,
      name: "Quest Level 1170",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 30,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1171,
      name: "Quest Level 1171",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 31,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1172,
      name: "Quest Level 1172",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 32,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1173,
      name: "Quest Level 1173",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 33,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1174,
      name: "Quest Level 1174",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 34,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1175,
      name: "Quest Level 1175",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 35,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1176,
      name: "Quest Level 1176",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 36,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1177,
      name: "Quest Level 1177",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 37,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1178,
      name: "Quest Level 1178",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 38,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1179,
      name: "Quest Level 1179",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 39,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1180,
      name: "Quest Level 1180",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 40,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1181,
      name: "Quest Level 1181",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 41,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1182,
      name: "Quest Level 1182",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 42,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1183,
      name: "Quest Level 1183",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 43,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1184,
      name: "Quest Level 1184",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 44,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1185,
      name: "Quest Level 1185",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 45,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1186,
      name: "Quest Level 1186",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 46,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1187,
      name: "Quest Level 1187",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 47,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1188,
      name: "Quest Level 1188",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 48,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1189,
      name: "Quest Level 1189",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 49,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1190,
      name: "Quest Level 1190",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 50,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1191,
      name: "Quest Level 1191",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 51,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1192,
      name: "Quest Level 1192",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 52,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1193,
      name: "Quest Level 1193",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 53,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1194,
      name: "Quest Level 1194",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 54,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1195,
      name: "Quest Level 1195",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 55,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1196,
      name: "Quest Level 1196",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 56,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1197,
      name: "Quest Level 1197",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 57,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1198,
      name: "Quest Level 1198",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 58,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1199,
      name: "Quest Level 1199",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 59,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1200,
      name: "Quest Level 1200",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 60,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1201,
      name: "Quest Level 1201",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 61,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1202,
      name: "Quest Level 1202",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 62,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1203,
      name: "Quest Level 1203",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 63,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1204,
      name: "Quest Level 1204",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 64,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1205,
      name: "Quest Level 1205",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 65,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1206,
      name: "Quest Level 1206",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 66,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1207,
      name: "Quest Level 1207",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 67,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1208,
      name: "Quest Level 1208",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 68,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1209,
      name: "Quest Level 1209",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 69,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1210,
      name: "Quest Level 1210",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 70,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1211,
      name: "Quest Level 1211",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 71,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1212,
      name: "Quest Level 1212",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 72,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1213,
      name: "Quest Level 1213",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 73,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1214,
      name: "Quest Level 1214",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 74,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1215,
      name: "Quest Level 1215",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 75,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1216,
      name: "Quest Level 1216",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 76,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1217,
      name: "Quest Level 1217",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 77,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1218,
      name: "Quest Level 1218",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 78,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1219,
      name: "Quest Level 1219",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 79,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1220,
      name: "Quest Level 1220",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 80,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1221,
      name: "Quest Level 1221",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 81,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1222,
      name: "Quest Level 1222",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 82,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1223,
      name: "Quest Level 1223",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 83,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1224,
      name: "Quest Level 1224",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 84,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1225,
      name: "Quest Level 1225",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 85,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1226,
      name: "Quest Level 1226",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 86,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1227,
      name: "Quest Level 1227",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 87,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1228,
      name: "Quest Level 1228",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 88,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1229,
      name: "Quest Level 1229",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 89,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1230,
      name: "Quest Level 1230",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 90,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1231,
      name: "Quest Level 1231",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 91,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1232,
      name: "Quest Level 1232",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 92,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1233,
      name: "Quest Level 1233",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 93,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1234,
      name: "Quest Level 1234",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 94,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1235,
      name: "Quest Level 1235",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 95,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1236,
      name: "Quest Level 1236",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 96,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1237,
      name: "Quest Level 1237",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 97,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1238,
      name: "Quest Level 1238",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 98,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1239,
      name: "Quest Level 1239",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 99,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1240,
      name: "Quest Level 1240",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 100,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1241,
      name: "Quest Level 1241",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 101,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1242,
      name: "Quest Level 1242",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 102,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1243,
      name: "Quest Level 1243",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 103,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1244,
      name: "Quest Level 1244",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 104,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1245,
      name: "Quest Level 1245",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 105,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1246,
      name: "Quest Level 1246",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 106,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1247,
      name: "Quest Level 1247",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 107,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1248,
      name: "Quest Level 1248",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 108,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1249,
      name: "Quest Level 1249",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 109,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1250,
      name: "Quest Level 1250",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 110,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1251,
      name: "Quest Level 1251",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 111,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1252,
      name: "Quest Level 1252",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 112,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1253,
      name: "Quest Level 1253",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 113,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1254,
      name: "Quest Level 1254",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 114,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1255,
      name: "Quest Level 1255",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 115,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1256,
      name: "Quest Level 1256",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 116,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1257,
      name: "Quest Level 1257",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 117,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1258,
      name: "Quest Level 1258",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 118,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1259,
      name: "Quest Level 1259",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 119,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1260,
      name: "Quest Level 1260",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 30,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1261,
      name: "Quest Level 1261",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 31,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1262,
      name: "Quest Level 1262",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 32,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1263,
      name: "Quest Level 1263",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 33,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1264,
      name: "Quest Level 1264",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 34,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1265,
      name: "Quest Level 1265",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 35,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1266,
      name: "Quest Level 1266",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 36,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1267,
      name: "Quest Level 1267",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 37,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1268,
      name: "Quest Level 1268",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 38,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1269,
      name: "Quest Level 1269",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 39,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1270,
      name: "Quest Level 1270",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 40,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1271,
      name: "Quest Level 1271",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 41,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1272,
      name: "Quest Level 1272",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 42,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1273,
      name: "Quest Level 1273",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 43,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1274,
      name: "Quest Level 1274",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 44,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1275,
      name: "Quest Level 1275",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 45,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1276,
      name: "Quest Level 1276",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 46,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1277,
      name: "Quest Level 1277",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 47,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1278,
      name: "Quest Level 1278",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 48,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1279,
      name: "Quest Level 1279",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 49,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1280,
      name: "Quest Level 1280",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 50,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1281,
      name: "Quest Level 1281",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 51,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1282,
      name: "Quest Level 1282",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 52,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1283,
      name: "Quest Level 1283",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 53,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1284,
      name: "Quest Level 1284",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 54,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1285,
      name: "Quest Level 1285",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 55,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1286,
      name: "Quest Level 1286",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 56,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1287,
      name: "Quest Level 1287",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 57,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1288,
      name: "Quest Level 1288",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 58,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1289,
      name: "Quest Level 1289",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 59,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1290,
      name: "Quest Level 1290",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 60,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1291,
      name: "Quest Level 1291",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 61,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1292,
      name: "Quest Level 1292",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 62,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1293,
      name: "Quest Level 1293",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 63,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1294,
      name: "Quest Level 1294",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 64,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1295,
      name: "Quest Level 1295",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 65,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1296,
      name: "Quest Level 1296",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 66,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1297,
      name: "Quest Level 1297",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 67,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1298,
      name: "Quest Level 1298",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 68,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1299,
      name: "Quest Level 1299",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 69,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1300,
      name: "Quest Level 1300",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 70,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1301,
      name: "Quest Level 1301",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 71,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1302,
      name: "Quest Level 1302",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 72,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1303,
      name: "Quest Level 1303",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 73,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1304,
      name: "Quest Level 1304",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 74,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1305,
      name: "Quest Level 1305",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 75,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1306,
      name: "Quest Level 1306",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 76,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1307,
      name: "Quest Level 1307",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 77,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1308,
      name: "Quest Level 1308",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 78,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1309,
      name: "Quest Level 1309",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 79,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1310,
      name: "Quest Level 1310",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 80,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1311,
      name: "Quest Level 1311",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 81,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1312,
      name: "Quest Level 1312",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 82,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1313,
      name: "Quest Level 1313",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 83,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1314,
      name: "Quest Level 1314",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 84,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1315,
      name: "Quest Level 1315",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 85,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1316,
      name: "Quest Level 1316",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 86,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1317,
      name: "Quest Level 1317",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 87,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1318,
      name: "Quest Level 1318",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 88,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1319,
      name: "Quest Level 1319",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 89,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1320,
      name: "Quest Level 1320",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 90,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1321,
      name: "Quest Level 1321",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 91,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1322,
      name: "Quest Level 1322",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 92,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1323,
      name: "Quest Level 1323",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 93,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1324,
      name: "Quest Level 1324",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 94,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1325,
      name: "Quest Level 1325",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 95,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1326,
      name: "Quest Level 1326",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 96,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1327,
      name: "Quest Level 1327",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 97,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1328,
      name: "Quest Level 1328",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 98,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1329,
      name: "Quest Level 1329",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 99,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1330,
      name: "Quest Level 1330",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 100,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1331,
      name: "Quest Level 1331",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 101,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1332,
      name: "Quest Level 1332",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 102,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1333,
      name: "Quest Level 1333",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 103,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1334,
      name: "Quest Level 1334",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 104,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1335,
      name: "Quest Level 1335",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 105,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1336,
      name: "Quest Level 1336",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 106,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1337,
      name: "Quest Level 1337",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 107,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1338,
      name: "Quest Level 1338",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 108,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1339,
      name: "Quest Level 1339",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 109,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1340,
      name: "Quest Level 1340",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 110,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1341,
      name: "Quest Level 1341",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 111,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1342,
      name: "Quest Level 1342",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 112,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1343,
      name: "Quest Level 1343",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 113,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1344,
      name: "Quest Level 1344",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 114,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1345,
      name: "Quest Level 1345",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 115,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1346,
      name: "Quest Level 1346",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 116,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1347,
      name: "Quest Level 1347",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 117,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1348,
      name: "Quest Level 1348",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 118,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1349,
      name: "Quest Level 1349",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 119,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1350,
      name: "Quest Level 1350",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 30,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1351,
      name: "Quest Level 1351",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 31,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1352,
      name: "Quest Level 1352",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 32,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1353,
      name: "Quest Level 1353",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 33,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1354,
      name: "Quest Level 1354",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 34,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1355,
      name: "Quest Level 1355",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 35,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1356,
      name: "Quest Level 1356",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 36,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1357,
      name: "Quest Level 1357",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 37,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1358,
      name: "Quest Level 1358",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 38,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1359,
      name: "Quest Level 1359",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 39,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1360,
      name: "Quest Level 1360",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 40,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1361,
      name: "Quest Level 1361",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 41,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1362,
      name: "Quest Level 1362",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 42,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1363,
      name: "Quest Level 1363",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 43,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1364,
      name: "Quest Level 1364",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 44,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1365,
      name: "Quest Level 1365",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 45,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1366,
      name: "Quest Level 1366",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 46,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1367,
      name: "Quest Level 1367",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 47,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1368,
      name: "Quest Level 1368",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 48,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1369,
      name: "Quest Level 1369",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 49,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1370,
      name: "Quest Level 1370",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 50,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1371,
      name: "Quest Level 1371",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 51,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1372,
      name: "Quest Level 1372",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 52,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1373,
      name: "Quest Level 1373",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 53,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1374,
      name: "Quest Level 1374",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 54,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1375,
      name: "Quest Level 1375",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 55,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1376,
      name: "Quest Level 1376",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 56,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1377,
      name: "Quest Level 1377",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 57,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1378,
      name: "Quest Level 1378",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 58,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1379,
      name: "Quest Level 1379",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 59,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1380,
      name: "Quest Level 1380",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 60,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1381,
      name: "Quest Level 1381",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 61,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1382,
      name: "Quest Level 1382",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 62,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1383,
      name: "Quest Level 1383",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 63,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1384,
      name: "Quest Level 1384",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 64,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1385,
      name: "Quest Level 1385",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 65,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1386,
      name: "Quest Level 1386",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 66,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1387,
      name: "Quest Level 1387",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 67,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1388,
      name: "Quest Level 1388",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 68,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1389,
      name: "Quest Level 1389",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 69,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1390,
      name: "Quest Level 1390",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 70,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1391,
      name: "Quest Level 1391",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 71,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1392,
      name: "Quest Level 1392",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 72,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1393,
      name: "Quest Level 1393",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 73,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1394,
      name: "Quest Level 1394",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 74,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1395,
      name: "Quest Level 1395",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 75,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1396,
      name: "Quest Level 1396",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 76,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1397,
      name: "Quest Level 1397",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 77,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1398,
      name: "Quest Level 1398",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 78,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1399,
      name: "Quest Level 1399",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 79,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1400,
      name: "Quest Level 1400",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 80,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1401,
      name: "Quest Level 1401",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 81,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1402,
      name: "Quest Level 1402",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 82,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1403,
      name: "Quest Level 1403",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 83,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1404,
      name: "Quest Level 1404",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 84,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1405,
      name: "Quest Level 1405",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 85,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1406,
      name: "Quest Level 1406",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 86,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1407,
      name: "Quest Level 1407",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 87,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1408,
      name: "Quest Level 1408",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 88,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1409,
      name: "Quest Level 1409",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 89,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1410,
      name: "Quest Level 1410",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 90,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1411,
      name: "Quest Level 1411",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 91,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1412,
      name: "Quest Level 1412",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 92,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1413,
      name: "Quest Level 1413",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 93,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1414,
      name: "Quest Level 1414",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 94,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1415,
      name: "Quest Level 1415",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 95,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1416,
      name: "Quest Level 1416",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 96,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1417,
      name: "Quest Level 1417",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 97,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1418,
      name: "Quest Level 1418",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 98,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1419,
      name: "Quest Level 1419",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 99,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1420,
      name: "Quest Level 1420",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 100,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1421,
      name: "Quest Level 1421",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 101,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1422,
      name: "Quest Level 1422",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 102,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1423,
      name: "Quest Level 1423",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 103,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1424,
      name: "Quest Level 1424",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 104,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1425,
      name: "Quest Level 1425",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 105,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1426,
      name: "Quest Level 1426",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 106,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1427,
      name: "Quest Level 1427",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 107,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1428,
      name: "Quest Level 1428",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 108,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1429,
      name: "Quest Level 1429",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 109,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1430,
      name: "Quest Level 1430",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 110,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1431,
      name: "Quest Level 1431",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 111,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1432,
      name: "Quest Level 1432",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 112,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1433,
      name: "Quest Level 1433",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 113,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1434,
      name: "Quest Level 1434",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 114,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1435,
      name: "Quest Level 1435",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 115,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1436,
      name: "Quest Level 1436",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 116,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1437,
      name: "Quest Level 1437",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 117,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1438,
      name: "Quest Level 1438",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 118,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1439,
      name: "Quest Level 1439",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 119,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1440,
      name: "Quest Level 1440",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 30,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1441,
      name: "Quest Level 1441",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 31,
      starThreshold3: 16,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1442,
      name: "Quest Level 1442",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 32,
      starThreshold3: 17,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1443,
      name: "Quest Level 1443",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 33,
      starThreshold3: 18,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1444,
      name: "Quest Level 1444",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 34,
      starThreshold3: 19,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1445,
      name: "Quest Level 1445",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 35,
      starThreshold3: 20,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1446,
      name: "Quest Level 1446",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 36,
      starThreshold3: 21,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1447,
      name: "Quest Level 1447",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 37,
      starThreshold3: 22,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1448,
      name: "Quest Level 1448",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 38,
      starThreshold3: 23,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1449,
      name: "Quest Level 1449",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 39,
      starThreshold3: 24,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1450,
      name: "Quest Level 1450",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 40,
      starThreshold3: 25,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1451,
      name: "Quest Level 1451",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 41,
      starThreshold3: 26,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1452,
      name: "Quest Level 1452",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 42,
      starThreshold3: 27,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1453,
      name: "Quest Level 1453",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 43,
      starThreshold3: 28,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1454,
      name: "Quest Level 1454",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 44,
      starThreshold3: 29,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1455,
      name: "Quest Level 1455",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 45,
      starThreshold3: 30,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1456,
      name: "Quest Level 1456",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 46,
      starThreshold3: 31,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1457,
      name: "Quest Level 1457",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 47,
      starThreshold3: 32,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1458,
      name: "Quest Level 1458",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 48,
      starThreshold3: 33,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1459,
      name: "Quest Level 1459",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 49,
      starThreshold3: 34,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1460,
      name: "Quest Level 1460",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 50,
      starThreshold3: 15,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1461,
      name: "Quest Level 1461",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 51,
      starThreshold3: 16,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1462,
      name: "Quest Level 1462",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 52,
      starThreshold3: 17,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1463,
      name: "Quest Level 1463",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 53,
      starThreshold3: 18,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1464,
      name: "Quest Level 1464",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 54,
      starThreshold3: 19,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1465,
      name: "Quest Level 1465",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 55,
      starThreshold3: 20,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1466,
      name: "Quest Level 1466",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 56,
      starThreshold3: 21,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1467,
      name: "Quest Level 1467",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 57,
      starThreshold3: 22,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1468,
      name: "Quest Level 1468",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 58,
      starThreshold3: 23,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1469,
      name: "Quest Level 1469",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 59,
      starThreshold3: 24,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1470,
      name: "Quest Level 1470",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 60,
      starThreshold3: 25,
      starThreshold2: 30,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1471,
      name: "Quest Level 1471",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 61,
      starThreshold3: 26,
      starThreshold2: 31,
      modifier: "none"
    });
    this.levels.push({
      id: 1472,
      name: "Quest Level 1472",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 62,
      starThreshold3: 27,
      starThreshold2: 32,
      modifier: "none"
    });
    this.levels.push({
      id: 1473,
      name: "Quest Level 1473",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 63,
      starThreshold3: 28,
      starThreshold2: 33,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1474,
      name: "Quest Level 1474",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 64,
      starThreshold3: 29,
      starThreshold2: 34,
      modifier: "none"
    });
    this.levels.push({
      id: 1475,
      name: "Quest Level 1475",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 65,
      starThreshold3: 30,
      starThreshold2: 35,
      modifier: "none"
    });
    this.levels.push({
      id: 1476,
      name: "Quest Level 1476",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 66,
      starThreshold3: 31,
      starThreshold2: 36,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1477,
      name: "Quest Level 1477",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 67,
      starThreshold3: 32,
      starThreshold2: 37,
      modifier: "none"
    });
    this.levels.push({
      id: 1478,
      name: "Quest Level 1478",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 68,
      starThreshold3: 33,
      starThreshold2: 38,
      modifier: "none"
    });
    this.levels.push({
      id: 1479,
      name: "Quest Level 1479",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 69,
      starThreshold3: 34,
      starThreshold2: 39,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1480,
      name: "Quest Level 1480",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 70,
      starThreshold3: 15,
      starThreshold2: 40,
      modifier: "none"
    });
    this.levels.push({
      id: 1481,
      name: "Quest Level 1481",
      rows: 4,
      cols: 4,
      mode: "triple",
      deck: "nature",
      timeLimit: 71,
      starThreshold3: 16,
      starThreshold2: 41,
      modifier: "none"
    });
    this.levels.push({
      id: 1482,
      name: "Quest Level 1482",
      rows: 6,
      cols: 6,
      mode: "time_attack",
      deck: "fantasy",
      timeLimit: 72,
      starThreshold3: 17,
      starThreshold2: 42,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1483,
      name: "Quest Level 1483",
      rows: 8,
      cols: 8,
      mode: "vs_ai",
      deck: "food",
      timeLimit: 73,
      starThreshold3: 18,
      starThreshold2: 43,
      modifier: "none"
    });
    this.levels.push({
      id: 1484,
      name: "Quest Level 1484",
      rows: 2,
      cols: 2,
      mode: "zen",
      deck: "tech",
      timeLimit: 74,
      starThreshold3: 19,
      starThreshold2: 44,
      modifier: "none"
    });
    this.levels.push({
      id: 1485,
      name: "Quest Level 1485",
      rows: 4,
      cols: 4,
      mode: "classic",
      deck: "nature",
      timeLimit: 75,
      starThreshold3: 20,
      starThreshold2: 45,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1486,
      name: "Quest Level 1486",
      rows: 6,
      cols: 6,
      mode: "triple",
      deck: "fantasy",
      timeLimit: 76,
      starThreshold3: 21,
      starThreshold2: 46,
      modifier: "none"
    });
    this.levels.push({
      id: 1487,
      name: "Quest Level 1487",
      rows: 8,
      cols: 8,
      mode: "time_attack",
      deck: "food",
      timeLimit: 77,
      starThreshold3: 22,
      starThreshold2: 47,
      modifier: "none"
    });
    this.levels.push({
      id: 1488,
      name: "Quest Level 1488",
      rows: 2,
      cols: 2,
      mode: "vs_ai",
      deck: "tech",
      timeLimit: 78,
      starThreshold3: 23,
      starThreshold2: 48,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1489,
      name: "Quest Level 1489",
      rows: 4,
      cols: 4,
      mode: "zen",
      deck: "nature",
      timeLimit: 79,
      starThreshold3: 24,
      starThreshold2: 49,
      modifier: "none"
    });
    this.levels.push({
      id: 1490,
      name: "Quest Level 1490",
      rows: 6,
      cols: 6,
      mode: "classic",
      deck: "fantasy",
      timeLimit: 80,
      starThreshold3: 25,
      starThreshold2: 50,
      modifier: "none"
    });
    this.levels.push({
      id: 1491,
      name: "Quest Level 1491",
      rows: 8,
      cols: 8,
      mode: "triple",
      deck: "food",
      timeLimit: 81,
      starThreshold3: 26,
      starThreshold2: 51,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1492,
      name: "Quest Level 1492",
      rows: 2,
      cols: 2,
      mode: "time_attack",
      deck: "tech",
      timeLimit: 82,
      starThreshold3: 27,
      starThreshold2: 52,
      modifier: "none"
    });
    this.levels.push({
      id: 1493,
      name: "Quest Level 1493",
      rows: 4,
      cols: 4,
      mode: "vs_ai",
      deck: "nature",
      timeLimit: 83,
      starThreshold3: 28,
      starThreshold2: 53,
      modifier: "none"
    });
    this.levels.push({
      id: 1494,
      name: "Quest Level 1494",
      rows: 6,
      cols: 6,
      mode: "zen",
      deck: "fantasy",
      timeLimit: 84,
      starThreshold3: 29,
      starThreshold2: 54,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1495,
      name: "Quest Level 1495",
      rows: 8,
      cols: 8,
      mode: "classic",
      deck: "food",
      timeLimit: 85,
      starThreshold3: 30,
      starThreshold2: 55,
      modifier: "none"
    });
    this.levels.push({
      id: 1496,
      name: "Quest Level 1496",
      rows: 2,
      cols: 2,
      mode: "triple",
      deck: "tech",
      timeLimit: 86,
      starThreshold3: 31,
      starThreshold2: 56,
      modifier: "none"
    });
    this.levels.push({
      id: 1497,
      name: "Quest Level 1497",
      rows: 4,
      cols: 4,
      mode: "time_attack",
      deck: "nature",
      timeLimit: 87,
      starThreshold3: 32,
      starThreshold2: 57,
      modifier: "freeze"
    });
    this.levels.push({
      id: 1498,
      name: "Quest Level 1498",
      rows: 6,
      cols: 6,
      mode: "vs_ai",
      deck: "fantasy",
      timeLimit: 88,
      starThreshold3: 33,
      starThreshold2: 58,
      modifier: "none"
    });
    this.levels.push({
      id: 1499,
      name: "Quest Level 1499",
      rows: 8,
      cols: 8,
      mode: "zen",
      deck: "food",
      timeLimit: 89,
      starThreshold3: 34,
      starThreshold2: 59,
      modifier: "none"
    });
    this.levels.push({
      id: 1500,
      name: "Quest Level 1500",
      rows: 2,
      cols: 2,
      mode: "classic",
      deck: "tech",
      timeLimit: 90,
      starThreshold3: 15,
      starThreshold2: 30,
      modifier: "freeze"
    });
  }

  getLevel(id) { return this.levels.find(l => l.id === id); }
}

const campaignManager = new ExtendedCampaignManager();
