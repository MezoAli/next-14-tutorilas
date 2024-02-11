"use client";
import { useFormStatus } from "react-dom";
const FormStatusButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn join-item btn-primary"
      disabled={pending}
    >
      {pending ? "Please Wait..." : "Create Task"}
    </button>
  );
};

export default FormStatusButton;
