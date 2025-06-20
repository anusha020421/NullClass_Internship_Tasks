# NullClass_Internship_Tasks

TASK-1

 - Responsive Personal Website
 - Welcome to my Responsive Personal Website project!
 - This project showcases my skills in frontend development using HTML and CSS, with a focus on responsive design for various devices like desktops, tablets, and mobiles.

Project Overview:
  This is a simple and clean personal website built with only HTML and CSS, designed to introduce myself, my skills, and ways to contact me. The website is fully responsive and adjusts gracefully across different screen sizes.
The website consists of the following pages:
  
CODE: Task1.html:
    
       <!DOCTYPE html>
       <html lang="en"> 
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Responsive Website</title>
           <style>
           body 
           {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-size: cover;
            background-position: center;
            height: 100%;
           }
           header 
           {
            background-color: rgba(2, 82, 82, 0.8);
            color: rgb(255, 252, 252);
            padding: 10px 20px;
           }
           nav ul 
           {
            list-style-type: none;
            padding: 0;
           }
           nav ul li 
           {
            display: inline;
            margin-right: 15px;
           }
           a 
           {
            text-decoration: none;
            color: rgb(2, 2, 21);
            transition: color 0.3s;
           }
           a:hover 
           {
            color: red;
           }
           a:active 
           {
            color: red;
           }
           main 
           {
            padding: 20px;
           }
           .responsive-image 
           {
            width: 95.4vw;
            height: 100vh;
            object-fit: fill;
            display: block;
           }
           footer 
           {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 5px 0;
           }
           @media (max-width: 768px) 
           {
            nav ul 
            {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            nav ul li 
            {
                display: block;
                margin: 10px 0;
            }
            header 
            {
                text-align: center;
            }
           } 
           @media (max-width: 480px) 
           {
            header h1 
            {
                font-size: 24px;
            }
            main 
            {
                padding: 10px;
            }
            footer 
            {
                font-size: 12px;
            }
           }
          </style>
      </head>
      <body>
          <header>
             <center>
               <h1><b>WELCOME TO MY PROFILE</b></h1>
                  <nav>
                      <ul>
                         <li><a href="home1.html">Home</a></li>
                         <li><a href="about1.html">About</a></li>
                         <li><a href="summary1.html">Summary</a></li>
                         <li><a href="contact1.html">Contact</a></li>
                      </ul>
                  </nav>
              </center>
            </header>
            <main>
               <section>
                   <img src="https://sciencesensei.com/wp-content/uploads/2021/10/website.jpg" alt="Image"
                class="responsive-image">
               </section>
            </main>
            <footer>
                <center>
                     <p>&copy; 2025 My Responsive Website</p>
                </center>
            </footer>
       </body>
    </html>

  - Home Page: A welcome page with a responsive full-screen image and navigation bar.
    
CODE: home1.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Website</title>
    <style>
        body 
        {
            margin: 0;
            font-family: Arial, sans-serif;
            text-align: center;
        }
        header 
        {
            background-color: rgba(2, 82, 82, 0.8);
            color: white;
            padding: 10px 20px;
            text-align: center;
        }
        .message h1 
        {
            font-weight: bold;
            color: white;
            margin: 0;
        }
        main 
        {
            padding: 20px;
        }
        img 
        {
            max-width: 50vh;
            height: 70vh;
            margin: 0 auto;
            display: block;
        }
        @media (max-width: 768px) 
        {
            header 
            {
                padding: 24px;
            }
            .message 
            {
                font-size: 20px;
            }
            main 
            {
                padding: 15px;
            }
        }
        @media (max-width: 480px) 
        {
            .message 
            {
                font-size: 18px;
            }
        }
    </style>
    </head>
    <body>
    <header>
        <h1 class="message"><b> HELLO EVERYONE! <br>
                THIS IS <br>
                MY SIMPLE RESPONSIVE WEBSITE</b></h1>
    </header>
    <main>
        <section>
            <img src="https://media.istockphoto.com/id/1286060912/vector/woman-in-a-suit-pointing.jpg?s=612x612&w=0&k=20&c=vutC8dupiSkNyRT_QKQmEfi-0WQgpX3VgjZAbiuMhXs="
                alt="girl_image">
        </section>
    </main>
    </body>
    </html>
     
  - About Page: A detailed section about me, highlighting my aspirations and a profile image.
     
CODE: about1.html
    
     <!DOCTYPE html>
     <html lang="en">
     <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me</title>
    <style>
        body 
        {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header 
        {
            background-color: rgba(2, 82, 82, 0.8);
            color: white;
            padding: 10px 20px;
            text-align: center;
        }
        main 
        {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-color: #ffffff;
            margin: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .section 
        {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
        .text 
        {
            flex: 1;
            padding: 20px;
        }
        .image 
        {
            max-width: 300px;
            height: auto;
            border-radius: 8px;
        }
        .name 
        {
            color: blue;
            font-family: Georgia, 'Times New Roman', Times, serif;
            font-size: xx-large;
        }
        @media (max-width: 768px) 
        {
            .section 
            {
                flex-direction: column;
                align-items: center;
            }
            .text 
            {
                text-align: center;
                padding: 10px;
            }
            .image 
            {
                margin-top: 15px;
            }
        }
        @media (max-width: 480px) 
        {
            header h1 
            {
                font-size: 24px;
            }
            main 
            {
                padding: 10px;
            }
            footer 
            {
                font-size: 12px;
            }
        }
    </style>
    </head>
    <body>
    <header>
        <h1><b>ABOUT ME</b></h1>
    </header>
    <main>
        <section class="section">
            <div class="text">
                <center>
                    <h1 class="name"> <b>GAYAM ANUSHA</b></h1>
                    <p><I><b> I am aspiring for Full Stack Developer roles and I am ready to take on new
                                challenges!</b></I></p>
                </center>
            </div>
            <div>
                <img src="https://i.pinimg.com/736x/c2/4e/61/c24e613caf923e2ab1dd1fa578219f5e.jpg" alt="Gayam Anusha"
                    class="image">
            </div>
        </section>
    </main>
    </body>
    </html>
    
   - Project Page: Overview of some of the important projects I have worked on, including:
      * Fashion GPT – AI-powered fashion content generation system.
      * Personal Resume Website – A portfolio project showcasing HTML/CSS skills.
      * JDBC CRUD Application – Java-based database application.
      
   CODE:summary1.html
    
    
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Project</title>
     <style>
     body 
        {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            
         background-color: #f4f4f4;
        }
        header 
        {
            background-color: rgba(2, 82, 82, 0.8);
            color: white;
            padding: 10px 20px;
            text-align: center;
        }
        h1 
        {
            color: white;
        }
        .project 
        {
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            margin: 10px 0;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .project h2 
        {
            color: rgba(2, 82, 82, 0.8);
        }
        .technologies 
        {
            font-weight: bold;
            color: #555;
        }
        .description 
        {
            margin: 10px 0;
        }
        .conclusion 
        {
            margin-top: 20px;
            font-weight: bold;
            color: grey;
        }
    </style>
    </head>
    <body>
    
    <header>
        <h1><B>PROJECT OVERVIEW</B></h1>
    </header>

    <section>
        <p>This section highlights the key projects I have worked on, each designed to solve specific problems or
            showcase particular skills.</p>

        <div class="project">
            <h2>Fashion GPT - AI-powered Fashion Content Generation System</h2>
            <p class="description">Developed an AI system using GPT-2 and GANs to create fashion-related text and
                images. Analyzed user preferences and trends to provide personalized outfit suggestions. Generated
                product descriptions and style recommendations.</p>
            <p class="technologies">Technologies Used: Python, PyTorch, GPT-2, GANs, Stable Diffusion, NLP</p>
        </div>

        <div class="project">
            <h2>Personal Resume Website</h2>
            <p class="description">Created a personal resume webpage to showcase my profile, skills, education,
                projects, internships, certifications, and achievements. This project helped me practice frontend
                development using semantic HTML and custom CSS styling. It improved my understanding of layout
                structuring, responsive design, and clean user interface development using only HTML and CSS.</p>
            <p class="technologies">Technologies Used: HTML, CSS</p>
        </div>

        <div class="project">

            <h2>JDBC CRUD Operations Project</h2>
            <p class="description">Built a Java application to perform Create, Read, Update, and Delete operations on a
                SQL database. Used JDBC to establish the database connection, designed the database schema, and wrote
                SQL queries to manage data efficiently. Implemented prepared statements to prevent SQL injection.</p>
            <p class="technologies">Technologies Used: Java, JDBC, MySQL/Oracle</p>
        </div>

        <div class="conclusion">
            <h2>Conclusion</h2>
            <p><I>Through these projects, I aim to demonstrate my skills as a Full Stack Developer and my ability to
                    create functional, user-friendly applications. I am eager to take on new challenges and continue
                    learning in the field of web development.</I></p>
        </div>
    </section>
    </body>
    </html>
    
   - Contact Page: Provides my email, phone number, LinkedIn, GitHub links, and a contact form.

   CODE:contact1.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Me</title>
    <style>  
     body 
        {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        header 
        {
            background-color: rgba(2, 82, 82, 0.8);
            color: white;
            padding: 10px 20px;
            text-align: center;
        }
        h1 
        {
            color: white;
        }
        .contact-info 
        {
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            margin: 10px 0;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-decoration: none;
        }
        .contact-info h2 
        {
            color: rgba(2, 82, 82, 0.8);
        }
        .contact-info p 
        {
            margin: 5px 0;
        }
        footer 
        {
            text-align: center;
            padding: 0.5px 0.5px;
            background-color: #333;
            color: white;
            position: relative;
            bottom: 0;
            width: 100%;
        }
        .contact-form 
        {
            margin-top: 20px;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .contact-form h2 
        {
            color: rgba(2, 82, 82, 0.8);
        }
        a 
        {
            color: rgb(16, 116, 231);
            text-decoration: none;
        }
        a:hover 
        {
            color: red;
        }
        a:active 
        {
            color: red;
        }
        .contact-form input,
        .contact-form textarea 
        {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .contact-form button 
        {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 4px;
            cursor: pointer;
        }
        .contact-form button:hover 
        {
            background-color: #45a049;
        }
    </style>
    </head>
    <body>
    <header>
        <h1><b>CONTACT ME </b></h1>
    </header>
    <section>
        <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>If you have any questions or would like to connect, feel free to reach out!</p>
            <p>✉️ <a href="mailto:anushareddygayam383@gmail.com">Email</a></p>
            <p>📞<a href="+91 ">MobileNum</a></p>
            <p>🔗 <a href="https://www.linkedin.com/in/gayam-anusha-900933231/" target="link">LinkedIn</a></p>
            <p>🐱‍💻 <a href="https://github.com/anusha020421" target="_blank">GitHub </a></p>
        </div>
        <div class="contact-form">
            <h2>Contact Form</h2>
            <form action="your_form_processing_script.php" method="POST">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>
    <footer>
        <p>&copy; 2025 Gayam Anusha</p>
    </footer>
    </body>
    </html>

Technologies Used:
1.HTML5
2.CSS3
3.Responsive Web Design (Media Queries)

Features:
  - Fully responsive design for mobile, tablet, and desktop devices.
  - Simple, clean, and professional layout.
  - Easy navigation with a fixed header and navigation bar.
  - Contact form ready for integration with backend processing.
  - External links to my LinkedIn and GitHub profiles.

Future Enhancements:
  - Add JavaScript for form validation and interactivity.
  - Improve animations and transitions for better user experience.
  - Deploy the website using GitHub Pages or any hosting platform.



# TASK-4

# Project Title: Forgot Password System & Password Generator

**Description:**
This project provides a secure Password Reset functionality for websites/applications.

- Users can request password reset via email or phone number
- Rate limiting: Users can request only once per 24 hours (prevent abuse)
- Auto-generated password: A random secure password (only lettercase, no numbers/symbols)
- User-friendly UI: Clean, responsive form with error handling
- Works entirely on the frontend (localStorage tracks last request time)

**Key Features:**
- ✅ Dual Reset Methods
Reset password via email or phone number (toggle between tabs)

- 🚀 Random Password Generator
Creates a 12-character password with upper & lowercase letters only (no numbers/special chars)
Example: XkPFtjQGhBYa

- ⏳ Request Rate Limiting
Users cannot spam reset requests
Shows warning: "You can request only once per day."

- 📱 Mobile Responsive
Adapts to all screen sizes (desktop, tablet, mobile)

- 🎨 Modern UI
Built with Tailwind CSS for sleek styling, Smooth animations for success/error feedback

**Technology Stack:**

**Frontend:** 
- HTML
- CSS (Tailwind)
- JavaScript
  
**Storage:** localStorage (tracks last request time)
No backend needed (but easily extendable to API calls)

**How It Works:**
- User enters email/phone
- Clicks [Generate Password] → creates random mixed-case password
- Clicks [Request Reset] → stores timestamp in localStorage
- If requested again within 24hrs, shows error message

**Usage Instructions:**
- Open PasswordGenerator4.html in any browser
- Test password generator or rate-limiting

**PasswordGenerator4.html**
       
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./ForgotPassword4.css" />
    </head>

    <body class="bg-gray-50 min-h-screen flex items-center justify-center p-4">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-md overflow-hidden">
        <div class="bg-indigo-600 py-4 px-6">
            <h1 class="text-2xl font-bold text-white">Reset Your Password</h1>
            <p class="text-indigo-100">Enter your email or phone number to receive a secure password</p>
        </div>
        
        <div class="p-6">

            <div class="flex border-b border-gray-200 mb-6">
                <button id="email-tab" class="tab-button active px-4 py-2 text-sm font-medium text-indigo-600 border-b-2 border-indigo-600">
                    Email
                </button>
                <button id="phone-tab" class="tab-button px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700">
                    Phone
                </button>
            </div>
            
            <form id="email-form" class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" placeholder="your@email.com" required>
                </div>
                
                <div>
                    <label for="generated-password" class="block text-sm font-medium text-gray-700 mb-1">Generate New Password</label>
                    <div class="flex space-x-2">
                        <input type="text" id="generated-password" readonly class="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" placeholder="Click generate">
                        <button type="button" id="generate-btn" class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition font-medium">Generate</button>
                    </div>
                    <div class="mt-1 text-xs text-gray-500">Contains only letters (a-z, A-Z), no numbers or special chars</div>
                </div>
                
                <button type="submit" id="submit-btn" class="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Request Password Reset
                </button>
            </form>
            
            <form id="phone-form" class="space-y-4 hidden">
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div class="flex">
                        <select class="px-4 py-2 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500">
                          <option>+1 - USA, Canada</option>
                          <option>+44 - UK</option>
                          <option>+91 - India</option>
                          <option>+61 - Australia</option>
                          <option>+880 - Bangladesh</option>
                          <option>+55 - Brazil</option>
                          <option>+86 - China</option>
                          <option>+33 - France</option>
                          <option>+49 - Germany</option>
                          <option>+39 - Italy</option>
                          <option>+81 - Japan</option>
                          <option>+92 - Pakistan</option>
                          <option>+63 - Philippines</option>
                          <option>+7 - Russia</option>
                          <option>+966 - Saudi Arabia</option>
                          <option>+65 - Singapore</option>
                          <option>+27 - South Africa</option>
                          <option>+82 - South Korea</option>
                          <option>+94 - Sri Lanka</option>
                          <option>+34 - Spain</option>
                          <option>+46 - Sweden</option>
                          <option>+41 - Switzerland</option>
                          <option>+886 - Taiwan</option>
                          <option>+66 - Thailand</option>
                          <option>+971 - UAE</option>
                          <option>+58 - Venezuela</option>
                          <option>+84 - Vietnam</option>
                          <option>+64 - New Zealand</option>
                        </select>
                        
                        <input type="tel" id="phone"
                          class="flex-1 px-4 py-2 border-t border-r border-b border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                          placeholder="1234567890" required>
                        </div>
                        </div>
                        
                        <div>
                          <label for="phone-generated-password" class="block text-sm font-medium text-gray-700 mb-1">Generate New
                            Password</label>
                          <div class="flex space-x-2">
                            <input type="text" id="phone-generated-password" readonly
                              class="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" placeholder="Click generate">
                            <button type="button" id="phone-generate-btn"
                              class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition font-medium">Generate</button>
                          </div>
                    <div class="mt-1 text-xs text-gray-500">Contains only letters (a-z, A-Z), no numbers or special chars</div>
                </div>
                
                <button type="submit" id="phone-submit-btn" class="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Request Password Reset
                </button>
            </form>
        </div>
        
        <div id="result-message" class="hidden px-6 pb-6">
            <div id="success-message" class="hidden bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                <h3 class="font-bold">Password Reset Request Sent!</h3>
                <p id="success-text" class="text-sm mt-1">We've sent instructions to reset your password. Please check your email.</p>
            </div>
            
            <div id="error-message" class="hidden bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                <h3 class="font-bold">Reset Request Failed</h3>
                <p id="error-text" class="text-sm mt-1">Error message here</p>
            </div>
            
            <div id="limit-message" class="hidden bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800">
                <h3 class="font-bold">Limit Reached</h3>
                <p class="text-sm mt-1">You can only request a password reset once per day. Please try again tomorrow.</p>
            </div>
        </div>
    </div>
    <script src="./ForgotPassword4.js"></script>
    </body>
    </html>

**PasswordGenerator4.css**

    .fade-in 
    {
    animation: fadeIn 0.3s ease-in-out;
    }

    @keyframes fadeIn 
    {
    from 
    {
      opacity: 0;
      transform: translateY(10px);
    }

    to 
    {
      opacity: 1;
      transform: translateY(0);
    }
    }

    .password-strength 
    {
      height: 4px;
      transition: width 0.3s, background-color 0.3s;
    }
    
    .shake 
    {
      animation: shake 0.5s;
    }
    
    @keyframes shake 
    {
  
    0%,
    100% 
    {
      transform: translateX(0);
    }
  
    20%,
    60% 
    {
      transform: translateX(-5px);
    }
  
    40%,
    80% 
    {
      transform: translateX(5px);
    }
    }

**PasswordGenerator4.js**

    document.addEventListener('DOMContentLoaded', function() 
    {
            
    const emailTab = document.getElementById('email-tab');
    const phoneTab = document.getElementById('phone-tab');
    const emailForm = document.getElementById('email-form');
    const phoneForm = document.getElementById('phone-form');
            
    emailTab.addEventListener('click', () => 
    {
        emailTab.classList.add('text-indigo-600', 'border-indigo-600');
        emailTab.classList.remove('text-gray-500', 'border-transparent');
        phoneTab.classList.add('text-gray-500', 'border-transparent');
        phoneTab.classList.remove('text-indigo-600', 'border-indigo-600');
        emailForm.classList.remove('hidden');
        phoneForm.classList.add('hidden');
    });
            
    phoneTab.addEventListener('click', () => 
    {
        phoneTab.classList.add('text-indigo-600', 'border-indigo-600');
        phoneTab.classList.remove('text-gray-500', 'border-transparent');
        emailTab.classList.add('text-gray-500', 'border-transparent');
        emailTab.classList.remove('text-indigo-600', 'border-indigo-600');
        phoneForm.classList.remove('hidden');
        emailForm.classList.add('hidden');
    });
            
    function generatePassword(length = 12) 
    {
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const allChars = upperCase + lowerCase;
                
        let password = '';
        for (let i = 0; i < length; i++) 
        {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
                
        return password;
    }
            
    document.getElementById('generate-btn').addEventListener('click', function() 
    {
        const password = generatePassword();
        document.getElementById('generated-password').value = password;
    });
            
    document.getElementById('phone-generate-btn').addEventListener('click', function() 
    {
        const password = generatePassword();
        document.getElementById('phone-generated-password').value = password;
    });
            
    const forms = [document.getElementById('email-form'), document.getElementById('phone-form')];
    const resultMessage = document.getElementById('result-message');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const limitMessage = document.getElementById('limit-message');
            
    forms.forEach(form => 
    {
        form.addEventListener('submit', function(e) 
        {
            e.preventDefault();
            resultMessage.classList.remove('hidden');
            successMessage.classList.add('hidden');
            errorMessage.classList.add('hidden');
            limitMessage.classList.add('hidden');
                    
            const lastRequest = localStorage.getItem('lastPasswordResetRequest');
            if (lastRequest) 
            {
                const lastRequestDate = new Date(lastRequest);
                const now = new Date();
                        
                if ((now - lastRequestDate) < 24 * 60 * 60 * 1000) 
                {
                    limitMessage.classList.remove('hidden');
                    this.querySelector('button[type="submit"]').classList.add('shake');
                    setTimeout(() => 
                    {
                        this.querySelector('button[type="submit"]').classList.remove('shake');
                    }, 500);
                    return;
                }
            }
                            
            const isEmailForm = this.id === 'email-form';
            const identifier = isEmailForm 
                ? document.getElementById('email').value 
                : document.getElementById('phone').value;
            const newPassword = isEmailForm 
                ? document.getElementById('generated-password').value 
                : document.getElementById('phone-generated-password').value;
                    
            if (!newPassword) 
            {
                document.getElementById('error-text').textContent = 'Please generate a password first';
                errorMessage.classList.remove('hidden');
                return;
            }
        
            localStorage.setItem('lastPasswordResetRequest', new Date().toISOString());
            const successText = isEmailForm 
                ? `We've sent instructions to reset your password to ${identifier}.` 
                : `We've sent an SMS with your new password to ${identifier}.`;
                    
            document.getElementById('success-text').textContent = successText;
            successMessage.classList.remove('hidden');
                  
            setTimeout(() => 
            {
                resultMessage.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        });
    });
    });
