# NullClass_Internship_Tasks

# TASK-1
# Responsive Website

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


# Task-5
# KnowledgeHub Reward System 🏆

A comprehensive reward system to incentivize user contributions with points and badges.

## Features ✨

- **Point System**:
  - Earn points by answering questions (+5)
  - Bonus points for upvoted answers (+5 for 5 upvotes)
  - Lose points when answers are removed (-5)
- **Badge System**:
  - Earn badges (Bronze, Silver, Gold, Platinum)
  - Special achievement badges (First Answer, Popular Answer, etc.)
- **User Profiles**:
  - Track points and badges
  - View activity history
- **Point Transfers**:
  - Send points to other users (min. 10 required)
  - Transaction history tracking
- **Leaderboard**:
  - See top contributors
  - Visual podium for top 3 users

## How Points Work ⚖️

**Action                   |   Points**
Answer a question          |     +5
Answer gets 5 upvotes      |     +5
Answer marked as correct   |    +10
Remove an answer           |     -5
Answer gets 5 downvotes    |     -5
Answer marked as incorrect |    -10

## Technologies Used 💻
**Frontend:**
- HTML5, CSS3, JavaScript
- Tailwind CSS for styling
- Font Awesome for icons

## Usage Examples 🖥️
**Transferring Points:**

- Click "Transfer Points" button
- Search for a user
- Enter amount (min. 10 points required)
- Confirm transfer
- 
**Viewing Leaderboard:**

- Click "Leaderboard" tab
- See top contributors ranked by points

**Checking Transactions:**

- Click "Transactions" tab
- View all point transfers and activities
  
## Future Enhancements 🚀
- [ ] User authentication system
- [ ] Backend API integration
- [ ] More badge types and levels
- [ ] Gamification elements (streaks, challenges)
- [ ] Point redemption for rewards

**RewardSystem5.html**

    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reward System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="./RewardSystem.css" />  
    </head>

    <body class="min-h-screen">

    <div class="container mx-auto px-4 py-8">
        <header class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-indigo-600">KnowledgeHub Rewards</h1>
            <div class="flex items-center space-x-4">
                <div class="relative group">
                    <button id="profileBtn" class="flex items-center space-x-2 focus:outline-none">
                        <div class="avatar">GA</div>
                        <span class="font-medium">Gayam Anusha</span>
                        <i class="fas fa-chevron-down text-gray-500"></i>
                    </button>
                    <div id="profileDropdown" class="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 group-hover:block hover:block">
                        <div class="py-1">
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-50" id="profileLink">My Profile</a>
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-50" id="settingsLink">Settings</a>
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-50">Sign out</a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center bg-indigo-100 px-4 py-2 rounded-full">
                    <i class="fas fa-coins text-yellow-500 mr-2"></i>
                    <span id="userPoints" class="font-bold">125</span>
                    <span class="ml-1 text-gray-600">points</span>
                </div>
            </div>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div class="lg:col-span-1">
                <div class="bg-white rounded-lg shadow p-6 mb-6">
                    <div class="flex flex-col items-center">
                        <div class="avatar-lg mb-4">GA</div>
                        <h2 class="text-xl font-bold">Gayam Anusha</h2>
                        <p class="text-gray-500 mb-4">Knowledge Seeker</p>
                        <div class="flex items-center mb-4">
                            <i class="fas fa-coins text-yellow-500 mr-2"></i>
                            <span class="font-bold text-lg">125</span>
                            <span class="ml-1 text-gray-600">points</span>
                        </div>
                        <div class="w-full mb-4">
                            <div class="flex justify-between text-sm text-gray-500 mb-1">
                                <span>Level Progress</span>
                                <span>25%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 25%"></div>
                            </div>
                        </div>
                        <div class="flex space-x-2 mb-6">
                            <span class="badge badge-bronze">Bronze</span>
                            <span class="badge badge-silver">Silver</span>
                        </div>
                        <button id="transferBtn" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-200">
                            Transfer Points
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="font-bold text-lg mb-4">Badges Earned</h3>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white mr-3">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <div>
                                <h4 class="font-medium">First Answer</h4>
                                <p class="text-sm text-gray-500">Answered your first question</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white mr-3">
                                <i class="fas fa-star"></i>
                            </div>
                            <div>
                                <h4 class="font-medium">Popular Answer</h4>
                                <p class="text-sm text-gray-500">Received 5 upvotes on an answer</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 mr-3">
                                <i class="fas fa-medal"></i>
                            </div>
                            <div>
                                <h4 class="font-medium">Gold Contributor</h4>
                                <p class="text-sm text-gray-500">Earn 500 points to unlock</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-3">
                <div class="bg-white rounded-lg shadow mb-6">
                    <div class="tabs">
                        <div id="activityTab" class="tab tab-active">Activity</div>
                        <div id="leaderboardTab" class="tab">Leaderboard</div>
                        <div id="transactionsTab" class="tab">Transactions</div>
                    </div>
                    
                    <div id="activityContent" class="p-6">
                        <h2 class="text-2xl font-bold mb-6">Recent Activity</h2>
                        
                        <div class="space-y-4">
                            <div class="card p-4 border border-gray-100 rounded-lg">
                                <div class="flex justify-between items-start">
                                    <div class="flex items-start space-x-3">
                                        <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                        <div>
                                            <h3 class="font-medium">Points Added</h3>
                                            <p class="text-sm text-gray-500">You answered a question</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center text-green-600 font-bold">
                                        +5 <i class="fas fa-coins ml-1"></i>
                                    </div>
                                </div>
                                <div class="mt-3 text-sm text-gray-500">
                                    <span>2 hours ago</span>
                                </div>
                            </div>
                            
                            <div class="card p-4 border border-gray-100 rounded-lg">
                                <div class="flex justify-between items-start">
                                    <div class="flex items-start space-x-3">
                                        <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                        <div>
                                            <h3 class="font-medium">Bonus Points</h3>
                                            <p class="text-sm text-gray-500">Your answer received 5 upvotes</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center text-green-600 font-bold">
                                        +5 <i class="fas fa-coins ml-1"></i>
                                    </div>
                                </div>
                                <div class="mt-3 text-sm text-gray-500">
                                    <span>1 day ago</span>
                                </div>
                            </div>
                            
                            <div class="card p-4 border border-gray-100 rounded-lg">
                                <div class="flex justify-between items-start">
                                    <div class="flex items-start space-x-3">
                                        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                            <i class="fas fa-minus"></i>
                                        </div>
                                        <div>
                                            <h3 class="font-medium">Points Deducted</h3>
                                            <p class="text-sm text-gray-500">You removed an answer</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center text-red-600 font-bold">
                                        -5 <i class="fas fa-coins ml-1"></i>
                                    </div>
                                </div>
                                <div class="mt-3 text-sm text-gray-500">
                                    <span>3 days ago</span>
                                </div>
                            </div>
                        
                            <div class="card p-4 border border-gray-100 rounded-lg">
                                <div class="flex justify-between items-start">
                                    <div class="flex items-start space-x-3">
                                        <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                        <div>
                                            <h3 class="font-medium">Points Added</h3>
                                            <p class="text-sm text-gray-500">You answered a question</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center text-green-600 font-bold">
                                        +5 <i class="fas fa-coins ml-1"></i>
                                    </div>
                                </div>
                                <div class="mt-3 text-sm text-gray-500">
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="leaderboardContent" class="p-6 hidden">
                        <h2 class="text-2xl font-bold mb-6">Leaderboard</h2>
                        
                        <div class="podium mb-8">
                            <div class="podium-item">
                                <div class="podium-2 flex items-end justify-center pb-4">
                                    <i class="fas fa-medal text-white text-2xl"></i>
                                </div>
                                <div class="podium-rank">2</div>
                                <div class="podium-name">Akash</div>
                                <div class="podium-points">320 pts</div>
                            </div>
                            <div class="podium-item">
                                <div class="podium-1 flex items-end justify-center pb-4">
                                    <i class="fas fa-crown text-white text-2xl"></i>
                                </div>
                                <div class="podium-rank">1</div>
                                <div class="podium-name">Sravani</div>
                                <div class="podium-points">450 pts</div>
                            </div>
                            <div class="podium-item">
                                <div class="podium-3 flex items-end justify-center pb-4">
                                    <i class="fas fa-medal text-white text-2xl"></i>
                                </div>
                                <div class="podium-rank">3</div>
                                <div class="podium-name">Sathwica</div>
                                <div class="podium-points">275 pts</div>
                            </div>
                        </div>
                        
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div class="flex items-center">
                                    <span class="font-bold mr-4">4</span>
                                    <div class="avatar mr-3">GA</div>
                                    <span>Gayam Anusha</span>
                                </div>
                                <span class="font-medium">125 pts</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-white rounded-lg">
                                <div class="flex items-center">
                                    <span class="font-bold mr-4">5</span>
                                    <div class="avatar mr-3">VI</div>
                                    <span>Vijaya</span>
                                </div>
                                <span class="font-medium">180 pts</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-white rounded-lg">
                                <div class="flex items-center">
                                    <span class="font-bold mr-4">6</span>
                                    <div class="avatar mr-3">VR</div>
                                    <span>Veera</span>
                                </div>
                                <span class="font-medium">90 pts</span>
                            </div>
                        </div>
                    </div>
                    
                    <div id="transactionsContent" class="p-6 hidden">
                        <h2 class="text-2xl font-bold mb-6">Transaction History</h2>
                        
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Today, 10:30 AM</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">Credit</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Answered question</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">+5</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">125</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yesterday, 3:45 PM</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">Credit</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Answer upvoted (5 votes)</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">+5</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">120</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 days ago</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">Debit</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Answer removed</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600">-5</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">115</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 week ago</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">Credit</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Answered question</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">+5</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">120</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow p-6">
                    <h2 class="text-2xl font-bold mb-6">How Points Work</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="font-bold text-lg mb-3 text-indigo-600">Earning Points</h3>
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Answer a question: <strong>+5 points</strong></span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Answer receives 5 upvotes: <strong>+5 points</strong></span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <span>Answer marked as correct: <strong>+10 points</strong></span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg mb-3 text-indigo-600">Losing Points</h3>
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <i class="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Remove an answer: <strong>-5 points</strong></span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Answer receives 5 downvotes: <strong>-5 points</strong></span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                                    <span>Answer marked as incorrect: <strong>-10 points</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="transferModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div class="p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold">Transfer Points</h3>
                    <button id="closeTransferModal" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Search User</label>
                    <div class="relative">
                        <input id="userSearch" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter username">
                        <div id="searchResults" class="hidden absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"></div>
                    </div>
                </div>
                
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Amount to Transfer</label>
                    <div class="flex items-center">
                        <input id="transferAmount" type="number" min="1" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter points">
                        <span class="ml-2">points</span>
                    </div>
                    <p id="transferError" class="text-red-500 text-sm mt-1 hidden">You must have at least 10 points to transfer.</p>
                </div>
                
                <div class="flex justify-end space-x-3">
                    <button id="cancelTransfer" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                    <button id="confirmTransfer" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50" disabled>Transfer</button>
                </div>
            </div>
        </div>
    </div>

    <div id="settingsModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl settings-modal">
            <div class="p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold">Profile Settings</h3>
                    <button id="closeSettingsModal" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="space-y-4">
                    <div>
                        <label class="block text-gray-700 mb-2">Profile Picture</label>
                        <div class="flex items-center">
                            <div class="avatar-lg mr-4">GA</div>
                            <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Change</button>
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-gray-700 mb-2">Display Name</label>
                        <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" value="Gayam Anusha">
                    </div>
                    
                    <div>
                        <label class="block text-gray-700 mb-2">Email</label>
                        <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" value="anushagayam021@gmail.com">
                    </div>
                    
                    <div>
                        <label class="block text-gray-700 mb-2">Notification Preferences</label>
                        <div class="space-y-2">
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked>
                                <span class="ml-2">Email notifications</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked>
                                <span class="ml-2">Point updates</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600">
                                <span class="ml-2">Weekly summary</span>
                            </label>
                        </div>
                    </div>
                </div>
                
                <div class="flex justify-end space-x-3 mt-6">
                    <button id="cancelSettings" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                    <button id="saveSettings" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Save Changes</button>
                </div>
            </div>
        </div>
    </div>

    <div id="successToast" class="hidden fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
        <i class="fas fa-check-circle mr-2"></i>
        <span id="toastMessage">Points transferred successfully!</span>
    </div>
    
    <script src="./RewardSystem.js"></script>   
    </body>
    </html>

**RewardSystem5.css**

    :root 
    {
        --primary: #4f46e5;
        --secondary: #f59e0b;
        --dark: #1e293b;
        --light: #f8fafc;
    }

    body 
    {
        font-family: 'Inter', sans-serif;
        background-color: #f1f5f9;
    }

    .badge 
    {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        padding: 0.25rem 0.75rem;
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    
    .badge-bronze 
    {
        background-color: #cd7f32;
        color: white;
    }
    
    .badge-silver 
    {
        background-color: #c0c0c0;
        color: white;
    }
    
    .badge-gold 
    {
        background-color: #ffd700;
        color: white;
    }
    
    .badge-platinum 
    {
        background-color: #e5e4e2;
        color: black;
    }
    
    .progress-bar 
    {
        height: 8px;
        border-radius: 4px;
        background-color: #e2e8f0;
        overflow: hidden;
    }
    
    .progress-fill 
    {
        height: 100%;
        background-color: var(--primary);
        transition: width 0.3s ease;
    }
    
    .card 
    {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .card:hover 
    {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
    
    .floating-button 
    {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 50;
    }
    
    .modal 
    {
        transition: opacity 0.2s ease, transform 0.2s ease;
    }
    
    .modal-enter 
    {
        opacity: 0;
        transform: translateY(10px);
    }
    
    .modal-enter-active 
    {
        opacity: 1;
        transform: translateY(0);
    }
    
    .tabs 
    {
        display: flex;
        border-bottom: 1px solid #e2e8f0;
    }
    
    .tab 
    {
        padding: 0.75rem 1.5rem;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        transition: all 0.2s ease;
    }
    
    .tab-active 
    {
        border-bottom-color: var(--primary);
        color: var(--primary);
        font-weight: 600;
    }
    
    .avatar 
    {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: white;
        background-color: var(--primary);
    }
    
    .avatar-lg 
    {
        width: 80px;
        height: 80px;
        font-size: 1.5rem;
    }
    
    .podium 
    {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 200px;
        margin-bottom: 2rem;
    }
    
    .podium-item 
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding: 0 1rem;
    }
    
    .podium-1 
    {
        height: 180px;
        background-color: #ffd700;
        width: 120px;
        border-radius: 8px 8px 0 0;
    }
    
    .podium-2 
    {
        height: 140px;
        background-color: #c0c0c0;
        width: 120px;
        border-radius: 8px 8px 0 0;
    }
    
    .podium-3 
    {
        height: 100px;
        background-color: #cd7f32;
        width: 120px;
        border-radius: 8px 8px 0 0;
    }
    
    .podium-rank 
    {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 0.5rem;
    }
    
    .podium-name 
    {
        margin-top: 0.5rem;
        font-weight: bold;
    }
    
    .podium-points 
    {
        margin-top: 0.5rem;
        color: #666;
    }
    
    .settings-modal 
    {
        max-width: 500px;
        width: 90%;
    }

  **RewardSystem5.js**
      
    const users = 
    [
            { id: 1, name: "Akash", initials: "AK", points: 320 },
            { id: 2, name: "Vijaya", initials: "VI", points: 180 },
            { id: 3, name: "Sravani", initials: "SR", points: 450 },
            { id: 4, name: "Sathwica", initials: "SA", points: 275 },
            { id: 5, name: "Veera", initials: "VR", points: 90 }
    ];
            
    let currentUser = 
    {
        id: 0,
        name: "Gayam Anusha",
        initials: "GA",
        points: 125
    };

    const transactions = 
    [
                { date: "Today, 10:30 AM", type: "Credit", description: "Answered question", amount: "+5", balance: 125 },
                { date: "Yesterday, 3:45 PM", type: "Credit", description: "Answer upvoted (5 votes)", amount: "+5", balance: 120 },
                { date: "3 days ago", type: "Debit", description: "Answer removed", amount: "-5", balance: 115 },
                { date: "1 week ago", type: "Credit", description: "Answered question", amount: "+5", balance: 120 }
    ];

    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    const profileLink = document.getElementById('profileLink');
    const settingsLink = document.getElementById('settingsLink');
    const userPointsElement = document.getElementById('userPoints');
            
    const activityTab = document.getElementById('activityTab');
    const leaderboardTab = document.getElementById('leaderboardTab');
    const transactionsTab = document.getElementById('transactionsTab');
    const activityContent = document.getElementById('activityContent');
    const leaderboardContent = document.getElementById('leaderboardContent');
    const transactionsContent = document.getElementById('transactionsContent');
        
    const transferBtn = document.getElementById('transferBtn');
    const transferModal = document.getElementById('transferModal');
    const closeTransferModal = document.getElementById('closeTransferModal');
    const cancelTransfer = document.getElementById('cancelTransfer');
    const userSearch = document.getElementById('userSearch');
    const searchResults = document.getElementById('searchResults');
    const transferAmount = document.getElementById('transferAmount');
    const transferError = document.getElementById('transferError');
    const confirmTransfer = document.getElementById('confirmTransfer');
            
    const settingsModal = document.getElementById('settingsModal');
    const closeSettingsModal = document.getElementById('closeSettingsModal');
    const cancelSettings = document.getElementById('cancelSettings');
    const saveSettings = document.getElementById('saveSettings');
            
    const successToast = document.getElementById('successToast');
    const toastMessage = document.getElementById('toastMessage');

    profileBtn.addEventListener('click', toggleProfileDropdown);
    profileLink.addEventListener('click', (e) => 
    {
        e.preventDefault();
        showTab('activity');
        toggleProfileDropdown();
    });
    
    settingsLink.addEventListener('click', (e) => 
    {
        e.preventDefault();
        openSettingsModal();
        toggleProfileDropdown();
    });
        
    activityTab.addEventListener('click', () => showTab('activity'));
    leaderboardTab.addEventListener('click', () => showTab('leaderboard'));
    transactionsTab.addEventListener('click', () => showTab('transactions'));
            
    transferBtn.addEventListener('click', openTransferModal);
    closeTransferModal.addEventListener('click', closeModal);
    cancelTransfer.addEventListener('click', closeModal);
    userSearch.addEventListener('input', handleUserSearch);
    transferAmount.addEventListener('input', validateTransfer);
    confirmTransfer.addEventListener('click', processTransfer);
            
    closeSettingsModal.addEventListener('click', closeSettings);
    cancelSettings.addEventListener('click', closeSettings);
    saveSettings.addEventListener('click', saveSettingsChanges);

    function toggleProfileDropdown() 
    {
        profileDropdown.classList.toggle('hidden');
    }

    function showTab(tabName) 
    {
        activityContent.classList.add('hidden');
        leaderboardContent.classList.add('hidden');
        transactionsContent.classList.add('hidden');
            
        activityTab.classList.remove('tab-active');
        leaderboardTab.classList.remove('tab-active');
        transactionsTab.classList.remove('tab-active');
                
        switch(tabName) 
        {
            case 'activity':
                activityContent.classList.remove('hidden');
                activityTab.classList.add('tab-active');
                break;
            case 'leaderboard':
                leaderboardContent.classList.remove('hidden');
                leaderboardTab.classList.add('tab-active');
                break;
            case 'transactions':
                transactionsContent.classList.remove('hidden');
                transactionsTab.classList.add('tab-active');
                break;
        }
    }

    function openTransferModal() 
    {
        if (currentUser.points < 10) 
        {
            transferError.classList.remove('hidden');
            transferError.textContent = "You must have at least 10 points to transfer.";
            confirmTransfer.disabled = true;
        } 
        else 
        {
            transferError.classList.add('hidden');
        }
        transferModal.classList.remove('hidden');
    }

    function closeModal() 
    {
        transferModal.classList.add('hidden');
        userSearch.value = "";
        transferAmount.value = "";
        searchResults.classList.add('hidden');
        searchResults.innerHTML = "";
        confirmTransfer.disabled = true;
    }

    function openSettingsModal() 
    {
        settingsModal.classList.remove('hidden');
    }
    
    function closeSettings() 
    {
        settingsModal.classList.add('hidden');
    }

    function saveSettingsChanges() 
    {
        showToast("Settings saved successfully");
        settingsModal.classList.add('hidden');
    }

     function handleUserSearch() 
    {
        const query = userSearch.value.toLowerCase();
                
        if (query.length < 1) 
        {
            searchResults.classList.add('hidden');
            return;
        }
                
        const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(query) && user.id !== currentUser.id
        );
                
        if (filteredUsers.length === 0) 
        {
            searchResults.innerHTML = '<div class="p-3 text-gray-500">No users found</div>';
            searchResults.classList.remove('hidden');
            return;
        }
                
        searchResults.innerHTML = filteredUsers.map(user => `
            <div class="p-3 hover:bg-indigo-50 cursor-pointer flex items-center justify-between" data-user-id="${user.id}">
                <div class="flex items-center">
                    <div class="avatar mr-3">${user.initials}</div>
                        <span>${user.name}</span>
                </div>
                    <span class="text-sm text-gray-500">${user.points} pts</span>
            </div>
        `).join('');
                
        searchResults.classList.remove('hidden');      
        document.querySelectorAll('#searchResults div[data-user-id]').forEach(item => 
        {
            item.addEventListener('click', () => 
            {
                const userId = parseInt(item.getAttribute('data-user-id'));
                const selectedUser = users.find(u => u.id === userId);
                userSearch.value = selectedUser.name;
                searchResults.classList.add('hidden');
                validateTransfer();
            });
        });
    }

    function validateTransfer() 
    {
        const amount = parseInt(transferAmount.value);
        const hasRecipient = userSearch.value.trim().length > 0;
                
        if (currentUser.points < 10) 
        {
            transferError.classList.remove('hidden');
            transferError.textContent = "You must have at least 10 points to transfer.";
            confirmTransfer.disabled = true;
            return;
        }
                
        if (!amount || amount <= 0) 
        {
            transferError.classList.remove('hidden');
            transferError.textContent = "Please enter a valid amount.";
            confirmTransfer.disabled = true;
            return;
        }
                
        if (amount > currentUser.points) 
        {
            transferError.classList.remove('hidden');
            transferError.textContent = "You don't have enough points.";
            confirmTransfer.disabled = true;
            return;
        }
                
        if (!hasRecipient) 
        {
            transferError.classList.remove('hidden');
            transferError.textContent = "Please select a recipient.";
            confirmTransfer.disabled = true;
            return;
        }       
        transferError.classList.add('hidden');
        confirmTransfer.disabled = false;
    }

    function processTransfer() 
    {
        const amount = parseInt(transferAmount.value);
        const recipientName = userSearch.value.trim();
        const recipient = users.find(u => u.name === recipientName);
                
        if (!recipient) 
        {
            transferError.classList.remove('hidden');
            transferError.textContent = "Recipient not found.";
            return;
        }
                
        currentUser.points -= amount;
        recipient.points += amount;       
        transactions.unshift(
        {
            date: "Just now",
            type: "Debit",
            description: `Transfer to ${recipientName}`,
            amount: `-${amount}`,
            balance: currentUser.points
        });        
        userPointsElement.textContent = currentUser.points;
                
            showToast(`${amount} points transferred to ${recipientName}`);
            closeModal();
    }

    function showToast(message) 
    {     
        toastMessage.textContent = message;
        successToast.classList.remove('hidden');
                
        setTimeout(() => 
        {
            successToast.classList.add('hidden');
        }, 3000);
    }
 
    document.addEventListener('click', (e) => 
    {
        if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) 
        {
            profileDropdown.classList.add('hidden');
        }
    });
    showTab('activity');

    
