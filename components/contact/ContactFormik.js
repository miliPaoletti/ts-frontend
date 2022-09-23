import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import registerForm from "services/sendEmail";
import ItemContact from "components/contact/ItemContact";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import NotificationContext from "context/NotificationContext";
import {
  FAIL,
  SUCCESS,
  LOADING,
  MEDIUM_CARD,
  INFO_NOT_UPLOADED,
  FORM,
  INFO_WHATSAPP,
  URL_WHATSAPP,
} from "components/utils/constants";
import Whatsapp from "components/ui/Links/Whatsapp";
import Link from "next/link";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Email requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Direccion de correo invalida";
  }
  return error;
}

function validateName(value) {
  let error;
  if (!value) {
    error = "Nombre requerido";
  }
  return error;
}

function validatePhoneNumber(value) {
  let error;
  if (!value) {
    error = "Numero de telefono requerido";
  }
  return error;
}

function validatePassengers(value) {
  let error;
  if (!value) {
    error = "Cantidad de pasajeros requerida";
  }
  return error;
}

function validateConsult(value) {
  let error;
  if (!value) {
    error = "Por favor, escriba su consulta";
  }
  return error;
}

const initialValues = {
  name: "",
  phoneNumber: "",
  passengers: "",
  email: "",
  consult: "",
};

export default function ContactForm({ setIsOpen, dataForConsult, section }) {
  const { setNotification } = useContext(NotificationContext);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => {
          setIsOpen(false);
          setNotification(LOADING);

          return registerForm(values, dataForConsult)
            .then(() => {
              setNotification(SUCCESS);
            })
            .catch((e) => {
              setNotification(FAIL);
              console.log(e);
            });
        }}
      >
        {({ errors, isSubmitting, touched }) => (
          <Form className="form space-y-5 my-7">
            <div className="text-center text-2xl font-medium">
              Consúltanos sobre tu próximo destino
            </div>
            {section === MEDIUM_CARD && <div>{INFO_NOT_UPLOADED}</div>}
            <ItemContact
              icon={<FaUser />}
              text={
                <Field
                  className={errors.name ? "error" : ""}
                  name="name"
                  placeholder="Nombre..."
                  validate={validateName}
                />
              }
              error={
                errors.name &&
                touched.name && (
                  <small className="form-error">{errors.name}</small>
                )
              }
            />

            <ItemContact
              icon={<FaPhoneAlt />}
              text={
                <Field
                  className={errors.phoneNumber ? "error" : ""}
                  name="phoneNumber"
                  placeholder="Numero de telefono..."
                  type="text"
                  validate={validatePhoneNumber}
                />
              }
              error={
                errors.phoneNumber &&
                touched.phoneNumber && (
                  <small className="form-error">{errors.phoneNumber}</small>
                )
              }
            />

            <ItemContact
              icon={<BsPeopleFill />}
              text={
                <Field
                  className={errors.passengers ? "error" : ""}
                  name="passengers"
                  placeholder="Cantidad de pasajeros..."
                  type="number"
                  validate={validatePassengers}
                />
              }
              error={
                errors.passengers &&
                touched.passengers && (
                  <small className="form-error">{errors.passengers}</small>
                )
              }
            />

            <ItemContact
              icon={<MdEmail />}
              text={
                <Field
                  className={errors.email ? "error" : ""}
                  name="email"
                  placeholder="Correo electronico..."
                  type="text"
                  validate={validateEmail}
                />
              }
              error={
                errors.email &&
                touched.email && (
                  <small className="form-error">{errors.email}</small>
                )
              }
            />
            <div className="">
              <div className="flex items-top">
                <Field
                  className={errors.consult ? "error" : " text-lg"}
                  name="consult"
                  placeholder="Consulta..."
                  type="text"
                  as="textarea"
                  validate={validateConsult}
                />{" "}
                <p className="text-red-500">*</p>
              </div>
              {errors.consult && touched.consult && (
                <small className="form-error">{errors.consult}</small>
              )}
            </div>

            <button
              type="submit"
              className="button-primary"
              disabled={isSubmitting}
            >
              Enviar
            </button>

            <div className="flex items-center text-left space-x-3 ">
              <Link href={URL_WHATSAPP}>
                <a rel="noreferrer" target="_blank">
                  <p className="text-base">{INFO_WHATSAPP}</p>
                </a>
              </Link>
              <Whatsapp page={FORM} />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
