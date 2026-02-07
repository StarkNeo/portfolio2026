import en from '../data/bot/en.json';
import es from '../data/bot/es.json';

const knowledgeBase = { en, es };

export function getBotResponse(language, userMessage) {
    const data = knowledgeBase[language] || knowledgeBase['en'];
    const text = userMessage.toLowerCase();

    for (const item of data.intents) {
        for (const keyword of item.keywords) {
            if (text.includes(keyword)) {
                return item.answer;
            }
        }
    }

    return data.fallback || "I'm not sure about that yet.";
}