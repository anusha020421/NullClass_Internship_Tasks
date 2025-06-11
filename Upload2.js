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

