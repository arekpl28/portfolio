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
  const [e, setE] = useState({});

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

    setE(event.target);
    setIsSubmitting(true);
  };

  const submit = useCallback(() => {
    emailjs
      .sendForm("portfolio", "portfolio_arek", e, "user_20VM7KPv0s91xii1PcBJW")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }, [e]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit();
      setValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }
  }, [e, errors, isSubmitting, submit]);

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    t,
    e,
  };
};

export default useForm;
