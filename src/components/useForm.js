import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataProvider";

import emailjs from "emailjs-com";
import { useCallback } from "react";

const useForm = (validateForm) => {
  const { t } = useContext(DataContext);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventTarget, setEventTarget] = useState({});
  const [messageSend, setMessageSend] = useState(false);
  const [messageNotSend, setMessageNotSend] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(values));
    setEventTarget(event.target);
    setIsSubmitting(true);
  };

  const submit = useCallback(() => {
    emailjs
      .sendForm(
        "portfolio",
        "portfolio_arek",
        eventTarget,
        "user_20VM7KPv0s91xii1PcBJW"
      )
      .then(
        (result) => {
          setValues({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setMessageSend(true);
          setIsSubmitting(false);
          setMessageNotSend(false);
          setTimeout(() => {
            setMessageSend(false);
          }, 3000);
        },
        (error) => {
          setMessageNotSend(true);
          setTimeout(() => {
            setMessageNotSend(false);
          }, 100);
        }
      );
  }, [eventTarget]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit();
    }
  }, [errors, isSubmitting, submit]);

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    t,
    messageSend,
    messageNotSend,
  };
};

export default useForm;
