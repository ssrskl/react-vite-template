import { TypeAnimation } from "react-type-animation";
import { PasswordInput } from "./components/PasswordInput";
import { Label } from "@/components/ui/label";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Home Page</h1>
      <p className="animate-fade-up animate-ease-out">欢迎来到此网站</p>
      <TypeAnimation
        className="text-2xl tracking-widest md:text-5xl"
        sequence={[500, "全栈工程师", 1000, "Full stack engineer", 1000]}
        speed={10}
        repeat={Infinity}
      />
      <Label>密码</Label>
      <PasswordInput />
    </div>
  );
};
