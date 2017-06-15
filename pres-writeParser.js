parser = /*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */
(function() {
  "use strict";

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  peg$SyntaxError.buildMessage = function(expected, found) {
    var DESCRIBE_EXPECTATION_FNS = {
          literal: function(expectation) {
            return "\"" + literalEscape(expectation.text) + "\"";
          },

          "class": function(expectation) {
            var escapedParts = "",
                i;

            for (i = 0; i < expectation.parts.length; i++) {
              escapedParts += expectation.parts[i] instanceof Array
                ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
                : classEscape(expectation.parts[i]);
            }

            return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
          },

          any: function(expectation) {
            return "any character";
          },

          end: function(expectation) {
            return "end of input";
          },

          other: function(expectation) {
            return expectation.description;
          }
        };

    function hex(ch) {
      return ch.charCodeAt(0).toString(16).toUpperCase();
    }

    function literalEscape(s) {
      return s
        .replace(/\\/g, '\\\\')
        .replace(/"/g,  '\\"')
        .replace(/\0/g, '\\0')
        .replace(/\t/g, '\\t')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
        .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
    }

    function classEscape(s) {
      return s
        .replace(/\\/g, '\\\\')
        .replace(/\]/g, '\\]')
        .replace(/\^/g, '\\^')
        .replace(/-/g,  '\\-')
        .replace(/\0/g, '\\0')
        .replace(/\t/g, '\\t')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
        .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
    }

    function describeExpectation(expectation) {
      return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
    }

    function describeExpected(expected) {
      var descriptions = new Array(expected.length),
          i, j;

      for (i = 0; i < expected.length; i++) {
        descriptions[i] = describeExpectation(expected[i]);
      }

      descriptions.sort();

      if (descriptions.length > 0) {
        for (i = 1, j = 1; i < descriptions.length; i++) {
          if (descriptions[i - 1] !== descriptions[i]) {
            descriptions[j] = descriptions[i];
            j++;
          }
        }
        descriptions.length = j;
      }

      switch (descriptions.length) {
        case 1:
          return descriptions[0];

        case 2:
          return descriptions[0] + " or " + descriptions[1];

        default:
          return descriptions.slice(0, -1).join(", ")
            + ", or "
            + descriptions[descriptions.length - 1];
      }
    }

    function describeFound(found) {
      return found ? "\"" + literalEscape(found) + "\"" : "end of input";
    }

    return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
  };

  function peg$parse(input, options) {
    options = options !== void 0 ? options : {};

    var peg$FAILED = {},

        peg$startRuleIndices = { Input: 0 },
        peg$startRuleIndex   = 0,

        peg$consts = [
          function(str) {return str;},
          function(inside) {
              var str="";
              var out=[];
              inside.forEach(function(unit) {
                if (typeof unit=="string") {
                  str+=unit;
                } else {
               //   if (str!="") 
                    out.push(str);
                  out.push(unit);
                  str="";
                }
              });
              out.push(str);
              return out;
            },
          function(open, str, close) {return {param:open.param, id:open.id, inside:str}},
          function(b, id) {return {param:b, id:id}},
          function() {return {param:null, id:null}},
          "",
          "#",
          peg$literalExpectation("#", false),
          function(id) {return id.join("")},
          "{",
          peg$literalExpectation("{", false),
          function(s) {return s},
          ",",
          peg$literalExpectation(",", false),
          function(x, y) {y[x[0]]=x[1]; return y},
          function(x) {var  y={}; y[x[0]]=x[1]; return y},
          ":",
          peg$literalExpectation(":", false),
          function(a, b) {return [a.join(''), b]},
          function(a) {return [a.join(''), true]},
          function(b) {return b.join('')},
          "[",
          peg$literalExpectation("[", false),
          function(a, b) {return b},
          function(a, b) {return [a].concat(b)},
          "]",
          peg$literalExpectation("]", false),
          function(a) {return a||[]},
          /^[0-9]/,
          peg$classExpectation([["0", "9"]], false, false),
          function(b) {return +b.join('')},
          /^[a-zA-Z0-9_\-]/,
          peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_", "-"], false, false),
          "\"",
          peg$literalExpectation("\"", false),
          "\\\"",
          peg$literalExpectation("\\\"", false),
          peg$anyExpectation(),
          function(c) {return c},
          /^[a-zA-Z0-9_]/,
          peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_"], false, false),
          "bold",
          peg$literalExpectation("bold", false),
          "textbf",
          peg$literalExpectation("textbf", false),
          function() {return ["weight","bold"]},
          "sans",
          peg$literalExpectation("sans", false),
          "serif",
          peg$literalExpectation("serif", false),
          function(c) {return ["font",c]},
          function() {return "[[close]]"},
          "}",
          peg$literalExpectation("}", false),
          function(content) {return {math:content}},
          function(math) {return math.join('')},
          "$",
          peg$literalExpectation("$", false),
          function(c, indenter) {return {array:c, indenter:indenter}},
          "&",
          peg$literalExpectation("&", false),
          "//",
          peg$literalExpectation("//", false),
          "\n",
          peg$literalExpectation("\n", false),
          function(indenter) {return {newline:true, indenter:indenter}},
          function() {return ""},
          "%",
          peg$literalExpectation("%", false),
          function(indenter) {return indenter},
          function(indent, id) {return {indent:indent.join(''), id:id, spaceAfter:null}},
          function(sp) {return {indent:null, id:"", spaceAfter:sp}},
          "|",
          peg$literalExpectation("|", false),
          function(sp) {return {newline:{indent:null}, spaceAfter:sp}},
          "\\",
          peg$literalExpectation("\\", false),
          /^[#&]/,
          peg$classExpectation(["#", "&"], false, false),
          peg$otherExpectation("space"),
          function(s) {return s.join('')},
          /^[ \t]/,
          peg$classExpectation([" ", "\t"], false, false)
        ],

        peg$bytecode = [
          peg$decode(";!"),
          peg$decode("%;A/1#;\"/($8\": \"! )(\"'#&'#"),
          peg$decode("%$;#0#*;#&/' 8!:!!! )"),
          peg$decode(";$.; &;7.5 &;:./ &;<.) &;=.# &;I"),
          peg$decode("%;%/<#;\"/3$;5/*$8#:\"##\"! )(#'#(\"'#&'#"),
          peg$decode("%;L/M#;)/D$;&/;$;(/2$;B/)$8%:#%\"#\")(%'#($'#(#'#(\"'#&'#.. &%;(/& 8!:$! )"),
          peg$decode(";'.# & %"),
          peg$decode("%2&\"\"6&7'/8#$;20#*;2&/($8\":(\"! )(\"'#&'#"),
          peg$decode("2)\"\"6)7*"),
          peg$decode("%;N/:#;*/1$;N/($8#:+#!!)(#'#(\"'#&'#.# &;N"),
          peg$decode(";+.# &;,"),
          peg$decode("%;-.) &;4.# &;./S#;N/J$2,\"\"6,7-/;$;N/2$;*/)$8%:.%\"$ )(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%;-.) &;4.# &;./' 8!:/!! )"),
          peg$decode("%$;0/&#0#*;0&&&#/S#;N/J$20\"\"6071/;$;N/2$;//)$8%:2%\"$ )(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%$;0/&#0#*;0&&&#/' 8!:3!! )"),
          peg$decode("%;3/A#$;10#*;1&/1$;3/($8#:4#!!)(#'#(\"'#&'#.\xFD &%25\"\"6576/\xA3#%;//w#$%2,\"\"6,7-/2#;//)$8\":7\"\"$ )(\"'#&'#0B*%2,\"\"6,7-/2#;//)$8\":7\"\"$ )(\"'#&'#&/)$8\":8\"\"! )(\"'#&'#.\" &\"/7$29\"\"697:/($8#:;#!!)(#'#(\"'#&'#.g &%$4<\"\"5!7=/,#0)*4<\"\"5!7=&&&#/' 8!:>!! ).< &%$;0/&#0#*;0&&&#/' 8!:4!! )"),
          peg$decode("4?\"\"5!7@"),
          peg$decode("%%<2A\"\"6A7B=.##&&!&'#/B#2C\"\"6C7D.( &1\"\"5!7E/($8\":F\"! )(\"'#&'#"),
          peg$decode("4G\"\"5!7H"),
          peg$decode("2A\"\"6A7B"),
          peg$decode("%2I\"\"6I7J.) &2K\"\"6K7L/& 8!:M! ).A &%2N\"\"6N7O.) &2P\"\"6P7Q/' 8!:R!! )"),
          peg$decode("%;6/& 8!:S! )"),
          peg$decode("2T\"\"6T7U"),
          peg$decode("%;9/:#;8/1$;9/($8#:V#!!)(#'#(\"'#&'#"),
          peg$decode("%$%%<;9=.##&&!&'#/6#1\"\"5!7E/($8\":F\"! )(\"'#&'#0L*%%<;9=.##&&!&'#/6#1\"\"5!7E/($8\":F\"! )(\"'#&'#&/' 8!:W!! )"),
          peg$decode("2X\"\"6X7Y"),
          peg$decode("%;;/2#;?/)$8\":Z\"\"! )(\"'#&'#"),
          peg$decode("2[\"\"6[7\\.) &2]\"\"6]7^"),
          peg$decode("%2_\"\"6_7`/1#;C/($8\":a\"! )(\"'#&'#"),
          peg$decode("%;>/\x9F#$%%<2_\"\"6_7`=.##&&!&'#/1#1\"\"5!7E/#$+\")(\"'#&'#0M*%%<2_\"\"6_7`=.##&&!&'#/1#1\"\"5!7E/#$+\")(\"'#&'#&/;$2_\"\"6_7`.\" &\"/'$8#:b# )(#'#(\"'#&'#"),
          peg$decode("2c\"\"6c7d"),
          peg$decode("%;@/1#;C/($8\":e\"! )(\"'#&'#"),
          peg$decode("%;N/2#2_\"\"6_7`/#$+\")(\"'#&'#.\" &\""),
          peg$decode("%%2_\"\"6_7`/G#;N/>$%<2_\"\"6_7`=/##&'!&&#/#$+#)(#'#(\"'#&'#.\" &\"/i#%%2_\"\"6_7`/,#;E/#$+\")(\"'#&'#/8#%<;D=.##&&!&'#/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
          peg$decode("%;N/\x84#%<2_\"\"6_7`=/##&'!&&#/i$%%2_\"\"6_7`/,#;E/#$+\")(\"'#&'#/8#%<;D=.##&&!&'#/#$+\")(\"'#&'#.\" &\"/#$+#)(#'#(\"'#&'#.\" &\""),
          peg$decode(";D.# &;E"),
          peg$decode("%$;F0#*;F&/;#;&/2$;G/)$8#:f#\"\"!)(#'#(\"'#&'#"),
          peg$decode("%;N/' 8!:g!! )"),
          peg$decode("%%<;G.) &;H.# &;L=.##&&!&'#/1#;I/($8\":F\"! )(\"'#&'#"),
          peg$decode("2h\"\"6h7i"),
          peg$decode("%2_\"\"6_7`/1#;N/($8\":j\"! )(\"'#&'#"),
          peg$decode("%%<;%=.##&&!&'#/L#%<;5=.##&&!&'#/7$;K.# &;J/($8#:F#! )(#'#(\"'#&'#"),
          peg$decode("%%<;M=.##&&!&'#/6#1\"\"5!7E/($8\":F\"! )(\"'#&'#"),
          peg$decode("%;L/1#;M/($8\":F\"! )(\"'#&'#"),
          peg$decode("2k\"\"6k7l"),
          peg$decode("4m\"\"5!7n.; &;(.5 &;6./ &;9.) &;;.# &;>"),
          peg$decode("<%$;O0#*;O&/' 8!:p!! )=.\" 7o"),
          peg$decode("4q\"\"5!7r")
        ],

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1 }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleIndices)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleIndex = peg$startRuleIndices[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description, location) {
      location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

      throw peg$buildStructuredError(
        [peg$otherExpectation(description)],
        input.substring(peg$savedPos, peg$currPos),
        location
      );
    }

    function error(message, location) {
      location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

      throw peg$buildSimpleError(message, location);
    }

    function peg$literalExpectation(text, ignoreCase) {
      return { type: "literal", text: text, ignoreCase: ignoreCase };
    }

    function peg$classExpectation(parts, inverted, ignoreCase) {
      return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
    }

    function peg$anyExpectation() {
      return { type: "any" };
    }

    function peg$endExpectation() {
      return { type: "end" };
    }

    function peg$otherExpectation(description) {
      return { type: "other", description: description };
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos], p;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column
        };

        while (p < pos) {
          if (input.charCodeAt(p) === 10) {
            details.line++;
            details.column = 1;
          } else {
            details.column++;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildSimpleError(message, location) {
      return new peg$SyntaxError(message, null, null, location);
    }

    function peg$buildStructuredError(expected, found, location) {
      return new peg$SyntaxError(
        peg$SyntaxError.buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$decode(s) {
      var bc = new Array(s.length), i;

      for (i = 0; i < s.length; i++) {
        bc[i] = s.charCodeAt(i) - 32;
      }

      return bc;
    }

    function peg$parseRule(index) {
      var bc    = peg$bytecode[index],
          ip    = 0,
          ips   = [],
          end   = bc.length,
          ends  = [],
          stack = [],
          params, i;

      while (true) {
        while (ip < end) {
          switch (bc[ip]) {
            case 0:
              stack.push(peg$consts[bc[ip + 1]]);
              ip += 2;
              break;

            case 1:
              stack.push(void 0);
              ip++;
              break;

            case 2:
              stack.push(null);
              ip++;
              break;

            case 3:
              stack.push(peg$FAILED);
              ip++;
              break;

            case 4:
              stack.push([]);
              ip++;
              break;

            case 5:
              stack.push(peg$currPos);
              ip++;
              break;

            case 6:
              stack.pop();
              ip++;
              break;

            case 7:
              peg$currPos = stack.pop();
              ip++;
              break;

            case 8:
              stack.length -= bc[ip + 1];
              ip += 2;
              break;

            case 9:
              stack.splice(-2, 1);
              ip++;
              break;

            case 10:
              stack[stack.length - 2].push(stack.pop());
              ip++;
              break;

            case 11:
              stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
              ip += 2;
              break;

            case 12:
              stack.push(input.substring(stack.pop(), peg$currPos));
              ip++;
              break;

            case 13:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1]) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 14:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] === peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 15:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] !== peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 16:
              if (stack[stack.length - 1] !== peg$FAILED) {
                ends.push(end);
                ips.push(ip);

                end = ip + 2 + bc[ip + 1];
                ip += 2;
              } else {
                ip += 2 + bc[ip + 1];
              }

              break;

            case 17:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (input.length > peg$currPos) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 18:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 19:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 20:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 21:
              stack.push(input.substr(peg$currPos, bc[ip + 1]));
              peg$currPos += bc[ip + 1];
              ip += 2;
              break;

            case 22:
              stack.push(peg$consts[bc[ip + 1]]);
              peg$currPos += peg$consts[bc[ip + 1]].length;
              ip += 2;
              break;

            case 23:
              stack.push(peg$FAILED);
              if (peg$silentFails === 0) {
                peg$fail(peg$consts[bc[ip + 1]]);
              }
              ip += 2;
              break;

            case 24:
              peg$savedPos = stack[stack.length - 1 - bc[ip + 1]];
              ip += 2;
              break;

            case 25:
              peg$savedPos = peg$currPos;
              ip++;
              break;

            case 26:
              params = bc.slice(ip + 4, ip + 4 + bc[ip + 3]);
              for (i = 0; i < bc[ip + 3]; i++) {
                params[i] = stack[stack.length - 1 - params[i]];
              }

              stack.splice(
                stack.length - bc[ip + 2],
                bc[ip + 2],
                peg$consts[bc[ip + 1]].apply(null, params)
              );

              ip += 4 + bc[ip + 3];
              break;

            case 27:
              stack.push(peg$parseRule(bc[ip + 1]));
              ip += 2;
              break;

            case 28:
              peg$silentFails++;
              ip++;
              break;

            case 29:
              peg$silentFails--;
              ip++;
              break;

            default:
              throw new Error("Invalid opcode: " + bc[ip] + ".");
          }
        }

        if (ends.length > 0) {
          end = ends.pop();
          ip = ips.pop();
        } else {
          break;
        }
      }

      return stack[0];
    }

    peg$result = peg$parseRule(peg$startRuleIndex);

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail(peg$endExpectation());
      }

      throw peg$buildStructuredError(
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();
