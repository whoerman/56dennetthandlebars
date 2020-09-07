var myInfo = "<p>My name is {{name}} and I live at {{street}} in {{city}}, {{state}}</p>";

var template = Handlebars.compile(myInfo);

var data = template({
    name: "Walter",
    street: "56 Dennett Street",
    city: "Portsmouth",
    state: "NH"
});

document.getElementById("walterData").innerHTML += data;


