function centuryFromYear(year) {
    const centenario = 100;
    let divicion = year/centenario;
    if (Number.isInteger(divicion)    ){
        return divicion;
    }   else {
        var redondeovar = (Math.ceil(divicion));
        return redondeovar;
    }
}