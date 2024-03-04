"use client";
import React, { startTransition, useTransition } from "react";
import { useRouter } from "next/navigation";

function Buttons() {
  const [isPending, StartTransition] = useTransition();
  const router = useRouter();

  return (
    <div>
      <button
        className="px-6 py-2 mx-2 text-white bg-black"
        onClick={() =>
          startTransition(() => {
            router.push("en");
          })
        }
      >
        English
      </button>
      <button
        className="px-6 py-2 mx-2 text-white bg-black"
        onClick={() =>
          startTransition(() => {
            router.push("ur");
          })
        }
      >
        Urdu
      </button>
    </div>
  );
}

export default Buttons;
