import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {}
  const handleSignUp = async () => {}
  
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <motion.div
        className="h-[70nvh] w-[65vw] rounded-2xl bg-white border-2 border-white text-opacity-90 p-4 shadow-2xl md:w-[60vw] lg:w-[40vw]"
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
      >
        <div className="mt-2 flex flex-col gap-2 items-center justify-between text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="items-center justify-between text-2xl md:text-4xl font-bold text-black"
          >
            Welcome 👋🏻
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600"
          >
            Fill the details to get started with ChitChat ☁️
          </motion.p>
        </div>
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center w-full">
          <Tabs className=" w-3/4">
            <TabsList className="bg-transparent rounded-none w-full">
              <TabsTrigger value="login"
              className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:border-b-black p-3 transition-all duration-600 "
              
              > Login </TabsTrigger>
              <TabsTrigger value="signup"
              className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:border-b-black p-3 transition-all duration-300 "
              
              > SignUp</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="flex flex-col gap-5 mt-5">
            <motion.input
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="input-field focus:outline-none focus:border-none"
            />
            <motion.input
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input-field focus:outline-none focus:border-none"
            />
            <Button className="rounded-full p-6" onClick={handleLogin} >Login</Button>
            </TabsContent>
            <TabsContent className="flex flex-col gap-5" value="signup">
            <motion.input
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="input-field focus:outline-none focus:border-none"
            />
            <motion.input
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input-field focus:outline-none focus:border-none"
            />
            <motion.input
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="input-field focus:outline-none focus:border-none"
            />
            <Button className="rounded-full p-6" onClick={handleSignUp} >SignUp</Button>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  );
}
