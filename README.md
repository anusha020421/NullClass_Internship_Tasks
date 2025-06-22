# NullClass_Internship_Tasks

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
    A[Language Selection] -->|French| B[Email Verification]...
    A -->|Other Languages| C[Mobile Verification]...
    B --> D[Send Email OTP]...
    C --> E[Send SMS OTP]...
    D --> F[Verify OTP]...
    E --> F...
    F --> G[Switch Language]...

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

