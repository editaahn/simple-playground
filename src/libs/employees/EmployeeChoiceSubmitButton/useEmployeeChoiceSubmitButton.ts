import { submitEmployees } from "@apis";
import { useState } from "react";
import { useMutation } from "react-query";

type UseEmployeeChoiceSubmitButtonProps = {
  choices: number[];
};

export function useEmployeeChoiceSubmitButton({ choices }: UseEmployeeChoiceSubmitButtonProps) {
  const [toastOpen, setToastOpen] = useState(false);

  const closeToast = () => setToastOpen(false);

  const { mutateAsync, isError } = useMutation(
    'submitEmployees',
    submitEmployees,
    {
      onSettled: () => {
        setToastOpen(true);
      },
    }
  );
  
  return {
    submit: () => mutateAsync({ ids: choices }),
    toastOpen,
    closeToast,
    error: isError,
  };
}
