def nl2br(value):
    return value.replace('\n', '<br>')

def escape_html(unsafe):
    return (unsafe
            .replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace('"', "&quot;")
            .replace("'", "&#039;"))

def js_escape(value):
    if not value:
        return ""
    return (value.replace('\\', '\\\\')
                 .replace('\n', '\\n')
                 .replace('\r', '\\r')
                 .replace('"', '\\"')
                 .replace("'", "\\'")
                 .replace('`', '\\`'))
