import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { TRACKER_LOCALSTORAGE, getTrackerLocalStorage } from "./helpers";
import { useTracker } from "components/tracker/useTracker";
import { TRACKER } from "components/tracker/constants";

export const ModalCookies = ({ trigger }) => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    if (getTrackerLocalStorage(TRACKER_LOCALSTORAGE) === null) {
      openModal();
    }
  }, []);

  const { disableMixpanel, enableMixpanel } = useTracker(TRACKER);

  const handleAccept = () => {
    enableMixpanel();
    closeModal();
  };

  const handleReject = () => {
    disableMixpanel();
    closeModal();
  };

  return (
    <>
      <div onClick={openModal}>{trigger}</div>

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
                  <div className="text-sm text-black m-5">
                    <p className="text-base font-bold">
                      Nos importa tu privacidad
                    </p>
                    <p className="text-[14px]">
                      Usamos las cookies para mejorar tu experiencia y analizar
                      nuestro tráfico. Haciendo click en <b>Aceptar</b>, aceptas
                      nuestra{" "}
                      <a
                        href="https://www.iubenda.com/privacy-policy/80159442/cookie-policy"
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer underline "
                      >
                        política de cookies
                      </a>
                      .
                    </p>
                    <div className="mt-3 space-x-4 flex items-center justify-center">
                      <button
                        className="button-search text-xs"
                        onClick={handleAccept}
                      >
                        Aceptar
                      </button>
                      <button
                        className="button-search text-xs"
                        onClick={handleReject}
                      >
                        Rechazar
                      </button>
                    </div>
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
