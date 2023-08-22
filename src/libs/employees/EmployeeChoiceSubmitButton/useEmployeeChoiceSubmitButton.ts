import { submitEmployees } from "@apis";
import { useContext } from "react";
import { useMutation } from "react-query";
import { ToastContext } from "@contexts"

type UseEmployeeChoiceSubmitButtonProps = {
  choices: number[];
};

export function useEmployeeChoiceSubmitButton({ choices }: UseEmployeeChoiceSubmitButtonProps) {
  const { showToast } = useContext(ToastContext);

  const { mutateAsync } = useMutation(
    'submitEmployees',
    submitEmployees,
    {
      useErrorBoundary: true,
      onSuccess() {
        showToast();
      },
    }
  );

  return {
    submit: () => mutateAsync({ ids: choices }),
  };
}
