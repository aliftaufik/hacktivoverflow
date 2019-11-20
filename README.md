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



### Sign In

##### Endpoint

```http
POST /user/signin
```

##### Body

- username | email: String **Required**
- password: String **Required**

##### Return

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

### Edit Question

### Delete Question

### Upvote Question

### Downvote Question

### Upvote Answer

### Downvote Answer