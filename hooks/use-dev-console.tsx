"use client"

import { useEffect } from 'react'

export const useDevConsole = () => {
  useEffect(() => {
    // Only run in development and client-side
    if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined') {
      return
    }

    const initDevConsole = () => {
      // Add development helpers directly to window
      (window as any).devHelpers = {
        // Get all React components on page
        getComponents: () => {
          const reactRoot = document.querySelector('#__next') || document.querySelector('main')
          return reactRoot ? Array.from(reactRoot.querySelectorAll('*')).filter(el => 
            Object.keys(el).some(key => key.startsWith('__reactInternalInstance'))
          ) : []
        },

        // Quick element inspector
        inspect: (selector: string) => {
          const element = document.querySelector(selector)
          if (element) {
            console.log('Element:', element)
            console.log('Styles:', window.getComputedStyle(element))
            console.log('Classes:', element.className)
            return element
          }
          console.log('Element not found:', selector)
        },

        // Live CSS injection
        liveCSS: (css: string) => {
          const style = document.createElement('style')
          style.id = 'live-css-' + Date.now()
          style.textContent = css
          document.head.appendChild(style)
          console.log('Live CSS injected:', style.id)
          return style.id
        },

        // Remove live CSS
        removeLiveCSS: (id?: string) => {
          if (id) {
            const style = document.getElementById(id)
            if (style) style.remove()
          } else {
            // Remove all live CSS
            document.querySelectorAll('[id^="live-css-"]').forEach(el => el.remove())
          }
        }
      }

      // Load the main dev console script
      const script = document.createElement('script')
      script.src = '/dev-console.js'
      script.onload = () => {
        console.log('🚀 Bohr Systems Dev Console Loaded! Type BohrDev.help() for commands')
      }
      script.onerror = () => {
        console.warn('Dev console script failed to load')
      }
      
      document.head.appendChild(script)
    }

    // Use a small delay to ensure DOM is ready
    const timer = setTimeout(initDevConsole, 100)

    return () => {
      clearTimeout(timer)
      const script = document.querySelector('script[src="/dev-console.js"]')
      if (script) script.remove()
      
      // Clean up window objects
      if ((window as any).devHelpers) {
        delete (window as any).devHelpers
      }
      if ((window as any).BohrDev) {
        delete (window as any).BohrDev
      }
    }
  }, [])
}