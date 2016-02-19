function chat(name, msg, align){
    var tmp = `<p style='text-align: ${align}; font-weight: bold;'> >${name}: ${msg}</p>`;
    document.write(tmp)
}