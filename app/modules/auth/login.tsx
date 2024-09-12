"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  PlusCircle,
  Loader2,
  ChevronRight,
  UserPlus,
  Sun,
  Eye,
  EyeOff,
} from "lucide-react";
import Image from "next/image";
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
import { Checkbox } from "@/components/ui/checkbox";

interface LoginInterface {
  email: string;
  password: string;
  remember?: boolean;
}
const LoginPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("รูปแบบอีเมล์ไม่ถูกต้อง")
      .required("จำเป็นต้องมีอีเมล"),
    password: Yup.string().required("จำเป็นต้องมีรหัสผ่าน"),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showpassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const initialData: LoginInterface = {
    email: "",
    password: "",
    remember: false,
  };

  const togglePassword = () => {
    setShowPassword(!showpassword);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex flex-1 flex-col justify-center px-4 py-8 md:px-8 md:py-12 bg-black text-white"
        >
          <div className="relative max-w-md mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex justify-center mb-6 md:mb-8"
              >
                <Sun className="w-24 h-24 md:w-32 md:h-32 text-white" />
              </motion.div>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-center mb-2"
              >
                เปลี่ยนความคิดให้กลายเป็นจริง
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center text-gray-400 mb-6 md:mb-8 w-full mx-auto"
              >
                จัดการโซลาร์และชาร์จรถ EV ง่ายๆ ด้วยแพลตฟอร์มอัจฉริยะของเรา.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col items-center justify-center bg-white  px-4 py-8 md:px-8 md:py-12"
        >
          <div className="max-w-md w-full mx-auto ">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-6 md:mb-8"
            >
              <Image
                src="/pnev/logo.png"
                alt="logo"
                className="w-full  object-cover h-full rounded-md"
                width={800}
                height={800}
              />
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl md:text-2xl font-semibold text-center text-black mb-2"
            >
              เข้าสู่ระบบบัญชีของคุณ
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center text-gray-600 mb-6 md:mb-8"
            >
              ดูว่าเกิดอะไรขึ้นกับธุรกิจของคุณ
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full mb-4 bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors duration-300">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                  <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                ดำเนินการต่อด้วย Google
              </Button>
            </motion.div>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  หรือลงชื่อเข้าใช้ด้วยอีเมล
                </span>
              </div>
            </div>
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
                  setIsLoading(true);
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
                      description:
                        result.error ||
                        "Invalid credentials. Please try again.",
                    });

                    return;
                  }
                  toast({
                    title: "Login Successful",
                    className: "bg-green-500 text-white font-semibold",
                    description: "You have successfully logged in.",
                  });
                  setIsLoading(false);
                  router.push("/platform/dashboard");
                } catch (error) {
                  console.log("error", error);
                  toast({
                    variant: "destructive",
                    title: "Error",
                    description:
                      "Something went wrong. Please try again later.",
                  });
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ values, handleChange, handleSubmit, isSubmitting }) => {
                return (
                  <>
                    <form onSubmit={handleSubmit}>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mb-4"
                      >
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          บัญชี
                        </label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          onChange={handleChange}
                          value={values.email}
                          placeholder="บัญชี"
                          className="w-full transition-all duration-300 focus:ring-2 focus:ring-black"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mb-6"
                      >
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="password"
                        >
                          รหัสผ่าน
                        </label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showpassword ? "password" : "text"}
                            placeholder="รหัสผ่าน"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            className="w-full transition-all duration-300 focus:ring-2 focus:ring-black"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                           { showpassword ?  <Eye className="w-5 h-5" onClick={togglePassword}  /> :  <EyeOff className="w-5 h-5" onClick={togglePassword}  />  }
                          </span>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6"
                      >
                        <div className="flex items-center mb-2 sm:mb-0">
                          <Checkbox id="remember" />
                          <label
                            className="ml-2 text-sm text-gray-600"
                            htmlFor="remember"
                          >
                            จดจำฉัน
                          </label>
                        </div>
                        <a
                          className="text-sm text-black hover:text-gray-700 transition-colors duration-300"
                          href="#"
                        >
                          ลืมรหัสผ่าน?
                        </a>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          type="submit"
                          className="w-full bg-emerald-500 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded transition-colors duration-300"
                          disabled={isLoading || !acceptTerms}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              โปรดรอสักครู่...
                            </>
                          ) : (
                            <>
                              เข้าสู่ระบบ
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                      <AnimatePresence>
                        {(values.email || values.password) && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 p-3 bg-gray-100 rounded-md"
                          >
                            <p className="text-sm text-gray-600">
                              {values.email && values.password
                                ? "Great! You're all set to log in."
                                : "Please fill in both email and password."}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </>
                );
              }}
            </Formik>

            {/* <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8 text-center text-sm text-gray-600"
          >
            Not Registered Yet?{" "}
            <a className="text-black hover:text-gray-700 font-semibold transition-colors duration-300" href="#">
              Create an account
            </a>
          </motion.p> */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center mt-5">
                <Checkbox
                  id="acceptTerms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) =>
                    setAcceptTerms(checked as boolean)
                  }
                />
                <label
                  className="ml-2 text-sm text-gray-600"
                  htmlFor="acceptTerms"
                >
                  ฉันได้อ่านและยอมรับ{" "}
                  <a
                    href="#"
                    className="text-black hover:text-gray-700 underline"
                  >
                    ข้อตกลงการใช้บริการ
                  </a>{" "}
                  และ{" "}
                  <a
                    href="#"
                    className="text-black hover:text-gray-700 underline"
                  >
                    นโยบายความเป็นส่วนตัว
                  </a>{" "}
                  แล้ว
                </label>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* <div className="flex items-center justify-center min-h-screen  bg-gradient-to-r from-indigo-500/50">
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
      </div> */}
    </>
  );
};

export default LoginPage;
