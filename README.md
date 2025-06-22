# NullClass_Internship_Tasks

# TASK-2

# Video Question Upload Feature with Email OTP Authentication

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


