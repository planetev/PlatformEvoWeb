"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  SunMedium,
  BatteryCharging,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Car,
  Leaf,
  Droplet,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { Formik } from "formik";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import React from "react";

interface LoginInterface {
  email: string;
  password: string;
  remember?: boolean;
}
const Newlogin = () => {
  const router = useRouter();
  const { toast } = useToast();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("รูปแบบอีเมล์ไม่ถูกต้อง")
      .required("จำเป็นต้องมีอีเมล"),
    password: Yup.string().required("จำเป็นต้องมีรหัสผ่าน"),
  });

  const BackgroundIcon = ({ icon: Icon, ...props }: any) => (
    <motion.div
      className="absolute text-white/5"
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: Math.random() * 10 + 20,
        repeat: Infinity,
        ease: "linear",
      }}
      {...props}
    >
      <Icon size={props.size || 24} />
    </motion.div>
  );
  const initialData: LoginInterface = {
    email: "",
    password: "",
    remember: false,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const icons = useMemo(() => [Zap, SunMedium, BatteryCharging], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [icons]);

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault()
  //   setIsLoading(true)
  //   await new Promise(resolve => setTimeout(resolve, 2000))
  //   setIsLoading(false)
  // }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, rotate: 180, transition: { duration: 0.5 } },
  };

  const CurrentIcon = icons[currentIconIndex] || Zap;
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-green-600 flex items-center justify-center p-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rotate-45 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rotate-45 transform translate-x-1/2 translate-y-1/2"></div>
        </motion.div>

        <BackgroundIcon
          icon={Car}
          size={48}
          style={{ top: "10%", left: "5%" }}
        />
        <BackgroundIcon
          icon={Leaf}
          size={36}
          style={{ top: "30%", right: "10%" }}
        />
        <BackgroundIcon
          icon={Droplet}
          size={24}
          style={{ bottom: "15%", left: "15%" }}
        />
        <BackgroundIcon
          icon={Zap}
          size={40}
          style={{ bottom: "25%", right: "20%" }}
        />
        <BackgroundIcon
          icon={SunMedium}
          size={32}
          style={{ top: "20%", left: "25%" }}
        />

        <motion.div
          className="w-full max-w-md relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 bg-green-400 rounded-3xl rotate-45 opacity-50"
            animate={{
              rotate: [45, 0, 45],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400 rounded-3xl rotate-45 opacity-50"
            animate={{
              rotate: [45, 90, 45],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          <motion.div
            className="backdrop-blur-md bg-white/20 p-8 rounded-3xl shadow-2xl border border-white/20 relative z-10"
            variants={itemVariants}
          >
            <motion.div
              className="flex justify-center mb-8"
              variants={itemVariants}
            >
              <div className="p-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-lg relative w-20 h-20 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIconIndex}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <CurrentIcon className="h-12 w-12 text-white" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl  text-center text-white mb-2 font-bold"
              variants={itemVariants}

            >
              Planet
              <span className="text-green-400 font-extrabold">EV</span>

            </motion.h1>
            <motion.p
              className="text-center text-blue-100 mb-8 text-lg font-bold"
              variants={itemVariants}
            >
              Smart Solar, EV, and Charging Platform
            </motion.p>
            <Formik
              initialValues={initialData}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting }) => {

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
                    setIsLoading(false);
                    toast({
                      variant: "destructive",
                      duration: 3000,
                      title: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
                      description:

                        "โปรดตรวจสอบอีเมลหรือรหัสผ่านอีกครั้ง.",
                    });

                    return;
                  }
                  toast({
                    title: "Login Successful",
                    className: "bg-green-500 text-white font-semibold",
                    description: "You have successfully logged in.",
                  });
                  await new Promise((resolve) => setTimeout(resolve, 2000));
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
                    <motion.form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      variants={itemVariants}
                    >
                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="email" className="text-white text-lg">
                          อีเมล
                        </Label>
                        <div className="relative">
                          <Input
                            id="email"
                            placeholder=""
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            required
                            className="bg-white/30 border-white/10 text-white placeholder-blue-200 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent text-lg py-3 pl-12 pr-4 w-full"
                          />
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-200 h-5 w-5" />
                        </div>
                      </motion.div>
                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label
                          htmlFor="password"
                          className="text-white text-lg"
                        >
                          รหัสผ่าน
                        </Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            required
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            className="bg-white/30 border-white/10 text-white placeholder-blue-200 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent text-lg py-3 pl-12 pr-12 w-full"
                          />
                          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-200 h-5 w-5" />
                          <Button
                            type="button"
                            variant={"ghost"}
                            size={"sm"}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-200 hover:text-white hover:bg-no"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </Button>
                        </div>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <Button
                          className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-xl py-4 text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                          type="submit"
                          disabled={isLoading}
                          // whileHover={{ scale: 1.05 }}
                          // whileTap={{ scale: 0.95 }}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                              กำลังเข้าสู่ระบบ...
                            </>
                          ) : (
                            "เข้าสู่ระบบ"
                          )}
                        </Button>
                      </motion.div>
                    </motion.form>
                  </>
                );
              }}
            </Formik>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Newlogin;
