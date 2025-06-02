const { admin } = require('../firebase');

class Alert {
    constructor({ id, titre, date_debut, date_fin, type, service, lien, lastUpdated }) {
        this.id = id;
        this.titre = titre;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.type = type;
        this.service = service;
        this.lien = lien;
        this.lastUpdated = lastUpdated ?? admin.firestore.Timestamp.now();
    }

    static fromApi(apiRecord) {
        return new Alert({
            id: apiRecord.id?.toString() || null,
            titre: apiRecord.titre,
            date_debut: apiRecord.date_debut,
            date_fin: apiRecord.date_fin,
            type: apiRecord.type,
            service: apiRecord.service,
            lien: apiRecord.lien,
            lastUpdated: apiRecord.lastUpdated ? admin.firestore.Timestamp.fromDate(new Date(apiRecord.lastUpdated)) : null
        });
    }

       static fromFirestore(doc) {
        const data = doc.data();

        return new Alert({
            id: doc.id,
            titre: data.titre,
            date_debut: data.date_debut,
            date_fin: data.date_fin,
            type: data.type,
            service: data.service,
            lien: data.lien,
            lastUpdated: data.lastUpdated,
        });
    }

       static fromFirestore(doc) {
        const data = doc.data();

        return new Alert({
            id: doc.id,
            titre: data.titre,
            date_debut: data.date_debut,
            date_fin: data.date_fin,
            type: data.type,
            service: data.service,
            lien: data.lien,
            lastUpdated: data.lastUpdated,
        });
    }

        toJSON() {
        return {
            id: this.id,
            titre: this.titre,
            date_debut: this.date_debut,
            date_fin: this.date_fin,
            type: this.type,
            service: this.service,
            lien: this.lien,
            lastUpdated: this.lastUpdated?.toDate().toISOString()
        };
    }
}

module.exports = Alert;