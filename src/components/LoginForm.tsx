
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Eye, EyeOff } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: "You've successfully logged into your book review account.",
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-amber-200 bg-gradient-to-b from-amber-50 to-white">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-amber-100 rounded-full">
            <BookOpen className="h-8 w-8 text-amber-700" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-amber-900 mb-2">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-amber-700">
          Sign in to continue your literary journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-amber-900 font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="reader@bookclub.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-amber-200 focus:border-amber-400 focus:ring-amber-200"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-amber-900 font-medium">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your secret key to stories"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-amber-200 focus:border-amber-400 focus:ring-amber-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-600 hover:text-amber-800 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 transition-all duration-200 transform hover:scale-105"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-amber-700">
            New to our book community?{" "}
            <button className="font-medium text-amber-800 hover:text-amber-900 underline transition-colors">
              Create an account
            </button>
          </p>
          <p className="text-xs text-amber-600 mt-2">
            <button className="hover:text-amber-800 transition-colors">
              Forgot your password?
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
