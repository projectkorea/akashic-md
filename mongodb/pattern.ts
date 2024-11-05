async function migrateDocumentForFcmTopics() {
    try {
        // 1. toNewFemale 필드 삭제
        const deleteResult = await collectionFcmTopic.updateMany(
            { toNewFemale: { $exists: true } },
            { $unset: { toNewFemale: "" } }
        );
        console.log(`[Migration] Removed toNewFemale field from ${deleteResult.modifiedCount} documents.`);

        // 2. languageTopic을 topics 배열로 이동 (lang_ prefix 추가)
        const updateResult = await collectionFcmTopic.updateMany(
            { 
                languageTopic: { $exists: true },
                $or: [
                    { topics: { $exists: false } },
                    { topics: { $ne: null } }
                ]
            },
            [
                {
                    $set: {
                        topics: {
                            $cond: {
                                if: { $isArray: "$topics" },
                                then: { 
                                    $concatArrays: [
                                        "$topics", 
                                        [{ $concat: ["lang_", "$languageTopic"] }]
                                    ]
                                },
                                else: [{ $concat: ["lang_", "$languageTopic"] }]
                            }
                        }
                    }
                },
                {
                    $unset: "languageTopic"
                }
            ]
        );
        console.log(`[Migration] Moved languageTopic to topics array in ${updateResult.modifiedCount} documents.`);

    } catch (error) {
        console.error('[Migration] Error during migration:', error);
        throw error;
    }
}