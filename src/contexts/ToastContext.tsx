import { Toast } from "@utils";
import { createContext, PropsWithChildren, useState } from "react";

export const ToastContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showToast(error?: Error) { }
});

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [errorToastOpen, setErrorToastOpen] = useState(false);
  const [successToastOpen, setSuccessToastOpen] = useState(false);

  const showToast = (error?: Error) => {
    error ? setErrorToastOpen(true) : setSuccessToastOpen(true);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        open={errorToastOpen}
        onClose={() => setErrorToastOpen(false)}
        message="Something went wrong"
        severity="error"
      />
      <Toast
        open={successToastOpen}
        onClose={() => setSuccessToastOpen(false)}
        message="Success!"
        severity="success"
      />
    </ToastContext.Provider>
  );
};