function chat(name, msg, align){
    var tmp = `<p style='text-align: ${align}'> >${name}: ${msg}</p>`;
    document.write(tmp)
}