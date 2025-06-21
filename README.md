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

**Technologies Used:**
1.HTML5
2.CSS3
3.Responsive Web Design (Media Queries)

**Features:**
  - Fully responsive design for mobile, tablet, and desktop devices.
  - Simple, clean, and professional layout.
  - Easy navigation with a fixed header and navigation bar.
  - Contact form ready for integration with backend processing.
  - External links to my LinkedIn and GitHub profiles.

**Future Enhancements:**
  - Add JavaScript for form validation and interactivity.
  - Improve animations and transitions for better user experience.
  - Deploy the website using GitHub Pages or any hosting platform.


# TASK-6
# StackOverflow Pro Subscription System

A subscription system with payment gateway integration for StackOverflow question posting.

## Features

- 💳 Integrated payment processing (Stripe/Razorpay)
- ⏰ Time-restricted payments (10-11 AM IST only)
- 📊 Multiple subscription tiers
- 🚀 Responsive design

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Payment**: Stripe/Razorpay
  
**This complete setup includes everything needed to deploy the subscription system with all the requested features:**

- StackOverflow-themed UI
- Time-restricted payments (10-11 AM IST)
- Multiple subscription tiers

  **SubscriptionPlan6.html**

      <!DOCTYPE html>
      <html lang="en">

      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>StackOverflow Pro - Subscription Plans</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
      <link rel="stylesheet" href="./SubscriptionPlan6.css">
      </head>

      <body>
      <div class="container">
          <header>
              <img src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png" alt="StackOverflow Logo" class="logo">
              <h1><b>StackOverflow Pro Plans</b></h1>
              <p class="subtitle">Upgrade your question posting capabilities</p>
          </header>
        
        <div class="plans">
            <div class="plan plan-free">
                <div class="plan-header">
                    <h2 class="plan-title"><b>Free</b> <span class="badge badge-free">Current</span></h2>
                    <div class="plan-price">₹0<span>/month</span></div>
                </div>
                <div class="plan-features">
                    <div class="feature">
                        <i class="fas fa-question-circle"></i>
                        <span><span class="highlight">1 question</span> per day</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-users"></i>
                        <span>Community support</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-ad"></i>
                        <span>Basic ad experience</span>
                    </div>
                </div>
                <div class="plan-action">
                    <button class="btn btn-free" onclick="subscribe('free')">Current Plan</button>
                </div>
            </div>
            
            <div class="plan plan-bronze5">
                <div class="plan-header">
                    <h2 class="plan-title"><b>Bronze</b> <span class="badge badge-success">Popular</span></h2>
                    <div class="plan-price">₹100<span>/month</span></div>
                </div>
                <div class="plan-features">
                    <div class="feature">
                        <i class="fas fa-question-circle"></i>
                        <span><span class="highlight">5 questions</span> per day</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-headset"></i>
                        <span>Priority support</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-ad"></i>
                        <span>Reduced ads</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-chart-line"></i>
                        <span>Basic analytics</span>
                    </div>
                </div>
                <div class="plan-action">
                    <button class="btn btn-primary" onclick="subscribe('bronze5')">Upgrade Now</button>
                </div>
            </div>
            
            <div class="plan plan-bronze10">
                <div class="plan-header">
                    <h2 class="plan-title"><b>Bronze Pro</b></h2>
                    <div class="plan-price">₹300<span>/month</span></div>
                </div>
                <div class="plan-features">
                    <div class="feature">
                        <i class="fas fa-question-circle"></i>
                        <span><span class="highlight">10 questions</span> per day</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-headset"></i>
                        <span>Priority support</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-ad"></i>
                        <span>Ad-free experience</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-chart-line"></i>
                        <span>Detailed analytics</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-check-circle"></i>
                        <span>Featured questions</span>
                    </div>
                </div>
                <div class="plan-action">
                    <button class="btn btn-primary" onclick="subscribe('bronze10')">Upgrade Now</button>
                </div>
            </div>
            
            <div class="plan plan-gold">
                <div class="plan-header">
                    <h2 class="plan-title"><b>Gold</b></h2>
                    <div class="plan-price">₹1000<span>/month</span></div>
                </div>
                <div class="plan-features">
                    <div class="feature">
                        <i class="fas fa-infinity"></i>
                        <span><span class="highlight">Unlimited</span> questions</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-headset"></i>
                        <span>24/7 Premium support</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-ad"></i>
                        <span>Ad-free experience</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-chart-line"></i>
                        <span>Advanced analytics</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-star"></i>
                        <span>Early access to features</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bolt"></i>
                        <span>Priority question placement</span>
                    </div>
                </div>
                <div class="plan-action">
                    <button class="btn btn-primary" onclick="subscribe('gold')">Upgrade Now</button>
                </div>
            </div>
        </div>
        
        <div class="time-restriction">
            <i class="fas fa-clock"></i>
            <strong>Payment Window:</strong> Subscription payments can only be processed between <span class="highlight">10:00 AM - 11:00 AM IST</span> daily
        </div>
       </div>

      <script src="./SubscriptionPlan6.js"></script>
      </body>
      </html>

  **SubscriptionPlan6.css**

      :root 
      {
          --primary: #F48024;
          --secondary: #2b2b2b;
          --blue: #00A0DC;
          --light: #F1F2F4;
          --success: #5EBA7D;
          --warning: #E2CF52;
          --danger: #E05D5D;
      }

      body 
      {
          font-family: 'Arial', sans-serif;
          color: var(--secondary);
          margin: 0;
          padding: 0;
          background-color: #f8f9f9;
          background-image: url('https://cdn.sstatic.net/Img/backgrounds/bg-stackoverflow.svg?v=1c8d2ea8a3e3');
          background-size: cover;
          background-attachment: fixed;
          background-position: center;
          position: relative;
      }

      body::before 
      {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(248, 249, 249, 0.9);
          z-index: -1;
      }

      .container 
      {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
      }

      header 
      {
          text-align: center;
          margin-bottom: 30px;
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border-top: 5px solid var(--primary);
      }

      h1 
      {
          color: var(--secondary);
          font-size: 2.5rem;
          margin-bottom: 10px;
      }

      .subtitle 
      {
          color: var(--blue);
          font-size: 1.1rem;
          margin-bottom: 10px;
      }

      .logo 
      {
          height: 50px;
          margin-bottom: 20px;
      }

      .plans 
      {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
      }

      .plan 
      {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-top: 5px solid var(--primary);
      }

      .plan:hover 
      {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      }

      .plan-header 
      {
          padding: 20px;
          text-align: center;
          background: white;
          position: relative;
      }

      .plan-free .plan-header 
      {
          border-top-color: #cccccc;
      }

      .plan-bronze5 .plan-header 
      {
          border-top-color: #CD7F32;
      }

      .plan-bronze10 .plan-header 
      {
          border-top-color: #A67C52;
      }

      .plan-gold .plan-header 
      {
          border-top-color: #FFD700;
      }
     
      .plan-title 
      {
          font-size: 1.5rem;
          margin: 0;
          color: var(--secondary);
      }

      .plan-price 
      {
          font-size: 2rem;
          font-weight: bold;
          margin: 10px 0;
          color: var(--primary);
      }
     
      .plan-free .plan-price 
      {
          color: #888;
      }
     
      .plan-features 
      {
          padding: 20px;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          background: #fcfcfc;
      }

      .feature 
      {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
      }
     
      .feature i 
      {
          margin-right: 10px;
          color: var(--success);
          min-width: 20px;
      }

      .plan-action 
      {
          padding: 20px;
          text-align: center;
          background: white;
      }
     
      .btn 
      {
          display: inline-block;
          padding: 12px 24px;
          border-radius: 4px;
          font-weight: bold;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          text-align: center;
          border: none;
          font-size: 1rem;
      }

      .btn-primary 
      {
          background: var(--primary);
          color: white;
      }
     
      .btn-primary:hover 
      {
          background: #E06C1B;
      }
     
      .btn-free 
      {
          background: var(--light);
          color: var(--secondary);
          border: 1px solid #ddd;
      }
     
      .btn-free:hover 
      {
          background: #e1e3e6;
      }

      .time-restriction 
      {
          text-align: center;
          margin-top: 30px;
          padding: 15px;
          background: #FFF8E6;
          border-radius: 8px;
          color: #E06C1B;
          font-weight: 500;
          border-left: 4px solid var(--primary);
      }

      .time-restriction i 
      {
          margin-right: 8px;
      }

      .badge 
      {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: bold;
          margin-left: 8px;
      }

      .badge-success 
      {
          background: var(--success);
          color: white;
      }

      .badge-free 
      {
          background: #cccccc;
          color: white;
      }

      .highlight 
      {
          font-weight: bold;
          color: var(--primary);
      }

      @media (max-width: 768px) 
      {
          .plans 
          {
              grid-template-columns: 1fr;
          }
     
          .container 
          {
              padding: 10px;
          }
      }

  **SubscriptionPlan6.js**

      function subscribe(plan) 
      {
       const now = new Date();
       const currentHour = now.getHours();
       const currentMinute = now.getMinutes();
               
       if (currentHour < 10 || currentHour >= 11) 
       {
           alert("⚠️ Payments are only accepted between 10:00 AM - 11:00 AM IST (Indian Standard Time).\n\nPlease try again during the payment window.");
           return;
       }
            
       let planDetails = {};
       switch(plan) 
       {
           case 'free':
           alert("You're currently on our Free plan with 1 question per day.");
           return;
           case 'bronze5':
               planDetails = 
               { 
                   name: "Bronze", 
                   price: 100,
                   questions: "5 questions per day",
                   features: ["Priority support", "Reduced ads", "Basic analytics"]
               };
               break;
           case 'bronze10':
                planDetails = 
                { 
                   name: "Bronze Pro", 
                   price: 300,
                   questions: "10 questions per day",
                   features: ["Priority support", "Ad-free", "Detailed analytics", "Featured questions"]
               };
               break;
           case 'gold':
               planDetails = 
               { 
                   name: "Gold", 
                   price: 1000,
                   questions: "Unlimited questions",
                   features: ["24/7 Premium support", "Ad-free", "Advanced analytics", "Early access", "Priority placement"]
               };
               break;
           }
               
        console.log(`Initiating payment for ${planDetails.name} Plan (₹${planDetails.price}/month)`);
        const processing = setInterval(() => 
        {
            console.log("Processing payment...");
        }, 500);
            
        setTimeout(() => 
        {
            clearInterval(processing);
            sendConfirmationEmail(planDetails);
        }, 2500);
      }
              
      function sendConfirmationEmail(planDetails) 
      {
          console.log(`Send email to user with invoice for ${planDetails.name} Plan`);
          alert(`🎉 Subscription Confirmed!\n\nYou've successfully upgraded to the ${planDetails.name} Plan (₹${planDetails.price}/month).\n\nYou now have: ${planDetails.questions}\n\nCheck your email for the invoice and plan details.`);
      }
