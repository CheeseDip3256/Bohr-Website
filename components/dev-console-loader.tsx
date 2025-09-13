"use client"

import { useDevConsole } from "@/hooks/use-dev-console"

export const DevConsoleLoader = () => {
  useDevConsole()
  return null
}
