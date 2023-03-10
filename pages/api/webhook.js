import { buffer } from 'micro'
import * as admin from 'firebase-admin'

// Secure a connection to firebase
const serviceAccount = require('../../permisions.json')
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app()

// Stripe

const stripe = require('stripe')("sk_test_51KosFhFwyx0lKIchKIkRQtQU7HgMbZNknXsKPJCh9Lb48kXP3wg4Ym7FhcPaKWnbOBsMejYD3l44dVruGvDb0GzW00eECo5APo")

const endpointSecurit = "whsec_936d10d15b258a8b9a7be76054c3d0c7ed001de8a82279fbe11878b51ec90c3d"

const fullfillOrder = async (session) => {
    console.log('Fullfilling Order!!!')
    
    return app
        .firestore()
        .collection('orderdetail')
        .doc(session.id)
        .set({
            amount: session.amount_total / 100, 
            // images: JSON.parse(session.metadata.images),
            order: JSON.parse(session.metadata.order),
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
            email: session.metadata.email,
            name : session.metadata.name,
            phone : session.metadata.phone,
            address : session.metadata.address,
            country : session.metadata.country,
            state : session.metadata.state,
            remail : session.metadata.remail, 
            store: session.metadata.store,
            accid : session.metadata.accid,
            status:"Pending"
       
        })
        .then(() => {
            console.log(`SUCCESS: Order ${session.id} has been added to DB!`)
            console.log(JSON.stringify(session, null, 2))
            
            
        })
}

export default async (req, res) => {
    if(req.method === 'POST'){
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.headers["stripe-signature"]

        let event;

        // Verify (came from stripe)
        try{
            event = await stripe.webhooks.constructEvent(payload, sig, endpointSecurit)
        }catch(e){
            console.log('ERROR', e.message)
            return res.status(400).send({message: "Webhook error: " + e.message })
        }
        if(event.type === "checkout.session.completed"){
            const session = event.data.object;

            // Fullfill the order
            return fullfillOrder(session).then(() => res.status(200)).catch(e => res.status(400).send({message: "WEBHOOK_ERROR: " + e.message}))
        }
        if(event.type === "account.external_account.created"){
            const externalAccount = event.data.object;
            console.log(externalAccount,"webhook")

            // Fullfill the order
            return  res.status(200).catch(e => res.status(400).send({message: "WEBHOOK_ERROR: " + e.message}))
        }
    }
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}