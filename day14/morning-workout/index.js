const nid = prompt('Your NID:');
let monthCheck = false;

const nidIsValid = (nidToCheck) => {
    if (Number.isNaN(parseInt(nidToCheck), 10)) {
        return 'not a number';
    } else {
        if ((parseInt(nidToCheck[2] + nidToCheck[3], 10) >= 1 && parseInt(nidToCheck[2] + nidToCheck[3], 10) <=12) ||
        (parseInt(nidToCheck[2] + nidToCheck[3], 10) >= 51 && parseInt(nidToCheck[2] + nidToCheck[3], 10) <=62)) {
            monthCheck = true;
        } else {
            monthCheck = false;
        }
        if ((nidToCheck.length === 10) &&
            (parseInt(nidToCheck) % 11 === 0) &&
            monthCheck) {
                switch (nidToCheck[2] + nidToCheck[3]) {
                    case '01':
                    case '03': 
                    case '05': 
                    case '07': 
                    case '08': 
                    case '10': 
                    case '12': 
                    case '51': 
                    case '53': 
                    case '55': 
                    case '57': 
                    case '58': 
                    case '60': 
                    case '62':
                        if (parseInt(nidToCheck[4] + nidToCheck[5]) <= 31) {
                            return true;
                        } else {
                            return false;
                        }
                        break;
                    case '04': 
                    case '06': 
                    case '09': 
                    case '11': 
                    case '54': 
                    case '56': 
                    case '59': 
                    case '61':
                        if (parseInt(nidToCheck[4] + nidToCheck[5]) <= 30) {
                            return true;
                        } else {
                            return false;
                        }
                        break;
                    case '02':
                        if (parseInt(nidToCheck[4] + nidToCheck[5]) <= 29) {
                            return true;
                        } else {
                            return false;
                        }
                        break;
                    default:
                        return false;
                  }
        }
        return 'modulo, moth or length';
    }
}

document.write(nidIsValid(nid));