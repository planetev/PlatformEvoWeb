import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Sun,
  Battery,
  Zap,
  BarChart3,
  LayoutDashboard,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Dh = () => {
  const [production, setProduction] = useState(27.5);
  const [efficiency, setEfficiency] = useState(98.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setProduction((prev) => prev + (Math.random() - 0.5) * 0.2);
      setEfficiency((prev) =>
        Math.min(100, Math.max(95, prev + (Math.random() - 0.5) * 0.1))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  return (
    <>
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full  overflow-hidden bg-gradient-to-br from-yellow-50 to-blue-50 dark:from-yellow-900 dark:to-blue-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full max-w-[300px] aspect-square">
                  <Image
                    src="/pnev/solar.jpg"
                    alt="SolarTech Plant"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl shadow-lg"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-400 opacity-0 rounded-2xl"
                    animate={{ opacity: [0, 0.2, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-1 bg-white dark:bg-gray-800"
                >
                  5 MW Capacity
                </Badge>
              </motion.div>
              <CardContent className="p-0 flex flex-col justify-between">
                <div className="space-y-6">
                  <CardHeader className="p-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-blue-600 dark:from-yellow-400 dark:to-blue-400">
                        SolarTech Plant
                      </CardTitle>
                    </motion.div>
                    <div className="mt-2 flex space-x-2">
                      <Badge
                        variant="secondary"
                        className="text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900"
                      >
                        Operational
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-blue-600 border-blue-300 dark:text-blue-400 dark:border-blue-700"
                      >
                        Grid-Connected
                      </Badge>

                      <Badge
                        variant="outline"
                        className="text-red-600 border-red-300 dark:text-red-400 dark:border-red-700"
                      >
                        fusionsolar
                      </Badge>
                    </div>
                  </CardHeader>
                  <motion.div
                    className="flex items-start text-sm text-muted-foreground bg-white dark:bg-gray-800 p-3 rounded-lg shadow-inner"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-red-500" />
                    <span>
                      123 Solar Avenue, Green City, Sustainable State 54321, Eco
                      Nation
                    </span>
                  </motion.div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <motion.div variants={cardVariants} whileHover="hover">
                    <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="flex items-center p-4">
                        <Sun className="h-8 w-8 mr-4 text-yellow-500" />
                        <div>
                          <div className="text-sm font-medium text-muted-foreground">
                            Daily Production
                          </div>
                          <motion.div
                            className="text-2xl font-bold"
                            key={production}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            {production.toFixed(1)} MWh
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div variants={cardVariants} whileHover="hover">
                    <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="flex items-center p-4">
                        <Battery className="h-8 w-8 mr-4 text-green-500" />
                        <div>
                          <div className="text-sm font-medium text-muted-foreground">
                            Battery Storage
                          </div>
                          <div className="text-2xl font-bold">2 MWh</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div variants={cardVariants} whileHover="hover">
                    <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="flex items-center p-4">
                        <Zap className="h-8 w-8 mr-4 text-blue-500" />
                        <div>
                          <div className="text-sm font-medium text-muted-foreground">
                            Grid Feed-in
                          </div>
                          <div className="text-2xl font-bold">22.3 MWh</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div variants={cardVariants} whileHover="hover">
                    <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="flex items-center p-4">
                        <BarChart3 className="h-8 w-8 mr-4 text-purple-500" />
                        <div>
                          <div className="text-sm font-medium text-muted-foreground">
                            Efficiency
                          </div>
                          <motion.div
                            className="text-xl font-bold text-green-600 dark:text-green-400"
                            key={efficiency}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            {efficiency.toFixed(1)}%
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
                <div className="mt-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-yellow-500 to-blue-500 hover:from-yellow-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                      <LayoutDashboard className="w-5 h-5 mr-2" />
                      Go to Dashboard
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default Dh;
