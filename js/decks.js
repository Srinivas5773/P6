/* ==========================================================================
   MEMORY MATCH - DECK SYSTEM & SVG ICON LIBRARY DATASETS
   ========================================================================== */

const DECKS = {
    nature: {
        id: 'nature',
        name: 'Nature & Wildlife',
        description: 'Fauna, flora, and natural elements',
        icons: [
            { id: 'sun', label: 'Sun', color: '#ffb703', svg: `<path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><circle cx="12" cy="12" r="5" fill="currentColor"/>` },
            { id: 'moon', label: 'Moon', color: '#8ecae6', svg: `<path fill="currentColor" d="M12.3 2a10 10 0 1 0 9.7 12.3 1 1 0 0 0-1.1-.9 8 8 0 1 1-7.7-10.3 1 1 0 0 0-.9-1.1z"/>` },
            { id: 'tree', label: 'Tree', color: '#2a9d8f', svg: `<path fill="currentColor" d="M11 21h2v-4h4.5a1 1 0 0 0 .8-1.6l-3.3-4.4h2.5a1 1 0 0 0 .8-1.6L12.8 2.4a1 1 0 0 0-1.6 0L5.7 9.4a1 1 0 0 0 .8 1.6h2.5l-3.3 4.4a1 1 0 0 0 .8 1.6H11v4z"/>` },
            { id: 'leaf', label: 'Leaf', color: '#52b788', svg: `<path fill="currentColor" d="M17 2A15 15 0 0 0 2 17a15 15 0 0 0 15 5 1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 18a13 13 0 0 1-12-12A13 13 0 0 1 16 4v16z"/>` },
            { id: 'flower', label: 'Flower', color: '#ff4d6d', svg: `<circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="6" r="3.5" fill="currentColor" opacity="0.8"/><circle cx="18" cy="12" r="3.5" fill="currentColor" opacity="0.8"/><circle cx="12" cy="18" r="3.5" fill="currentColor" opacity="0.8"/><circle cx="6" cy="12" r="3.5" fill="currentColor" opacity="0.8"/>` },
            { id: 'mountain', label: 'Mountain', color: '#6c757d', svg: `<path fill="currentColor" d="m14 6-3.3 5L8.7 8 2 18h20L14 6zm-5.3 4.3 2 3-1.3 2H5.3l3.4-5zm5.3-2.3 5.3 8h-9.2l3.9-8z"/>` },
            { id: 'fire', label: 'Fire', color: '#e63946', svg: `<path fill="currentColor" d="M12 2s-4 4.5-4 8a4 4 0 0 0 8 0c0-3.5-4-8-4-8zm0 10a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/>` },
            { id: 'water', label: 'Water Drop', color: '#00b4d8', svg: `<path fill="currentColor" d="M12 2.7 6.3 9.4A8 8 0 1 0 17.7 9.4L12 2.7zm0 15.3a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"/>` },
            { id: 'fish', label: 'Fish', color: '#ff9f1c', svg: `<path fill="currentColor" d="M21.7 11.2a1 1 0 0 0 0-1.4A15 15 0 0 0 12 6a15 15 0 0 0-9.7 3.8 1 1 0 0 0 0 1.4 15 15 0 0 0 9.7 3.8 15 15 0 0 0 9.7-3.8zM5 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/>` },
            { id: 'bird', label: 'Bird', color: '#48cae4', svg: `<path fill="currentColor" d="M22 6s-3 1-5 0c-3-1.5-6 1-8 4L4 8s-2 3 0 5l4 2c-1 3-3 5-6 6 0 0 5 1 9-2l6-4c2-1 5-9 5-9z"/>` },
            { id: 'paw', label: 'Paw Print', color: '#a855f7', svg: `<circle cx="7" cy="8.5" r="2.5" fill="currentColor"/><circle cx="17" cy="8.5" r="2.5" fill="currentColor"/><circle cx="12" cy="5.5" r="2.5" fill="currentColor"/><path fill="currentColor" d="M12 11c-3.5 0-6 2-6 5s2.5 4 6 4 6-1 6-4-2.5-5-6-5z"/>` },
            { id: 'bug', label: 'Beetle', color: '#10b981', svg: `<path fill="currentColor" d="M12 2a4 4 0 0 0-4 4v1H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2v2H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v1a4 4 0 0 0 8 0v-1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3v-2h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2V6a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 4 0v1h-4V6zm-2 5h8v2H8v-2zm0 4h8v2H8v-2z"/>` }
        ]
    },
    tech: {
        id: 'tech',
        name: 'Technology & Cyber',
        description: 'Code, microchips, and digital gadgets',
        icons: [
            { id: 'code', label: 'Code Bracket', color: '#00f0ff', svg: `<path fill="currentColor" d="m8.7 15.3-4.6-4.6 4.6-4.6-1.4-1.4L1.4 10.7l5.9 5.9 1.4-1.3zm6.6 0 4.6-4.6-4.6-4.6 1.4-1.4 5.9 5.9-5.9 5.9-1.4-1.3z"/>` },
            { id: 'chip', label: 'Microchip', color: '#10b981', svg: `<path fill="currentColor" d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-4h-2V7a2 2 0 0 0-2-2h-2V3h-2v2h-2V3H9v2H7a2 2 0 0 0-2 2v2H3v2h2v2H3v2h2v2a2 2 0 0 0 2 2h2v2h2v-2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2v-2h-2v-2h2V9zM17 17H7V7h10v10z"/>` },
            { id: 'terminal', label: 'Terminal', color: '#ff007f', svg: `<path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 14H4V6h16v12zM7.5 15l-1.4-1.4 2.1-2.1-2.1-2.1L7.5 8l3.5 3.5-3.5 3.5zm4.5 0h5v-2h-5v2z"/>` },
            { id: 'robot', label: 'Robot AI', color: '#ffe600', svg: `<path fill="currentColor" d="M12 2a1 1 0 0 0-1 1v1H8a3 3 0 0 0-3 3v2H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v2a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1V7a3 3 0 0 0-3-3h-3V3a1 1 0 0 0-1-1zm-3 8a1.5 1.5 0 1 1 1.5 1.5A1.5 1.5 0 0 1 9 10zm6 0a1.5 1.5 0 1 1 1.5 1.5A1.5 1.5 0 0 1 15 10zm-6 5h6v1.5H9V15z"/>` },
            { id: 'database', label: 'Database', color: '#3b82f6', svg: `<path fill="currentColor" d="M12 3c-4.4 0-8 1.8-8 4v10c0 2.2 3.6 4 8 4s8-1.8 8-4V7c0-2.2-3.6-4-8-4zm0 2c3.5 0 6 1.2 6 2s-2.5 2-6 2-6-1.2-6-2 2.5-2 6-2zm0 14c-3.5 0-6-1.2-6-2v-1.8c1.5.8 3.7 1.3 6 1.3s4.5-.5 6-1.3V17c0 .8-2.5 2-6 2zm0-5c-3.5 0-6-1.2-6-2v-1.8c1.5.8 3.7 1.3 6 1.3s4.5-.5 6-1.3V12c0 .8-2.5 2-6 2z"/>` },
            { id: 'rocket', label: 'Launch Rocket', color: '#ef4444', svg: `<path fill="currentColor" d="M12 2.5s-4 4.5-4 9.5c0 2.5.8 4.2 1.5 5.2L7 19.5l2 2 2.3-2.5c.2.1.4.1.7.1s.5 0 .7-.1L15 21.5l2-2-2.5-2.3c.7-1 1.5-2.7 1.5-5.2 0-5-4-9.5-4-9.5zm0 8a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/>` },
            { id: 'lock', label: 'Security Lock', color: '#f59e0b', svg: `<path fill="currentColor" d="M18 10h-1V7A5 5 0 0 0 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-9-3a3 3 0 0 1 6 0v3H9V7zm3 9a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 16z"/>` },
            { id: 'key', label: 'Access Key', color: '#fbbf24', svg: `<path fill="currentColor" d="M7 14a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm14 3h-6.2a6.9 6.9 0 0 1-1.3 3l.8.8v2h-2v2h-2v2h-2v-3.6l4.6-4.6a6.9 6.9 0 0 1-1.9-4.6h8v3z"/>` },
            { id: 'atom', label: 'Quantum Atom', color: '#a855f7', svg: `<ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(90 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(150 12 12)"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/>` },
            { id: 'wifi', label: 'Signal Wifi', color: '#06b6d4', svg: `<path fill="currentColor" d="M12 3a16 16 0 0 0-11 4.5l1.4 1.4A14 14 0 0 1 12 5a14 14 0 0 1 9.6 3.9l1.4-1.4A16 16 0 0 0 12 3zm0 5a11 11 0 0 0-7.7 3.2l1.4 1.4A9 9 0 0 1 12 10a9 9 0 0 1 6.3 2.6l1.4-1.4A11 11 0 0 0 12 8zm0 5a6 6 0 0 0-4.2 1.8l1.4 1.4A4 4 0 0 1 12 15a4 4 0 0 1 2.8 1.2l1.4-1.4A6 6 0 0 0 12 13zm0 4a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"/>` },
            { id: 'battery', label: 'Full Power', color: '#22c55e', svg: `<path fill="currentColor" d="M17 6H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 10H3V8h14v8zm4-7v6h1V9h-1zM5 10h8v4H5v-4z"/>` },
            { id: 'gamepad', label: 'Game Console', color: '#ec4899', svg: `<path fill="currentColor" d="M17 5H7a6 6 0 0 0-6 6 6 6 0 0 0 6 6 2 2 0 0 0 2-2l.5-2.5h5l.5 2.5a2 2 0 0 0 2 2 6 6 0 0 0 6-6 6 6 0 0 0-6-6zM8 12H6.5v1.5h-1V12H4v-1h1.5V9.5h1V11H8v1zm8.5 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm2-2.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/>` }
        ]
    },
    fantasy: {
        id: 'fantasy',
        name: 'RPG Fantasy Quest',
        description: 'Swords, magic, potions, and mythical gear',
        icons: [
            { id: 'sword', label: 'Hero Sword', color: '#e2c07d', svg: `<path fill="currentColor" d="M19.7 4.3a1 1 0 0 0-1.4 0l-9.9 9.9-2.1-2.1-1.4 1.4 2.1 2.1-3.5 3.5A1.5 1.5 0 0 0 5.6 21.2l3.5-3.5 2.1 2.1 1.4-1.4-2.1-2.1 9.9-9.9a1 1 0 0 0 0-1.4zm-14 15.5a.5.5 0 0 1-.7 0 .5.5 0 0 1 0-.7l3.2-3.2.7.7z"/>` },
            { id: 'shield', label: 'Knight Shield', color: '#3b82f6', svg: `<path fill="currentColor" d="M12 2S4 4 4 10c0 6.5 7.5 11.5 8 12 .5-.5 8-5.5 8-12 0-6-8-8-8-8zm0 18c-3.2-2.8-6-6.5-6-10 0-3.5 4.5-5.2 6-5.7 1.5.5 6 2.2 6 5.7 0 3.5-2.8 7.2-6 10z"/>` },
            { id: 'potion', label: 'Elixir Potion', color: '#10b981', svg: `<path fill="currentColor" d="M14 2H10a1 1 0 0 0-1 1v2H7a2 2 0 0 0-2 2v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2h-2V3a1 1 0 0 0-1-1zm-3 3h2v2h-2V5zm6 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V12h10v7z"/>` },
            { id: 'crown', label: 'Royal Crown', color: '#f59e0b', svg: `<path fill="currentColor" d="M5 18h14v2H5v-2zm15-11-3.5 3.5L12 4 7.5 10.5 4 7l1 9h14l1-9z"/>` },
            { id: 'gem', label: 'Magic Gem', color: '#ec4899', svg: `<path fill="currentColor" d="M16 2H8L3 9l9 13 9-13-5-7zm-4 17.2L5.4 9.5 8.8 4h6.4l3.4 5.5L12 19.2z"/>` },
            { id: 'scroll', label: 'Ancient Scroll', color: '#d4af37', svg: `<path fill="currentColor" d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12zM8 8h8v2H8V8zm0 4h8v2H8v-2z"/>` },
            { id: 'chest', label: 'Treasure Chest', color: '#854d0e', svg: `<path fill="currentColor" d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM10 5h4v2h-4V5zm10 14H4V13h5v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1h5v6z"/>` },
            { id: 'ring', label: 'Ring of Power', color: '#fbbf24', svg: `<path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5z"/>` },
            { id: 'skull', label: 'Dungeon Skull', color: '#94a3b8', svg: `<path fill="currentColor" d="M12 2a8 8 0 0 0-8 8c0 3.2 1.9 6 4.7 7.3L8 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l-.7-2.7C18.1 16 20 13.2 20 10a8 8 0 0 0-8-8zm-3 8a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 9 10zm6 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm-5 7v-1h4v1h-4z"/>` },
            { id: 'wand', label: 'Magic Wand', color: '#c084fc', svg: `<path fill="currentColor" d="M19.7 4.3a1 1 0 0 0-1.4 0l-14 14a1 1 0 0 0 0 1.4l1.4 1.4a1 1 0 0 0 1.4 0l14-14a1 1 0 0 0 0-1.4l-1.4-1.4zM12 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"/>` },
            { id: 'castle', label: 'Fortress', color: '#64748b', svg: `<path fill="currentColor" d="M2 22h20V9l-3-3V3h-2v2l-3-3-3 3V3H9v3L6 9v13zm4-2v-7h3v7H6zm5 0v-5h2v5h-2zm4 0v-7h3v7h-3z"/>` },
            { id: 'dragon', label: 'Mythic Beast', color: '#dc2626', svg: `<path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>` }
        ]
    },
    food: {
        id: 'food',
        name: 'Food & Sweets',
        description: 'Delicious snacks, fruits, and desserts',
        icons: [
            { id: 'pizza', label: 'Pizza Slice', color: '#ff9f1c', svg: `<path fill="currentColor" d="M12 2 2 22h20L12 2zm0 4.5 6.5 13.5h-13L12 6.5z"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>` },
            { id: 'burger', label: 'Burger', color: '#e63946', svg: `<path fill="currentColor" d="M19 10H5a4 4 0 0 1 7.8-1.3A4 4 0 0 1 19 10zm1 2H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm-1 5H5a2 2 0 0 0-2 2v1h18v-1a2 2 0 0 0-2-2z"/>` },
            { id: 'donut', label: 'Sweet Donut', color: '#ff4d6d', svg: `<path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/>` },
            { id: 'coffee', label: 'Coffee Cup', color: '#9c6644', svg: `<path fill="currentColor" d="M18.5 6H17V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a4 4 0 0 0 4 4h7a4 4 0 0 0 4-4v-2h2.5a2.5 2.5 0 0 0 0-5zM17 12a2 2 0 0 1-2 2H5V5h10v7zm1.5-2H17V8h1.5a.5.5 0 0 1 0 1z"/>` },
            { id: 'icecream', label: 'Ice Cream', color: '#ffb703', svg: `<path fill="currentColor" d="M12 2a5 5 0 0 0-5 5c0 1.2.4 2.3 1.1 3.2L12 22l3.9-11.8c.7-.9 1.1-2 1.1-3.2a5 5 0 0 0-5-5zm-3 10-1.3-4h8.6L15 12H9z"/>` },
            { id: 'apple', label: 'Red Apple', color: '#d90429', svg: `<path fill="currentColor" d="M17.5 7.5A4.5 4.5 0 0 0 12 9a4.5 4.5 0 0 0-5.5-1.5A4.5 4.5 0 0 0 4 12c0 5 4.5 9 8 10 3.5-1 8-5 8-10a4.5 4.5 0 0 0-2.5-4.5zM12 4a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1z"/>` },
            { id: 'cherry', label: 'Cherries', color: '#ef233c', svg: `<path fill="currentColor" d="M18 10a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm-10 0a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm6-7s-1 4-3 6m3-6s2 3 4 6"/>` },
            { id: 'cake', label: 'Birthday Cake', color: '#a855f7', svg: `<path fill="currentColor" d="M12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1zm8 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm0 11H4v-4h16v4zm0-6H4v-3h16v3z"/>` },
            { id: 'taco', label: 'Taco', color: '#eab308', svg: `<path fill="currentColor" d="M12 4a10 10 0 0 0-10 10v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2A10 10 0 0 0 12 4zm6 12H4v-1a8 8 0 0 1 16 0v1z"/>` },
            { id: 'cookie', label: 'Choco Cookie', color: '#b45309', svg: `<path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-3 5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 9 7zm6 2a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 15 9zm-7 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 15zm7 1a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5z"/>` },
            { id: 'soda', label: 'Fizzy Soda', color: '#3b82f6', svg: `<path fill="currentColor" d="M6 3h12v2H6V3zm2 4h8l-1 14H9L8 7zm2 2v10h4V9h-4z"/>` },
            { id: 'avocado', label: 'Fresh Avocado', color: '#15803d', svg: `<path fill="currentColor" d="M12 2A7 7 0 0 0 5 9c0 5 3.1 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/>` }
        ]
    }
};

class DeckManager {
    constructor() {
        this.activeDeckId = 'tech';
    }

    getDeck(deckId = this.activeDeckId) {
        return DECKS[deckId] || DECKS.tech;
    }

    setDeck(deckId) {
        if (DECKS[deckId]) {
            this.activeDeckId = deckId;
        }
    }

    // Generate balanced pair array for grid size
    generateCardPool(pairCount, matchGroupSize = 2, deckId = this.activeDeckId) {
        const deck = this.getDeck(deckId);
        const sourceIcons = [...deck.icons];
        
        // If pairCount > available icons, duplicate icons with color variations
        const pool = [];
        let index = 0;
        for (let i = 0; i < pairCount; i++) {
            const baseIcon = sourceIcons[index % sourceIcons.length];
            const cardData = {
                id: `card_${baseIcon.id}_${i}`,
                pairId: `pair_${baseIcon.id}_${Math.floor(i / sourceIcons.length)}`,
                label: baseIcon.label,
                color: baseIcon.color,
                svg: baseIcon.svg
            };

            for (let g = 0; g < matchGroupSize; g++) {
                pool.push({ ...cardData, instanceId: `${cardData.id}_${g}` });
            }
            index++;
        }

        return this.shuffle(pool);
    }

    // Fisher-Yates shuffle algorithm
    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}

const decks = new DeckManager();
