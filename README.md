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
	"username": YOUR_USERNAME,
  "email": YOUR_EMAIL,
  "password": YOUR_PASSWORD
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
  "access_token": YOUR_ACCESS_TOKEN
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
  "id": YOUR_ID,
  "username": YOUR_USERNAME,
	"email": YOUR_EMAIL  
}
```



### User Questions

##### Endpoint

```http
GET /user/questions
```

##### Header

- access_token: String **Required**

### User Answers

##### Endpoint

```http
GET /user/answers
```

##### Header

- access_token: String **Required**

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
  "author": YOUR_USER_ID,
  "title": QUESTION_TITLE,
  "desc": QUESTION_DESCRIPTION
  "createdAt": DATE_CREATED
}
```

### Edit Question

### Delete Question

### Upvote Question

### Downvote Question

### Upvote Answer

### Downvote Answer