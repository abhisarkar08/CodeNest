function compile() {
    var html = document.getElementById("htmlCode");
    var css = document.getElementById("cssCode");
    var js = document.getElementById("jsCode");
    var code = document.getElementById("output").contentWindow.document;

    function compileCode() {
        code.open();
        code.writeln(
            html.value +
            "<style>" + css.value + "</style>" +
            "<script>" + js.value + "<\/script>"
        );
        code.close();
    }

    [html, css, js].forEach(area => {
        area.addEventListener("input", compileCode);
    });
}

function copy(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Content copied to clipboard');
    }, () => {
        console.error('Failed to copy');
    });
}

function copyContenth() {
    copy(document.getElementById("htmlCode").value);
}

function copyContentc() {
    copy(document.getElementById("cssCode").value);
}

function copyContentj() {
    copy(document.getElementById("jsCode").value);
}

compile();
