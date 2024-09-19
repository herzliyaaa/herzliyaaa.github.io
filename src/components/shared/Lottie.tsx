"use client";
import { ILottie } from "@/types";
import React from "react";
import Animation from "react-lottie";

export default function Lottie({ data, length, width }: ILottie) {
  const defaultOptions = {
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "none", // Changed from "xMidYMid slice" to "none"
    },
  };

  return <Animation options={defaultOptions} height={length} width={width} />;
}
