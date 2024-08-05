import { useState } from "react";
import emailjs from "emailjs-com";

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const submitForm = async (data) => {
    setIsSubmitting(true);
    setSubmissionStatus(null); // Reset the status
    try {
      // Prepare data for email submission
      const emailData = {
        ...data,
        passport: data.passport ? data.passport.name : "",
        idcard: data.idcard ? data.idcard.name : "",
      };

      // Send data via email
      const emailResponse = await emailjs.send(
        "ALS-email",
        "ALS_DATA",
        emailData,
        "s03os7ZPZLdrBDQzL"
      );
      console.log("Form submitted successfully via email:", emailResponse);

      // Set success status
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Set error status
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, submitForm, submissionStatus };
};
