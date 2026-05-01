"use client";

import { useEffect, useState } from "react";

const LISTENERS_KEY = "__veloriqipFetchListeners";
const PENDING_KEY = "__veloriqipFetchPending";
const PATCHED_KEY = "__veloriqipFetchPatched";
const ORIGINAL_FETCH_KEY = "__veloriqipOriginalFetch";

function notifyListeners(listeners, pendingCount) {
  listeners.forEach((listener) => listener(pendingCount));
}

export default function GlobalFetchLoader() {
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const win = window;

    if (!win[LISTENERS_KEY]) {
      win[LISTENERS_KEY] = new Set();
    }

    if (typeof win[PENDING_KEY] !== "number") {
      win[PENDING_KEY] = 0;
    }

    const listeners = win[LISTENERS_KEY];
    const updatePendingCount = (count) => setPendingCount(count);
    listeners.add(updatePendingCount);
    updatePendingCount(win[PENDING_KEY]);

    if (!win[PATCHED_KEY]) {
      win[PATCHED_KEY] = true;
      win[ORIGINAL_FETCH_KEY] = win.fetch.bind(win);

      win.fetch = async (...args) => {
        win[PENDING_KEY] += 1;
        notifyListeners(listeners, win[PENDING_KEY]);

        try {
          return await win[ORIGINAL_FETCH_KEY](...args);
        } finally {
          win[PENDING_KEY] = Math.max(0, win[PENDING_KEY] - 1);
          notifyListeners(listeners, win[PENDING_KEY]);
        }
      };
    }

    return () => {
      listeners.delete(updatePendingCount);
    };
  }, []);

  if (pendingCount === 0) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[120]">
      <div className="h-1 w-full overflow-hidden bg-[rgb(var(--border))]/70">
        <div className="global-fetch-loader h-full w-1/3 bg-[rgb(var(--brand-gold))]" />
      </div>
    </div>
  );
}
