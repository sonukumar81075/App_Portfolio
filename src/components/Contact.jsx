/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { HeroSectionData, Socialicons } from "../DynamicData/HeroSection";
import { ContactData } from "../DynamicData/services ";
import { Link } from "react-router-dom";

const Contact = () => {
  const [sentData, setSentData] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    setSubmitting(true);
    setSubmitStatus(null);

    const formattedMessage = [
      "New contact form message",
      "-------------------------",
      `Name   : ${values.name}`,
      `Phone  : ${values.phone}`,
      `Email  : ${values.email}`,
      `Subject: ${values.subject}`,
      "",
      "Message:",
      values.message,
    ].join("\n");

    emailjs
      .send(
        "service_nhu1gtg",
        "template_yg2oi0j",
        {
          name: values.name,
          phone: values.phone,
          email: values.email,
          subject: values.subject,
          message: values.message,
          formattedMessage, // use this in your EmailJS template for nicer layout
        },
        "0Gqnxp7XnE9obTWe0"
      )
      .then(() => {
        setSentData(values);
        setSubmitStatus("success");
        resetForm();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSubmitStatus("error");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <div className="section-shell flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="w-full container lg:px-12 mb-3"
        >
          <p className="text-[var(--accent)] text-sm font-medium uppercase tracking-[0.18em]">
            {ContactData.title}
          </p>
          <h2 className="premium-section-title mt-2">{ContactData.Heading}</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-8 w-full container lg:px-12 items-start">

          {/* LEFT PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="app-card glass-card p-4 sm:p-6 rounded-[18px] sm:rounded-xl border-l-[2px] border-l-[var(--accent)]"
          >
            <img
              src={ContactData.imageUrl}
              alt="Profile"
              className="w-full h-44 sm:h-52 object-cover rounded-[14px] sm:rounded-xl contact-hero-glow"
            />

            <h3 className="text-[20px] sm:text-xl leading-[1.35] font-medium app-text-primary mt-3 sm:mt-4">
              {ContactData.username}
            </h3>
            <p className="app-text-secondary text-[14px] sm:text-base">{ContactData.postname}</p>
            <p className="app-text-secondary text-[14px] sm:text-base leading-[1.45] mt-2">{ContactData.description}</p>

            <p className="app-text-primary mt-4">{ContactData.phone}</p>
            <p className="app-text-primary">{ContactData.email}</p>

            <div className="py-4 sm:py-6">
              <p className="app-text-secondary text-[14px] sm:text-sm mb-3 sm:mb-4">
                {HeroSectionData.facebookicon}
              </p>

              <div className="flex gap-3 sm:gap-6">
                {Socialicons.map((icon) => (
                  <Link
                    key={icon.id}
                    to={icon.to}
                    target="_blank"
                    className="app-card-soft app-text-primary hover:text-[var(--accent)] p-3 sm:p-4 rounded-xl sm:rounded-lg transition-transform hover:-translate-y-1"
                  >
                    {icon.svg}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="app-card glass-card md:col-span-2 p-4 sm:p-6 rounded-[18px] sm:rounded-xl border-l-[2px] border-l-[var(--accent)]/70"
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="app-text-secondary text-[14px] sm:text-base block mb-1.5 sm:mb-2">
                        Your Name
                      </label>
                      <Field
                        name="name"
                        className="app-input"
                      />
                      <ErrorMessage name="name" component="div" className="text-yellow-500 text-sm mt-1" />
                    </div>

                    <div>
                      <label className="app-text-secondary text-[14px] sm:text-base block mb-1.5 sm:mb-2">
                        Phone
                      </label>
                      <Field
                        name="phone"
                        className="app-input"
                      />
                      <ErrorMessage name="phone" component="div" className="text-yellow-500 text-sm mt-1" />
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4">
                    <label className="app-text-secondary text-[14px] sm:text-base block mb-1.5 sm:mb-2">Email</label>
                    <Field
                      name="email"
                      type="email"
                      className="app-input"
                    />
                    <ErrorMessage name="email" component="div" className="text-yellow-500 text-sm mt-1" />
                  </div>

                  <div className="mt-3 sm:mt-4">
                    <label className="app-text-secondary text-[14px] sm:text-base block mb-1.5 sm:mb-2">Subject</label>
                    <Field
                      name="subject"
                      className="app-input"
                    />
                    <ErrorMessage name="subject" component="div" className="text-yellow-500 text-sm mt-1" />
                  </div>

                  <div className="mt-3 sm:mt-4">
                    <label className="app-text-secondary text-[14px] sm:text-base block mb-1.5 sm:mb-2">Message</label>
                    <Field
                      as="textarea"
                      name="message"
                      className="app-input h-24 sm:h-32"
                    />
                    <ErrorMessage name="message" component="div" className="text-yellow-500 text-sm mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-5 sm:mt-6 px-5 sm:px-6 py-2.5 sm:py-3 app-btn-primary rounded-xl sm:rounded-lg cursor-pointer flex justify-center transition-transform duration-300 active:scale-[0.98] text-[14px] sm:text-base font-medium rounded-md"
                  >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </button>

                  {/* Submission status + preview card */}
                  {submitStatus === "success" && sentData && (
                    <div className="mt-6 rounded-xl border border-[var(--accent)]/40 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-soft)] shadow-[0_12px_30px_rgba(0,0,0,0.2)] p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-yellow-600 text-white text-sm font-semibold shadow-lg shadow-yellow-500/30">
                          ✓
                        </span>
                        <div>
                          <p className="app-text-primary font-semibold">Message sent</p>
                          <p className="app-text-secondary text-sm">A copy was emailed to you.</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm app-text-secondary">
                        <div className="app-card-soft rounded-lg p-3">
                          <p className="app-text-secondary text-xs uppercase tracking-wide">Name</p>
                          <p className="font-semibold app-text-primary break-words">{sentData.name}</p>
                        </div>
                        <div className="app-card-soft rounded-lg p-3">
                          <p className="app-text-secondary text-xs uppercase tracking-wide">Phone</p>
                          <p className="font-semibold app-text-primary break-words">{sentData.phone}</p>
                        </div>
                        <div className="app-card-soft rounded-lg p-3">
                          <p className="app-text-secondary text-xs uppercase tracking-wide">Email</p>
                          <p className="font-semibold app-text-primary break-words">{sentData.email}</p>
                        </div>
                        <div className="app-card-soft rounded-lg p-3">
                          <p className="app-text-secondary text-xs uppercase tracking-wide">Subject</p>
                          <p className="font-semibold app-text-primary break-words">{sentData.subject}</p>
                        </div>
                        <div className="md:col-span-2 app-card-soft rounded-lg p-3">
                          <p className="app-text-secondary text-xs uppercase tracking-wide">Message</p>
                          <p className="font-semibold app-text-primary whitespace-pre-line break-words">
                            {sentData.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mt-6 bg-[#2d1f1f] border border-red-500/60 text-red-200 rounded-lg p-4 text-sm">
                      Failed to send message. Please try again in a moment.
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default Contact;
