"use client";

import { useEffect } from "react";
import ClaritySDK from "@microsoft/clarity";

let hasInitialized = false;

export default function Clarity({ id }) {
  useEffect(() => {
    if (!id || process.env.NODE_ENV !== "production" || hasInitialized) {
      return;
    }

    ClaritySDK.init(id);
    hasInitialized = true;
  }, [id]);

  return null;
}
