function parseDate(strDate, timezone = 'EDT') {
    if (typeof strDate !== 'string') {
        console.warn("Date received is not a string:", strDate);
        return new Date(strDate); // Attempt to create a date anyway
    }

    const date = new Date(`${strDate.trim()} ${timezone}`);
    if (isNaN(date)) {
        console.warn("Invalid date string:", strDate);
    }
    return date;
}

export function compareDate(date1, date2) {
    const d1 = parseDate(date1);
    const d2 = parseDate(date2);

    if (isNaN(d1) || isNaN(d2)) {
        throw new Error("Invalid date format");
    }

    if (d2 > d1) return 1;
    if (d2 < d1) return -1;

    return 0;
}

export function isWithin(target, start, end) {
    try {
        console.log("Target:", target, "Start:", start, "End:", end); // Debugging log
        const targetDate = parseDate(target);
        const startDate = parseDate(start);
        const endDate = parseDate(end);

        return compareDate(start, target) <= 0 && compareDate(target, end) <= 0;
    } catch (error) {
        console.error("Error in isWithin function:", error);
        return false;
    }
}


/**
 * Vérifie si une date est avant une autre
 * @param {string} date1 - La première date
 * @param {string} date2 - La deuxième date
 * @returns {boolean} true si date1 est avant date2, sinon false
 */
export function isBefore(date1, date2) {
    return compareDate(date1, date2) <= 0;
}

/**
 * Vérifie si une date est après une autre
 * @param {string} date1 - La première date
 * @param {string} date2 - La deuxième date
 * @returns {boolean} true si date1 est après date2, sinon false
 */
export function isAfter(date1, date2) {
    return compareDate(date1, date2) >= 0;
}


const Months = {
    fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
}

const formatDate = {
    /**
     * @param {Date} d 
     */
    fr: (d) => `${d.getDate()} ${Months.fr[d.getMonth()]} ${d.getFullYear()}`
}

export function toDateString(strDate, lang = 'fr') {
    const date = parseDate(strDate);
    return formatDate[lang](date)
}