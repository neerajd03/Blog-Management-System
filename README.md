# Blog Management System

This is a full-stack **Blog Management System** built using **Node.js, Express, and MongoDB**, with **OpenAI API** integration for AI-powered content generation.

## 🚀 Features
- 📝 Create, update, and delete blog posts.
- 🔒 User authentication (signup/login).
- 🤖 AI-powered blog content generation using OpenAI.
- 📡 RESTful API structure.

## 🛠️ Technologies Used
- **Backend:** Node.js, Express.js, MongoDB
- **API Testing:** Postman
- **Version Control:** Git, GitHub

## 📂 Folder Structure
blog-api/ │-- controllers/ │-- models/ │-- routes/ │-- middleware/ │-- config/ │-- .env (excluded) │-- server.js │-- package.json │-- README.md

markdown
Copy
Edit

## 🏗️ Installation

1. **Clone the repository**  
git clone https://github.com/neerajd03/Blog-Management-System.git

markdown
Copy
Edit
2. **Navigate to the project folder**  
cd blog-api

markdown
Copy
Edit
3. **Install dependencies**  
npm install

markdown
Copy
Edit
4. **Set up environment variables**  
- Create a `.env` file and add:  
  ```
  MONGO_URI=your_mongodb_connection_string
  OPENAI_API_KEY=your_openai_api_key
  ```
5. **Start the server**  
node server.js

pgsql
Copy
Edit

## 📌 API Endpoints
| Method | Endpoint            | Description                     |
|--------|---------------------|---------------------------------|
| POST   | `/api/auth/signup`  | Register a new user            |
| POST   | `/api/auth/login`   | Login a user                   |
| GET    | `/api/posts`        | Get all blog posts             |
| POST   | `/api/posts`        | Create a new blog post         |
| PUT    | `/api/posts/:id`    | Update a blog post             |
| DELETE | `/api/posts/:id`    | Delete a blog post             |

## 🔗 Future Enhancements
- 🌐 Implement a **React.js** UI for better user experience.
- 📊 Add **analytics** to track blog views.
- 🔍 Improve **SEO optimization** for blog posts.

---

💡 **Contributions are welcome!** Feel free to fork and contribute to this project. 🚀  
📩 For any queries, reach out to me on **GitHub**: [neerajd03](https://github.com/neerajd03).
