import {globals} from "./globals.js";
import {drawing} from "./drawing.js";

function resize_canvas()
{
    globals.main_canvas.height = document.body.clientHeight - 4;
    globals.main_canvas.width = document.body.clientWidth;
}

// Lambda called when HTML context is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    globals.main_canvas = document.querySelector('#main-canvas');
    globals.main_context = globals.main_canvas.getContext('2d');

    // Always keep canvas size up-to-date
    resize_canvas();
    document.body.onresize = resize_canvas;

    document.body.onmousemove = (event) => {
        globals.mouse_position.x = event.clientX;
        globals.mouse_position.y = event.clientY;

        drawing.clear_area(0, 0, globals.main_canvas.width, 20);
        drawing.filled_rectangle(0, 0, globals.main_canvas.width, 20, '#111111');
        drawing.text(5, 13, 'mouse_position: ' + globals.mouse_position.x + 'X ' + globals.mouse_position.y + 'Y', '#ffffff');
    }
});