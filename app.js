//guitar details  START
const martinG = {
    brand:	"Martin",
 color:	"Natural",
topMaterialType: "Spruce",
bodyMaterial:	"Rosewood",
backMaterialType:	"Rosewood",
};

function martinGuitar() {
    var thismartinG = martinG.brand + "<br>" + martinG.color + "<br>" + martinG.topMaterialType + "<br>" + martinG.bodyMaterial + "<br>" + martinG.backMaterialType;
    document.getElementById("guitarone").innerHTML = thismartinG;
};
function martinGuitarClear () {
    var thismartinGClear = "" ;
    document.getElementById("guitarone").innerHTML = thismartinGClear;
};

const epiphoneG = {
    brand:	"Fender",
    color:	"Sunburst",
   topMaterialType: "Spruce",
   bodyMaterial:	"Laminated",
   backMaterialType:	"Basswood",
};

function guitarEpiphone() {
    var thisepiphoneG = epiphoneG.brand + "<br>" + epiphoneG.color + "<br>" + epiphoneG.topMaterialType + "<br>" + epiphoneG.bodyMaterial + "<br>" + epiphoneG.backMaterialType;
    document.getElementById("guitartwo").innerHTML = thisepiphoneG;
};
function guitarEpiphoneClear () {
    var thisepiphoneGClear = "";
    document.getElementById("guitartwo").innerHTML = thisepiphoneGClear;
};

const boxG = {
    brand:	"Fender",
    color:	"Sunburst",
   topMaterialType: "Spruce",
   bodyMaterial:	"Laminated",
   backMaterialType:	"Basswood",
};

function boxGuitar() {
    var thisboxG =  boxG.brand + "<br>" +  boxG.color + "<br>" +  boxG.topMaterialType + "<br>" +  boxG.bodyMaterial + "<br>" +  boxG.backMaterialType;
    document.getElementById("guitarthree").innerHTML = thisboxG;
};
function boxGuitarClear () {
    var thisboxGClear = "";
    document.getElementById("guitarthree").innerHTML = thisboxGClear;
};

//Guitar details END