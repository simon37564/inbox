function pickRandomMessage() {
    //i spent like half an hour debugging this only to realize i never closed the <script> tag :/
    var hiddenMessage = document.querySelector(".hiddenmessage");
    const messages = ["(Will you remember me?)", 
                      "(No one's around to help.)",
                      "(Won't somebody please help me?)",
                      "(In this moment, you are loved.)",
                      "(In the end we all do what we must.)",
                      "(The universe is, and we are.)",
                      "(Sometimes the tool for the job is a screwdriver, and sometimes it's a sledgehammer.)",
                      "(The image expands. There is more.)",
                      "(Trois, sept, cinq, six, quatre.)",
                      "(Well! Damn!)",
                      "(Move, jump, jump again, and completely miss.)",
                      "(What the frog is a Chess Battle Advanced?)",
                      "(Art is not my forte. In fact, I'd say it's my pianissimo.)",
                      "(DISINTEGRATE BEFORE ME, BYTE BY BYTE.)",
                      "(There are no trucks in Minecraft!)",
                      "(What's so different about the Newpaper Zombie, you ask?)",
                      "(The weeks turn to days turn to hours turn to moments.)",
                      "(Logic requires no guesswork. I need not wish you luck.)"]; //only three of these aren't references
    var rand = Math.floor(Math.random() * messages.length); 
    var message = messages[rand];
    hiddenMessage.textContent = message;
}

document.addEventListener("DOMContentLoaded", pickRandomMessage);
