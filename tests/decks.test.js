const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

test('Deck System Tests', (t) => {
    t.test('verify deck datasets', () => {
        const filePath = path.join(__dirname, '../js/decks.js');
        assert.strictEqual(fs.existsSync(filePath), true);
        const code = fs.readFileSync(filePath, 'utf-8');
        assert.ok(code.includes('DECKS'));
    });
});
