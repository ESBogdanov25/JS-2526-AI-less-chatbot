# AI-Less Chatbot

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A **rule-based chatbot** that creates the illusion of AI without using machine learning. Users can teach it new responses live, and rules persist across sessions using **localStorage**.

---

## Features ✨

- 💬 **Interactive Chat Interface**: Real-time conversation between user and bot.  
- ✍️ **Live Training**: Teach the bot new replies using `teach: [bot reply]`.  
- 💾 **Persistent Learning**: Rules saved in `localStorage` for next sessions.  
- 🎨 **Modern UI**: Colored user and bot bubbles, fade-in animation, typing effect.  
- 🔄 **Clear Chat Button**: Reset conversation and delete all learned rules.  
- 🤖 **Fallback Responses**: Bot handles unknown input with friendly prompts.

---

## How to Use

```bash
# 1. Clone the repository
git clone https://github.com/ESBogdanov25/JS-2526-AI-less-chatbot.git

# 2. Open index.html in your browser

# 3. Chat with the bot by typing a message and hitting Enter or clicking Send

# 4. Teach new replies:
# Type your message, then reply with:
teach: [bot reply]

# Example:
# User: "How are you?"
# User: "teach: I'm great, thanks!"

# 5. Clear Chat & Reset Rules:
# Click the Clear Chat button to start fresh
