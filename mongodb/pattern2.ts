async function updatePoliceMongoDB() {
  const db = await getServiceMongoDb();
  const PoliceAgency = db.collection(PoliceAgencySchema.collection);
  let count = 0;
  let deletedCount = 0;
  let changedCount = 0;
  
  // Find all documents in the collection
  const cursor = PoliceAgency.find();
  const totalCount = await PoliceAgency.count();

  while (await cursor.hasNext()) {
    const document = await cursor.next();
    const countryFieldValue = document.country;

    if (!countryFieldValue) {
      deletedCount ++;
      console.log("DEL", countryFieldValue)
      await PoliceAgency.deleteOne({_id: document._id});
    }
    if (countryFieldValue && countryFieldValue.length > 36) {
      changedCount ++;
      console.log("UPDATE", decryptAES(countryFieldValue))

      await PoliceAgency.updateOne(
        { _id: document._id },
        { $set: { country: decryptAES(countryFieldValue) }}
      );
    }
  }
  console.log(`Total: ${totalCount} / Deleted: ${deletedCount} / Changed: ${changedCount} Remain / ${totalCount - deletedCount - changedCount}`);
}

async function bulkUpdateForTypeCasting() {
    const bulkOps = [];

    console.log("[Info] Fetching documents with string score field");

    const cursor = collection.find({ score: { $exists: true, $type: 'string' } });
    while (await cursor.hasNext()) {
      const document = await cursor.next();
      const score = Number(document.score);
      if (!isNaN(score)) {
        bulkOps.push({
          updateOne: {
            filter: { _id: document._id },
            update: { $set: { score: score } }
          }
        });
        console.log(`[Info] Prepared update for document with _id: ${document._id}, score: ${score}`);
      }
    }

    if (bulkOps.length > 0) {
      console.log(`[Info] Executing bulk update for ${bulkOps.length} documents`);
      const result = await collection.bulkWrite(bulkOps);
      console.log(`[Success] Bulk update completed with ${result.modifiedCount} documents modified`);
      return result;
    } else {
      console.log("[Info] No documents to update");
      return { modifiedCount: 0 };
    }
  }

  async function bulkUpdateForAddField(fieldName) {
    const bulkOps = [];

    console.log("[Info] Fetching documents with string score field");

    const cursor = collection.find({ [fieldName]: {$exists: false} })
    let parsed = null;

    while (await cursor.hasNext()) {
      const document = await cursor.next();
      if (fieldName === 'uploadStatus') {
        parsed = document['url'].split('_').pop().split('.')[0];
      } else if (fieldName === 'fbUid') {
        parsed = document._id.split('_')[0].split('/')[1];
      }

      if (parsed) {
        bulkOps.push({
          updateOne: {
            filter: { _id: document._id },
            update: { $set: { [fieldName]: parsed } }
          }
        });
        console.log(`[Info] Prepared update for document with _id: ${document._id}, ${fieldName}: ${parsed}`);
      }

    }

    if (bulkOps.length > 0) {
      console.log(`[Info] Executing bulk update for ${bulkOps.length} documents`);
      const result = await collection.bulkWrite(bulkOps);
      console.log(`[Success] Bulk update completed with ${result.modifiedCount} documents modified`);
      return result;
    } else {
      console.log("[Info] No documents to update");
      return { modifiedCount: 0 };
    }
  }