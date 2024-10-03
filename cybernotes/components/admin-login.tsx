"use client";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useState } from "react";

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;



export function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const router = useRouter();
  if(typeof window !== "undefined") {
    if(sessionStorage.getItem("admin") === USERNAME && sessionStorage.getItem("pass") === PASSWORD) {
      router.push("/admin")
    }
  }
  console.log(USERNAME + "username")
  

  const handlelogin = () => {
    if(username === USERNAME && password === PASSWORD) {
      if(typeof window !== "undefined") {
        sessionStorage.setItem("admin", username)
        sessionStorage.setItem("pass", password)
      }
      router.push("/admin")
  }else{
    alert("Invalid username or password")
  }

  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your credentials to access your account. {USERNAME}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <Label className="sr-only" htmlFor="username">
              Username 
            </Label>
            <Input className="w-full" id="username" placeholder="Username" type="text" onChange={
              (e) => setUsername(e.target.value)
            
            } />
          </div>
          <div>
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input className="w-full" id="password" placeholder="Password" type="password" onChange={
              (e) => setPassword(e.target.value)
            
            } />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handlelogin}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
