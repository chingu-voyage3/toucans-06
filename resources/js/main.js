/**
 *
 * @source: ./resources/js/main.js
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2018 Toucans-06
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

window.onload = function() {
    /*
      Display the modal when the page loads.
      Based on: https://www.w3schools.com/howto/howto_css_modals.asp
     */
    let modal = document.getElementById("modal");
    let modalClose = document.getElementsByClassName("fa-times")[0];
    let modalRibbon = document.getElementsByClassName("modal-ribbon")[0];

    // Display the modal when the page is loaded.
    modal.style.display = "block";

    // Hide the modal when X is clicked
    modalClose.onclick = function() {
        modal.style.display = "none";
    }

    // Show modal when ribbon is clicked
    modalRibbon.onclick = function() {
        modal.style.display = "block";
    }

    // Hide modal when area around text is clicked
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    /*
       Select random number between 1 and 3, add innerHTML to video
       element with video file name
    */

    let randomVideoNum = Math.floor(Math.random() * 3) + 1;
    let videoElement = document.getElementsByTagName("video")[0];

    videoElement.poster = `./resources/images/video_poster${randomVideoNum}.jpg`;
    
    videoElement.innerHTML = `
            <source src="./resources/videos/video${randomVideoNum}.mp4" type="video/mp4">
            Videos of people doing different tasks in the nonprofit organizations we support.`;

    window.onscroll = function() {
        /*
          Detect when window is scrolled down more than 50 pixels, then add
          header-scrolled class and remove class when window is scrolled back to top. 
        */

        let primaryHeaderElement = document.getElementsByClassName("primary-header");
        let primaryContainerElement = document.getElementsByClassName("primary-header-container");

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            primaryHeaderElement[0].classList.add("header-scrolled");
            primaryContainerElement[0].classList.add("primary-container-scrolled");
        } else {
            primaryHeaderElement[0].classList.remove("header-scrolled");
            primaryContainerElement[0].classList.remove("primary-container-scrolled");
        }
    };
};

/*
  Scroll to blog section

  TODO: This should probably be replaced by jQuery so it's compatible with more browsers
  and to make it so we can control the speed of the scroll.
*/
var scrollToBlog = () => {
    document.querySelector('#blog').scrollIntoView({ 
        behavior: 'smooth',
        duration: 10000
    });
};
