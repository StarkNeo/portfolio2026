import axcios from 'axios';
const api = import.meta.env.VITE_API_URL;
const baseUrl = api;
console.log("API URL:", baseUrl);

const sendContactMessage = async (name, email, message) => {
    try {
        const response = await axcios.post(`${baseUrl}/api/contact`, { name, email, message });
        return response.data;
    } catch (error) {
        console.error("Error sending contact message:", error);
        throw error;
    }
}

export default { sendContactMessage }