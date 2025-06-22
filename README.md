# NullClass_Internship_Tasks

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
