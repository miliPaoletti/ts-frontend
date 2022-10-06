import { Dialog, Transition } from "@headlessui/react";
import ContactForm from "components/contact/ContactFormik";
import { MEDIUM_CARD } from "components/utils/constants";
import { Fragment, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export const ModalConsult = ({ dataForConsult, trigger, section }) => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        className={`${section === MEDIUM_CARD ? "medium-card" : ""}`}
        // className={`about-us-container ${href ? " cursor-pointer" : ""} `}
        onClick={openModal}
      >
        {trigger}
      </div>

      <Transition
        appear
        show={isOpen}
        as={Fragment}
        onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            closeModal;
          }
        }}
      >
        <Dialog as="div" className="relative z-[999999]">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0  container-modal ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden w-full md:w-1/2 2xl:w-1/4 shadow-black rounded-2xl bg-white px-6 text-center align-middle shadow-xl transition-all ">
                  <div className="text-sm text-black">
                    <ContactForm
                      setIsOpen={setIsOpen}
                      dataForConsult={dataForConsult}
                      section={section}
                    />
                  </div>

                  <div
                    className="text-orange-950 absolute top-3 right-3 text-3xl cursor-pointer"
                    onClick={() => closeModal()}
                  >
                    <IoMdCloseCircle />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
