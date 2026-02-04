"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const btnTextRef = useRef<HTMLSpanElement>(null);
  const btnLoadingRef = useRef<HTMLSpanElement>(null);
  const formMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize EmailJS and form functionality exactly like original
    const initializeForm = () => {
      if (!formRef.current) return;
      
      const contactForm = formRef.current;
      const submitBtn = submitBtnRef.current;
      const btnText = btnTextRef.current;
      const btnLoading = btnLoadingRef.current;
      const formMessage = formMessageRef.current;
      
      // Initialize EmailJS immediately - exactly like original
      if (typeof window !== "undefined" && (window as any).emailjs) {
        (window as any).emailjs.init("6rRXLq1IpQrsJRJdk");
      }
      
      // Show message function - exactly like original
      function showMessage(message: string, isSuccess = true) {
        if (!formMessage) return;
        
        formMessage.textContent = message;
        formMessage.classList.remove("hidden", "bg-green-500/20", "text-green-300", "border-green-500/30", "bg-red-500/20", "text-red-300", "border-red-500/30");
        
        if (isSuccess) {
          formMessage.classList.add("bg-green-500/20", "text-green-300", "border", "border-green-500/30");
        } else {
          formMessage.classList.add("bg-red-500/20", "text-red-300", "border", "border-red-500/30");
        }
        
        // Auto hide after 5 seconds
        setTimeout(() => {
          formMessage.classList.add("hidden");
        }, 5000);
      }
      
      // Set loading state - exactly like original
      function setLoading(isLoading: boolean) {
        if (isLoading) {
          if (submitBtn) submitBtn.disabled = true;
          if (btnText) btnText.classList.add("hidden");
          if (btnLoading) btnLoading.classList.remove("hidden");
        } else {
          if (submitBtn) submitBtn.disabled = false;
          if (btnText) btnText.classList.remove("hidden");
          if (btnLoading) btnLoading.classList.add("hidden");
        }
      }
      
      // Handle form submission - exactly like original
      const handleSubmit = async (e: Event) => {
        e.preventDefault();
        
        // Get form data - exactly like original
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate required fields - exactly like original
        if (!data.from_name || !data.from_email || !data.subject || !data.message) {
          showMessage("Please fill in all required fields.", false);
          return;
        }
        
        // Validate email - exactly like original
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.from_email as string)) {
          showMessage("Please enter a valid email address.", false);
          return;
        }
        
        setLoading(true);
        
        try {
          // Send email using EmailJS - exactly like original
          const emailjs = (window as any).emailjs;
          const response = await emailjs.send(
            "service_7kkw8ch",
            "template_cd0j0k6",
            {
              from_name: data.from_name,
              from_email: data.from_email,
              subject: data.subject,
              message: data.message,
              to_email: "abbastaofeeq.001@gmail.com",
            }
          );
          
          if (response.status === 200) {
            showMessage("Thank you! Your message has been sent successfully. Kadir will get back to you soon.", true);
            contactForm.reset();
          } else {
            throw new Error("Failed to send message");
          }
        } catch (error) {
          console.error("EmailJS Error:", error);
          showMessage("Sorry, there was an error sending your message. Please try again later or email directly at abbastaofeeq.001@gmail.com", false);
        } finally {
          setLoading(false);
        }
      };
      
      contactForm.addEventListener("submit", handleSubmit);
      
      // Add input validation feedback - exactly like original
      const requiredFields = contactForm.querySelectorAll("[required]");
      requiredFields.forEach((field: Element) => {
        const inputField = field as HTMLInputElement | HTMLTextAreaElement;
        
        inputField.addEventListener("blur", () => {
          if (inputField.value.trim() === "") {
            inputField.classList.add("border-red-500/50");
            inputField.classList.remove("border-white/20");
          } else {
            inputField.classList.remove("border-red-500/50");
            inputField.classList.add("border-white/20");
          }
        });
        
        inputField.addEventListener("focus", () => {
          inputField.classList.remove("border-red-500/50");
          inputField.classList.add("border-white/40");
        });
      });
      
      // Email field validation - exactly like original
      const emailField = document.getElementById("from_email") as HTMLInputElement;
      if (emailField) {
        emailField.addEventListener("blur", () => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailField.value && !emailRegex.test(emailField.value)) {
            emailField.classList.add("border-red-500/50");
            emailField.classList.remove("border-white/20");
          } else if (emailField.value) {
            emailField.classList.remove("border-red-500/50");
            emailField.classList.add("border-white/20");
          }
        });
      }
    };
    
    // Initialize immediately - no delay
    initializeForm();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section id="contact" className="w-full bg-neutral-950 text-white pt-10 sm:pt-10 lg:pt-15 pb-5 sm:pb-10 lg:pb-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5">
              <p className="text-xs tracking-[0.22em] uppercase text-white/60">Connect</p>
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-tight"
                style={{ fontFamily: "var(--fancy-heading)" }}
              >
                Let&apos;s build something coherent
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8">
                Interested in long-term work where clarity, discipline, and meaningful outcomes matter.
              </p>
              
              {/* Quick Contact Info */}
              <div className="flex flex-col sm:flex-col justify-center gap-6 mb-8">
                <a 
                  href="mailto:abbastaofeeq.001@gmail.com"
                  className="text-lg font-medium text-white hover:text-white/80 transition focus-ring hover-lift" 
                  aria-label="Email"
                >
                  me@kadrisalami.com
                </a>
                <div className="flex items-center gap-4 text-sm text-white/75">
                  <a 
                    href="https://x.com/kadir_salami"
                    className="hover:text-white/90 transition-all duration-300 hover:scale-110 focus-ring hover-lift" 
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kadir-salami-0a090054/"
                    className="hover:text-white/90 transition-all duration-300 hover:scale-110 focus-ring hover-lift" 
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/kadirsalami/"
                    className="hover:text-white/90 transition-all duration-300 hover:scale-110 focus-ring hover-lift" 
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.689-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Compact Contact Form */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_18px_50px_-40px_rgba(255,255,255,0.3)]">
                  <form ref={formRef} className="space-y-4">
                    {/* Form Header */}
                    <div className="text-center mb-6">
                      <h3 
                        className="text-lg font-semibold text-white mb-2" 
                        style={{ fontFamily: "var(--fancy-heading)" }}
                      >
                        Send a message
                      </h3>
                      <p className="text-sm text-white/60">
                        Your message will be delivered directly
                      </p>
                    </div>

                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input 
                          type="text" 
                          id="from_name" 
                          name="from_name" 
                          required 
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 text-sm"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          id="from_email" 
                          name="from_email" 
                          required 
                          placeholder="Your Email"
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 text-sm"
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        required 
                        placeholder="Subject"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 text-sm"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={4} 
                        placeholder="Your message..."
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 resize-none text-sm"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button 
                        ref={submitBtnRef}
                        type="submit" 
                        className="w-full px-6 py-3 cursor-pointer bg-white text-neutral-900 font-medium rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_-15px_rgba(255,255,255,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 text-sm"
                      >
                        <span ref={btnTextRef}>Send Message</span>
                        <span ref={btnLoadingRef} className="hidden">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-neutral-900 inline"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4">
                            </circle>
                            <path className="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                          </svg>
                          Sending...
                        </span>
                      </button>
                    </div>

                    {/* Success/Error Messages */}
                    <div ref={formMessageRef} className="hidden rounded-lg p-4 text-sm font-medium transition-all duration-300">
                    </div>
                  </form>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/50">
                  <span>Kadir Salami · 2026</span>
                  <button 
                    onClick={scrollToTop}
                    type="button"
                    className="inline-flex items-center gap-1 text-white hover:text-white/90 transition cursor-pointer mt-4 sm:mt-0 focus-ring hover-lift"
                    aria-label="Back to top"
                  >
                    <span>Back to top</span>
                    <span aria-hidden>↑</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EmailJS Script - Using original approach */}
      <script 
        type="text/javascript" 
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        async
      />
    </>
  );
}
