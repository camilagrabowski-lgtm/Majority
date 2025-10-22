function check() {
    var wasBorn = parseInt(document.getElementById("birth").value);
    var res = document.getElementById("result");
    var clientAge = document.getElementById("age");

    if (isNaN(wasBorn)) {
        res.textContent = "Type only numbers 🚫";
        res.style.color = "red";
        clientAge.textContent = "";
        return;
    }

    const thisYear = new Date().getFullYear();
    const age = thisYear - wasBorn;

    if (age >= 18) {
        res.textContent = "Over 18, ENTRY ✅";
        res.style.color = "green";
        clientAge.textContent = `Age: ${age}`;
       document.getElementById("v1").style.display = "block"
       document.getElementById("v2").style.display = "none"

    } else {
        res.textContent = "Under 18, NOT ALLOWED 🔞";
        res.style.color = "orange";
        clientAge.textContent = `Age: ${age}`;
        document.getElementById("v2").style.display = "block"
        document.getElementById("v1").style.display = "none"

    }
}
