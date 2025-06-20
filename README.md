# NullClass_Internship_Tasks


# TASK-1

# Responsive Website

 - Responsive Personal Website
 - Welcome to my Responsive Personal Website project!
 - This project showcases my skills in frontend development using HTML and CSS, with a focus on responsive design for various devices like desktops, tablets, and mobiles.

**Project Overview:**
  This is a simple and clean personal website built with only HTML and CSS, designed to introduce myself, my skills, and ways to contact me. The website is fully responsive and adjusts gracefully across different screen sizes.
The website consists of the following pages:
  
**CODE: Task1.html:**
    
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

**Home Page: A welcome page with a responsive full-screen image and navigation bar.**
    
**CODE: home1.html**

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
     
**About Page: A detailed section about me, highlighting my aspirations and a profile image.**
     
**CODE: about1.html**
    
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
      
   **CODE:summary1.html**
    
    
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
    
**Contact Page: Provides my email, phone number, LinkedIn, GitHub links, and a contact form.**

   **CODE:contact1.html**

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



# TASK-2

# Video Question Upload Feature with Email OTP Authentication**

**Project Overview**
This project implements a secure and user-friendly feature to allow students to upload questions in video format as part of an "Ask Question" interface. It ensures videos are uploaded only by authenticated users via email OTP (One-Time Password), enforces strict video constraints, and restricts upload timing to a specified window for better management.

**Feature Summary**
- Video Upload as Question:
    Students can upload their questions in video format through an intuitive, accessible interface.

**Email OTP Authentication:**
Before uploading, users must verify their email address using a one-time password to ensure authenticity and prevent abuse.

**Video Constraints:**
- Maximum video length: 2 minutes
- Maximum file size: 50MB
- Uploads exceeding these restrictions are rejected with clear error messages.
- Time-based Upload Restrictions:
- Video uploads are permitted only between 2 PM and 7 PM daily. Outside this window, the system disallows uploads with an informative message.

**Technical Details**
**Frontend:**
- Single-page app with separate HTML, CSS, and JavaScript files
- Responsive and accessible UI following modern web standards
- Email input and OTP modal for authentication
- File input with client-side video validation (size, duration)
- Upload button enabled only upon successful OTP verification and valid video file
- Time restrictions enforced client-side with friendly feedback

**OTP Flow:**
- A randomly generated 6-digit OTP code is displayed for demonstration (in practice, this would be emailed via backend)
- User enters the OTP to verify and unlock video upload controls
- Resend of OTP is disabled once sent per session to avoid abuse
- Client-side Validations:

**Video size checked against 50MB limit**
- Video length retrieved using video metadata and limited to 2 minutes
- Current time checked to permit uploads only between 14:00 and 19:00 local time

**How to Use**
- Enter a valid email address and click "Send OTP"
- Check the displayed OTP code (for demo) or the email in the real implementation
- Enter the OTP in the modal and verify
- Upon verification, choose a video file that meets size and length restrictions
- Click "Upload Video" only during permitted times (2 PM to 7 PM)

**Upload2.html**

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ask Question - Video Upload</title>
    
    <link rel="stylesheet" href="Upload2.css" />
    
    </head>
    
    <body>
    <main class="container" role="main" aria-labelledby="page-title">
    <h1 id="page-title">Ask a Question - Video Upload</h1>
    <form id="email-form" novalidate aria-describedby="next-step-info">
      <label for="email-input">Email for OTP Verification</label>
      <input
        type="email"
        id="email-input"
        name="email"
        placeholder="you@example.com"
        autocorrect="off"
        autocomplete="email"
        required
        aria-required="true"
        aria-describedby="email-help email-error"
      />
      <div id="email-help" class="info-text">Enter your email to receive a one-time password (OTP).</div>
      <div id="demo-otp" class="info-text" style="margin-top:8px; color:#2563eb; font-weight:bold;">
        Your OTP code for demo: <span id="default-otp"></span>
      </div>
      <div id="email-error" class="error-text" aria-live="assertive"></div>
      <button type="submit" class="btn btn-primary" id="send-otp-btn">Send OTP</button>

      <p id="next-step-info" class="info-text" style="margin-top:16px; display:none;">
        OTP sent! Please enter the code in the popup window.
      </p>
    </form>

    <form id="video-upload-form" novalidate style="display:none; flex-direction:column;" aria-disabled="true" aria-describedby="upload-info upload-error upload-success">
      <label for="video-file-input">Upload Video Question (Max 2 minutes, 50MB)</label>
      <input
        type="file"
        id="video-file-input"
        name="video"
        accept="video/*"
        aria-describedby="upload-info upload-error"
        disabled
        required
        aria-required="true"
      />
      <div id="upload-info" class="info-text" style="margin-bottom:8px;">
        You can upload videos only between 2:00 PM and 7:00 PM. Allowed max size: 50MB and max length: 2 minutes.
      </div>
      <div id="upload-error" class="error-text" aria-live="assertive"></div>
      <button type="submit" class="btn btn-primary" id="upload-video-btn" disabled>Upload Video</button>
      <div id="upload-success" class="success-text" aria-live="polite"></div>
    </form>
    </main>
    <div class="modal-overlay" id="otp-modal" role="dialog" aria-modal="true" aria-labelledby="otp-title" aria-describedby="otp-desc">
    <div class="modal">
      <h2 id="otp-title">Enter OTP</h2>
      <p id="otp-desc" class="info-text">Please enter the 6-digit code sent to your email.</p>
      <div class="otp-inputs" role="group" aria-label="One-time password inputs">
        <input type="text" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="OTP digit 1" />
        <input type="text" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="OTP digit 2" />
        <input type="text" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="OTP digit 3" />
        <input type="text" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="OTP digit 4" />
        <input type="text" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="OTP digit 5" />
        <input type="text" inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="OTP digit 6" />
      </div>
      <div class="error-text" id="otp-error" aria-live="assertive"></div>
      <div class="modal-buttons">
        <button type="button" class="btn btn-secondary" id="otp-cancel-btn">Cancel</button>
        <button type="button" class="btn btn-primary" id="otp-verify-btn" disabled>Verify</button>
      </div>
    </div>
    </div>
    
    <script src="Upload2.js"></script>
    </body>
    
    </html>

**Upload2.css**

    *, *::before, *::after 
    {
    box-sizing: border-box;
    }
    body 
    {
    margin: 0;
    min-height: 100vh;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #ffffff;
    color: #374151;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 48px 16px;
    }
    .container 
    {
    max-width: 480px;
    width: 100%;
    background: #f9fafb;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    }
    h1 
    {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.1;
    color: #111827;
    margin: 0;
    }
    label 
    {
     display: block;
     font-weight: 600;
     margin-bottom: 8px;
     color: #4b5563;
    }
    input[type="email"], input[type="text"], input[type="number"], input[type="file"] 
    {
    width: 100%;
    padding: 12px 16px;
    font-size: 1rem;
    border-radius: 8px;
    border: 1.5px solid #d1d5db;
    transition: border-color 0.3s ease;
    }
    input[type="email"]:focus, input[type="text"]:focus, input[type="number"]:focus, input[type="file"]:focus 
    {
    border-color: #2563eb;
    outline: none;
    box-shadow: 0 0 6px rgba(37,99,235,0.4);
    }
    .btn 
    {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 24px;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
    }
    .btn-primary 
    {
    background: #2563eb;
    color: white;
    box-shadow: 0 4px 10px rgba(37,99,235,0.4);
    }
    .btn-primary:hover:not(:disabled) 
    {
    background: #1e40af;
    box-shadow: 0 6px 16px rgba(30,64,175,0.6);
    transform: translateY(-2px);
    }
    .btn-primary:disabled 
    {
    background: #93c5fd;
    cursor: not-allowed;
    box-shadow: none;
    }
    .btn-secondary 
    {
    background: transparent;
    color: #2563eb;
    border: 2px solid #2563eb;
    }
    .btn-secondary:hover 
    {
    background: #2563eb;
    color: white;
    }
    .info-text 
    {
    font-size: 0.875rem;
    color: #6b7280;
    }
    .error-text 
    {
    font-size: 0.875rem;
    color: #dc2626;
    margin-top: 4px;
    }
    .success-text 
    {
    font-size: 0.875rem;
    color: #16a34a;
    margin-top: 4px;
    }
 
    .modal-overlay 
    {
    display: none;
    position: fixed;
    inset: 0;
    background-color: rgba(31, 41, 55, 0.65);
    backdrop-filter: blur(4px);
    align-items: center;
    justify-content: center;
    z-index: 1000;
    }
    .modal-overlay.show 
    {
    display: flex;
    }
    .modal 
    {
    background: #f9fafb;
    border-radius: 16px;
    padding: 32px 28px 36px;
    max-width: 360px;
    width: 100%;
    box-shadow: 0 12px 32px rgba(0,0,0,0.16);
    display: flex;
    flex-direction: column;
    gap: 24px;
    }
    .modal h2 
    {
    margin: 0;
    color: #111827;
    font-weight: 700;
    font-size: 1.75rem;
    user-select: none;
    }
    .otp-inputs 
    {
    display: flex;
    gap: 12px;
    }
    .otp-inputs input 
    {
    width: 44px;
    height: 56px;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    border: 1.5px solid #d1d5db;
    border-radius: 12px;
    background: white;
    transition: border-color 0.3s ease;
    }
    .otp-inputs input:focus 
    {
    border-color: #2563eb;
    outline: none;
    box-shadow: 0 0 8px rgba(37,99,235,0.6);
    }
    .modal-buttons 
    {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    }
 
    @media (max-width: 639px) 
    {
    .container 
    {
      padding: 24px 16px;
      max-width: 100%;
    }
    h1 
    {
      font-size: 2rem;
    }
    }

**Upload2.js**

    document.addEventListener('DOMContentLoaded', function () 
    {
    const sendOtpBtn = document.getElementById('send-otp-btn');
    const emailInput = document.getElementById('email-input');
    const emailError = document.getElementById('email-error');
    const emailForm = document.getElementById('email-form');
    const nextStepInfo = document.getElementById('next-step-info');
    const defaultOtpSpan = document.getElementById('default-otp');

    const videoForm = document.getElementById('video-upload-form');
    const videoInput = document.getElementById('video-file-input');
    const uploadBtn = document.getElementById('upload-video-btn');
    const uploadError = document.getElementById('upload-error');
    const uploadSuccess = document.getElementById('upload-success');

    const otpModal = document.getElementById('otp-modal');
    const otpInputs = otpModal.querySelectorAll('.otp-inputs input');
    const otpError = document.getElementById('otp-error');
    const otpVerifyBtn = document.getElementById('otp-verify-btn');
    const otpCancelBtn = document.getElementById('otp-cancel-btn');

    const defaultOTP = Array.from({length:6}, () => Math.floor(Math.random()*10)).join('');
    defaultOtpSpan.textContent = defaultOTP;
    let generatedOTP = defaultOTP;

    let otpVerified = false;
    let otpSent = false;

    function isValidEmail(email) 
    {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isWithinUploadTime() 
    {
      const now = new Date();
      const hours = now.getHours();
      return hours >= 14 && hours < 19;
    }

    emailForm.addEventListener('submit', (e) => 
    {
      e.preventDefault();

      if (otpSent) 
      {
        emailError.textContent = 'OTP already sent. Please check your email and enter the OTP.';
        return;
      }

      emailError.textContent = '';
      uploadSuccess.textContent = '';
      uploadError.textContent = '';
      nextStepInfo.style.display = 'none';

      const email = emailInput.value.trim();
      if (!email) 
      {
        emailError.textContent = 'Please enter your email.';
        emailInput.focus();
        return;
      }
      if (!isValidEmail(email)) 
      {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.focus();
        return;
      }

      sendOtpBtn.disabled = true;
      sendOtpBtn.textContent = 'Sending...';

      setTimeout(() => 
      {
        sendOtpBtn.disabled = true; // Prevent resend
        sendOtpBtn.textContent = 'OTP Sent';
        showOtpModal();
        nextStepInfo.style.display = 'block';
        otpSent = true;

        console.log('---- Demo OTP (copy this) ----');
        console.log(generatedOTP);
      }, 1000);
    });

    function showOtpModal() 
    {
      otpModal.classList.add('show');
      otpError.textContent = '';
      otpInputs.forEach(input => 
      {
        input.value = '';
        input.disabled = false;
      });
      otpInputs[0].focus();
      otpVerifyBtn.disabled = true;
    }

    function hideOtpModal() 
    {
      otpModal.classList.remove('show');
      otpError.textContent = '';
      otpInputs.forEach(input => 
      {
        input.value = '';
      });
    }

    otpInputs.forEach((input, idx) => 
    {
      input.addEventListener('input', () => {
        if (input.value && !/^\d$/.test(input.value)) 
        {
          input.value = '';
          return;
        }
        if (input.value && idx < otpInputs.length - 1) 
        {
          otpInputs[idx + 1].focus();
        }
        checkOtpComplete();
      });
      input.addEventListener('keydown', (e) => 
      {
        if (e.key === 'Backspace' && input.value === '' && idx > 0) 
        {
          otpInputs[idx - 1].focus();
        }
      });
    });

    function checkOtpComplete() 
    {
      const enteredOtp = Array.from(otpInputs).map(i => i.value).join('');
      otpVerifyBtn.disabled = enteredOtp.length !== 6;
    }

    otpCancelBtn.addEventListener('click', () => 
    {
      hideOtpModal();
    });

    otpVerifyBtn.addEventListener('click', () => 
    {
      const enteredOtp = Array.from(otpInputs).map(i => i.value).join('');
      if (enteredOtp === generatedOTP) 
      {
        otpVerified = true;
        hideOtpModal();

        emailForm.style.display = 'none';
        nextStepInfo.style.display = 'none';

        videoForm.style.display = 'flex';
        videoForm.setAttribute('aria-disabled', 'false');
        videoInput.disabled = false;
        uploadBtn.disabled = true;
        uploadSuccess.textContent = 'Email verified successfully. You can now upload your video.';
        uploadError.textContent = '';
        videoInput.value = '';

        setTimeout(() => videoInput.focus(), 100);
      } 
      else 
      {
        otpError.textContent = 'Incorrect OTP. Please try again.';
        otpInputs[0].focus();
      }
    });

    videoInput.addEventListener('change', () => 
    {
      uploadError.textContent = '';
      uploadSuccess.textContent = '';
      uploadBtn.disabled = true;
      const file = videoInput.files[0];
      if (!file) return;

      const maxSize = 50 * 1024 * 1024;
      if (file.size > maxSize) 
      {
        uploadError.textContent = 'Video file size exceeds 50MB limit.';
        videoInput.value = '';
        return;
      }
      if (!isWithinUploadTime()) 
      {
        uploadError.textContent = 'Video uploads allowed only between 2:00 PM and 7:00 PM.';
        videoInput.value = '';
        return;
      }

      checkVideoDuration(file).then(duration => 
      {
        if (duration > 120) 
        {
          uploadError.textContent = 'Video duration exceeds maximum 2 minutes.';
          videoInput.value = '';
          uploadBtn.disabled = true;
        } 
        else 
        {
          uploadBtn.disabled = false;
        }
      }).catch(() => 
      {
        uploadError.textContent = 'Unable to read video duration. Please try another file.';
        videoInput.value = '';
        uploadBtn.disabled = true;
      });
    });

    function checkVideoDuration(file) 
    {
      return new Promise((resolve, reject) => 
      {
        const url = URL.createObjectURL(file);
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = url;
        video.onloadedmetadata = () => 
        {
          URL.revokeObjectURL(url);
          resolve(video.duration);
        };
        video.onerror = () => 
        {
          URL.revokeObjectURL(url);
          reject(new Error('Video load error'));
        };
      });
    }

    videoForm.addEventListener('submit', e => 
    {
      e.preventDefault();
      if (!otpVerified) 
      {
        uploadError.textContent = 'Please verify your email with OTP first.';
        return;
      }
      if (!videoInput.files[0]) 
      {
        uploadError.textContent = 'Please select a video file to upload.';
        return;
      }
      if (!isWithinUploadTime()) 
      {
        uploadError.textContent = 'Video uploads allowed only between 2:00 PM and 7:00 PM.';
        return;
      }
      uploadError.textContent = '';
      uploadBtn.disabled = true;
      uploadSuccess.textContent = 'Uploading...';

      setTimeout(() => 
      {
        uploadSuccess.textContent = 'Video uploaded successfully!';
        videoInput.value = '';
        uploadBtn.disabled = true;
      }, 1500);
    });
    });



# TASK-3

# Project Title: Interactive Q&A Forum with Notification System

**Project Overview: Messaging App with Notification Feature**

This project enhances a simple **"Messaging App"** by integrating browser-based notifications. It allows users to ask questions, view and reply to conversations, and upvote questions. The key enhancement is a robust notification system that informs users when their questions are answered or upvoted, with full user control over notification preferences.

**Feature Summary: Browser Notifications**
- Real-time Alerts: Users receive pop-up notifications directly from their browser when specific events occur related to their questions.
- Answer Notifications: A notification is triggered when someone answers a question posed by the user. The message clearly states "Someone answered your question."
- Upvote Notifications: Users are also notified when their question receives an upvote, with a message like "Someone upvote your question."
- User Control on Profile Page: A dedicated setting on the "Profile" page allows users to enable or disable these browser notifications at any time.
- Permission Management: The system gracefully handles browser notification permissions, guiding the user to grant permission if needed and informing them of the current status.
  
**Technical Details**
The notification feature is implemented entirely on the frontend using the browser's native Notification API and localStorage for persistence.

**Frontend**

**HTML Structure (Messagigapp3.Html):**
  
- A "Profile" section (id="profile-section") has been added to the main content area, initially hidden. Within the profile section, a     "Notification Settings" subsection contains a label with a custom toggle switch (id="notification-toggle") for enabling/disabling notifications.
- A div with id="notification-status" is present to display the current notification permission status to the user
 (e.g., "Notifications are ON", "Permission Denied").

**CSS Styling (Messagigapp3.css):**

- Styles have been added for the new .profile-settings and .profile-section elements to integrate them seamlessly into the app's design.
- Crucially, specific CSS creates the visual appearance of the toggle switch (.switch, .slider), transforming a standard checkbox into an intuitive on/off button. Styles are defined for both checked (enabled) and unchecked (disabled) states.
      
**JavaScript Logic (Messagigapp3.js):**

**DOM Element References:** Variables are declared to reference the notification toggle, status display, and navigation buttons.
**requestNotificationPermission():**
     Checks if the Notification API is supported by the user's browser. If not, it disables the toggle and informs the user.
**If supported, it checks the current permission status (Notification.permission):**
"default": Prompts the user to requestPermission(). Based on their choice ("granted" or "denied"), it updates the UI and localStorage.
"granted": Updates the status message to "Notifications are ON."
"denied": Informs the user that notifications are off due to browser settings and disables the toggle (as the user must change this in browser settings).
**updateNotificationToggle(isChecked):** A utility function to programmatically set the checked state of the notification toggle.
**loadNotificationPreference():**
Executed on page load (DOMContentLoaded).
Retrieves the user's last saved preference ('notificationsEnabled') from localStorage.
Sets the initial state of the notificationToggle accordingly.
If notifications were previously enabled, it automatically calls requestNotificationPermission() to ensure the permission is still valid.
**showNotification(title, body):**
This is the core function for displaying notifications.
It first checks if notifications are enabled in localStorage and if the browser permission is granted.
If both conditions are met, it creates a new Notification object with the provided title, body, and an icon/badge.
An onclick handler is added to the notification to bring the browser window into focus when the notification is clicked.
**Event Triggers:**
- btn-answer.onclick: After a new reply is successfully added to a conversation, showNotification("New Answer!", ...) is called.
- btn-upvote.onclick: When an upvote button is clicked and the count is incremented, showNotification("Upvote Received!", ...) is called.
- Profile Navigation (navProfileBtn.addEventListener('click', ...)): When the "Profile" tab is clicked, requestNotificationPermission() is explicitly called to ensure the notification status is up-to-date for the user.
**Toggle Switch Event (notificationToggle.addEventListener('change', ...)):**
When the notification toggle is switched, it updates the 'notificationsEnabled' status in localStorage.
If enabling, it triggers requestNotificationPermission().
If disabling, it updates the status message to reflect that notifications are off.

**Persistence localStorage:** The user's preference for enabling/disabling notifications ('notificationsEnabled') is stored locally in the    browser's localStorage, ensuring their choice persists even if they close and reopen the browser.

**Messagigapp3.html**

    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Messaging App - Notifications Demo</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="Messagigapp3.css" />
    </head>

    <body>
    <header>
    <h1>Messaging APP</h1>
    </header>
    <main>
    <nav class="sidebar" aria-label="Main navigation">
      <button id="nav-conversations" aria-controls="conversations-section" aria-selected="true" role="tab" class="active">
        <span class="material-icons" aria-hidden="true">chat_bubble_outline</span> Conversations
      </button>
      <button id="nav-profile" aria-controls="profile-section" aria-selected="false" role="tab">
        <span class="material-icons" aria-hidden="true">person_outline</span> Profile
      </button>
    </nav>

    <section id="conversations-section" class="content" role="tabpanel" tabindex="0" aria-label="Conversation list">
      <h2 style="margin-top:0; font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; color: #1e293b;">Your Questions</h2>

      <form id="add-question-form" aria-label="Add a new question form">
        <div style="flex:1 1 300px; display:flex; flex-direction: column;">
          <label for="new-question-text">Question</label>
          <input type="text" id="new-question-text" placeholder="Type your question here..." required />
        </div>
        <div style="flex:1 1 400px; display:flex; flex-direction: column;">
          <label for="new-question-desc">Description</label>
          <textarea id="new-question-desc" placeholder="Add a description or context (optional)"></textarea>
        </div>
        <button type="submit" id="add-question-btn" disabled>Add Question</button>
      </form>

      <div class="conversation-list" id="conversation-list" aria-live="polite" aria-relevant="additions">
        </div>
    </section>

    <section id="profile-section" class="content" role="tabpanel" tabindex="0" aria-label="User profile settings" hidden>
      <div class="profile-settings">
        <div class="profile-section">
          <h3>Notification Settings</h3>
          <div class="setting-item">
            <span>Browser Notifications</span>
            <label class="switch">
              <input type="checkbox" id="notification-toggle">
              <span class="slider"></span>
            </label>
          </div>
          <div id="notification-status"></div>
        </div>
      </div>
    </section>
    </main>

    <script src="Messagigapp3.js"></script>
 
    </body>
    </html>


**Messagigapp3.css**

    *, *::before, *::after 
    {
        box-sizing: border-box;
    }

    body 
    {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: #ffffff;
      color: #374151;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    header 
    {
      position: sticky;
      top: 0;
      background: #e0e0e0;
      border-bottom: 1px solid #c0c0c0;
      padding: 1rem 2rem;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
    }

    header h1 
    {
      font-weight: 800;
      font-size: 1.75rem;
      color: #1f2937;
      text-transform: uppercase;
      font-weight: bold;
    }

    main 
    {
      flex: 1;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 0;
      gap: 32px;
      padding: 24px 16px;
      transition: grid-template-columns 0.3s ease;
    }

    @media (min-width: 768px) 
    {
      main 
      {
        grid-template-columns: 280px 1fr;
      }
    }

    nav.sidebar 
    {
      background: #f3f4f6;
      border-radius: 12px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      padding: 24px 12px;
      display: flex;
      flex-direction: column;
    }

    nav.sidebar button 
    {
      background: none;
      border: none;
      color: #374151;
      font-size: 1rem;
      text-align: left;
      padding: 10px 16px;
      border-radius: 10px;
      cursor: pointer;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 600;
      transition: background-color 0.2s ease;
    }

    nav.sidebar button:hover,
    nav.sidebar button.active 
    {
      background-color: #e0e7ff;
      color: #4338ca;
    }

    section.content 
    {
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      padding: 24px;
      display: flex;
      flex-direction: column;
      min-height: 400px;
      overflow-y: auto;
    }

    #conversations-section 
    {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    #add-question-form 
    {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: flex-end;
      background: #f9fafb;
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      user-select: none;
    }

    #add-question-form label 
    {
      flex-basis: 100%;
      font-weight: 600;
      color: #374151;
      margin-bottom: 6px;
      user-select: text;
    }

    #add-question-form input[type="text"],
    #add-question-form textarea 
    {
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      font-size: 1rem;
      padding: 8px 12px;
      color: #374151;
      font-family: 'Inter', sans-serif;
      resize: vertical;
    }

    #add-question-form input[type="text"] 
    {
      flex: 1 1 300px;
    }

    #add-question-form textarea 
    {
      flex: 1 1 400px;
      min-height: 60px;
      max-height: 150px;
    }

    #add-question-form button 
    {
      background-color: #4338ca;
      color: white;
      border: none;
      border-radius: 12px;
      padding: 10px 24px;
      font-weight: 700;
      cursor: pointer;
      flex-shrink: 0;
      width: 140px;
      transition: background-color 0.3s ease;
      user-select: none;
    }

    #add-question-form button:disabled 
    {
      background-color: #a5b4fc;
      cursor: not-allowed;
    }

    #add-question-form button:hover:not(:disabled) 
    {
      background-color: #6366f1;
    }

    .conversation-list 
    {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-height: 600px;
      overflow-y: auto;
      user-select: none;
    }

    .conversation-card 
    {
      background: #f9fafb;
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      display: flex;
      flex-direction: column;
      gap: 8px;
      user-select: none;
    }

    .conversation-title 
    {
      font-weight: 700;
      font-size: 1.125rem;
      color: #1e293b;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .upvote-count 
    {
        font-size: 0.9rem;
        color: #10b981;
        font-weight: 600;
        margin-left: auto;
        padding: 4px 8px;
        background-color: #d1fae5;
        border-radius: 8px;
    }

    .conversation-description 
    {
      font-size: 0.9rem;
      color: #6b7280;
    }

    .actions 
    {
      margin-top: 8px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .btn 
    {
      cursor: pointer;
      border-radius: 12px;
      border: none;
      font-weight: 600;
      padding: 0.45rem 1rem;
      font-size: 0.9rem;
      transition: background-color 0.25s ease;
      display: flex;
      align-items: center;
      gap: 6px;
      user-select: none;
    }

    .btn-answer 
    {
      background-color: #4338ca;
      color: white;
    }

    .btn-answer:hover 
    {
      background-color: #6366f1;
    }

    .btn-upvote 
    {
      background-color: #10b981;
      color: white;
    }

    .btn-upvote:hover 
    {
      background-color: #34d399;
    }

    .btn-toggle-replies 
    {
      background-color: #6b7280;
      color: white;
    }

    .btn-toggle-replies:hover 
    {
      background-color: #4b5563;
    }

    .replies-container 
    {
      margin-top: 12px;
      border-left: 3px solid #4338ca;
      padding-left: 16px;
      max-height: 200px;
      overflow-y: auto;
      border-radius: 0 10px 10px 0;
      background: #eef2ff;
      display: none; 
    }

    .replies-container.show 
    {
        display: block;
    }

    .reply 
    {
      padding: 8px 12px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.07);
      margin-bottom: 10px;
      font-size: 0.9rem;
      color: #334155;
      line-height: 1.3;
      word-break: break-word;
    }

    .reply:last-child 
    {
        margin-bottom: 0;
    }

    .reply-timestamp 
    {
      font-size: 0.75rem;
      color: #94a3b8;
      text-align: right;
      margin-top: 2px;
      user-select: none;
    }

    .reply-input-container 
    {
      margin-top: 12px;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .reply-input-container textarea 
    {
      resize: vertical;
      flex: 1 1 auto;
      min-height: 48px;
      max-height: 100px;
      padding: 10px 12px;
      font-size: 0.95rem;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
      font-family: 'Inter', sans-serif;
      color: #374151;
      transition: border-color 0.2s ease;
    }

    .reply-input-container textarea:focus 
    {
      outline: none;
      border-color: #4338ca;
      box-shadow: 0 0 4px rgba(67, 56, 202, 0.5);
    }

    .reply-input-container button 
    {
      flex: 0 0 auto;
      background-color: #4338ca;
      color: white;
      border: none;
      border-radius: 12px;
      padding: 10px 20px;
      font-weight: 700;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      user-select: none;
    }

    .reply-input-container button:disabled 
    {
      background-color: #a5b4fc;
      cursor: not-allowed;
    }

    .reply-input-container button:hover:not(:disabled) 
    {
      background-color: #6366f1;
    }

    .profile-settings 
    {
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    .profile-section 
    {
      border-radius: 16px;
      background: #f9fafb;
      padding: 24px 32px;
      box-shadow: 0 1px 5px rgba(0,0,0,0.06);
      user-select: none;
    }

    .profile-section h3 
    {
      font-weight: 700;
      font-size: 1.25rem;
      margin-bottom: 20px;
      color: #1f2937;
      border-bottom: 2px solid #4338ca;
      padding-bottom: 4px;
      max-width: max-content;
    }

    .setting-item 
    {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #e5e7eb;
      font-size: 1rem;
      color: #374151;
    }

    .setting-item:last-child 
    {
      border-bottom: none;
    }

    .switch 
    {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 28px;
    }

    .switch input 
    {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }

    .slider 
    {
      position: absolute;
      cursor: pointer;
      top: 0; left: 0; right: 0; bottom: 0;
      background-color: #d1d5db;
      border-radius: 34px;
      transition: background-color 0.3s ease;
    }

    .slider::before 
    {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: transform 0.3s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }

    input:checked + .slider 
    {
      background-color: #4338ca;
    }
    input:checked + .slider::before 
    {
      transform: translateX(22px);
    }

    #notification-status 
    {
      font-size: 0.875rem;
      color: #6b7280;
      margin-top: 8px;
      text-align: center;
      min-height: 1.25rem;
      user-select: none;
    }

**Messagigapp3.js**

    let conversations = 
    [
      {
        id: 1,
        question: "How to implement real-time messaging?",
        description: "Looking for best practices to build a scalable chat app.",
        replies: 
        [
          { text: "You could use WebSockets for real-time communication.", timestamp: "06/14/2025 10:05 AM" },
          { text: "Consider a service like Firebase for easy integration.", timestamp: "06/14/2025 10:15 AM" }
        ],
        upvotes: 5
      },
      {
        id: 2,
        question: "What is the best way to secure user data?",
        description: "Security measures and encryption tips are needed.",
        replies: 
        [
          { text: "Always use HTTPS and encrypt sensitive data at rest and in transit.", timestamp: "06/14/2025 10:20 AM" }
        ],
        upvotes: 3
      },
      {
        id: 3,
        question: "How can I add emoji reactions?",
        description: "I want to add emoji support to messages, any libraries?",
        replies: [],
        upvotes: 0
      }
    ];

    const conversationListEl = document.getElementById('conversation-list');
    const addQuestionForm = document.getElementById('add-question-form');
    const newQuestionTextInput = document.getElementById('new-question-text');
    const newQuestionDescInput = document.getElementById('new-question-desc');
    const addQuestionBtn = document.getElementById('add-question-btn');

    const navConversationsBtn = document.getElementById('nav-conversations');
    const navProfileBtn = document.getElementById('nav-profile');
    const conversationsSection = document.getElementById('conversations-section');
    const profileSection = document.getElementById('profile-section');

    const notificationToggle = document.getElementById('notification-toggle');
    const notificationStatusEl = document.getElementById('notification-status');

    function requestNotificationPermission() 
    {
        if (!("Notification" in window)) 
        {
            console.log("This browser does not support desktop notification.");
            notificationStatusEl.textContent = "Your browser does not support notifications.";
            notificationToggle.disabled = true; 
            return;
        }

        if (Notification.permission === "default") 
        {
            Notification.requestPermission().then(permission => 
            {
                if (permission === "granted") 
                {
                    console.log("Notification permission granted.");
                    notificationStatusEl.textContent = "Notifications are ON.";
                    updateNotificationToggle(true);
                } 
                else 
                {
                    console.log("Notification permission denied.");
                    notificationStatusEl.textContent = "Notifications are OFF (permission denied).";
                    updateNotificationToggle(false);
                }
            });
        } 
        else if (Notification.permission === "granted") 
        {
            notificationStatusEl.textContent = "Notifications are ON.";
        } 
        else 
        { 
            notificationStatusEl.textContent = "Notifications are OFF (permission denied by browser settings).";
            updateNotificationToggle(false);
            notificationToggle.disabled = true;
        }
    }

    function updateNotificationToggle(isChecked) 
    {
        if (notificationToggle) 
        {
            notificationToggle.checked = isChecked;
        }
    }

    function loadNotificationPreference() 
    {
        const isEnabled = localStorage.getItem('notificationsEnabled') === 'true';
        notificationToggle.checked = isEnabled;
        if (isEnabled) 
        {
            requestNotificationPermission();
        } 
        else 
        {
             notificationStatusEl.textContent = "Notifications are OFF.";
        }
    }

    function showNotification(title, body) 
    {
        const areNotificationsEnabled = localStorage.getItem('notificationsEnabled') === 'true';
        if (areNotificationsEnabled && Notification.permission === "granted") 
        {
            const notification = new Notification(title, 
            {
                body: body,
                icon: 'https://cdn-icons-png.flaticon.com/512/685/685317.png',
                badge: 'https://cdn-icons-png.flaticon.com/512/685/685317.png'
            });

            notification.onclick = () => 
            {
                window.focus();
            };
        }
    }

    function renderConversations() 
    {
      conversationListEl.innerHTML = ''; 
      conversations.forEach(conv => 
      {
        const conversationCard = document.createElement('div');
        conversationCard.className = 'conversation-card';
        conversationCard.dataset.id = conv.id;

        const repliesHtml = conv.replies.length > 0
          ? conv.replies.map(reply => `
            <div class="reply">
              ${reply.text}
              <div class="reply-timestamp">${reply.timestamp}</div>
            </div>
          `).join('')
          : '<p style="font-size:0.9rem; color:#6b7280; text-align: center; margin-top: 10px;">No replies yet. Be the first to answer!</p>';

        conversationCard.innerHTML = `
          <div class="conversation-title">
            ${conv.question}
            <span class="upvote-count" data-upvotes="${conv.upvotes}">${conv.upvotes} Upvotes</span>
          </div>

          <div class="conversation-description">${conv.description || 'No description provided.'}</div>

          <div class="actions">
            <button class="btn btn-answer" data-id="${conv.id}">
              <span class="material-icons">reply</span> Answer
            </button>
            <button class="btn btn-upvote" data-id="${conv.id}">
              <span class="material-icons">thumb_up</span> Upvote
            </button>
            ${conv.replies.length > 0 ? `<button class="btn btn-toggle-replies" data-id="${conv.id}">
              <span class="material-icons">comment</span> ${conv.replies.length} Replies
            </button>` : ''}
          </div>

          <div class="replies-container" data-id="${conv.id}">
            ${repliesHtml}
          </div>
        `;
        conversationListEl.appendChild(conversationCard);
      });

      addEventListenersToConversationCards();
    }

    function addEventListenersToConversationCards() 
    {
      document.querySelectorAll('.btn-answer').forEach(button => 
      {
        button.onclick = (e) => 
        {
          const convId = parseInt(e.currentTarget.dataset.id);
          const conversationCard = e.currentTarget.closest('.conversation-card');
          let replyInputContainer = conversationCard.querySelector('.reply-input-container');

          if (replyInputContainer) 
          {
            replyInputContainer.remove();
            return;
          }

          replyInputContainer = document.createElement('div');
          replyInputContainer.className = 'reply-input-container';
          replyInputContainer.innerHTML = `
            <textarea placeholder="Type your reply here..." data-id="${convId}"></textarea>
            <button class="btn-send-reply" data-id="${convId}" disabled>Send</button>
          `;
          conversationCard.appendChild(replyInputContainer);

          const replyTextArea = replyInputContainer.querySelector('textarea');
          const sendReplyButton = replyInputContainer.querySelector('.btn-send-reply');

          replyTextArea.addEventListener('input', () => 
          {
            sendReplyButton.disabled = replyTextArea.value.trim().length === 0;
          });

          sendReplyButton.onclick = () => 
          {
            const replyText = replyTextArea.value.trim();
            if (replyText) 
            {
              const conversation = conversations.find(c => c.id === convId);
              if (conversation) 
              {
                const now = new Date();
                const timestamp = now.toLocaleString('en-US', 
                {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit'
                }).replace(',', ''); 
                conversation.replies.push({ text: replyText, timestamp: timestamp });
                renderConversations();

                showNotification("New Answer!", `Someone answered your question: "${conversation.question}"`);

                replyInputContainer.remove(); 
              }
            }
          };

          const repliesContainer = conversationCard.querySelector('.replies-container');
          if (repliesContainer) 
          {
            repliesContainer.classList.add('show');
          }
          replyTextArea.focus(); 
        };
      });

      document.querySelectorAll('.btn-upvote').forEach(button => 
      {
        button.onclick = (e) => 
        {
          const convId = parseInt(e.currentTarget.dataset.id);
          const conversation = conversations.find(c => c.id === convId);
          if (conversation) 
          {
            conversation.upvotes = (conversation.upvotes || 0) + 1; 
            const upvoteCountSpan = e.currentTarget.closest('.conversation-card').querySelector('.upvote-count');
            if (upvoteCountSpan) 
            {
                upvoteCountSpan.textContent = `${conversation.upvotes} Upvotes`;
                upvoteCountSpan.dataset.upvotes = conversation.upvotes;

                showNotification("Upvote Received!", `Your question "${conversation.question}" just received an upvote!`);
            }
          }
        };
      });

      document.querySelectorAll('.btn-toggle-replies').forEach(button => 
      {
        button.onclick = (e) => 
        {
          const convId = parseInt(e.currentTarget.dataset.id);
          const conversationCard = e.currentTarget.closest('.conversation-card');
          const repliesContainer = conversationCard.querySelector(`.replies-container[data-id="${convId}"]`);
          if (repliesContainer) 
          {
            repliesContainer.classList.toggle('show'); 
          }
        };
      });
    }

    function validateAddQuestionForm() 
    {
      addQuestionBtn.disabled = newQuestionTextInput.value.trim().length === 0;
    }

    newQuestionTextInput.addEventListener('input', validateAddQuestionForm);

    addQuestionForm.addEventListener('submit', (e) => 
    {
      e.preventDefault(); 
      const newQuestion = 
      {
        id: conversations.length > 0 ? Math.max(...conversations.map(c => c.id)) + 1 : 1, 
        question: newQuestionTextInput.value.trim(),
        description: newQuestionDescInput.value.trim(),
        replies: [],
        upvotes: 0
      };

      if (newQuestion.question) 
      {
        conversations.unshift(newQuestion); 
        renderConversations(); 
        newQuestionTextInput.value = ''; 
        newQuestionDescInput.value = '';
        validateAddQuestionForm(); 
      }
    });

    navConversationsBtn.addEventListener('click', () => 
    {
      navConversationsBtn.classList.add('active');
      navProfileBtn.classList.remove('active');
      conversationsSection.hidden = false;
      profileSection.hidden = true;
    });

    navProfileBtn.addEventListener('click', () => 
    {
      navProfileBtn.classList.add('active');
      navConversationsBtn.classList.remove('active');
      profileSection.hidden = false;
      conversationsSection.hidden = true;
      requestNotificationPermission();
    });

    notificationToggle.addEventListener('change', (event) => 
    {
        const isChecked = event.target.checked;
        localStorage.setItem('notificationsEnabled', isChecked);

        if (isChecked) 
        {
            requestNotificationPermission();
        } 
        else 
        {
            notificationStatusEl.textContent = "Notifications are OFF. You can re-enable them anytime.";
            console.log("Notifications disabled by user preference.");
        }
    });

    document.addEventListener('DOMContentLoaded', () => 
    {
      renderConversations(); 
      validateAddQuestionForm(); 
      loadNotificationPreference(); 

      conversationsSection.hidden = false;
      profileSection.hidden = true;
      navConversationsBtn.classList.add('active');
      navProfileBtn.classList.remove('active');
    });
  
