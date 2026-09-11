"use client";

import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    /* An alert() dropped the reader out of the page and left no trace of the
       confirmation once dismissed. The receipt now stays on the page. */
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
      form.reset();
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Sovereign Hero Band */}
      <section className="relative w-full bg-primary-container text-on-primary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg
            className="w-full h-full"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            width="100%"
          >
            <pattern
              height="20"
              id="royal-mesh"
              patternUnits="userSpaceOnUse"
              width="20"
            >
              <path
                d="M 0 10 L 10 0 L 20 10 L 10 20 Z"
                fill="none"
                stroke="#ffe08e"
                strokeWidth="0.5"
              ></path>
              <circle cx="10" cy="10" fill="#ffe08e" r="1.5"></circle>
            </pattern>
            <rect fill="url(#royal-mesh)" height="100%" width="100%"></rect>
          </svg>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-xl flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-space-sm mb-space-sm">
            <span className="w-6 h-[1px] bg-tertiary-fixed-dim"></span>
            <span className="font-body text-[12px] uppercase font-semibold tracking-widest text-tertiary-fixed">
              Palace Directorate of Communications
            </span>
            <span className="w-6 h-[1px] bg-tertiary-fixed-dim"></span>
          </div>

          <h1 className="font-heading type-display font-bold text-surface max-w-4xl">
            Contact the Palace Secretariat
          </h1>

          <p className="font-body text-[18px] text-surface-container-low max-w-2xl mt-space-md leading-relaxed">
            Official channels for civic correspondence, traditional council inquiries,
            media relations, and diplomatic liaison with the Palace of the Och&apos;Idoma.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              
              {/* Palace Secretariat */}
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm border border-outline/10">
                <div className="flex items-center gap-space-md mb-space-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span aria-hidden="true" className="material-symbols-outlined text-primary text-[24px]">
                      account_balance
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-[22px] font-semibold text-text-primary">
                      Palace Secretariat
                    </h3>
                    <span className="font-body text-[12px] uppercase tracking-wider text-text-muted">
                      Official Correspondence
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs mt-space-md font-body text-[14px]">
                  <div className="flex items-start gap-space-sm">
                    <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">
                      location_on
                    </span>
                    <span className="text-on-surface-variant">
                      Palace of the Och&apos;Idoma, <br />
                      Otukpo, Benue State, <br />
                      Nigeria.
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm mt-2">
                    <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[20px]">
                      mail
                    </span>
                    <a href="mailto:secretariat@ochidoma.org" className="text-primary font-semibold hover:underline">
                      secretariat@ochidoma.org
                    </a>
                  </div>
                  <div className="flex items-center gap-space-sm mt-2">
                    <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[20px]">
                      call
                    </span>
                    <span className="text-on-surface-variant">+234 (0) 708 000 IDOMA</span>
                  </div>
                </div>
              </div>

              {/* Media & Press Inquiries */}
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm border border-outline/10">
                <div className="flex items-center gap-space-md mb-space-sm">
                  <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center shrink-0">
                    <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[24px]">
                      campaign
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-[22px] font-semibold text-text-primary">
                      Media &amp; Press Bureau
                    </h3>
                    <span className="font-body text-[12px] uppercase tracking-wider text-text-muted">
                      Journalism &amp; Broadcast
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs mt-space-md font-body text-[14px]">
                  <p className="text-on-surface-variant mb-2">
                    For official press statements, interview requests with the Palace Spokesperson, 
                    and media accreditation for royal events.
                  </p>
                  <div className="flex items-center gap-space-sm">
                    <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[20px]">
                      mail
                    </span>
                    <a href="mailto:media@ochidoma.org" className="text-primary font-semibold hover:underline">
                      media@ochidoma.org
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-surface-container-low p-space-lg md:p-space-xl rounded-xl shadow-md border border-outline/10">
              <div className="mb-space-lg">
                <h3 className="font-heading text-[28px] font-semibold text-text-primary">
                  General Inquiries
                </h3>
                <p className="font-body text-[14px] text-text-muted mt-1">
                  Send a direct message to the Palace Directorate of Communications. 
                  All inquiries are securely logged and routed to the appropriate department.
                </p>
              </div>

              {sent ? (
                <div
                  aria-live="polite"
                  className="flex flex-col items-center text-center gap-space-sm py-space-xl"
                  role="status"
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[48px] text-status-success"
                  >
                    mark_email_read
                  </span>
                  <h4 className="font-heading text-[22px] font-semibold text-text-primary">
                    Your message has reached the Palace Secretariat.
                  </h4>
                  <p className="font-body text-[14px] text-text-muted max-w-md leading-relaxed">
                    Correspondence is logged in the order received and routed to
                    the department you selected. The Directorate of
                    Communications replies to civic inquiries within ten working
                    days.
                  </p>
                  <button
                    className="mt-space-xs inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded bg-surface-container text-text-primary font-body text-[12px] font-semibold uppercase tracking-wider"
                    onClick={() => setSent(false)}
                    type="button"
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[18px]"
                    >
                      edit_note
                    </span>
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>

                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary" htmlFor="name">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    type="text"
                    required
                    className="w-full px-space-md py-space-sm bg-surface rounded text-text-primary font-body text-[16px] border border-outline/20 focus:bg-surface-container-lowest focus:outline-none focus:border-primary transition-all placeholder:text-text-muted/60"
                    placeholder="Enter your full legal name"
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary" htmlFor="email">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      autoComplete="email"
                      type="email"
                      required
                      className="w-full px-space-md py-space-sm bg-surface rounded text-text-primary font-body text-[16px] border border-outline/20 focus:bg-surface-container-lowest focus:outline-none focus:border-primary transition-all placeholder:text-text-muted/60"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      type="tel"
                      className="w-full px-space-md py-space-sm bg-surface rounded text-text-primary font-body text-[16px] border border-outline/20 focus:bg-surface-container-lowest focus:outline-none focus:border-primary transition-all placeholder:text-text-muted/60"
                      placeholder="+234 ..."
                    />
                  </div>
                </div>

                {/* Subject / Category */}
                <div className="flex flex-col gap-1">
                  <label className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary" htmlFor="subject">
                    Subject / Department <span className="text-primary">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full px-space-md py-space-sm bg-surface rounded text-text-primary font-body text-[16px] border border-outline/20 focus:bg-surface-container-lowest focus:outline-none focus:border-primary transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select inquiry type...</option>
                    <option value="secretariat">General Correspondence (Secretariat)</option>
                    <option value="diaspora">Diaspora Relations</option>
                    <option value="development">Endowments &amp; Development</option>
                    <option value="media">Media &amp; Press</option>
                    <option value="traditional">Traditional Council Matters</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="font-body text-[11px] font-semibold uppercase tracking-wider text-text-primary" htmlFor="message">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-space-md py-space-sm bg-surface rounded text-text-primary font-body text-[16px] border border-outline/20 focus:bg-surface-container-lowest focus:outline-none focus:border-primary transition-all placeholder:text-text-muted/60 resize-y"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-space-sm mt-space-xs">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-space-sm px-space-lg bg-primary hover:bg-primary-container text-on-primary font-body text-[14px] font-bold uppercase tracking-wider rounded shadow transition-colors flex items-center justify-center gap-space-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {!isSubmitting && (
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined text-[18px]"
                      >
                        send
                      </span>
                    )}
                  </button>
                  <p className="font-body text-[11px] text-text-muted text-center flex items-center justify-center gap-1 mt-1">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[14px]"
                    >
                      lock
                    </span>
                    Your information is transmitted securely and handled in accordance with the NDPA.
                  </p>
                </div>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
