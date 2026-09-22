import React from 'react';
import { X, Phone, MapPin, Calendar, Clock, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../types';
import { ContactForm } from './ContactForm';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0a1124]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative bg-[#fbf9f5] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#e6d7c3] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#0a1124] text-[#fbf9f5] px-6 py-5 flex items-center justify-between border-b border-[#e6d7c3]/20">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#e8b4a2] font-semibold block">
              Gaberell Elsbeth · Bellach
            </span>
            <h2 id="consultation-modal-title" className="font-serif text-xl sm:text-2xl text-[#fbf9f5]">
              Arrange a Consultation
            </h2>
          </div>
          <button
            id="close-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Quick Call Box */}
          <div className="bg-[#fae9e2]/80 border border-[#e8b4a2] p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#0a1124]">
                Fastest Way to Arrange Your Visit:
              </p>
              <p className="text-sm text-[#0a1124]/80">
                Speak directly with Gaberell Elsbeth at Lommiswilerstrasse 33.
              </p>
            </div>
            <a
              id="modal-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-[#0a1124] text-[#fbf9f5] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#152238] transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#e8b4a2]" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Form inside modal */}
          <ContactForm compact onSuccessNotice={() => {}} />

          {/* Direct Address Details */}
          <div className="pt-2 text-xs text-[#0a1124]/75 border-t border-[#0a1124]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0a1124]" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
            <p className="italic text-[#0a1124]/60">Appointments arranged individually by telephone</p>
          </div>
        </div>
      </div>
    </div>
  );
};
