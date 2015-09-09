
function validateForm() {
    var name = document.forms["sendMsg"]["inputName"].value;
    var msg = document.forms["sendMsg"]["msg"].value;
    var email = document.forms["sendMsg"]["email"].value;
    var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

    if (name == null || name == "") {
        alert("You didn't enter your name.\n");
        document.sendMsg.inputName.focus();
        return false;
    }
    if (!filter.test(email)){
        alert("Please input a valid email address!")
        document.sendMsg.email.focus();
        return false;
    }
    if (msg == null || msg == "") {
        alert("You didn't enter your message.\n");
        document.sendMsg.msg.focus();
        return false;
    }

    return alert("Your message has been submitted!");
}

