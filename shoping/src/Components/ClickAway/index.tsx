/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useRef } from "react"

interface IClickAwayProps {
  children: ReactNode
  onClickAway: () => void
}

export const ClickAway = ({ children, onClickAway }: IClickAwayProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const event = (e: Event) => {
    if (!ref.current?.contains(e.target as Node)) onClickAway()
  }

  useEffect(() => {
    document.addEventListener("mousedown", event)
  }, [])

  useEffect(() => {
    return () => {
      document.removeEventListener("mousedown", event)
    }
  }, [])

  //   const keyDown = (key) => {
  //     if (key.key == "Escape") onClickAway;
  //   };

  //   useEffect(() => {
  //     document.addEventListener("keydown", key);
  //   });

  return <div ref={ref}>{children}</div>
}
