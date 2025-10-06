import React, { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import Aos from "aos";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error saat user mulai mengetik
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validasi nama
    if (!formData.name.trim()) {
      newErrors.name = "Nama wajib diisi";
    } else if (formData.name.trim().length < 4) {
      newErrors.name = "Nama minimal 4 karakter";
    }

    // Validasi email
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (
      !formData.email.includes("@") ||
      formData.email.startsWith("@") ||
      formData.email.endsWith("@")
    ) {
      newErrors.email = "Email tidak valid";
    }

    // Validasi pesan
    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Pesan minimal 10 karakter";
    } else if (formData.message.trim().length > 500) {
      newErrors.message = "Pesan maksimal 500 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form sebelum submit
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulasi EmailJS - Ganti dengan kode asli di proyek Anda

    const serviceId = "service_9k6kygn";
    const templateId = "template_nmzisl6";
    const publicKey = "ErbYJnWZFAP1jWouT";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });

    // Simulasi untuk demo
    // setTimeout(() => {
    //   setSubmitStatus("success");
    //   setFormData({ name: "", email: "", message: "" });
    //   setIsSubmitting(false);
    //   setTimeout(() => setSubmitStatus(null), 5000);
    // }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F2EFE5] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div
        className="max-w-4xl w-full"
        data-aos="fade-bottom"
        data-aos-duration="1000"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-freckle text-[#48BEFF] mb-4">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-[#A1D6B2] font-freckle">
            Kirim pesan kepada saya
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border-2 border-[#A1D6B2]">
          <div className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-[#48BEFF] font-freckle text-lg mb-2"
              >
                Nama Kamu <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-[#A1D6B2]" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 bg-white/60 border-2 ${
                    errors.name ? "border-red-400" : "border-[#A1D6B2]/40"
                  } rounded-xl focus:outline-none focus:border-[#48BEFF] transition-colors text-gray-700 placeholder-gray-400`}
                  placeholder="Masukkan nama kamu"
                />
              </div>
              {errors.name && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            {/* Email Input */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-[#48BEFF] font-freckle text-lg mb-2"
              >
                Email Kamu <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#A1D6B2]" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 bg-white/60 border-2 ${
                    errors.email ? "border-red-400" : "border-[#A1D6B2]/40"
                  } rounded-xl focus:outline-none focus:border-[#48BEFF] transition-colors text-gray-700 placeholder-gray-400`}
                  placeholder="email"
                />
              </div>
              {errors.email && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="relative">
              <label
                htmlFor="message"
                className="block text-[#48BEFF] font-freckle text-lg mb-2"
              >
                Pesan Kamu <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-[#A1D6B2]" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full pl-12 pr-4 py-3 bg-white/60 border-2 ${
                    errors.message ? "border-red-400" : "border-[#A1D6B2]/40"
                  } rounded-xl focus:outline-none focus:border-[#48BEFF] transition-colors text-gray-700 placeholder-gray-400 resize-none`}
                  placeholder="Tulis pesan kamu disini..."
                />
              </div>
              <div className="flex justify-between items-center mt-1">
                {errors.message ? (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.message}</span>
                  </div>
                ) : (
                  <div className="text-gray-500 text-sm">
                    {formData.message.length}/500 karakter
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#48BEFF] to-[#A1D6B2] text-white font-freckle text-xl py-4 rounded-xl hover:from-[#3AA8E8] hover:to-[#8BC89F] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Mengirim...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Kirim Pesan
                </>
              )}
            </button>
          </div>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mt-6 p-4 bg-green-100 border-2 border-green-300 rounded-xl flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <p className="text-green-700 font-medium">
                Pesan berhasil terkirim! Terima kasih sudah menghubungi saya.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="mt-6 p-4 bg-red-100 border-2 border-red-300 rounded-xl flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
              <p className="text-red-700 font-medium">
                Terjadi kesalahan. Silakan coba lagi nanti.
              </p>
            </div>
          )}
        </div>

        {/* Decorative Elements */}
        {/* <div className="mt-8 flex justify-center gap-3">
          <div className="h-2 w-12 bg-[#48BEFF] rounded-full"></div>
          <div className="h-2 w-8 bg-[#A1D6B2] rounded-full"></div>
          <div className="h-2 w-4 bg-[#48BEFF]/60 rounded-full"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
