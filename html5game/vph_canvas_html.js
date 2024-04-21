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