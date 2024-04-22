import ItemContact from "components/contact/ItemContact";
import { FORM_WORK_WITH_US_DATA } from "components/utils/constants";
import { useState } from "react";

export const FormTest = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      onSubmit={() => {
        setSubmitted(true);
      }}
      action="https://formsubmit.co/milagros.paoletti@gmail.com"
      encType="multipart/form-data"
      method="POST"
      className="form space-y-3 lg:w-1/3 bg-white rounded-2xl p-8 w-full"
    >
      <div className="text-center text-2xl font-medium">
        {FORM_WORK_WITH_US_DATA.title}
      </div>
      <ItemContact
        text={<input type="text" name="Nombre" required />}
        placeholder={`${FORM_WORK_WITH_US_DATA.name} *`}
      />

      <ItemContact
        text={<input type="email" name="email" required />}
        placeholder={`${FORM_WORK_WITH_US_DATA.email} *`}
      />
      <ItemContact
        text={
          <select
            type="select"
            name="position"
            required
            className="w-full focus-visible:outline-0"
          >
            <option value="" disabled selected>
              Elige una opción
            </option>
            <option value="Ventas">Ventas</option>
            <option value="Administracion">Administración</option>
          </select>
        }
        placeholder={`${FORM_WORK_WITH_US_DATA.position} *`}
      />
      <ItemContact
        text={
          <input
            type="file"
            name="Curriculum"
            accept=".pdf, .doc, .docx"
            required
          />
        }
        placeholder={`${FORM_WORK_WITH_US_DATA.cv} *`}
      />

      <textarea
        type="text"
        name="Consulta"
        className="input"
        placeholder={`${FORM_WORK_WITH_US_DATA.consult}`}
        rows="4"
      />
      <input type="text" name="_honey" style={{ display: "none" }} />
      <input
        type="hidden"
        name="_autoresponse"
        value="thank you for contacting us"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value="http://localhost:3000/thank-you/"
      />
      <input type="hidden" name="_template" value="box" />
      <button
        type="submit"
        className={` w-full button-primary ${
          submitted && "cursor-not-allowed opacity-50"
        }`}
      >
        {FORM_WORK_WITH_US_DATA.send}
      </button>
    </form>
  );
};
