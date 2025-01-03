The solution involves ensuring that you access the document snapshot's data only after the data has been successfully loaded.  You can achieve this using Promises and `.then()` or with async/await. 

**Using .then():**
```javascript
db.collection('yourCollection').doc('yourDoc').get().then((doc) => {
  if (doc.exists) {
    const data = doc.data();
    console.log('Document data:', data);
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
```

**Using async/await:**
```javascript
async function getData() {
  try {
    const docRef = db.collection('yourCollection').doc('yourDoc');
    const doc = await docRef.get();
    if (doc.exists) {
      const data = doc.data();
      console.log('Document data:', data);
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}

getData();
```
These solutions guarantee that the `data` variable is only accessed once the data has been retrieved from Firebase.