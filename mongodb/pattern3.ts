getDb().collection('users').updateOne(
    { _id: uid },
    { 
        $addToSet: { topic: "fever" }  // 배열이 없으면 생성하고 추가, 있으면 추가만
    },
    { upsert: true }  // document가 없으면 생성
);

// 여러 요소 한번에 추가할 때
getDb().collection('users').updateOne(
    { _id: uid },
    { 
        $addToSet: { 
            topic: { 
                $each: ["fever", "male", "ko"] 
            }
        }
    },
    { upsert: true }
);