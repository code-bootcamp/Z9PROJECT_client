import Swal from "sweetalert2";

export function SuccessModal(SuccessMessge: string) {
  Swal.fire({
    icon: "success",
    title: SuccessMessge,
  });
}

export function ErrorModal(ErrorMessage: string) {
  Swal.fire({
    icon: "error",
    title: ErrorMessage,
  });
}
