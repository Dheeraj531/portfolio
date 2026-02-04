# B Dheeraj - Portfolio Website

A modern, responsive portfolio website built with React frontend and Node.js backend.

## 🚀 Features

- **Modern Design**: Dark theme with purple/teal gradient accents
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Interactive**: Animated typing effect, skill bars, smooth scrolling
- **Contact Form**: Functional contact form with email integration
- **Dynamic Content**: Data-driven sections (Skills, Projects, Education)
- **Fast Loading**: Optimized React app with modern build tools

## 🛠️ Tech Stack

### Frontend
- React 18
- CSS3 with custom animations
- Font Awesome icons
- Responsive design

### Backend
- Node.js with Express
- RESTful API
- CORS enabled
- Email integration (Web3Forms)

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/
│   │   ├── profile.jpg    # Your profile picture
│   │   └── ...
│   └── src/
│       ├── components/    # React components
│       ├── styles/        # CSS files
│       └── ...
├── server/                # Node.js backend
│   ├── routes/
│   └── index.js
├── index.html            # Static HTML version
├── styles.css           # Static CSS
├── script.js            # Static JavaScript
└── package.json         # Backend dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd client
   npm install
   cd ..
   ```

3. **Start development servers**
   ```bash
   # Start both frontend and backend
   npm run dev

   # Or start separately:
   # Backend: npm run server
   # Frontend: cd client && npm start
   ```

4. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📧 Contact Form Setup

The contact form uses Web3Forms for email delivery. To set it up:

1. Go to [Web3Forms](https://web3forms.com/)
2. Enter your email: `ballappallidheeraj17@gmail.com`
3. Get your access key
4. Replace the access key in:
   - `client/src/components/Contact.js` (line 29)
   - `script.js` (line 100)

## 🚀 Deployment

### Frontend (Vercel - Recommended)
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically
5. Get your free URL (e.g., `portfolio.vercel.app`)

### Backend (Optional)
For full-stack deployment, deploy the backend to:
- **Render** (free tier available)
- **Railway** (free tier available)
- **Heroku** (requires credit card)

## 📱 Sections

- **Hero**: Animated introduction with typing effect
- **About**: Personal information and background
- **Skills**: Technical skills with animated progress bars
- **Education**: Academic background timeline
- **Projects**: Featured projects with descriptions
- **Contact**: Functional contact form

## 🎨 Customization

### Colors
Edit CSS variables in `client/src/styles/index.css`:
```css
:root {
  --primary-color: #6c63ff;    /* Purple */
  --secondary-color: #ff6b6b;  /* Red */
  --accent-color: #4ecdc4;     /* Teal */
}
```

### Content
Update personal information in `server/routes/api.js` or directly in React components.

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

## 👨‍💻 Author

**B Dheeraj**
- Email: ballappallidheeraj17@gmail.com
- LinkedIn: [Dheeraj Ballappalli](https://www.linkedin.com/in/dheeraj-ballappalli-4b9106294/)
- Phone: +91 9704964521

---

Built with ❤️ using React & Node.js
