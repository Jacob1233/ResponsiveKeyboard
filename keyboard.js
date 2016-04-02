//Jacob Wilson
//http://stackoverflow.com/questions/9098901/how-to-disable-repetitive-keydown-in-jquery
//http://www.cambiaresearch.com/articles/15/javascript-key-codes

var shift = false;
var capsLock = false;

//query the DOM
var textarea = $('#keyboardtarget');
var letter = $('.letter');

var KEYCODES = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUBRK: 19,
    CAPSLOCK: 20,
    ESCAPE: 27,
    SPACE: 32,
    PAGEUP: 33,
    PAGEDOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    INS: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    LEFTWINDOW: 91,
    RIGHTWINDOW: 92,
    SELECTKEY: 93,
    NUMPAD0: 96,
    NUMPAD1: 97,
    NUMPAD2: 98,
    NUMPAD3: 99,
    NUMPAD4: 100,
    NUMPAD5: 101,
    NUMPAD6: 102,
    NUMPAD7: 103,
    NUMPAD8: 104,
    NUMPAD9: 105,
    MULTIPLY: 106,
    ADD: 107,
    SUBTRACT: 109,
    DECIMALPOINT: 110,
    DIVIDE: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SCROLLLOCK: 145,
    SEMICOLON: 186,
    EQUALSIGN: 187,
    COMMA: 188,
    DASH: 189,
    PERIOD: 190,
    FORWARDSLASH: 191,
    GRAVEACCENT: 192,
    OPENBRACKET: 219,
    BACKSLASH: 220,
    CLOSEBRAKET: 221,
    SINGLEQUOTE: 222,
    LEFTCOMMAND: 91,
    RIGHTCOMMAND: 92
};

function type(param) {
    if (shift == true || capsLock == true) {
        textarea.val(textarea.val() + param.toUpperCase());
    } else {
        textarea.val(textarea.val() + param);
    }
}

var down = {};
$(document).keydown(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    checkKeyPress(keycode);
});

$(document).keyup(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    checkKeyUp(keycode);

});

function checkKeyPress(keycode) {
    //Prevent repetitive keys
    if (down[keycode] == null) {
        if (keycode == KEYCODES.SHIFT) {
            $("#16a").addClass('keydown');
        }
        
        $("#" + keycode).addClass('keydown');
        down[keycode] = true;

        //caps
        if (keycode == KEYCODES.CAPSLOCK) {
            if (capsLock == true) {
                capsLock = false;
                $(letter).removeClass('uppercase')
                $("#" + KEYCODES.CAPSLOCK).removeClass('capsLockOn');
            } else {
                capsLock = true;
                $(letter).addClass('uppercase');
                $("#" + KEYCODES.CAPSLOCK).addClass('capsLockOn');
            }

        }

        //shift
        if (keycode == KEYCODES.SHIFT) {
            shift = true;
            $(".off").css("display", "none");
            $(".on").css("display", "block");
            $(".letter").css("text-transform", "uppercase");

        }

        //tab
        if (keycode == KEYCODES.TAB) {
            event.preventDefault();
        }

        //backspace
        if (keycode == KEYCODES.BACKSPACE) {
            event.preventDefault();
            textarea.val(textarea.val().slice(0, -1));
        }

        //space
        if (keycode == KEYCODES.SPACE) {
            type(" ");
        }

        if (keycode == KEYCODES.A) {
            type("a");
        }

        if (keycode == KEYCODES.B) {
            type("b");
        }

        if (keycode == KEYCODES.C) {
            type("c");
        }

        if (keycode == KEYCODES.D) {
            type("d");
        }

        if (keycode == KEYCODES.E) {
            type("e");
        }

        if (keycode == KEYCODES.F) {
            type("f");
        }

        if (keycode == KEYCODES.G) {
            type("g");
        }

        if (keycode == KEYCODES.H) {
            type("h");
        }

        if (keycode == KEYCODES.I) {
            type("i");
        }

        if (keycode == KEYCODES.J) {
            type("j");
        }

        if (keycode == KEYCODES.K) {
            type("k");
        }

        if (keycode == KEYCODES.L) {
            type("l");
        }

        if (keycode == KEYCODES.M) {
            type("m");
        }

        if (keycode == KEYCODES.N) {
            type("n");
        }

        if (keycode == KEYCODES.O) {
            type("o");
        }

        if (keycode == KEYCODES.P) {
            type("p");
        }

        if (keycode == KEYCODES.Q) {
            type("q");
        }

        if (keycode == KEYCODES.R) {
            type("r");
        }

        if (keycode == KEYCODES.S) {
            type("s");
        }

        if (keycode == KEYCODES.T) {
            type("t");
        }

        if (keycode == KEYCODES.U) {
            type("u");
        }

        if (keycode == KEYCODES.V) {
            type("v");
        }

        if (keycode == KEYCODES.W) {
            type("w");
        }

        if (keycode == KEYCODES.X) {
            type("x");
        }

        if (keycode == KEYCODES.Y) {
            type("y");
        }

        if (keycode == KEYCODES.Z) {
            type("z");
        }

        if (keycode == KEYCODES.ZERO) {
            if (shift == true) {
                type(')');
            } else {
                type("0");
            }
        }

        if (keycode == KEYCODES.ONE) {
            if (shift == true) {
                type('!');
            } else {
                type("1");
            }
        }

        if (keycode == KEYCODES.TWO) {
            if (shift == true) {
                type('@');
            } else {
                type("2");
            }
        }

        if (keycode == KEYCODES.THREE) {
            if (shift == true) {
                type('#');
            } else {
                type("3");
            }
        }

        if (keycode == KEYCODES.FOUR) {
            if (shift == true) {
                type('$');
            } else {
                type("4");
            }
        }

        if (keycode == KEYCODES.FIVE) {
            if (shift == true) {
                type('%');
            } else {
                type("5");
            }
        }

        if (keycode == KEYCODES.SIX) {
            if (shift == true) {
                type('^');
            } else {
                type("6");
            }
        }

        if (keycode == KEYCODES.SEVEN) {
            if (shift == true) {
                type('&');
            } else {
                type("7");
            }
        }

        if (keycode == KEYCODES.EIGHT) {
            if (shift == true) {
                type('*');
            } else {
                type("8");
            }
        }

        if (keycode == KEYCODES.NINE) {
            if (shift == true) {
                type('(');
            } else {
                type("9");
            }
        }

        if (keycode == KEYCODES.COMMA) {
            if (shift == true) {
                type('<');
            } else {
                type(",");
            }
        }

        if (keycode == KEYCODES.PERIOD) {
            if (shift == true) {
                type('>');
            } else {
                type(".");
            }
        }

        if (keycode == KEYCODES.SEMICOLON) {
            if (shift == true) {
                type(':');
            } else {
                type(";");
            }
        }

        if (keycode == KEYCODES.SINGLEQUOTE) {
            if (shift == true) {
                type('"');
            } else {
                type("'");
            }
        }

        if (keycode == KEYCODES.BACKSLASH) {
            if (shift == true) {
                type('|');
            } else {
                type('\\');
            }
        }

        if (keycode == KEYCODES.FORWARDSLASH) {
            if (shift == true) {
                type('?');
            } else {
                type("/");
            }
        }

        if (keycode == KEYCODES.OPENBRACKET) {
            if (shift == true) {
                type('{');
            } else {
                type("[");
            }
        }

        if (keycode == KEYCODES.CLOSEBRAKET) {
            if (shift == true) {
                type('}');
            } else {
                type("]");
            }
        }

        if (keycode == KEYCODES.DASH) {
            if (shift == true) {
                type('_');
            } else {
                type("-");
            }
        }

        if (keycode == KEYCODES.EQUALSIGN) {
            if (shift == true) {
                type('+');
            } else {
                type("=");
            }
        }
        
    }
}

function checkKeyUp(keycode) {
    down[keycode] = null;
    if (keycode == KEYCODES.SHIFT) {
            $("#16a").removeClass('keydown');
        }

    $("#" + keycode).removeClass('keydown');
    if (keycode == KEYCODES.SHIFT) {
        shift = false;
        $(".off").css("display", "block");
        $(".on").css("display", "none");
        $(".letter").css("text-transform", "lowercase");
    }
}

$('td').mousedown(function () {
    checkKeyPress(this.id);
    $(this).addClass('keydown');
});
$('td').mouseup(function () {
    checkKeyUp(this.id);
    $(this).removeClass('keydown');
});