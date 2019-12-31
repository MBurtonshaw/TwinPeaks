//Character class
class Character {
    constructor(
        name,
        occupation,
        special_interest,
        laura_connection,
        investigation_connection,
        family,
        pic
    ) {
        this.name = "Name: " + name;
        this.occupation = "Occupation:  " + occupation;
        this.special_interest = "Special Interest:  " + special_interest;
        this.laura_connection =
            "Connection to Laura Palmer:  " + laura_connection;
        this.investigation_connection =
            "Connection to Investigation:  " + investigation_connection;
        this.family = "Familial Connections:  " + family;
    }
    get info() {
        return this.show();
    }
    show() {
        return (
            this.name +
            "<br>" +
            this.occupation +
            "<br>" +
            this.special_interest +
            "<br>" +
            this.laura_connection +
            "<br>" +
            this.investigation_connection +
            "<br>" +
            this.family +
            "<br>"
        );
    }
}

const searchBar = $("#body").append("<input id='searchBar'>");
$("#searchBar").attr("type", "text");
$("#body").append("<ul id='main-ul'></ul>");
$("#main-ul").before($("ul"));

$("#searchBar").on("keyup", () => {
    for (let i = 0; i < Character.length; i++) {
        if ($("#searchBar").val() === "laura") {
            console.log("yatta");
        }
    }
});

//Function to add <li> to <ul>
function print(name) {
    $("#main-ul").html("<li>" + name + "</li>");
}

//Character variables
const laura = new Character(
    "Laura Palmer",
    "Waitress, Meals-on-Wheels delivery person, One-Eyed Jack's",
    "Prostitute, cocaine user",
    "Laura",
    "Victim; letter 'R' found under her fingernail",
    "Leland Palmer, Maddy Ferguson, "
);
$("#laura-pic").hide();
//Print function syntax
print(laura.info);
const donna = new Character(
    "Donna Hayward",
    "Student, Meals on Wheels delivery person",
    "N/A",
    "Best friend",
    "Prone to investigate",
    "Will Hayward"
);
$("#donna-pic").hide();
const cooper = new Character(
    "Dale Cooper",
    "FBI, Special Agent",
    "Possible psychic with connection to the ethereal. Understanding of magic/occultism",
    "N/A",
    "FBI Investigator",
    "N/A"
);
$("#cooper-pic").hide();
const truman = new Character(
    "Harry Truman",
    "Sheriff of Twin Peaks",
    "Deep knowledge of goings-on in town, member of Bookhouse Boys",
    "N/A",
    "Lead Investigator of Sheriff's Dept",
    "N/A"
);
$("#truman-pic").hide();
const shelly = new Character(
    "Shelly Johnson",
    "Waitress",
    "N/A",
    "N/A",
    "N/A",
    "Leo Johnson"
);
$("#shelly-pic").hide();
const bobby = new Character(
    "Bobby Briggs",
    "Student",
    "Cocaine dealer",
    "Love interest",
    "Ex-lover; drug connections w/ Leo Johnson",
    ""
);
$("#bobby-pic").hide();
const ben = new Character(
    "Benjamin Horne",
    "Real Estate Developer",
    "Owns much of Twin Peaks",
    "In business w/ Laura's father",
    "N/A",
    "Audrey Horne, "
);
$("#ben-pic").hide();
const audrey = new Character(
    "Audrey Horne",
    "Student",
    "N/A",
    "Fellow student",
    "Prone to investigate",
    "Benjamin Horne, "
);
$("#audrey-pic").hide();
const will = new Character(
    "Will Hayward",
    "Town doctor",
    "N/A",
    "N/A",
    "Some forensics",
    "Donna Hayward"
);
$("#will-pic").hide();
const norma = new Character(
    "Norma Jennings",
    "Owns and runs the Double R Diner",
    "N/A",
    "Runs Meals on Wheels program",
    "N/A",
    ""
);
$("#norma-pic").hide();
const james = new Character(
    "James Hurley",
    "Student",
    "Member of Bookhouse Boys",
    "Love interest",
    "N/A",
    "Ed Hurley, "
);
$("#james-pic").hide();
const ed = new Character(
    "Ed Hurley",
    "Runs town gas station",
    "Member of Bookhouse Boys",
    "N/A",
    "N/A",
    "James Hurley, "
);
$("#ed-pic").hide();
$("#ed-pic").hide();
const pete = new Character(
    "Pete Martell",
    "Lumberjack",
    "Discovered Laura's body",
    "N/A",
    "N/A",
    ""
);
$("#pete-pic").hide();
const leland = new Character(
    "Leland Palmer",
    "Attorney",
    "N/A",
    "Laura's father",
    "N/A",
    "Laura Palmer, Maddy Ferguson, "
);
$("#leland-pic").hide();
const josie = new Character(
    "Josie Packard",
    "Owner of Packard Sawmill",
    "N/A",
    "N/A",
    "N/A",
    "Pete Martell(in-law), Catherine Martell(in-law)"
);
$("#josie-pic").hide();
const catherine = new Character(
    "Catherine Martell",
    "Runs Packard Sawmill",
    "N/A",
    "N/A",
    "N/A",
    "Pete Martell, Josie Packard(in-law)"
);
$("#catherine-pic").hide();
const lucy = new Character(
    "Lucy Moran",
    "Receptionist at Sheriff's Office",
    "N/A",
    "N/A",
    "N/A",
    "N/A"
);
$("#lucy-pic").hide();
const maddy = new Character(
    "Maddy Ferguson",
    "N/A",
    "Looks near identical to Laura Palmer",
    "Laura's cousin",
    "Prone to investigate",
    "Laura Palmer, Leland Palmer, "
);
$("#maddy-pic").hide();
const leo = new Character(
    "Leo Johnson",
    "Truck driver",
    "Drug runner",
    "N/A",
    "Involved in drug ring",
    "Shelly Johnson"
);
$("#leo-pic").hide();
const andy = new Character(
    "Andy Brennan",
    "Sheriff's Deputy",
    "Member of Bookhouse Boys",
    "N/A",
    "Investigator",
    "N/A"
);
$("#andy-pic").hide();
const hawk = new Character(
    "Tommy 'Hawk' Hill",
    "Sheriff's Deputy Chief",
    "Member of Bookhouse Boys",
    "N/A",
    "Investigator",
    "N/A"
);
$("#hawk-pic").hide();
const jacoby = new Character(
    "Dr. Lawrence Jacoby",
    "Psychiatrist",
    "Possible attraction to Laura",
    "Laura's psychiatrist",
    "Took possession of evidence for a time (half-heart necklace)",
    "N/A"
);
$("#jacoby-pic").hide();
const windom = new Character(
    "Windom Earle",
    "Former FBI Special Agent",
    "Dale Cooper's former partner",
    "N/A",
    "N/A",
    "N/A"
);
$("#windom-pic").hide();
const ronette = new Character(
    "Ronette Pulaski",
    "Student; One-Eyed Jack's",
    "Prostitute and cocaine user",
    "Laura's friend",
    "Victim of same perpetrator as Laura; Letter 'B' found under her fingernail",
    "N/A"
);
$("#ronette-pic").hide();
const albert = new Character(
    "Albert Rosenfield",
    "FBI Forensics Specialist",
    "N/A",
    "N/A",
    "Head of forensics for the case",
    "N/A"
);
$("#albert-pic").hide();
const teresa = new Character(
    "Teresa Banks",
    "Prostitute",
    "Prostitute and cocaine user",
    "N/A",
    "Letter 'T' found under her fingernail; inspired Agent Cooper to investigate Twin Peaks",
    "N/A"
);
$("#teresa-pic").hide();
const annie = new Character(
    "Annie Blackburn",
    "Waitress at Double R Diner",
    "Love interest of Agent Cooper",
    "N/A",
    "N/A",
    "Norma Jennings"
);
$("#annie-pic").hide();
const gordon = new Character(
    "Gordon Cole",
    "FBI Regional Bureau Chief",
    "Agent Cooper's superior",
    "N/A",
    "N/A",
    "N/A"
);
$("#gordon-pic").hide();
const harold = new Character(
    "Harold Smith",
    "Horticulturist",
    "Homebody; Meals on Wheels recipient",
    "Laura gave her diary to him before her death",
    "N/A"
);
$("#harold-pic").hide();
const dick = new Character(
    "Richard 'Dick' Tremayne",
    "Horne's Dept Store",
    "N/A",
    "N/A",
    "N/A",
    "N/A"
);
$("#dick-pic").hide();
