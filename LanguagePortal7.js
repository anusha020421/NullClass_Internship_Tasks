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