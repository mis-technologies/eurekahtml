// script.js

// Sample card data for different sections
const section1Cards = [
    { title: 'Card 1', content: 'Content for card 1 in section 1' },
    { title: 'Card 2', content: 'Content for card 2 in section 1' },
];

const section2Cards = [
    { title: 'Card A', content: 'Content for card A in section 2' },
    { title: 'Card B', content: 'Content for card B in section 2' },
];

import { trendingNow, technology, marketing } from './data.js';

// Function to render cards in a section
function renderCards(cards) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; 

    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        
        const cardTitle = document.createElement('h3');
        cardTitle.textContent = card.title;
        
        const cardContent = document.createElement('p');
        cardContent.textContent = card.content;
        
        cardDiv.appendChild(cardTitle);
        cardDiv.appendChild(cardContent);
        contentDiv.appendChild(cardDiv);
    });
}

//sections
function showSection(section) {
    if (section === 'section1') {
        renderCards(technology);
    } else if (section === 'section2') {
        renderCards(section2Cards);
    }
}



showSection('section1');
