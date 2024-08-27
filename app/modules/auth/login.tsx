"use client";
import React from "react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRoundIcon, User } from "lucide-react";

interface LoginInterface {
  email: string;
  password: string;
  remember?: boolean;
}
const LoginPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const validationSchema = Yup.object({
    email: Yup.string().required("email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialData: LoginInterface = {
    email: "",
    password: "",
    remember: false,
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen  bg-gradient-to-r from-indigo-500/50">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your username below to login to Platform.
            </CardDescription>
          </CardHeader>
          <Formik
            initialValues={initialData}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              console.log("values", values);
              const payload = {
                email: values.email,
                password: values.password,
                remember: values.remember,
              };

              try {
                const result: any = await signIn("credentials", {
                  redirect: false,
                  email: payload.email,
                  password: payload.password,
                });
                if (result.error) {
                  console.log("error", result.error);
                  toast({
                    variant: "destructive",
                    duration: 3000,
                    title: "Login Failed",
                    description: result.error || "Invalid credentials. Please try again.",
                  });

                  return;
                }
                toast({
                  title: "Login Successful",
                  className: "bg-green-500 text-white font-semibold",
                  description: "You have successfully logged in.",
                });
                 router.push("/platform/dashboard");
              } catch (error) {
                console.log("error", error);
                toast({
                  variant: "destructive",
                  title: "Error",
                  description: "Something went wrong. Please try again later.",
                });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => {
              return (
                <>
                  <form onSubmit={handleSubmit}>
                    <CardContent className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Username</Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="m@example.com"
                            required
                            className="pl-10"
                          />
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <User className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type="password"
                            placeholder="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            required
                            className="pl-10"
                          />
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <KeyRoundIcon className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Signing in..." : "Sign in"}
                      </Button>
                    </CardFooter>
                  </form>
                </>
              );
            }}
          </Formik>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
