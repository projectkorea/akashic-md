# 쿼리

```js
{
    // 여기에 작성한다
}



{ 
    // 
    uploadStatus: { 
        $exists: true,
        $ne: null
    }
}



{ processed: { $regex: "Child" }}



{
    $rename: {
    uplaodStatus: "uploadStatus"
    },
}



{
    $and: [
    { uploadStatus: 'ok' },
    { uploadStatus: 'onRegister' },
    ] 
}


on
{ 
    score: { $exists: true },
    gender: 'female',
    $or: [
    { appGender: { $exists: false } },
    { appGender: { $ne: 'F' } }
    ]
}


on
{ gender: { $nin: ['male', 'female', null] } }




{
    timestamp: { // 18 minutes ago (from now)
    $gt: new Date(ISODate().getTime() - 1000 * 60 * 18)
    }
}


{expr: { $gte: [{ $size: "$topics" }, 4] }} // 배열요소 3개이상인것
{"$expr": { "$gte": [{ "$size": "$topics" }, 4] }} // atlas

```