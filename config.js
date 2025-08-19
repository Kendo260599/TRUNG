var _encoded_key = 'Z3NrXzR4REVqZVc4c29SOXJYQ29nYm02V0dkeWIzRllhSWhxUFVyR0JGa3ZreTQ5VXpCV29ERg==';
window.GROQ_CONFIG = {
    apiKey: atob(_encoded_key),
    model: 'llama3-70b-8192',
    baseURL: 'https://api.groq.com/openai/v1/chat/completions',
    defaultParams: {
        temperature: 0.1,
        max_tokens: 1000
    }
};
console.log('🔑 Protected API key loaded');
