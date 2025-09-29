const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const clearBtn = document.getElementById("clear-btn");

let rules = JSON.parse(localStorage.getItem("chatRules")) || [];

function addMessage(text, sender, typing = false) 
{
    const msg = document.createElement("div");
    msg.classList.add("message", sender);

    if (typing) 
    {
        msg.textContent = "";

        chatBox.appendChild(msg);
        chatBox.scrollTop = chatBox.scrollHeight;
        let i = 0;

        const interval = setInterval(() => {
        msg.textContent += text[i];
        i++;

        chatBox.scrollTop = chatBox.scrollHeight;
        if (i >= text.length) clearInterval(interval);
        }, 25);
    } 
    else 
    {
        msg.textContent = text;
        chatBox.appendChild(msg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function getBotReply(input) 
{
    input = input.toLowerCase().trim();

    for (let rule of rules) 
    {
        if (rule.input === input) return rule.reply;
    }
    
    return null;
}

function learnNewRule(input, reply)
{
    rules.push({ input: input.toLowerCase(), reply });
    localStorage.setItem("chatRules", JSON.stringify(rules));
}

function handleUserMessage() 
{
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, "user");

    const botReply = getBotReply(text);
    if (botReply) 
    {
        addMessage(botReply, "bot", true);
    } 
    else 
    {
        addMessage("I don't know that yet. Teach me! Type: teach: your reply", "bot", true);
    }

    if (text.toLowerCase().startsWith("teach:")) 
    {
        const lastUserMsg = chatBox.querySelectorAll(".message.user");

        if (lastUserMsg.length < 2) 
        {
            addMessage("You must send a question first to teach me!", "bot", true);
        } 
        else 
        {
            const question = lastUserMsg[lastUserMsg.length - 2].textContent;
            const reply = text.slice(6).trim();

            if (reply) 
            {
                learnNewRule(question, reply);
                addMessage("Got it! I learned a new reply.", "bot", true);
            }
        }
    }

    userInput.value = "";
}

function clearChat() 
{
    chatBox.innerHTML = "";
    localStorage.removeItem("chatRules");
    rules = [];
    addMessage("Chat cleared! I forgot all learned replies.", "bot", true);
}

sendBtn.addEventListener("click", handleUserMessage);

userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") handleUserMessage();
});
clearBtn.addEventListener("click", clearChat);

addMessage("Hello! I am your AI-less chatbot. Teach me new replies with 'teach: your reply'.", "bot", true);