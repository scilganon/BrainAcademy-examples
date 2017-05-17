function chat(name, msg, align){
    var tmp = `<p style='text-align: ${align}; color: red;'> >${name}: ${msg}</p>`;
    document.write(tmp)
}