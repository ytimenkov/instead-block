{
    function makeConainer(type, children) {
        return {
            type,
            children
        };
    }
}
Elements = (Action / Italics / Bold / Center / Text)*

Text = chars:[^<]+  {
    return {
        type: "text",
        text: chars.join("")
    }
}

Action = "<a:" target:[^>]+ ">" children:Elements "</a>" {
    return {
        type: "a",
        target: target.join(""),
        children: children
    }
}

Italics = "<i>" children:Elements "</i>" { return makeConainer("i", children) }

Bold = "<b>" children:Elements "</b>"  { return makeConainer("b", children) }

Center = "<c>" children:Elements "</c>"  { return makeConainer("c", children) }
