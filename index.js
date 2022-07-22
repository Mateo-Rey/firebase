import { initializeApp, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import { credentials } from './credentials.js'

initializeApp({
    credential: cert(credentials)
})

const db = getFirestore()

// const car = { make: 'Ferrari', model: "GTO", year: 2008, color: 'red'}

// db.collection('cars').add(car)
//     .then(doc => {
//         console.log('Doc added', doc.id)
//     })
//     .catch(err => console.error(err))

//     db.collection('cars').doc('lambo')
//     .set ({make: 'lamborghini', model: "diablo", year: 2020, color: "red" })
    
// db.collection('cars').doc('lambo')
//     .update({model: 'Diablo', color: 'hot pink'})


// db.collection('cars').doc('lambo').get()
//     .then(doc => {
//         console.log(doc.data())
//         console.log(doc.id)
//     })
//     .catch(console.log.error)

// db.collection('cars').get()
//     .then(collection => {
//         collection.docs.map(doc => console.log(doc.data()))
//         }) 
//     .catch(console.error)

db.collection('cars')
    .where('year', '>=', 2015)
    .get()
        .then(collection => {
            const cars = collection.docs.map(doc => doc.data())
       console.log(cars)
    })
    .catch(console.error)
// db.collection('cars')
//     .where('year', '>', '2015')
//     .get()
//     .then(console.log('lucki'))
//     .catch(console.error)