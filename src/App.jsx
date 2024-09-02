// Importing useState hook for setting new state that is theme for the entire web page
import { useState } from 'react';

class Themes {
  #bodyColor = '';
  #footheadColor = '';

  // Constructor to initialize the theme colors
  constructor(bodyColor, footheadColor) {
    this.#bodyColor = bodyColor || '#ffffff'; // Default to white if no color is provided
    this.#footheadColor = footheadColor || '#dddddd'; // Default to Light grey if no color is provided
  }

  // Method to apply the theme to the webpage
  applyTheme() {
    document.querySelector('body').style.backgroundColor = this.#bodyColor;
    document.querySelector('footer').style.backgroundColor = this.#footheadColor;
    document.querySelector('header').style.backgroundColor = this.#footheadColor;
    document.documentElement.style.setProperty('--headfoot-text-color', this.#bodyColor);
    document.documentElement.style.setProperty('--button-text-color', this.#footheadColor);
  }
}

// Creating instances for different themes
let Light = new Themes('#cdcfc7', '#ffffff');
let Dark = new Themes('#333333', '#444444');
let Orange = new Themes('Orange', '#f3b94d');
let Pink = new Themes('#fa8498', 'Pink');
let Yellow = new Themes('Yellow', '#f0f05d');
let Red = new Themes('Red', '#e25757');

function App() {
  const [theme, setTheme] = useState('Light');

  // Function to handle theme change
  const handleThemeChange = (themeName) => {
    setTheme(themeName);
    switch (themeName) {
      case 'Dark':
        Dark.applyTheme();
        break;
      case 'Orange':
        Orange.applyTheme();
        break;
      case 'Pink':
        Pink.applyTheme();
        break;
      case 'Yellow':
        Yellow.applyTheme();
        break;
      case 'Red':
        Red.applyTheme();
        break;
      case 'Light':
      default:
        Light.applyTheme();
        break;
    }
  };

  return (
    <>
      <header>
        <h4>The {theme} Theme is Applied</h4>
      </header>

      <main>
        <button className="box" id="Dark" onClick={() => handleThemeChange('Dark')}>Dark</button>
        <button className="box" id="Orange" onClick={() => handleThemeChange('Orange')}>Orange</button>
        <button className="box" id="Pink" onClick={() => handleThemeChange('Pink')}>Pink</button>
        <button className="box" id="Yellow" onClick={() => handleThemeChange('Yellow')}>Yellow</button>
        <button className="box" id="Red" onClick={() => handleThemeChange('Red')}>Red</button>
        <button className="box" id="Light" onClick={() => handleThemeChange('Light')}>Light</button>
      </main>

      <footer>
        <p>&copy; 2024 Digvijay Chavan. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
