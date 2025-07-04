# AI-code-explainer-Debugger
Built a full-stack web application that uses LLMs to automatically explain code logic and detect bugs in user-submitted code snippets. Integrated OpenAI/Ollama APIs to generate real-time debugging suggestions for multiple programming languages.
---

Project Name

AI Code Explainer and Debugger
---

📌 Description

A full-stack web application that uses LLMs (like OpenAI or Code LLaMA via Ollama) to explain code logic, detect bugs, and suggest fixes for code snippets in real-time. Supports multiple programming languages including Python, JavaScript, and C++.


---

🚀 Key Features

Explain what your code does line by line.

Detect syntax and logical errors.

Suggest bug fixes automatically.

Works with OpenAI API or local LLMs (via Ollama).



---

🛠 Tech Stack

Frontend: React.js, Tailwind CSS (optional)

Backend: Node.js, Express, Axios

AI/LLM: OpenAI GPT-4 / Code LLaMA (Ollama)



---

📁 Main Folders/Files to Upload

/client: Frontend React app

/server: Backend Node app with LLM API calls

/examples: Sample code for testing/debugging

.env.example: Sample env config (no secrets!)

.gitignore, README.md, LICENSE



---

⚙ How to Run Locally

# Backend
cd server
npm install
cp .env.example .env
npm start

# Frontend
cd client
npm install
npm start
