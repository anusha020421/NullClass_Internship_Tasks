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