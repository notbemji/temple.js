import {globals} from "./globals.js";

export class drawing {
    static clear() {
        globals.main_context.clearRect(0, 0, globals.main_canvas.width, globals.main_canvas.height);
    }

    static clear_area(x, y, w, h) {
        globals.main_context.clearRect(x, y, w, h);
    }

    static filled_rectangle(x, y, w, h, color) {
        globals.main_context.fillStyle = color;
        globals.main_context.fillRect(x, y, w, h);
    }

    static text(x, y, text, color, font = '12px monospace', stroke = false) {
        globals.main_context.fillStyle = color;
        globals.main_context.font = font;

        globals.main_context.fillText(text, x, y);

        if (stroke) {
            globals.main_context.strokeText(text, x, y);
        }
    }
}