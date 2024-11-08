const db:any = null;

db.collection.collection('users').updateOne(
    { _id: 'uid' },
    { 
        // 배열이 없으면 생성하고 추가, 있으면 추가만
        $addToSet: { 
            topics: "fever", 
            // 여러 요소 한 번에 추가
            topicss:{
                $each: ["fever", "male", "ko"]
            } 
        }  
    },
    // document가 없으면 생성
    { upsert: true }  
);
