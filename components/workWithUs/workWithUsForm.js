import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import ItemContact from "components/contact/ItemContact";
import NotificationContext from "context/NotificationContext";
import { FAIL } from "components/utils/constants";
import { SUCCESS } from "components/utils/constants";
import { LOADING } from "components/utils/constants";
import { FORM_WORK_WITH_US_DATA } from "components/utils/constants";
import { CLICK_SEND_BUTTON } from "components/tracker/constants";
import { useTracker } from "components/tracker/useTracker";
import registerCV from "services/sendCV";
import { useRouter } from "next/router";

function validateEmail(value) {
  let error;
  if (!value) {
    error = FORM_WORK_WITH_US_DATA.validations.emailRequired;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = FORM_WORK_WITH_US_DATA.validations.emailInvalid;
  }
  return error;
}

function validateName(value) {
  let error;
  if (!value) {
    error = FORM_WORK_WITH_US_DATA.validations.nameRequired;
  }
  return error;
}

function validateCV(value) {
  let error;
  const MAX_SIZE = 1000000; // 1MB
  if (value === "") {
    error = FORM_WORK_WITH_US_DATA.validations.cvRequired;
  }
  if (value && value.size > MAX_SIZE) {
    error = "El tamaño del archivo es muy grande. Máximo 1MB.";
  }
  return error;
}
function validatePosition(value) {
  let error;
  if (!value) {
    error = FORM_WORK_WITH_US_DATA.validations.positionRequired;
  }
  return error;
}

function validateOtherPosition(value) {
  let error;
  if (!value) {
    error = FORM_WORK_WITH_US_DATA.validations.otherPositionRequired;
  }
  return error;
}

const initialValues = {
  name: "",
  cv: "",
  position: "",
  email: "",
  consult: "",
  other_position: "",
};

export default function WorkWithUsForm() {
  const { setNotification } = useContext(NotificationContext);
  const router = useRouter();
  const { handlePreClickAction: clickSend } = useTracker(CLICK_SEND_BUTTON);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => {
          setNotification(LOADING);

          return registerCV(values)
            .then(() => {
              setNotification(SUCCESS);
              clickSend({ status: "success" });
              router.push("/");
            })
            .catch((e) => {
              setNotification(FAIL);
              clickSend({ status: "fail", error: e });
              console.log(e);
            });
        }}
      >
        {({ errors, isSubmitting, touched, setFieldValue, values }) => (
          <Form className="form space-y-3 lg:w-1/3 bg-white rounded-2xl p-8">
            <div className="text-center text-2xl font-medium">
              {FORM_WORK_WITH_US_DATA.title}
            </div>

            <ItemContact
              text={
                <Field
                  className={errors.name ? "error" : "placeholder:text-sm"}
                  name="name"
                  validate={validateName}
                />
              }
              error={
                errors.name &&
                touched.name && (
                  <small className="form-error">{errors.name}</small>
                )
              }
              placeholder={`${FORM_WORK_WITH_US_DATA.name} * `}
            />

            <ItemContact
              text={
                <Field
                  className={errors.email ? "error" : "placeholder:text-sm"}
                  name="email"
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
              placeholder={`${FORM_WORK_WITH_US_DATA.email} * `}
            />
            <ItemContact
              text={
                <Field
                  as="select"
                  name="position"
                  value={values.position}
                  className={
                    errors.position
                      ? "error"
                      : "w-full placeholder:text-sm focus-visible:outline-none focus:outline-none"
                  }
                  validate={validatePosition}
                >
                  <option value="" disabled>
                    Elige una opción
                  </option>
                  <option value="ventas">Ventas</option>
                  <option value="admin">Administración</option>
                  <option value="otros">Otros</option>
                </Field>
              }
              error={
                errors.position &&
                touched.position && (
                  <small className="form-error">{errors.position}</small>
                )
              }
              placeholder={`${FORM_WORK_WITH_US_DATA.position} * `}
            />
            {values.position === "otros" && (
              <ItemContact
                text={
                  <Field
                    className={
                      errors.other_position ? "error" : "placeholder:text-sm"
                    }
                    name="other_position"
                    validate={validateOtherPosition}
                  />
                }
                error={
                  errors.other_position &&
                  touched.other_position && (
                    <small className="form-error">
                      {errors.validateOtherPosition}
                    </small>
                  )
                }
                placeholder={`${FORM_WORK_WITH_US_DATA.other_position} * `}
              />
            )}
            <ItemContact
              text={
                <Field
                  as="input"
                  type="file"
                  name="cv"
                  accept=".pdf"
                  value={undefined}
                  onChange={(e) => {
                    if (e.currentTarget.files) {
                      setFieldValue("cv", e.currentTarget.files[0]);
                    }
                  }}
                  validate={validateCV}
                />
              }
              error={
                errors.cv &&
                touched.cv && <small className="form-error">{errors.cv}</small>
              }
              placeholder={`${FORM_WORK_WITH_US_DATA.cv} * `}
            />

            <div>
              <div className="flex items-top ">
                <Field
                  className={
                    errors.consult
                      ? "error text-lg"
                      : "text-lg placeholder:text-sm"
                  }
                  name="consult"
                  placeholder={`${FORM_WORK_WITH_US_DATA.consult}  `}
                  type="text"
                  as="textarea"
                  rows="4"
                />
              </div>
              {errors.consult && touched.consult && (
                <small className="form-error">{errors.consult}</small>
              )}
            </div>

            <button
              type="submit"
              className={`button-primary w-full ${
                isSubmitting && "opacity-50 cursor-not-allowed"
              } `}
              disabled={isSubmitting}
            >
              {FORM_WORK_WITH_US_DATA.send}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
