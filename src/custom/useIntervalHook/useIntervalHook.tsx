import { useEffect, useRef } from "react";

function useIntervalHook(callback: Function, delay: number) {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    tick();
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    } else {
      let id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useIntervalHook;
