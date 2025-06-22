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


# TASK-7
# Multi-Language OTP Verification Portal

## 📌 Key Features

**6 Language Support:** English, Spanish, Hindi, Portuguese, Chinese, French

**Dual Verification:**
- ✉️ Email OTP for French
- 📱 Mobile OTP for other languages
  
**Security:**
- OTP expiration
- Validation before language switch
  
**User Experience:**
- Clean, responsive interface
- Real-time content translation
- Interactive OTP flow
  
**🛠️ Technical Implementation**
    A[Language Selection] -->|French| B[Email Verification]
    A -->|Other Languages| C[Mobile Verification]
    B --> D[Send Email OTP]
    C --> E[Send SMS OTP]
    D --> F[Verify OTP]
    E --> F
    F --> G[Switch Language]

**LanguagePortal7.html**

    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Language Portal</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link  href="./LanguagePortal7.css" rel="stylesheet">
    </head>

    <body>
    <div class="container">
        <header>
            <div class="logo"><b>Global</b></div>
            <select id="language-select">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="hi">हिन्दी</option>
                <option value="pt">Português</option>
                <option value="zh">中文</option>
                <option value="fr">Français</option>
            </select>
        </header>
        
        <div class="content">
            <h1 id="welcome-text"><b>Welcome to Global</b></h1>
            <p id="description">Please select your preferred language from the dropdown menu.</p>
        </div>
    </div>
    
    <div id="otp-modal">
        <div class="modal-content">
            <h2 id="modal-title">Verify Your Identity</h2>
            <p id="modal-description">We need to verify your identity before switching languages.</p>
            
            <div class="input-group" id="email-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" placeholder="your@email.com">
            </div>
            
            <div class="input-group" id="mobile-group">
                <label for="mobile">Mobile Number</label>
                <input type="tel" id="mobile" placeholder="+1 234 567 8900">
            </div>
            
            <div class="input-group hidden" id="otp-group">
                <label for="otp">Enter OTP</label>
                <input type="text" id="otp" placeholder="123456" maxlength="6">
                <div id="otp-timer">OTP will expire in <span id="countdown">120</span> seconds</div>
            </div>
            
            <div class="button-group">
                <button id="send-otp-btn" class="btn btn-primary">Send OTP</button>
                <button id="verify-otp-btn" class="btn btn-primary hidden">Verify OTP</button>
                <button id="cancel-btn" class="btn btn-secondary">Cancel</button>
            </div>
        </div>
    </div>

    <script src="./LanguagePortal7.js"> </script>
    
    </body>
    </html>

**LanguagePortal7.css**

     :root 
    {
         --primary: #4361ee;
         --primary-dark: #3a56d4;
         --secondary: #3f37c9;
         --accent: #4895ef;
         --success: #4cc9f0;
         --danger: #f72585;
         --light: #f8f9fa;
         --dark: #212529;
         --gray: #6c757d;
         --white: #ffffff;
     }

     * 
     {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
     }

    body 
    {
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        min-height: 100vh;
        color: var(--dark);
        line-height: 1.6;
        padding: 20px;
    }

    .container 
    {
        max-width: 800px;
        margin: 2rem auto;
        background: var(--white);
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    header 
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    .logo 
    {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--primary);
    }

    #language-select 
    {
        padding: 0.75rem 2rem 0.75rem 1rem;
        font-size: 1rem;
        border: 2px solid var(--primary);
        border-radius: 8px;
        background-color: var(--white);
        color: var(--dark);
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .content 
    {
        text-align: center;
        padding: 2rem 0;
    }

    h1 
    {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--primary);
    }

    p 
    {
        font-size: 1.1rem;
        color: var(--gray);
        margin-bottom: 2rem;
    }

    #otp-modal 
    {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .modal-content 
    {
        background: var(--white);
        border-radius: 16px;
        width: 90%;
        max-width: 500px;
        padding: 2.5rem;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }

    .input-group 
    {
        margin-bottom: 1.5rem;
    }

    .input-group input 
    {
        width: 100%;
        padding: 1rem;
        border: 2px solid #e9ecef;
        border-radius: 8px;
        font-size: 1rem;
    }

    .button-group 
    {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }

    .btn 
    {
        padding: 1rem;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        flex: 1;
    }

    .btn-primary 
    {
        background-color: var(--primary);
        color: var(--white);
    }

    .btn-secondary 
    {
        background-color: var(--light);
        color: var(--dark);
    }

    .hidden 
    {
        display: none !important;
    }

    #otp-timer 
    {
        font-size: 0.9rem;
        color: var(--gray);
        margin-top: 0.5rem;
    }

**LanguagePortal7.js**

    const translations = 
    {
        en: 
        {
            welcome: "Welcome to Global",
            description: "Please select your preferred language from the dropdown menu.",
            verifyTitle: "Verify Your Identity",
            verifyDesc: "We need to verify your identity before switching languages.",
            emailLabel: "Email Address",
            mobileLabel: "Mobile Number",
            otpLabel: "Enter OTP",
            sendOtp: "Send OTP",
            verifyOtp: "Verify OTP",
            cancel: "Cancel",
            otpExpire: "OTP will expire in {seconds} seconds"
        },
    es: 
    {
        welcome: "Bienvenido a Global",
        description: "Seleccione su idioma preferido del menú desplegable.",
        verifyTitle: "Verifique su identidad",
        verifyDesc: "Necesitamos verificar su identidad antes de cambiar de idioma.",
        emailLabel: "Dirección de correo electrónico",
        mobileLabel: "Número de teléfono móvil",
        otpLabel: "Ingrese OTP",
        sendOtp: "Enviar OTP",
        verifyOtp: "Verificar OTP",
        cancel: "Cancelar",
        otpExpire: "OTP expirará en {seconds} segundos"
    },
    hi: 
    {        
        welcome: "ग्लोबल में आपका स्वागत है",
        description: "कृपया ड्रॉपडाउन मेनू से अपनी पसंदीदा भाषा चुनें।",
        verifyTitle: "अपनी पहचान सत्यापित करें",
        verifyDesc: "भाषा बदलने से पहले हमें आपकी पहचान सत्यापित करने की आवश्यकता है।",
        emailLabel: "ईमेल पता",
        mobileLabel: "मोबाइल नंबर",
        otpLabel: "ओटीपी दर्ज करें",
        sendOtp: "ओटीपी भेजें",
        verifyOtp: "ओटीपी सत्यापित करें",
        cancel: "रद्द करें",
        otpExpire: "ओटीपी {seconds} सेकंड में समाप्त हो जाएगा"
    },
    pt: 
    {
        welcome: "Bem-vindo ao Global",
        description: "Selecione seu idioma preferido no menu suspenso.",
        verifyTitle: "Verifique sua identidade",
        verifyDesc: "Precisamos verificar sua identidade antes de mudar de idioma.",
        emailLabel: "Endereço de e-mail",
        mobileLabel: "Número de telemóvel",
        otpLabel: "Digite OTP",
        sendOtp: "Enviar OTP",
        verifyOtp: "Verificar OTP",
        cancel: "Cancelar",
        otpExpire: "OTP expirará em {seconds} segundos"
    },
    zh: 
    {
        welcome: "欢迎来到环球",
        description: "请从下拉菜单中选择您喜欢的语言。",
        verifyTitle: "验证您的身份",
        verifyDesc: "我们需要在切换语言之前验证您的身份。",
        emailLabel: "电子邮件地址",
        mobileLabel: "手机号码",
        otpLabel: "输入OTP",
        sendOtp: "发送OTP",
        verifyOtp: "验证OTP",
        cancel: "取消",
        otpExpire: "OTP将在{seconds}秒后过期"
    },
    fr: 
    {
        welcome: "Bienvenue sur Global",
        description: "Veuillez sélectionner votre langue préférée dans le menu déroulant.",
        verifyTitle: "Vérifiez votre identité",
        verifyDesc: "Nous devons vérifier votre identité avant de changer de langue.",
        emailLabel: "Adresse e-mail",
        mobileLabel: "Numéro de téléphone portable",
        otpLabel: "Entrez OTP",
        sendOtp: "Envoyer OTP",
        verifyOtp: "Vérifier OTP",
        cancel: "Annuler",
        otpExpire: "OTP expirera dans {seconds} secondes"
    }
    };
    
    const languageSelect = document.getElementById('language-select');
    const welcomeText = document.getElementById('welcome-text');
    const description = document.getElementById('description');
    const otpModal = document.getElementById('otp-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');
    const emailGroup = document.getElementById('email-group');
    const mobileGroup = document.getElementById('mobile-group');
    const otpGroup = document.getElementById('otp-group');
    const sendOtpBtn = document.getElementById('send-otp-btn');
    const verifyOtpBtn = document.getElementById('verify-otp-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const emailInput = document.getElementById('email');
    const mobileInput = document.getElementById('mobile');
    const otpInput = document.getElementById('otp');
    const countdown = document.getElementById('countdown');
    const otpTimer = document.getElementById('otp-timer');

    let currentLanguage = 'en';
    let generatedOtp = '';
    let otpTimerInterval;
    let timeLeft = 120;
    
    function updateUITranslations(lang) 
    {
        const t = translations[lang];
        welcomeText.textContent = t.welcome;
        description.textContent = t.description;
        modalTitle.textContent = t.verifyTitle;
        modalDesc.textContent = t.verifyDesc;
        emailGroup.querySelector('label').textContent = t.emailLabel;
        mobileGroup.querySelector('label').textContent = t.mobileLabel;
        otpGroup.querySelector('label').textContent = t.otpLabel;
        sendOtpBtn.textContent = t.sendOtp;
        verifyOtpBtn.textContent = t.verifyOtp;
        cancelBtn.textContent = t.cancel;
    }

    function generateOTP() 
    {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
    
    function startOTPTimer(lang) 
    {
        timeLeft = 120;
        updateTimerDisplay(lang);
                
    otpTimerInterval = setInterval(() => 
    {
        timeLeft--;
        updateTimerDisplay(lang);
                
        if (timeLeft <= 0) 
        {
            clearInterval(otpTimerInterval);
            otpGroup.classList.add('hidden');
            otpInput.value = '';
            alert('OTP has expired. Please request a new one.');
        }
    }, 1000);
    }
    
    function updateTimerDisplay(lang) 
    {
        countdown.textContent = timeLeft;
        otpTimer.textContent = translations[lang].otpExpire.replace('{seconds}', timeLeft);
    }
    
    languageSelect.addEventListener('change', () => 
    {
        const lang = languageSelect.value;
        if (lang === currentLanguage) return;
        otpModal.style.display = 'flex';
        if (lang === 'fr') 
        {
            emailGroup.classList.remove('hidden');
            mobileGroup.classList.add('hidden');
        }
    else 
    {
        mobileGroup.classList.remove('hidden');
        emailGroup.classList.add('hidden');
    }
            
    const t = translations[lang];
    modalTitle.textContent = t.verifyTitle;
    modalDesc.textContent = t.verifyDesc;
    emailGroup.querySelector('label').textContent = t.emailLabel;
    mobileGroup.querySelector('label').textContent = t.mobileLabel;
    sendOtpBtn.textContent = t.sendOtp;
    cancelBtn.textContent = t.cancel;
    });
    
    sendOtpBtn.addEventListener('click', () => 
    {
        const lang = languageSelect.value;
        if (lang === 'fr') 
        {
            const email = emailInput.value.trim();
            if (!email) 
            {
                alert('Please enter a valid email address');
                return;
            }         
            generatedOtp = generateOTP();
            console.log(`OTP ${generatedOtp} sent to email: ${email}`);
            alert(`OTP sent to ${email} (Demo: OTP is ${generatedOtp})`);
        } 
        else 
        {
            const mobile = mobileInput.value.trim();
        if (!mobile) 
        {
            alert('Please enter a valid mobile number');
            return;
        }
        generatedOtp = generateOTP();
        console.log(`OTP ${generatedOtp} sent to mobile: ${mobile}`);
        alert(`OTP sent to ${mobile} (Demo: OTP is ${generatedOtp})`);
    }
    otpGroup.classList.remove('hidden');
    verifyOtpBtn.classList.remove('hidden');
    sendOtpBtn.classList.add('hidden');
    startOTPTimer(lang);
    });
    
    verifyOtpBtn.addEventListener('click', () => 
    {
        const enteredOtp = otpInput.value.trim();
        if (enteredOtp === generatedOtp) 
        {
            clearInterval(otpTimerInterval);
            currentLanguage = languageSelect.value;
            updateUITranslations(currentLanguage);
            otpModal.style.display = 'none';
            otpGroup.classList.add('hidden');
            verifyOtpBtn.classList.add('hidden');
            sendOtpBtn.classList.remove('hidden');
            emailInput.value = '';
            mobileInput.value = '';
            otpInput.value = '';
            alert('Language changed successfully!');
        } 
        else 
        {
                
        alert('Invalid OTP. Please try again.');
    }
    });
    
    cancelBtn.addEventListener('click', () => 
    {
        languageSelect.value = currentLanguage;
        otpModal.style.display = 'none';
        clearInterval(otpTimerInterval);
        otpGroup.classList.add('hidden');
        verifyOtpBtn.classList.add('hidden');
        sendOtpBtn.classList.remove('hidden');
        emailInput.value = '';
        mobileInput.value = '';
        otpInput.value = '';
    });
    updateUITranslations('en');

