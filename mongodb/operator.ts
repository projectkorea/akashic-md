// 자주 사용되는 핵심 연산자들
$set          // 필드 설정
$unset        // 필드 제거
$cond         // 조건문
$isArray      // 배열 체크
$concat       // 문자열 합치기
$concatArrays // 배열 합치기
$exists       // 필드 존재 여부
$ne           // Not Equal


// 배열 관련 주요 연산자
$push         // 배열에 요소 추가
$addToSet     // 중복없이 배열에 추가
$pull         // 배열에서 요소 제거
$pop          // 배열 처음/끝 요소 제거
$slice        // 배열 자르기
$in           // 배열 내 존재 여부
$all          // 모든 요소 포함 여부


// Aggregation Pipeline: 단계별 파이프라인 구성
[
    { $match: { /* 필터링 */ } },
    { $group: { /* 그룹핑 */ } },
    { $sort: { /* 정렬 */ } },
    { $project: { /* 필드 선택 */ } }
]

// 실전 예제

// 예제 1: 조건부 필드 업데이트
db.collection.updateMany({}, [
    {
        $set: {
            status: {
                $cond: {
                    if: { $gt: ["$price", 1000] },
                    then: "expensive",
                    else: "cheap"
                }
            }
        }
    }
])

// 예제 2: 배열 필드 병합
db.collection.updateMany({}, [
    {
        $set: {
            allTags: {
                $concatArrays: [
                    { $ifNull: ["$tags", []] },
                    { $ifNull: ["$categories", []] }
                ]
            }
        }
    }
])

