// Development Console Helper for Bohr Systems
// Load this in browser console for quick edits

// Ensure we're in a browser environment
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  window.BohrDev = {
  // Quick text changes
  changeTitle: (newTitle) => {
    const titleElement = document.querySelector('h1');
    if (titleElement) {
      titleElement.textContent = newTitle;
      console.log(`Title changed to: ${newTitle}`);
    }
  },

  // Change video source
  changeVideo: (videoUrl) => {
    const video = document.querySelector('video');
    if (video) {
      video.src = videoUrl;
      video.load();
      console.log(`Video changed to: ${videoUrl}`);
    }
  },

  // Change colors
  changeTextColor: (color) => {
    const title = document.querySelector('h1');
    if (title) {
      title.style.color = color;
      console.log(`Text color changed to: ${color}`);
    }
  },

  // Change background color overlay
  addOverlay: (color, opacity = 0.5) => {
    const main = document.querySelector('main');
    if (main) {
      const overlay = document.createElement('div');
      overlay.id = 'dev-overlay';
      overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${color};
        opacity: ${opacity};
        pointer-events: none;
        z-index: 1;
      `;
      
      // Remove existing overlay
      const existing = document.getElementById('dev-overlay');
      if (existing) existing.remove();
      
      main.appendChild(overlay);
      console.log(`Overlay added: ${color} at ${opacity} opacity`);
    }
  },

  removeOverlay: () => {
    const overlay = document.getElementById('dev-overlay');
    if (overlay) {
      overlay.remove();
      console.log('Overlay removed');
    }
  },

  // Change font size
  changeFontSize: (size) => {
    const title = document.querySelector('h1');
    if (title) {
      title.style.fontSize = size;
      console.log(`Font size changed to: ${size}`);
    }
  },

  // Change font weight
  changeFontWeight: (weight) => {
    const title = document.querySelector('h1');
    if (title) {
      title.style.fontWeight = weight;
      console.log(`Font weight changed to: ${weight}`);
    }
  },

  // Hide/show elements
  hideElement: (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = 'none';
      console.log(`Hidden: ${selector}`);
    }
  },

  showElement: (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = '';
      console.log(`Shown: ${selector}`);
    }
  },

  // Add custom CSS
  addCSS: (css) => {
    const style = document.createElement('style');
    style.id = 'dev-custom-css';
    style.textContent = css;
    
    // Remove existing custom CSS
    const existing = document.getElementById('dev-custom-css');
    if (existing) existing.remove();
    
    document.head.appendChild(style);
    console.log('Custom CSS added');
  },

  // Quick presets
  presets: {
    darkMode: () => {
      BohrDev.addOverlay('black', 0.3);
      BohrDev.changeTextColor('white');
      console.log('Dark mode applied');
    },

    lightMode: () => {
      BohrDev.removeOverlay();
      BohrDev.changeTextColor('white');
      console.log('Light mode applied');
    },

    neonGlow: () => {
      BohrDev.addCSS(`
        h1 {
          text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00 !important;
          color: #00ff00 !important;
        }
      `);
      console.log('Neon glow applied');
    },

    cyberpunk: () => {
      BohrDev.addOverlay('linear-gradient(45deg, #ff00ff, #00ffff)', 0.2);
      BohrDev.addCSS(`
        h1 {
          color: #00ffff !important;
          text-shadow: 0 0 20px #ff00ff !important;
          font-weight: 900 !important;
        }
      `);
      console.log('Cyberpunk theme applied');
    },

    minimal: () => {
      BohrDev.removeOverlay();
      BohrDev.addCSS(`
        h1 {
          color: #333 !important;
          text-shadow: none !important;
          font-weight: 300 !important;
        }
      `);
      console.log('Minimal theme applied');
    }
  },

  // Reset everything
  reset: () => {
    // Remove custom styles
    const customCSS = document.getElementById('dev-custom-css');
    if (customCSS) customCSS.remove();
    
    // Remove overlay
    BohrDev.removeOverlay();
    
    // Reset title
    const title = document.querySelector('h1');
    if (title) {
      title.style.cssText = '';
      title.textContent = 'BOHR SYSTEMS';
    }
    
    console.log('All changes reset');
  },

  // Help command
  help: () => {
    console.log(`
🚀 BOHR SYSTEMS DEV CONSOLE
============================

Quick Commands:
• BohrDev.changeTitle("NEW TITLE")
• BohrDev.changeVideo("/path/to/video.mp4")
• BohrDev.changeTextColor("red")
• BohrDev.changeFontSize("10rem")
• BohrDev.changeFontWeight("900")
• BohrDev.addOverlay("blue", 0.3)
• BohrDev.removeOverlay()

Presets:
• BohrDev.presets.darkMode()
• BohrDev.presets.lightMode()
• BohrDev.presets.neonGlow()
• BohrDev.presets.cyberpunk()
• BohrDev.presets.minimal()

Utilities:
• BohrDev.hideElement("selector")
• BohrDev.showElement("selector")
• BohrDev.addCSS("custom css here")
• BohrDev.reset()
• BohrDev.help()

Examples:
BohrDev.changeTitle("QUANTUM SYSTEMS")
BohrDev.presets.neonGlow()
BohrDev.addOverlay("rgba(255,0,0,0.2)")
    `);
  }
  };

  // Auto-load message
  console.log('🚀 Bohr Systems Dev Console Loaded! Type BohrDev.help() for commands');
}
