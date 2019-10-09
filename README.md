<div align="center"><img src="https://1.bp.blogspot.com/-U5eiouE3tcU/XZ3_b9FFsYI/AAAAAAAAJnc/HUk2GVdhlVQnOJjb6t7Xd_-tfWLeri0KwCLcBGAsYHQ/s1600/logo-fw.png" width="500"></div>

# Arsan MEVN Framework


## Project setup
```
cd client && npm install
```
```
cd server && npm install
```

### Compiles Client and hot-reloads for development
on /client
```
npm run client
```

### Compiles Server and minifies for production
on /server
```
npm run server
```

## /server
---
**DB Config**
./db.js
```
// const urlConfig = 'mongodb://localhost:27017/' Your Database Configuration URL
```
---

**API ORIGIN**

./index.js
```
app.use(cors({
  origin: // Your Allowed Origin For HTTP Request
}))
```

---
**Make API Method And Route**
```
npm run make api YOUR_API_NAME
```

It will creating file on *./router* and *./model*

***API RESOURCE***
```
npm run make api:resource YOUR_API_NAME
```
It will creating file on *./router* and *./model* with **CRUD** structure

---

## CLIENT
---
**Run your tests**
```
npm run test
```
---
**Lints and fixes files**
```
npm run lint
```
---
**Build front end**
```
npm run build
```
