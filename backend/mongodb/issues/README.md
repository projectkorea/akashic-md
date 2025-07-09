race condition

db.fcmTopicSubscribe.update(
                { _id: uid },
                { 
                    $addToSet: { topics: topic },  // 배열이 없으면 생성하고 추가, 있으면 추가만, 새로운 요소만 추가
                    $currentDate: { updatedAt: true } // 현재 시간으로 updatedAt 필드 업데이트
                },
                { upsert: true }  // document가 없으면 생성
            );


            하지만 현재 상황에서 중복이 발생하는 것을 보면:

정확히 같은 시점에 두 개의 update 쿼리가 도달했을 때
MongoDB가 첫 번째 update를 완전히 처리하기 전에 두 번째 update가 처리되는 경우
동시에 실행된 두 함수가 각각 $addToSet 연산을 수행하면서, race condition이 발생하여 최대 두 개까지 중복될 수 있습니다.

이를 직접 테스트해볼 수 있습니다:

javascript

Copy
// 테스트 코드
async function test() {
    // 두 개의 동일한 요청을 동시에 실행
    await Promise.all([
        subscribeTopic('testTopic', 'token', 'user1'),
        subscribeTopic('testTopic', 'token', 'user1')
    ]);
    
    // 결과 확인
    const result = await db.fcmTopicSubscribe.findOne({ _id: 'user1' });
    console.log('topics:', result.topics);
}
이런 중복이 실제로 문제가 되지 않는다면, 현재 코드를 유지하는 것이 가장 단순하고 안전한 접근이 될 것 같습니다. 최악의 경우에도 동일 topic이 2번까지만 중복될 수 있고, 이는 Firebase 토픽 구독 기능에는 영향을 주지 않기 때문입니다.

이런 분산 환경에서는:

각 서버에서 독립적으로 $addToSet 연산을 수행
MongoDB에 거의 동시에 도달하는 요청들
결과적으로 최대 2개까지 중복 발생 가능

