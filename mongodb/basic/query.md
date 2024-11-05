# 쿼리

```js
{
    // 여기에 작성한다
}
```

```js
{ 
    // 
    uploadStatus: { 
        $exists: true,
        $ne: null
    }
}
```

```js
{ processed: { $regex: "Child" }}
```

```js
{
    $rename: {
    uplaodStatus: "uploadStatus"
    },
}
```

```js
{
    $and: [
    { uploadStatus: 'ok' },
    { uploadStatus: 'onRegister' },
    ] 
}
```

```json
{ 
    score: { $exists: true },
    gender: 'female',
    $or: [
    { appGender: { $exists: false } },
    { appGender: { $ne: 'F' } }
    ]
}
```

```json
{ gender: { $nin: ['male', 'female', null] } }

```

```js
{
    timestamp: { // 18 minutes ago (from now)
    $gt: new Date(ISODate().getTime() - 1000 * 60 * 18)
    }
}
```