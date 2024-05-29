/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import baguetteBox from 'baguettebox.js';

/**
 * Write any other JavaScript below
 */

if (document.title) {
  switch (document.title) {
    case "Chefs de pueblo: Los chefs":
      // Header
      document.querySelector('#nav-link-header-1').classList.add("text-navlink-active");
      document.querySelector('#nav-link-header-2').classList.add("text-navlink","hover:text-navlink-hover");
      document.querySelector('#nav-link-header-3').classList.add("text-navlink","hover:text-navlink-hover");
      // Footer
      document.querySelector('#nav-link-footer-1').classList.add("text-navlink-active");
      document.querySelector('#nav-link-footer-2').classList.add("text-navlink","hover:text-navlink-hover");
      document.querySelector('#nav-link-footer-3').classList.add("text-navlink","hover:text-navlink-hover");
      break;
    case "Chefs de pueblo: Galería":
      // Header
      document.querySelector('#nav-link-header-1').classList.add("text-navlink","hover:text-navlink-hover");
      document.querySelector('#nav-link-header-2').classList.add("text-navlink-active");
      document.querySelector('#nav-link-header-3').classList.add("text-navlink","hover:text-navlink-hover");
      // Footer
      document.querySelector('#nav-link-footer-1').classList.add("text-navlink","hover:text-navlink-hover");
      document.querySelector('#nav-link-footer-2').classList.add("text-navlink-active");
      document.querySelector('#nav-link-footer-3').classList.add("text-navlink","hover:text-navlink-hover");
      break;
    default:
      break;
  }
}

if (document.querySelector('.gallery') !== null) {
  baguetteBox.run('.gallery', {overlayBackgroundColor: 'oklch(40.1% 0.123 21.57 / 70%)'});
}
