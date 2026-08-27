// GameMaker: Studio HTML Extension
// Originally created by Schalk, updated by Derme
var wrapper = document.createElement("div");
var canvas = document.getElementById("canvas");
var canvas_html = document.createElement("div");
var canvas_html_callbacks = [];
var canvas_html_id = 0;
var initialised = false;







function get_landmarks() {
return document.getElementById('mocap').contentWindow.lm
}


function gmh_canvas_html_set_y(a, b) {
	canvas_element = document.getElementById("canvas_html_" + a);
	canvas_element.style.top = b + "px";
}

function gmh_canvas_html_set_x(a, b) {
	canvas_element = document.getElementById("canvas_html_" + a);fpo
	canvas_element.style.left = b + "px";
}

function gmh_canvas_html_get_y(a) {
	canvas_element = document.getElementById("canvas_html_" + a);
	return parseFloat(canvas_element.style.top);
}

function gmh_canvas_html_get_x(a) {
	canvas_element = document.getElementById("canvas_html_" + a);
	return parseFloat(canvas_element.style.left);
}

function gmh_canvas_html_set_html(a, b) {
	canvas_element = document.getElementById("canvas_html_" + a);
	canvas_element.innerHTML = b;
}

function gmh_canvas_html_get_html(a) {
	canvas_element = document.getElementById("canvas_html_" + a);
	return canvas_element.innerHTML;
}

function gmh_canvas_html_get_value(a) {
	canvas_element = document.getElementById("canvas_html_" + a).firstChild;
	return canvas_element.value;
}

function gmh_canvas_html_set_value(a, b) {
	canvas_element = document.getElementById("canvas_html_" + a).firstChild;
	canvas_element.value = b;
}

function gmh_canvas_html_get_checked(a) {
	canvas_element = document.getElementById("canvas_html_" + a).firstChild;
	return canvas_element.checked;
}

function gmh_canvas_html_set_checked(a, b) {
	canvas_element = document.getElementById("canvas_html_" + a).firstChild;
	canvas_element.checked = b;
}

function gmh_canvas_html_show(a) {
	canvas_element = document.getElementById("canvas_html_" + a);
	canvas_element.style.display = "inline";
}

function gmh_canvas_html_hide(a) {
	canvas_element = document.getElementById("canvas_html_" + a);
	canvas_element.style.display = "none";
}

function gmh_canvas_html_remove(a) {
	canvas_html = document.getElementById("canvas_html");
	canvas_element = document.getElementById("canvas_html_" + a);
	canvas_html.removeChild(canvas_element);
}

function gmh_canvas_html_add(a, b, c) {
	canvas_html=document.getElementById("canvas_html");
	canvas_element=document.createElement("div");
	canvas_html_id++;
	canvas_element.setAttribute("id", "canvas_html_" + canvas_html_id);
	canvas_element.style.position = "relative";
	canvas_element.style.left = a + "px";
	canvas_element.style.top = b + "px";
	canvas_element.innerHTML = c;
	canvas_html.appendChild(canvas_element);
	return canvas_html_id;
}

function gmh_canvas_html_active_element() {
    return document.activeElement.tagName.toLowerCase();
}

function gmh_canvas_html_fire_event(a) {
	canvas_html_callbacks[a]=true;
}

function gmh_canvas_html_add_event() {
	canvas_html_callbacks[canvas_html_callbacks.length]=false;
	return canvas_html_callbacks.length-1;
}

function gmh_landmarks()
{
//return(JSON.stringify(poses[0]))
var outputina = document.getElementById("tappy").contentWindow.poses[0]
return  outputina

}

function gmh_canvas_html_callback(a) {
	if (canvas_html_callbacks[a]) {
		canvas_html_callbacks[a] = false;
		return true;
	}			
	return false;
}


function readTextFileAsync(fileUrl, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", fileUrl, true); // true for asynchronous
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                callback(null);
            }
        }
    };
    xhr.send();
}


function hide_mocap(){
document.getElementById("mocap").style.display = "none";
}
function show_mocap(){
document.getElementById("mocap").style.display = "block";
}

function hide_scanner(){
document.getElementById("scan").style.display = "none";
}
function show_scanner(){
document.getElementById("scan").style.display = "block";
}




function readTextFile(fileUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", fileUrl, false);
    xhr.send();

    if (xhr.status === 200) {
if (xhr.responseText.length > 15)
        return xhr.responseText;
    } else {
        return null;
    }
}

function speak(text) {
  if ('speechSynthesis' in window) {
    const synth = window.speechSynthesis;
    synth.cancel(); // Cancel any previous speech
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set an event listener to start the next speech when the current one ends
    utterance.onend = function () {
      // You can now safely start the next speech here if needed
      // Example: speak("New text to be spoken");
    };

    synth.speak(utterance);
  } else {
    console.error('Speech synthesis is not supported in this browser.');
  }
}
function set_canvas_link(var_id,var_link) {
var linkElement = document.getElementById(var_id);

// Set the new link
linkElement.src = var_link;
}
function get_domain()
{
var url = window.location.href; // Get the current document's URL
var parser = document.createElement('a');
parser.href = url;
var domain = parser.hostname; // Extract the domain

return domain;
}
function gmh_initiate() {
	if (!initialised) {
		canvas_html.setAttribute("id","canvas_html");
		canvas_html.style.position = "absolute";
		canvas_html.style.left = "0px";
		canvas_html.style.top = "0px";
		canvas.parentNode.insertBefore(wrapper, canvas);
		wrapper.appendChild(canvas);
		wrapper.appendChild(canvas_html);
		initialised = true;





	}
}


function isAndroid() {
    return /Android/.test(navigator.userAgent);
}

function ToggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}
function stretchCanvasFullscreen() {
    var canvas = document.getElementById("canvas");
    if (canvas) {
        // Set canvas to cover the entire viewport
        canvas.style.position = "absolute";
        canvas.style.left = "0";
        canvas.style.top = "0";
        canvas.style.width = "100vw"; // Use viewport width
        canvas.style.height = "88vh"; // Use viewport height

        // Adjust canvas size based on the window dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

// // Call this function on window resize
// window.addEventListener('resize', stretchCanvasFullscreen);

// // Call the function initially to set the canvas size to fullscreen when the page loads
// document.addEventListener('DOMContentLoaded', stretchCanvasFullscreen);


function allowfs() {
if (confirm("Fullscreen?") == true) {
// ToggleFullScreen();
} else {
}
}

function getMyResultFromIframe() {
return (document.getElementById('scan').contentWindow.qrData)

}
function updateCSS() {
    // Create a new style element
    var style = document.createElement('style');
    style.type = 'text/css';

    // Define the CSS rules
    var css = `
        html, body {
            margin: 0;
            padding: 0;
            border: 0;
            width: 500px;
            height:  800px;
            overflow: hidden; /* Prevent scrollbars */
        }

        canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 500px; /* Full viewport width */
            height:  800px; /* Full viewport height */
            image-rendering: optimizeSpeed;
            -webkit-interpolation-mode: nearest-neighbor;
            -ms-touch-action: none;
            margin: 0;
            padding: 0;
            border: 0;
        }

        :-webkit-full-screen {
            width: 500px;
            height:  800px;
        }

        :-moz-full-screen {
            width: 500px;
            height:  800px;
        }

        :-ms-fullscreen {
            width: 500px;
            height:  800px;
        }

        fullscreen {
            width: 500px;
            height:  800px;
        }
    `;

    // Add the CSS rules to the style element
    if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    // Append the style element to the head
    document.head.appendChild(style);
	stretch()
}

// Call the function to update CSS
// ============================================================
// PORTRAIT RESOLUTION FIX — RUNS ONCE
// ============================================================

function stretch() {
    const width = screen.width;
    const height = screen.height;

    // Only change layout in PORTRAIT mode
    if (width < height) {

        const canvas = document.getElementById("canvas");
        const canvas_html = document.getElementById("canvas_html");

        if (canvas) {
            // Canvas visual size
            canvas.style.position = "absolute";
            canvas.style.left = "0";
            canvas.style.top = "0";
            canvas.style.width = "100vw";
            canvas.style.height = "90vh";

            // Actual canvas resolution
            canvas.width = window.innerWidth;
            canvas.height = Math.floor(window.innerHeight * 0.90);
        }

        if (canvas_html) {
            // Make HTML clickable zone match canvas
            canvas_html.style.position = "absolute";
            canvas_html.style.left = "0";
            canvas_html.style.top = "0";
            canvas_html.style.width = "100vw";
            canvas_html.style.height = "90vh";
        }

        // Make the wrapper match as well
        if (typeof wrapper !== "undefined" && wrapper) {
            wrapper.style.position = "absolute";
            wrapper.style.left = "0";
            wrapper.style.top = "0";
            wrapper.style.width = "100vw";
            wrapper.style.height = "90vh";
        }
    }

    // Landscape = do nothing
}