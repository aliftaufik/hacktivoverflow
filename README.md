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

```



### All Questions

##### Endpoint

```http
GET /questions
```

### One Question

##### Endpoint

```http
GET /questions/:id
```

##### Param

- id: String **Required**

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

### Delete Question

### Upvote Question

### Downvote Question

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



### Upvote Answer

### Downvote Answer