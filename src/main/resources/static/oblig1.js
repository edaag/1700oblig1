const bilettRegister=[];

function visBilettRegister(){
    // skriv ut under alle biletter
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let b of bilettRegister){
        ut+="<tr>";
        ut+="<td>"+b.film+"</td><td>"+b.antall+"</td><td>"+b.fornavn+"</td><td>"+b.etternavn+"</td><td>"+b.telefonnr+"</td><td>"+b.epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("bilettRegister").innerHTML=ut;
}
//tester film
function testFilm() {
    let film = document.getElementById("film").value;
    if (film === "Velg film") {
        document.getElementById("feilFilm").innerHTML = "Du må velge en film";
        document.getElementById("film").style.borderColor = "red";
        return null;
    } else {
        return film;
    }
}
//tester antall
function testAntall(){
    let antallS = document.getElementById("antall").value;
    let antall = Number(antallS);
    if(isNaN(antall) || antall<=0){
        document.getElementById("feilAntall").innerHTML="Skriv inn et gyldig tall";
        document.getElementById("antall").style.borderColor ="red";
        return antall =null;}
    else{
        return antall
    }
}

//Tester epost
function testEpost(){
    let epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let epost = document.getElementById("epost").value;
    if(epostRegex.test(epost)){
        return epost;
    }
    else{
        document.getElementById("feilEpost").innerHTML="Skriv inn et gyldig e-post adresse";
        document.getElementById("epost").style.borderColor ="red";
        return epost = null;}
}


//Tester telefonnr
function testTelefonnr(){
    let telefonnrS = document.getElementById("telefonnr").value;
    let telefonnr = Number(telefonnrS);
    if (!isNaN(telefonnr)) {
        let telefonnrRegex = /^(?:(?:\+?47)?[49]\d{7})$/;

        // Sjekk om telefonnummeret passer regexen
        if (telefonnrRegex.test(telefonnr)) {
            return telefonnr;}
        else {
            document.getElementById("feilTelefonnr").innerHTML = "Skriv inn et gyldig telfonnummer";
            document.getElementById("telefonnr").style.borderColor = "red";
            return null;}
    }
    else {
        document.getElementById("feilTelefonnr").innerHTML = "Skriv inn et gyldig telfonnummer";
        document.getElementById("telefonnr").style.borderColor = "red";
        return null;}
}

//Tester fornavn
function testFornavn(){
    let fornavn = document.getElementById("fornavn").value;
    if(typeof fornavn ==='string' && fornavn !==''){
        return fornavn;}
    else{
        document.getElementById("feilFornavn").innerHTML="Ugyldig input, må skrive inn fornavn";
        document.getElementById("fornavn").style.borderColor ="red";
        return fornavn= null;}

}

//tester etternavn
function testEtternavn(){
    let ettrnavn = document.getElementById("etternavn").value;
    if(typeof ettrnavn ==='string' && ettrnavn !==''){
        return ettrnavn;}
    else{
        document.getElementById("feilEtternavn").innerHTML="Ugyldig input, må skrive inn etternavn";
        document.getElementById("etternavn").style.borderColor ="red";
        return ettrnavn= null;}

}


function registrer() {
    const film = testFilm();
    const antall = testAntall();
    const fornavn = testFornavn();
    const etternavn = testEtternavn();
    const telefonnr = testTelefonnr();
    const epost = testEpost();

    if (film=== null || antall === null || fornavn === null || etternavn === null || telefonnr === null || epost === null) {
        // Hvis noen av testene mislyktes, avslutt funksjonen uten å legge til billetten
        return;
    }


    const bilett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    };

    bilettRegister.push(bilett);
    //nullstill inputboksene
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
    visBilettRegister()

}
function slettAlleBilletter() {
    // Tømmer billetregisteret
    bilettRegister.length=0;
    // Oppdaterer visningen
    visBilettRegister();
}
