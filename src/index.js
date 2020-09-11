import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


    /* Using the DOM element passed to our script through the
     * renderExternalApp method as the mounting point of a
     * React application.
     */

    export function init({ containerId, container, props = {} } = {}) {
      let loadContainer = container || document.getElementById(containerId);
      ReactDOM.render(<App {...props} />, loadContainer);
    }
      /* Using the same DOM reference to clean up our React
       * application when the widget is about to be removed
       * from the screen.
       */
      export function clean({ container } = {}) {
        if (container) {
          ReactDOM.unmountComponentAtNode(container);
        }
      }
      
      init({
        containerId: 'root',
        props: {
          testProp: 'External Apps are Awesome'
        }
      });
      