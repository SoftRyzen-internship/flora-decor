import { Fragment, ReactNode } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';

import CloseIcon from '@/public/icons/close.svg';

type ModalPropsTypes = {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  closeBtnStyles: string;
  ariaLabel: string;
  modalStyles: string;
  isBurgerMenu?: boolean;
  isPopUp?: boolean;
};

export const Modal = ({
  children,
  isOpen,
  closeModal,
  closeBtnStyles,
  ariaLabel,
  modalStyles,
  isBurgerMenu,
  isPopUp,
}: ModalPropsTypes) => {
  const styesName = classNames({
    'fixed inset-y-0 right-0 flex w-[360px]': isBurgerMenu,
    'flex min-h-full items-center justify-center': isPopUp,
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-backdropCol backdrop-filter" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-aut">
          <div className={styesName}>
            <Transition.Child
              as={Fragment}
              enter={
                isBurgerMenu
                  ? 'transform transition ease-in-out duration-500'
                  : 'ease-out duration-300'
              }
              enterFrom={
                isBurgerMenu ? 'translate-x-full' : 'opacity-0 scale-95'
              }
              enterTo={isBurgerMenu ? 'translate-x-0' : 'opacity-100 scale-100'}
              leave={
                isBurgerMenu
                  ? 'transform transition ease-in-out duration-500'
                  : 'ease-in duration-200'
              }
              leaveFrom={
                isBurgerMenu ? 'translate-x-0' : 'opacity-100 scale-100'
              }
              leaveTo={isBurgerMenu ? 'translate-x-full' : 'opacity-0 scale-95'}
            >
              <Dialog.Panel
                className={
                  (classNames('transform overflow-hidden transition-al'),
                  modalStyles)
                }
              >
                <div className="relative">
                  <button
                    type="button"
                    onClick={closeModal}
                    className={classNames(
                      'absolute block text-main hover:text-btnSecondHover focus:text-btnSecondHover active:text-btnSecondActive transition-all duration-300',
                      closeBtnStyles,
                    )}
                    aria-label={ariaLabel}
                  >
                    <CloseIcon
                      width={24}
                      height={24}
                      className="stroke-current"
                    />
                  </button>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
