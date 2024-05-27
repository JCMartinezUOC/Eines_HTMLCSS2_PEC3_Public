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

if (document.querySelector('.gallery') !== null) {
  baguetteBox.run('.gallery', {overlayBackgroundColor: 'oklch(40.1% 0.123 21.57 / 70%)'});
}
