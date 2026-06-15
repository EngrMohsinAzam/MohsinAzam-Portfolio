import { useEffect, useRef, useState } from "react";

type Phase = "typing" | "pausing" | "deleting";

const TYPE_MS = 55;
const DELETE_MS = 32;
const PAUSE_MS = 1800;

/**
 * Cycles through strings with type → pause → erase animation.
 * Uses refs + setTimeout so it keeps running reliably (not blocked by
 * prefers-reduced-motion or React effect re-run timing).
 */
export function useTypewriter(roles: readonly string[]) {
  const [text, setText] = useState("");
  const rolesRef = useRef(roles);
  rolesRef.current = roles;

  useEffect(() => {
    const state = {
      roleIndex: 0,
      charIndex: 0,
      phase: "typing" as Phase,
    };

    let timer: ReturnType<typeof setTimeout> | null = null;
    let mounted = true;

    const schedule = (ms: number) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(tick, ms);
    };

    const tick = () => {
      if (!mounted) return;

      const list = rolesRef.current;
      if (!list.length) return;

      const role = list[state.roleIndex];

      if (state.phase === "typing") {
        if (state.charIndex < role.length) {
          state.charIndex += 1;
          setText(role.slice(0, state.charIndex));
          schedule(TYPE_MS);
          return;
        }
        state.phase = "pausing";
        schedule(PAUSE_MS);
        return;
      }

      if (state.phase === "pausing") {
        state.phase = "deleting";
        schedule(DELETE_MS);
        return;
      }

      // deleting
      if (state.charIndex > 0) {
        state.charIndex -= 1;
        setText(role.slice(0, state.charIndex));
        schedule(DELETE_MS);
        return;
      }

      state.roleIndex = (state.roleIndex + 1) % list.length;
      state.phase = "typing";
      schedule(TYPE_MS);
    };

    schedule(TYPE_MS);

    return () => {
      mounted = false;
      if (timer) clearTimeout(timer);
    };
  }, []);

  return text;
}
