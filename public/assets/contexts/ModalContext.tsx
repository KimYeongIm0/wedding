// import { createContext, useContext, ComponentProps, useState } from "react";
// import { createPortal } from "react-dom";

// import Modal from "@shared/Modal";

// type ModalProps = ComponentProps<typeof Modal>;
// type ModalOptions = Omit<ModalProps, "open">;

// interface ModalContextValue {
//   open: (options: ModalOptions) => void;
//   close: () => void;
// } 

// const Context = createContext<ModalContextValue | undefined>(undefined);

// const defaultvalues: ModalProps = {
//   open: false,
//   body:null,
//   onRightButtonClick: () => {},
//   onLeftButtonClick: () => {}
// }

// function ModalContext({children}: {children: React.ReactNode}) {
//   const [modalState] = useState<ModalProps>(defaultvalues)
//   const $portal_root = document.getElementById('root-portal');

//   const open = (options: ModalOtions) => {}

//   const close = () => {}
//   return(
//   <Context.Provider>
//     {children}
//     {$portal_root !== null ? createPortal(<Modal/> , $portal_root):null}
//   </Context.Provider>
  )
}