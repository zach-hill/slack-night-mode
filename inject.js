var fs = require('fs');
var css_json = require('./css.json');

var templateFile = "./template.js"
var injectionFile = "/Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/ssb-interop.js"; 

fs.readFile(templateFile, "utf-8", function (template_err, template_data) {
    if(template_err) throw template_err;
    
    fs.readFile(injectionFile, "utf-8", function (err, data) {
        if(err) throw err;
        if(data.indexOf('DOMContentLoaded') < 0) {
            inject(template_data);
            console.log(template_data);
        } else {
            console.log('Looks like you already have this installed');
        }
    })
});


function inject(template) {
    fs.appendFileSync(injectionFile, "\n" + template.replace('{CSS_PATH}', css_json.CSS_PATH));
}
