"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader } from "lucide-react";

interface ConfirmModalProps {
  onConfirm: () => void;
  onCancle: () => void;
  open: boolean;
  loading: boolean;
}

const ConfirmModal = ({
  onConfirm,
  onCancle,
  open,
  loading,
}: ConfirmModalProps) => {
  const handleConfirm = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onConfirm();
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle onClick={(e) => e.stopPropagation()}>
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription onClick={(e) => e.stopPropagation()}>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading} onClick={onCancle}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            className="flex items-center justify-center"
            onClick={handleConfirm}
          >
            {loading && (
              <Loader className="w-4 h-4 mr-2 animate-spin" strokeWidth={2} />
            )}
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmModal;
