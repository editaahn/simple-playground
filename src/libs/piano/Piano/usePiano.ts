import { useState, useEffect, useCallback } from "react";

type UsePianoProps = {
  note: string[];
};

export const usePiano = ({ note }: UsePianoProps) => {
  const [pressed, setPressed] = useState<Set<string>>(new Set());

  const checkPressed = useCallback((key: string) => pressed.has(key), [pressed]);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (note.includes(e.key.toLowerCase())) {
        setPressed(prev => new Set([...prev.values(), e.key.toLowerCase()]));
      }
    });
    window.addEventListener('keyup', (e) => {
      if (note.includes(e.key.toLowerCase())) {
        setPressed(new Set());
      }
    });
  }, []);

  return { checkPressed, note };
};