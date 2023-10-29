import { useRef, type FC, useEffect, useState } from 'react';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  isClosedBtn?: boolean;
  onClose?: () => void;
}
const Modal: FC<ModalProps> = (props) => {
  const { children, isOpen, isClosedBtn, onClose } = props;
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} className='modal'>
      {children}
    </dialog>
  );
};

export default Modal;
