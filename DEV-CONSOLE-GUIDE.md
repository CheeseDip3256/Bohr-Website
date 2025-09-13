# 🚀 Bohr Systems - Dev Console Guide

## Quick Setup
1. Open your browser's Developer Console (F12)
2. The dev console will auto-load in development mode
3. Type `BohrDev.help()` to see all available commands

## 🎯 Quick Commands

### Text Changes
```javascript
BohrDev.changeTitle("QUANTUM SYSTEMS")
BohrDev.changeTitle("NEURAL NETWORKS")
BohrDev.changeTitle("CYBER DYNAMICS")
```

### Video Changes
```javascript
BohrDev.changeVideo("/new-video.mp4")
BohrDev.changeVideo("https://example.com/video.mp4")
```

### Styling
```javascript
// Colors
BohrDev.changeTextColor("red")
BohrDev.changeTextColor("#00ff00")
BohrDev.changeTextColor("rgba(255,0,255,0.8)")

// Font Size
BohrDev.changeFontSize("12rem")
BohrDev.changeFontSize("clamp(4rem, 10vw, 15rem)")

// Font Weight
BohrDev.changeFontWeight("100")  // Thin
BohrDev.changeFontWeight("900")  // Black
```

### Overlays
```javascript
// Add colored overlay
BohrDev.addOverlay("blue", 0.3)
BohrDev.addOverlay("rgba(255,0,0,0.2)")
BohrDev.addOverlay("linear-gradient(45deg, #ff00ff, #00ffff)", 0.4)

// Remove overlay
BohrDev.removeOverlay()
```

## 🎨 Quick Presets

### Theme Presets
```javascript
BohrDev.presets.darkMode()     // Dark overlay + white text
BohrDev.presets.lightMode()    // Clean, bright
BohrDev.presets.neonGlow()     // Green neon glow effect
BohrDev.presets.cyberpunk()    // Pink/cyan cyberpunk theme
BohrDev.presets.minimal()      // Clean, minimal look
```

## 🛠️ Advanced Commands

### Custom CSS
```javascript
// Add custom CSS
BohrDev.addCSS(`
  h1 {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`)
```

### Element Control
```javascript
// Hide/show elements
BohrDev.hideElement("form")           // Hide newsletter form
BohrDev.showElement("form")           // Show newsletter form
BohrDev.hideElement(".footer")        // Hide footer
```

### Live CSS Injection
```javascript
// Advanced live CSS
devHelpers.liveCSS(`
  body {
    filter: hue-rotate(180deg);
  }
`)

// Remove all live CSS
devHelpers.removeLiveCSS()
```

## 🎪 Fun Examples

### Matrix Effect
```javascript
BohrDev.addCSS(`
  h1 {
    color: #00ff00 !important;
    text-shadow: 0 0 10px #00ff00 !important;
    font-family: 'Courier New', monospace !important;
  }
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,255,0,0.03) 2px,
      rgba(0,255,0,0.03) 4px
    );
    pointer-events: none;
    z-index: 1000;
  }
`)
```

### Glitch Effect
```javascript
BohrDev.addCSS(`
  h1 {
    animation: glitch 1s infinite;
  }
  
  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
  }
`)
```

### Hologram Effect
```javascript
BohrDev.addCSS(`
  h1 {
    color: #00ffff !important;
    text-shadow: 
      0 0 5px #00ffff,
      0 0 10px #00ffff,
      0 0 15px #00ffff,
      0 0 20px #00ffff !important;
    animation: hologram 3s ease-in-out infinite alternate;
  }
  
  @keyframes hologram {
    0% { opacity: 1; transform: translateY(0px); }
    100% { opacity: 0.8; transform: translateY(-10px); }
  }
`)
```

## 🔄 Reset Everything
```javascript
BohrDev.reset()  // Resets all changes back to original
```

## 💡 Pro Tips

1. **Chain Commands**: You can run multiple commands quickly
   ```javascript
   BohrDev.changeTitle("CYBER SYSTEMS"); BohrDev.presets.neonGlow();
   ```

2. **Save Favorites**: Create your own presets
   ```javascript
   window.myPreset = () => {
     BohrDev.changeTitle("MY COMPANY");
     BohrDev.addOverlay("purple", 0.2);
     BohrDev.changeFontWeight("800");
   }
   // Then use: myPreset()
   ```

3. **Inspect Elements**: Use browser dev tools alongside console commands
   ```javascript
   devHelpers.inspect("h1")  // Get detailed info about title element
   ```

4. **Live Reload**: Changes persist until page refresh - perfect for rapid iteration!

---

**Happy Coding! 🚀**
