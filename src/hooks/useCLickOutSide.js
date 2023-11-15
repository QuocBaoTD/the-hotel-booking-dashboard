import { useEffect, useRef } from "react";

export function useClickOutSide(action, listCapturing = true) {
  const myref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (myref.current && !myref.current.contains(e.target)) action();
      }

      document.addEventListener("click", handleClick, listCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listCapturing);
    },
    [action, listCapturing]
  );
  return myref;
}
