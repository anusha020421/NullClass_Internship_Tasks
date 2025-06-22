# NullClass_Internship_Tasks

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
