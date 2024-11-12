async function subscribeTopic(topic, token, uid) {
    const TAG = '[subscribeTopic]';
    if (token) {
        const registrationToken = [token];
        console.log(TAG, `topic: ${topic}`, `token: ${token}, uid: ${uid}`);
        
        if (uid && !(topic.includes('toAll') || topic.includes('toNewFemale') || topic.includes('FEVER_TIME'))) {
            db.fcmTopicSubscribe.update(
                { _id: uid },
                { 
                    $set: { token: token }, // update 연산에서 일반 필드 설정과 수정자($set, $addToSet 등)를 동시에 사용할 수 없음
                    $addToSet: { topics: topic },  // 배열이 없으면 생성하고 추가, 있으면 추가만, 새로운 요소만 추가
                    $currentDate: { updatedAt: true } // 현재 시간으로 updatedAt 필드 업데이트
                },
                { upsert: true }  // document가 없으면 생성
            );
        }
        
        return await firebase.messaging().subscribeToTopic(regitostrationToken, topic);
    }
}