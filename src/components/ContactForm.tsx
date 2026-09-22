import React, { useState } from 'react';
import { Phone, CheckCircle2, AlertCircle, Send, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, ContactFormData, FormErrors } from '../types';

interface ContactFormProps {
  compact?: boolean;
  onSuccessNotice?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ compact = false, onSuccessNotice }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    preferredTiming: 'Flexible / Daytime',
    message: '',
    haircareInterest: 'General Consultation & Haircut',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)\.]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a telephone number so we can reach you.';
    } else if (cleanPhone.length < 7 || !/^\+?[0-9]+$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid telephone number (e.g., 032 618 20 38).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief note regarding your inquiry or hair needs.';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Please provide at least a brief message (5+ characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief reliable processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccessNotice) onSuccessNotice();
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      preferredTiming: 'Flexible / Daytime',
      message: '',
      haircareInterest: 'General Consultation & Haircut',
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-[#fdfcf9] border border-[#e8b4a2]/50 p-6 sm:p-8 rounded-2xl shadow-sm text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-12 h-12 rounded-full bg-[#fae9e2] text-[#0a1124] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6 text-[#0a1124]" />
        </div>
        <div className="space-y-1">
          <h3 className="font-serif text-2xl font-bold text-[#0a1124]">
            Inquiry Prepared
          </h3>
          <p className="text-sm text-[#0a1124]/80 max-w-md mx-auto">
            Thank you, {formData.fullName}. Your note has been recorded. Because Gaberell Elsbeth coordinates appointments individually to avoid overlapping schedules, appointments are confirmed directly by phone.
          </p>
        </div>

        <div className="bg-[#fae9e2]/60 p-4 rounded-xl max-w-md mx-auto text-left space-y-2 text-xs text-[#0a1124]">
          <p className="font-semibold text-xs uppercase tracking-wider text-[#0a1124]">
            Next Step for Immediate Confirmation:
          </p>
          <p>
            You may call directly now to discuss date and time availability:
          </p>
          <a
            id="submitted-call-link"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 font-semibold text-sm text-[#0a1124] hover:underline"
          >
            <Phone className="w-4 h-4 text-[#0a1124]" />
            <span>{BUSINESS_INFO.phone} (Gaberell Elsbeth)</span>
          </a>
        </div>

        <div className="pt-2">
          <button
            id="reset-inquiry-btn"
            onClick={handleReset}
            className="text-xs uppercase tracking-wider font-semibold text-[#0a1124]/70 hover:text-[#0a1124] cursor-pointer"
          >
            Submit another message or clear form
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="contact-consultation-form"
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#fdfcf9] border border-[#0a1124]/15 p-6 sm:p-8 rounded-2xl shadow-sm space-y-5"
    >
      <div className="border-b border-[#0a1124]/10 pb-4">
        <span className="text-[11px] uppercase tracking-widest text-[#0a1124]/70 font-semibold">
          Personal Consultation Inquiry
        </span>
        <h3 className="font-serif text-2xl font-normal text-[#0a1124]">
          Send an Inquiry to Gaberell Elsbeth
        </h3>
        <p className="text-xs text-[#0a1124]/70 mt-1">
          Have a question before calling? Share your details below. For urgent appointments, please call <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold underline hover:text-[#0a1124]">{BUSINESS_INFO.phone}</a>.
        </p>
      </div>

      {/* Full Name */}
      <div className="space-y-1">
        <label
          htmlFor="form-fullName"
          className="block text-xs font-semibold uppercase tracking-wider text-[#0a1124]"
        >
          Your Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="form-fullName"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
          }}
          placeholder="e.g., Claudia Müller"
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 bg-white ${
            errors.fullName
              ? 'border-red-400 focus:ring-red-200'
              : 'border-[#0a1124]/20 focus:border-[#0a1124] focus:ring-[#e8b4a2]/40'
          }`}
        />
        {errors.fullName && (
          <p className="text-xs text-red-600 flex items-center gap-1 mt-0.5">
            <AlertCircle className="w-3 h-3" />
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div className="space-y-1">
        <label
          htmlFor="form-phone"
          className="block text-xs font-semibold uppercase tracking-wider text-[#0a1124]"
        >
          Your Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="form-phone"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
            if (errors.phone) setErrors({ ...errors, phone: undefined });
          }}
          placeholder="e.g., 079 123 45 67 or 032 ..."
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 bg-white ${
            errors.phone
              ? 'border-red-400 focus:ring-red-200'
              : 'border-[#0a1124]/20 focus:border-[#0a1124] focus:ring-[#e8b4a2]/40'
          }`}
        />
        {errors.phone && (
          <p className="text-xs text-red-600 flex items-center gap-1 mt-0.5">
            <AlertCircle className="w-3 h-3" />
            {errors.phone}
          </p>
        )}
      </div>

      {/* Hair Inquiry Subject / Interest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label
            htmlFor="form-interest"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0a1124]"
          >
            Topic of Interest
          </label>
          <select
            id="form-interest"
            value={formData.haircareInterest}
            onChange={(e) => setFormData({ ...formData, haircareInterest: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#0a1124]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8b4a2]/40 bg-white"
          >
            <option value="General Consultation & Haircut">General Consultation & Haircut</option>
            <option value="Hair Styling & Finishing">Hair Styling & Finishing</option>
            <option value="Hair Care & Maintenance">Hair Care & Maintenance</option>
            <option value="Salon Visit & Location Information">Salon Visit & Location Information</option>
            <option value="Other Hair Inquiry">Other Hair Inquiry</option>
          </select>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="form-timing"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0a1124]"
          >
            Preferred Timing Preference
          </label>
          <select
            id="form-timing"
            value={formData.preferredTiming}
            onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#0a1124]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8b4a2]/40 bg-white"
          >
            <option value="Flexible / Daytime">Flexible / Daytime</option>
            <option value="Morning hours preference">Morning hours preference</option>
            <option value="Afternoon preference">Afternoon preference</option>
            <option value="Will discuss on phone call">Will discuss on phone call</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label
          htmlFor="form-message"
          className="block text-xs font-semibold uppercase tracking-wider text-[#0a1124]"
        >
          Message / Hair Requirements <span className="text-red-500">*</span>
        </label>
        <textarea
          id="form-message"
          rows={compact ? 3 : 4}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          placeholder="Briefly describe what you are looking for (e.g., haircut consultation, general advice, or scheduling preferences)..."
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 bg-white ${
            errors.message
              ? 'border-red-400 focus:ring-red-200'
              : 'border-[#0a1124]/20 focus:border-[#0a1124] focus:ring-[#e8b4a2]/40'
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-600 flex items-center gap-1 mt-0.5">
            <AlertCircle className="w-3 h-3" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Disclaimer */}
      <div className="text-[11px] text-[#0a1124]/65 bg-[#f5f0e6] p-3 rounded-lg border border-[#0a1124]/10">
        <p>
          <span className="font-semibold text-[#0a1124]">Notice:</span> Gaberell Elsbeth confirms all appointments directly by telephone to guarantee dedicated, unhurried time for each client.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        id="submit-contact-form-btn"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-full bg-[#0a1124] text-[#fbf9f5] font-semibold text-xs uppercase tracking-widest hover:bg-[#152238] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
      >
        {isSubmitting ? (
          <span>Processing Inquiry...</span>
        ) : (
          <>
            <Send className="w-4 h-4 text-[#e8b4a2]" />
            <span>Submit Consultation Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
};
