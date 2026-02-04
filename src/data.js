// Portfolio data
const portfolioData = {
    personal: {
        name: "B Dheeraj",
        email: "ballappallidheeraj17@gmail.com",
        phone: "9704964521",
        linkedin: "https://www.linkedin.com/in/dheeraj-ballappalli-4b9106294/",
        summary: "I am pursuing my engineering graduation with expertise in cloud computing, AI, Data Science, and Full Stack Development. Skilled in AWS, Java, Python, and troubleshooting technical issues. Adept at supporting critical applications, delivering excellent customer service, and collaborating in fast-paced environments."
    },
    skills: {
        languages: [
            { name: "Python", level: 90 },
            { name: "Java", level: 85 },
            { name: "C", level: 80 },
            { name: "SQL", level: 85 }
        ],
        aiml: [
            { name: "TensorFlow", level: 85 },
            { name: "PyTorch", level: 80 },
            { name: "Hugging Face", level: 80 },
            { name: "Generative AI / LLMs", level: 75 }
        ],
        cloud: [
            { name: "AWS", level: 85 },
            { name: "Docker", level: 80 },
            { name: "CI/CD (GitHub Actions)", level: 75 },
            { name: "FastAPI", level: 80 }
        ],
        web: [
            { name: "HTML5", level: 90 },
            { name: "CSS3", level: 85 },
            { name: "REST APIs", level: 85 },
            { name: "gRPC", level: 70 }
        ]
    },
    education: [
        {
            id: 1,
            degree: "B.Tech in Computer Science & Engineering",
            institution: "Annamacharya Institute of Technology and Sciences",
            duration: "Oct 2022 - July 2026",
            grade: "CGPA: 8.09/10",
            coursework: "Problem Solving using C, Object Oriented Programming using Java, Database Management System, Discrete Math, Data Structures and Algorithms, Operating Systems, Computer Networks",
            icon: "university"
        },
        {
            id: 2,
            degree: "Intermediate",
            institution: "Mother Theresa Junior College, Palamaner",
            duration: "",
            grade: "Percentage: 63.5%",
            coursework: "",
            icon: "school"
        },
        {
            id: 3,
            degree: "SSC (10th Standard)",
            institution: "Elena Bettini English Medium School, Palamaner",
            duration: "",
            grade: "Percentage: 92%",
            coursework: "",
            icon: "book"
        }
    ],
    projects: [
        {
            id: 1,
            title: "Traffic Management through Machine Learning",
            description: "This project applies machine learning algorithms to traffic data to forecast congestion levels based on variables such as density and time. The tool helps optimize traffic signal control and enhance traffic flow using data-driven insights.",
            features: [
                "Real-time data processing",
                "Congestion prediction",
                "Traffic signal optimization"
            ],
            technologies: ["Python", "Machine Learning", "Data Analysis"],
            icon: "traffic-light"
        },
        {
            id: 2,
            title: "Farmers App",
            description: "An online platform that enables farmers to directly connect with consumers, removing the middleman and ensuring fair prices for produce. The app allows farmers to post their produce, check market prices, and sell through an easy-to-use interface.",
            features: [
                "Direct farmer-consumer connection",
                "Market price checking",
                "User-friendly interface"
            ],
            technologies: ["Full Stack", "Database", "Web Development"],
            icon: "seedling"
        }
    ]
};

export default portfolioData;