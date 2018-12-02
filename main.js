function showResult(number1, number2) {

    let sumAd = number1 + number2;
    let sumKnock = number1 - number2;
    let sumMultyplay = number1 * number2;

    if (sumAd >= 0) {
        console.log("Wynik dodawania wynosi " + sumAd);
    } else {
        console.log("Wynik dodawania wynosi " + sumAd + " Wynik jest ujemny");
    };
    if (sumKnock >= 0) {
        console.log("Wynik odejmowania wynosi " + sumKnock)
    } else {
        console.log("Wynik odejmowania wynosi " + sumKnock + " Wynik jest ujemny")
    };
    if (sumMultyplay >= 0) {
        console.log("Wynik mnożenia wynosi  " + sumMultyplay)
    } else {
        console.log("Wynik mnożenia wynosi " + sumMultyplay + " Wynik jest ujemny")
    };
}

showResult(12, 32);
