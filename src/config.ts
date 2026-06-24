export const config = {
    developer: {
        name: "Minh Khoa",
        fullName: "Phung Minh Khoa",
        title: "Fullstack & AI Engineer",
        description: "Fullstack & AI Engineer specializing in computer vision, healthcare analytics, and fullstack web applications. Passionate about machine learning, IoT systems, and building AI-driven solutions."
    },
    social: {
        github: "KhoaMinhPMK",
        email: "pmkkhoaminh@gmail.com",
        location: "Ho Chi Minh City, Vietnam"
    },
    about: {
        title: "About Me",
        description: "I am a Fullstack & AI Engineer with a focus on computer vision and healthcare analytics. I build AI-driven applications and fullstack web solutions. Currently pursuing my B.E. in Mechanical Engineering at Ho Chi Minh City University of Technology (HCMUT), I have led multiple award-winning AI projects, including solutions for sustainable agriculture and medical image processing."
    },
    experiences: [
        {
            position: "Team Leader and Fullstack Developer",
            company: "K-tech Challenge / NeuralNova Project",
            period: "2025",
            location: "Ho Chi Minh City, Vietnam",
            description: "Led a 5-member team to build an AI application for crop disease prediction, earning 2nd Prize overall.",
            responsibilities: [
                "Designed a microservices-based architecture to improve scalability and modular deployment readiness",
                "Implemented the AI core module and a monitoring dashboard for model tracking and system visibility",
                "Ran 2-week Scrum cycles and translated technical delivery into product-oriented outcomes"
            ],
            technologies: ["AI", "Microservices", "Scrum", "Fullstack"]
        },
        {
            position: "Freelance Automation and AI Engineer",
            company: "Independent Projects",
            period: "2024 - Present",
            location: "Remote / Ho Chi Minh City, Vietnam",
            description: "Delivering automation solutions and building computer vision pipelines for various clients.",
            responsibilities: [
                "Delivered automation solutions for clients, reducing manual processing time by 20% across operational workflows",
                "Built computer vision pipelines with YOLO and OpenCV, integrated into React and FastAPI web applications",
                "Developed an AI-assisted lung cancer screening system for Nghe An Oncology Hospital, reducing preliminary diagnosis time by 30%",
                "Designed backend workflows for DICOM image processing and clinician-friendly frontend interfaces"
            ],
            technologies: ["Python", "YOLO", "OpenCV", "React", "FastAPI", "Automation"]
        },
        {
            position: "B.E. Candidate, Mechanical Engineering",
            company: "Ho Chi Minh City University of Technology (HCMUT)",
            period: "Expected Graduation: 2029",
            location: "Ho Chi Minh City, Vietnam",
            description: "Pursuing a Bachelor's degree with a focus on Robotics, Computer Vision, Human-Computer Interaction, and IoT Systems. Research focus: Healthcare Analytics under faculty supervision.",
            responsibilities: [
                "Relevant Coursework: Robotics, Computer Vision, Human-Computer Interaction, IoT Systems",
                "Research focus: Healthcare Analytics under faculty supervision"
            ],
            technologies: ["Robotics", "Computer Vision", "HCI", "IoT"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Automated Lung Nodule Analysis Pipeline",
            category: "Computer Vision / Medical AI",
            technologies: "Python, YOLO, SAM, OpenCV, SimpleITK, SciPy",
            image: "/images/drishti.png",
            description: "Built an end-to-end pipeline to detect, segment, and quantify pulmonary nodules from CT DICOM scans. Applied YOLO for detection, SAM for segmentation, and Simpson’s Rule for volume estimation."
        },
        {
            id: 2,
            title: "Automated Flower Bloom Hotspot Prediction",
            category: "AI / Satellite Imagery",
            technologies: "Python, PyTorch, GeoPandas, Rasterio, U-Net",
            image: "/images/floodhub.png",
            description: "Developed a hierarchical AI pipeline using multispectral satellite imagery and U-Net-based hotspot detection. Top 10 Finalist at NASA Space Apps Challenge Ho Chi Minh City."
        },
        {
            id: 3,
            title: "VieGrand – Elderly Care Platform",
            category: "Full Stack / AI",
            technologies: "React, Node.js, Python, PostgreSQL",
            image: "/images/gamekroy.png",
            description: "Built a web platform for elderly users focused on health support, education, and personalized experience. Integrated AI-powered features for health monitoring and personalized content recommendation."
        },
        {
            id: 4,
            title: "A Hierarchical Framework for Human Activity Recognition",
            category: "Research / Deep Learning",
            technologies: "Python, Machine Learning, Extra Trees",
            image: "/images/redxchess.png",
            description: "Co-authored a framework for detecting unusual behaviors from 2D skeletal data. Engineered 240 multi-domain descriptors and a hierarchical windowing strategy. In Submission (ISAS 2025)."
        }
    ],
    contact: {
        email: "pmkkhoaminh@gmail.com",
        github: "https://github.com/KhoaMinhPMK",
        linkedin: "https://linkedin.com/in/minhkhoaphung",
        phone: "+84-0365-483-604",
        twitter: "",
        facebook: "",
        instagram: ""
    },
    skills: {
        develop: {
            title: "AI & DATA",
            description: "Machine Learning & Computer Vision",
            details: "Specializing in Machine Learning (PyTorch, Scikit-learn) and Computer Vision, particularly with Medical Data (DICOM, CT scans).",
            tools: ["Python", "PyTorch", "Scikit-learn", "YOLO", "OpenCV", "SAM", "SimpleITK", "SciPy"]
        },
        design: {
            title: "FULL-STACK & TOOLS",
            description: "Web development & Software Engineering",
            details: "Building interactive web applications and robust backends to deploy AI solutions.",
            tools: ["JS/TS", "React", "Node.js", "SQL", "PostgreSQL", "FastAPI", "Git"]
        }
    }
};


