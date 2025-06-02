const { admin } = require('./firebase');
const Alert = require('./models/Alert');

const db = admin.firestore();
const COLLECTION_NAME = 'alerts';


async function updateCollection(records) {
    const collectionRef = db.collection(COLLECTION_NAME);
    let batch = db.batch();
    
    const result = []
    for (const record of records) {
        const alert = Alert.fromApi(record);
        const docId = alert.id;

        if (!docId) continue;

        result.push(alert.toJSON())

        const docRef = collectionRef.doc(docId);
        batch.set(docRef, alert.toFirestore(), { merge: true });
    }

    await batch.commit();

    return result;
}


async function getAllAlerts() {
    const snapshot = await db.collection(COLLECTION_NAME).get();
    return snapshot.docs.map(Alert.fromFirestore);
}

async function getAlertById(id) {
    const doc = await db.collection(COLLECTION_NAME).doc(id).get();
    return doc.exists ? Alert.fromFirestore(doc) : null;
}

async function deleteAlertById(id) {
    await db.collection(COLLECTION_NAME).doc(id).delete();
    return true;
}


module.exports = {
    updateCollection,
    getAllAlerts,
    getAlertById,
    deleteAlertById
};