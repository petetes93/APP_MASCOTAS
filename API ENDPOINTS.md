# Api Endpoints

### **REGISTER**

```http
POST /api/users/register
```

- **Description** register an user.

- **Response:**
  - `200 OK`: Returns user register successfully.
  - `400 Bad Request:` Request query params is invalid.

### **LOGIN**

```http
POST /api/users/login
```

- **Description** login an user.
- **Headers:**

  - `x-auth-token`: jwt token (required)

- **Response:**
  - `200 OK`: Returns user successfully logged.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.

---

### **ADMIN**

```http
GET /api/users
```

- **Description** Retrieve a list of authenticated users.
- **Headers:**
  - `x-auth-token`: jwt token (required)
- **Response:**
  - `200 OK`: Returns a list of user.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.

```http
DELETE /api/userId
```

- **Description** Disable an authenticated users.
- **Headers:**
  - `x-auth-token`: jwt token (required)
- **Response:**
  - `200 OK`: Returns a disbale user.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.

---

### **USER**

```http
POST /api/pets
```

- **Description** Create a profile of the pet
- **Headers:**
  - `x-auth-token`: jwt token of the user/owner (required)
- **Response:**

  - `200 OK`: Profile created successfully.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.

  ```http
  PUT /api/pets/petId
  ```

- **Description** MOdify information of a pet
- **Headers:**
  - `x-auth-token`: jwt token of the user/owner (required)
- **Response:**
  - `200 OK`: Profile created successfully.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.

```http
GET /api/pets
```

- **Description** Retrieve a list of pets.
- **Headers:**
  - `x-auth-token`: jwt token of the user/owner (required)
- **Response:**

  - `200 OK`: Returns a list of pets.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.

```http
GET /api/pets/petId
```

- **Description** Retrieve a pet.
- **Headers:**
  - `x-auth-token`: jwt token of the user/owner (required)
- **Response:**

  - `200 OK`: Returns a pets.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.

  ```http
  DELETE /api/pets/petId
  ```

- **Description** Delete a pet from the list of pets.
- **Headers:**
  - `x-auth-token`: jwt token of the user/owner (required)
- **Response:**
  - `200 OK`: Delete the profile successfully.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.

---

### PETS

```http
GET /api/items
```

- **Description** Retrieve a list of items.
- **Headers:**
  - `x-auth-token`: jwt token of the user/owner (required)
- **Response:**

  - `200 OK`: Returns a list of items.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.

---

```http
GET /api/items/itemId
```

- **Description** Retrieve an items.
- **Headers:**
  - `x-auth-token`: jwt token of the user/owner (required)
- **Response:**

  - `200 OK`: Returns an items.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.

---

```http
POST /api/items
```

- **Description** Retrieve a list of items.
- **Headers:**
  - `x-auth-token`: jwt token of the user/owner (required)
- **Response:**

  - `200 OK`: Returns a list of items.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.

---

```http
DELETE /api/items/itemId
```

- **Description** delete an item.
- **Headers:**
  - `x-auth-token`: jwt token of the user/owner (required)
- **Response:**

  - `200 OK`: Returns a delete item.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.

---

```http
PUT /api/items/itemId
```

- **Description** swap from true to false an item.
- **Headers:**
  - `x-auth-token`: jwt token of the user/owner (required)
- **Response:**

  - `200 OK`: Returns a delete item.
  - `400 Bad Request:` Request query params is invalid.
  - `401 Unauthorized`: Missing authentication credentials.
