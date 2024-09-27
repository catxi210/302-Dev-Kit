/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { login } from "@/lib/auth";
import { emitter } from "@/lib/mitt";
import Locale from "@/locales";
import { useAppStore } from "@/stores";

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */

export function Test() {
  const router = useRouter();
  const { updateConfig } = useAppStore.getState();

  const handleGoAuth = () => {
    router.push("/auth");
  };

  const handleGoLang = () => {
    router.push("/land");
  };

  const handleTestLogin = () => {
    const loginCode = "555";
    login(loginCode)
      .then((res: any) => {
        if (res.data?.info) {
          updateConfig({ info: res.data?.info });
        }
        if (res.success) {
          updateConfig({
            ...res.data,
            code: loginCode,
          });
          emitter.emit("ToastError", -100);
          return res;
        }
      })
      .catch((err) => {
        console.log(err);
        emitter.emit("ToastError", -99);
      });
  };

  const handleTestLogout = () => {
    console.log("logout;:");
    updateConfig({ apiKey: "" });
    emitter.emit("ToastError", -101);
  };

  const handleTestError = () => {
    emitter.emit("ToastError", -10005);
  };

  return (
    <div className="flex flex-col space-y-4 p-4 text-center">
      <p>{Locale.Title}</p>
      <Button onClick={handleGoAuth}>Go Auth</Button>
      <Button onClick={handleGoLang}>GO Lang</Button>
      <Button onClick={handleTestLogin}>Test Login</Button>
      <Button onClick={handleTestLogout}>Test Logout</Button>
      <Button onClick={handleTestError}>Test Error</Button>
    </div>
  );
}