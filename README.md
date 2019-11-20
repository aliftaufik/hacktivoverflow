# Hacktiv Overflow

A small aplication mimicing Stack Overflow. Using Express Js and Mongoose for backend, and Vue Js with Bootstrap Vue framework as front end.

## Routes

### Sign Up

##### Endpoint

```http
POST /user/signup
```

##### Body

- username: String **Required**
- email: String **Required**
- password: String **Required**

##### Return

Status 201:

```json
{
  "username": "dummy",
  "email": "dummy@mail.com",
  "password": "123456"
}
```



### Sign In

##### Endpoint

```http
POST /user/signin
```

##### Body

- username | email: String **Required**
- password: String **Required**

##### Return

Status 200:

```json
{
  "access_token": "very_long_combination_of_letters_numbers_and_other_characters"
}
```



### Check Session

##### Endpoint

```http
GET /user/checksession
```

##### Header

- access_token: String **Required**

##### Return

Status 200:

```json
{
  "id": "5dd4c311181e530d26f63776",
  "username": "dummy",
  "email": "dummy@mail.com",
  "iat": 1574224733
}
```



### User Questions

##### Endpoint

```http
GET /user/questions
```

##### Header

- access_token: String **Required**

##### Return

Status 200:

```json
[
  {
    "upvotes": [],
    "downvotes": [],
    "createdAt": "2019-11-20T04:17:04.238Z",
    "updatedAt": "2019-11-20T04:17:04.238Z",
    "_id": "5dd4be8476c0a007c66f3e3e",
    "author": "5dd4b5e4c8d42601f50dbf90",
    "title": "Need Help ASAP",
    "desc": "I don't know what I don't know",
    "__v": 0
  }
]
```



### User Answers

##### Endpoint

```http
GET /user/answers
```

##### Header

- access_token: String **Required**

##### Return

Status 200:

```json
[
  {
    "upvotes": [],
    "downvotes": [],
    "createdAt": "2019-11-20T04:50:39.790Z",
    "updatedAt": "2019-11-20T04:50:39.790Z",
    "_id": "5dd4c72868bc510ea5892866",
    "questionId": "5dd4be8476c0a007c66f3e3e",
    "author": "5dd4b5e4c8d42601f50dbf90",
    "answer": "You should ask expert about this concern",
    "__v": 0
  }
]
```



### All Questions

##### Endpoint

```http
GET /questions
```

##### Returns

```json
[
  {
    "upvotes": [],
    "downvotes": [],
    "createdAt": "2019-11-20T04:17:04.238Z",
    "updatedAt": "2019-11-20T04:17:04.238Z",
    "_id": "5dd4be8476c0a007c66f3e3e",
    "author": "5dd4b5e4c8d42601f50dbf90",
    "title": "Need Help ASAP",
    "desc": "I don't know what I don't know",
    "__v": 0
  }
]
```



### One Question

##### Endpoint

```http
GET /questions/:id
```

##### Param

- id: String **Required**

##### Return

Status 200:

```json
{
  "upvotes": [],
  "downvotes": [],
  "createdAt": "2019-11-20T04:17:04.238Z",
  "updatedAt": "2019-11-20T04:17:04.238Z",
  "_id": "5dd4be8476c0a007c66f3e3e",
  "author": "5dd4b5e4c8d42601f50dbf90",
  "title": "Need Help ASAP",
  "desc": "I don't know what I don't know",
  "__v": 0
}
```



### Post Question

##### Endpoint

```http
POST /questions
```

##### Header

- access_token: String **Required**

##### Body

- title: String **Required**
- desc: String **Required**

##### Return

Status 201:

```json
{
  "author": "5dd4c311181e530d26f63776",
  "title": "Need Help ASAP",
  "desc": "I don't know what I don't know",
  "createdAt": "2019-11-20T04:36:19.306Z"
}
```



### Edit Question

##### Endpoint

```http
PUT /questions/:id
```

##### Header

- access_token: String **Required**

##### Param

- id: String **Required**

##### Body

- title: String **Optional**
- desc: String **Optional**

##### Return

Status 200:

```json
{
  "upvotes": [],
  "downvotes": [],
  "createdAt": "2019-11-20T06:20:12.849Z",
  "updatedAt": "2019-11-20T06:20:12.849Z",
  "_id": "5dd4db229650b017ba61342c",
  "author": "5dd4b5e4c8d42601f50dbf90",
  "title": "Another Question",
  "desc": "Another description",
  "__v": 0
}
```



### Delete Question

##### Endpoint

```http
DELETE /questions/:id
```

##### Header

- access_token: String **Required**

##### Param

- id: String **Required**

##### Return

Status 200:

```json
{
  "id": "5dd4db229650b017ba61342c",
  "title": "Another Question",
  "status": "deleted"
}
```



### Upvote Question

##### Endpoint

```http
PATCH /questions/:id/upvote
```

##### Header

- access_token: String **Required**

##### Param

- id: String **Required**

##### Return

```json
{
  "upvotes": [
    "5dd4b5e4c8d42601f50dbf90"
  ],
  "downvotes": [],
  "_id": "5dd4fc3f8f01f827f79abe4f",
  "author": "5dd4b5e4c8d42601f50dbf90",
  "title": "Need Help ASAP",
  "desc": "I don't know what I don't know",
  "createdAt": "2019-11-20T08:41:35.789Z",
  "updatedAt": "2019-11-20T08:44:09.883Z"
}
```



### Downvote Question

##### Endpoint

```http
PATCH /questions/:id/downvote
```

##### Header

- access_token: String **Required**

##### Param

- id: String **Required**

##### Return

```json
{
  "upvotes": [],
  "downvotes": [
    "5dd4b5e4c8d42601f50dbf90"
  ],
  "_id": "5dd4fc3f8f01f827f79abe4f",
  "author": "5dd4b5e4c8d42601f50dbf90",
  "title": "Need Help ASAP",
  "desc": "I don't know what I don't know",
  "createdAt": "2019-11-20T08:41:35.789Z",
  "updatedAt": "2019-11-20T08:44:09.883Z"
}
```



### Post Answer

##### Endpoint

```http
POST /questions/:id/answers
```

##### Header

- access_token: String **Required**

##### Param

- id: String **Required**

##### Body

- answer: String **Required**

##### Return

Status 201:

```json
{
  "questionId": "5dd4be8476c0a007c66f3e3e",
  "author": "5dd4b5e4c8d42601f50dbf90",
  "answer": "You should ask expert about this concern",
  "createdAt": "2019-11-20T04:50:39.790Z"
}
```



### Question's Answers

##### Endpoint

```http
GET /questions/:id/answers
```

##### Param

- id: String **Required**

##### Return

Status 200:

```json
[
  {
    "upvotes": [],
    "downvotes": [],
    "createdAt": "2019-11-20T04:50:39.790Z",
    "updatedAt": "2019-11-20T04:50:39.790Z",
    "_id": "5dd4c72868bc510ea5892866",
    "questionId": "5dd4be8476c0a007c66f3e3e",
    "author": "5dd4b5e4c8d42601f50dbf90",
    "answer": "You should ask expert about this concern",
    "__v": 0
  }
]
```



### Edit Answer

##### Endpoint

```http
PUT /answers/:id
```

##### Header

- access_token: String **Required**

##### Param

- id: String **Required**

##### Body

- answer: String **Optional**

##### Return

Status 200:

```json
{
  "upvotes": [],
  "downvotes": [],
  "_id": "5dd4c72868bc510ea5892866",
  "createdAt": "2019-11-20T04:50:39.790Z",
  "updatedAt": "2019-11-20T07:07:36.712Z",
  "questionId": "5dd4be8476c0a007c66f3e3e",
  "author": "5dd4b5e4c8d42601f50dbf90",
  "answer": "Updated answer",
  "__v": 0
}
```



### Delete Answer

##### Endpoint

```http
DELETE /answers/:id
```

##### Header

- access_token: String **Required**

##### Param

- id: String **Required**

##### Return

Status 200:

```json
{
  "id": "5dd4c72868bc510ea5892866",
  "status": "deleted"
}
```



### Upvote Answer

##### Endpoint

```http
PATCH /answers/:id/upvote
```

##### Header

- access_token: String **Required**

##### Param

- id: String **Required**

##### Return

```json
{
  "upvotes": [
    "5dd4c311181e530d26f63776"
  ],
  "downvotes": [],
  "_id": "5dd4fe674bdfc92ae248c637",
  "questionId": "5dd4be8476c0a007c66f3e3e",
  "author": "5dd4b5e4c8d42601f50dbf90",
  "answer": "You should ask expert about this concern",
  "createdAt": "2019-11-20T08:50:47.030Z",
  "updatedAt": "2019-11-20T08:51:18.987Z"
}
```



### Downvote Answer

##### Endpoint

```http
PATCH /answers/:id/downvote
```

##### Header

- access_token: String **Required**

##### Param

- id: String **Required**

##### Return

```json
{
  "upvotes": [],
  "downvotes": [
    "5dd4c311181e530d26f63776"
  ],
  "_id": "5dd4fe674bdfc92ae248c637",
  "questionId": "5dd4be8476c0a007c66f3e3e",
  "author": "5dd4b5e4c8d42601f50dbf90",
  "answer": "You should ask expert about this concern",
  "createdAt": "2019-11-20T08:50:47.030Z",
  "updatedAt": "2019-11-20T08:51:18.987Z"
}
```

