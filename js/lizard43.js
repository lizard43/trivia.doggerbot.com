function popUnder(node) {
    var newWindow = window.open("_blank", node.target, "width=500,height=500");
    newWindow.blur();
    window.focus();
    newWindow.location.href = node.href;
    return false;
}