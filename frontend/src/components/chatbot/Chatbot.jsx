import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { getBotResponse } from "../../utils/chatbot";
import styles from "./chatbot.module.css";

const Chatbot = () => {
    const { language } = useContext(LanguageContext);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if(savedLanguage === 'en'){
            setMessages([{ from: "bot", text: "Hi, how can I help you today? " }]);
        } else if(savedLanguage === 'es') {
            setMessages([{ from: "bot", text: "!Hola, ¿en qué puedo ayudarte hoy?" }]);
        } else{
            setMessages([{ from: "bot", text: "No language selected." }]);
        }
      }, [language]);

    const sendMessage = () => {
        if (!input.trim()) return;
        const userMessage = { from: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        //Typing indicator
        setIsTyping(true);
        // Simulate bot typing delay
        setTimeout(() => {
            const botMessage = { from: "bot", text: getBotResponse(language, userMessage.text) };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 3000);
    };
    isTyping
    return (
       <div className={styles.chatbot}>
            <div className={styles.messages}>
                {messages.map((m, i) => (
                    <div key={i} className={m.from === "user" ? styles.user : styles.bot}>
                        {m.text}
                    </div>
                ))}

                {isTyping && (
                    <div className={styles.bot}>
                        <span className={styles.typing}>•••</span>
                    </div>
                )}
            </div>

            <div className={styles.inputRow}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={language === "en" ? "Type a message..." : "Escribe un mensaje..."}
                />
                <button onClick={sendMessage}>➤</button>
            </div>
        </div>


    );
};

export default Chatbot;