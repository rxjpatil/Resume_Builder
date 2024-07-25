const Mustache = require('mustache');
const fs = require('fs');
const latex = require('node-latex');

// Sample data for the resume
const data = {
    name: "Raj Patil",
    title: "Python/Django Full Stack Web Developer",
    website: "https://rxjpatil.vercel.app",
    phone: "+91 9511892983",
    location: "Pune, India",
    email: "rxjpatil@gmail.com",
    github: "https://github.com/rxjpatil",
    linkedin: "https://www.linkedin.com/in/rxjpatil",
    summary: "Committed to delivering high-quality solutions through synergistic teamwork. Seeking a challenging position to leverage technical skills and collaboration to drive success within a vibrant team environment.",
    languages: "SQL, Python, JavaScript",
    technologies: "Django, Bootstrap5, TailwindCSS, Git, GitHub, Jira, MySQL, AWS",
    education: [
        {
            dates: "Jun 19 - Jul 23",
            institution: "College of Engineering & Technology, Akola",
            description: "Enrolled in Bachelor of Engineering - Computer Science and Technology with specialization in IoT"
        }
    ],
    experience: [
        {
            dates: "Jun 24 - Present",
            title: "Full-Stack Web Developer Intern",
            company: "Smart Solutions, Pune",
            tasks: [
                "Collaborated on backend development using Django, successfully integrating payments with Razorpay and Stripe, which reduced transaction processing time by 20% for Esti-Source.",
                "Implemented Costing-Expert frontend with Bootstrap5, achieving 25% better UI efficiency and usability.",
                "Executed sprint planning and daily stand-ups, improving on-time delivery by 30%."
            ],
            technologies: "Bootstrap v5.0 \\slashsep Django"
        },
        {
            dates: "Oct 23 - Dec 23",
            title: "Web, Python Developer Intern",
            company: "OctaNet Services Pvt Ltd, Odisha",
            tasks: [
                "Deployed best practices in HTML, CSS, and JavaScript, resulting in a 10% improvement in page load times.",
                "Built and maintained scalable Python applications, achieving a 25% improvement in overall system performance, including tasks for an ATM machine."
            ],
            technologies: "Front-end Technologies \\slashsep Python"
        }
    ],
    projects: [
        {
            framework: "Django Framework",
            title: "Healthcare and E-Commerce Integration Platform",
            link: "https://visionacademy.pythonanywhere.com/",
            details: [
                "Successfully executed a healthcare platform with robust e-commerce integration, secure appointment authentication, multi-user functionality, and 50% improved scalability.",
                "Implemented a secure authentication system ensuring robust security for user login and registration, facilitating direct booking of appointments and online consultations with healthcare professionals.",
                "Enhanced platform performance by reducing page load times by 40% and scaling up by 70%, integrating BMI calculator, diet analysis, and more for improved user engagement and medical assistance."
            ]
        },
        {
            framework: "Django Framework",
            title: "Employee Management System",
            link: "https://github.com/rxjpatil/Employee-App-with-Django",
            details: [
                "An EMS is a software application that manages and tracks employee-related data, including records, attendance tracking with 95% accuracy, payroll processing, and streamlined leave management.",
                "This integrated approach to managing employee information ensures compliance with regulatory requirements and enhances the overall efficiency of workforce management by 50%."
            ]
        },
        {
            framework: "Flask Framework",
            title: "Vehicle Rental Management System",
            link: "https://rxjpatil.pythonanywhere.com/home",
            details: [
                "Implemented management tools for rental agencies, automating administrative tasks such as booking management, inventory tracking, and customer communication, thereby reducing workload by 30%.",
                "Optimized user experience with real-time booking, vehicle availability tracking, integrated payment gateways, and comprehensive reporting for rental performance and customer feedback analysis, resulting in a 25% increase in booking efficiency and augmented user engagement metrics."
            ]
        }
    ],
    certifications: [
        {
            link: "https://drive.google.com/file/d/1sJiwonAA182sYnVi8JfCFyfp0JP5tR81/view?usp=sharing",
            institution: "IBM",
            title: "Python for Web Development - Powered by IBM Developer Skills Network"
        },
        {
            link: "https://www.udemy.com/certificate/UC-d3e8b9a0-2858-45f9-b2c0-f20cb6b3e646/",
            institution: "Udemy",
            title: "The Complete Introduction to SQL programming - by Yassin Marco"
        }
    ],
    leadership: "Organized Lan Gaming Event 2023 - A National Techno Event of Computer Science Department, COETA.",
    interests: "Anime, TED Talks, FPS Games, Painting."
};

// Load the template
const template = fs.readFileSync('template.tex', 'utf8');

// Render the LaTeX document
const output = Mustache.render(template, data);

// Write the rendered LaTeX to a file
fs.writeFileSync('resume.tex', output);

// Compile the LaTeX document to a PDF
const input = fs.createReadStream('resume.tex');
const outputPDF = fs.createWriteStream('resume.pdf');
const pdf = latex(input);

pdf.pipe(outputPDF);
pdf.on('error', err => console.error(err));
pdf.on('finish', () => console.log('PDF generated successfully!'));
