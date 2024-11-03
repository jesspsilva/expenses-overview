"use client";

import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                {props.variant === "success" && (
                  <CheckCircledIcon className="w-4 h-4" />
                )}
                {props.variant === "destructive" && (
                  <CrossCircledIcon className="w-4 h-4" />
                )}
                {title && <ToastTitle>{title}</ToastTitle>}
              </div>

              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
