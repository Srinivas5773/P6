const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

test('Memory Match Engine Module Tests', (t) => {
    t.test('verify engine file exists and parses', () => {
        const filePath = path.join(__dirname, '../js/engine.js');
        assert.strictEqual(fs.existsSync(filePath), true);
        const code = fs.readFileSync(filePath, 'utf-8');
        assert.ok(code.includes('class GameEngine'));
    });

    t.test('verify decks generator exists', () => {
        const filePath = path.join(__dirname, '../js/decks.js');
        assert.strictEqual(fs.existsSync(filePath), true);
        const code = fs.readFileSync(filePath, 'utf-8');
        assert.ok(code.includes('class DeckManager'));
    });

    t.test('verify AI opponent logic exists', () => {
        const filePath = path.join(__dirname, '../js/ai.js');
        assert.strictEqual(fs.existsSync(filePath), true);
        const code = fs.readFileSync(filePath, 'utf-8');
        assert.ok(code.includes('class AIOpponent'));
    });

    t.test('verify Powerup manager exists', () => {
        const filePath = path.join(__dirname, '../js/powerups.js');
        assert.strictEqual(fs.existsSync(filePath), true);
        const code = fs.readFileSync(filePath, 'utf-8');
        assert.ok(code.includes('class PowerupManager'));
    });

    t.test('verify Achievements system exists', () => {
        const filePath = path.join(__dirname, '../js/achievements.js');
        assert.strictEqual(fs.existsSync(filePath), true);
        const code = fs.readFileSync(filePath, 'utf-8');
        assert.ok(code.includes('class AchievementSystem'));
    });
});
