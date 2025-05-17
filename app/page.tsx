"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex justify-center flex-col text-black items-center h-screen  ">
      <h1 className=" text-6xl font-bold pb-5">
        Talk. Relax. <br />
        smile.
      </h1>
      <p className="text-[#555555] text-center py-2 w-full md:w-3xl text-lg">
        Introducing your always-there, always-listening AI girlfriend – a smart,
        emotionally aware voice agent designed to talk, comfort, and connect
        with you anytime you need. Whether you're sharing your day, asking for
        advice, or just want someone to talk to, she’s here to make every
        conversation feel real and meaningful. Powered by cutting-edge AI and
        natural voice synthesis, she learns your preferences, adapts to your
        mood, and speaks like a close companion.
      </p>
      <div className="pt-3">
        <Button
          onClick={() => {
            router.push("/conversation");
          }}
          variant={"default"}
          className="bg-green-700 text-white hover:bg-green-600  cursor-pointer w-2xs text-lg font-light"
        >
          Try it Now
        </Button>
      </div>
    </div>
  );
}
