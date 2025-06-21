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