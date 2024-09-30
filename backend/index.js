const express=require('express');
const app=express();
const cors=require('cors');
const port =3000;
const mongodb=require('./db');
app.use(cors());

const axios = require('axios');
app.use(express.json());

const CLIENT_ID = "927923c3-8507-41cb-9f13-f3502a35810c";
const CLIENT_SECRET = "IsszqDCugenn14fEvnsStmL8FuZaYrpq";

const getAccessToken = async () => {
    const response = await axios.post('https://api.setu.co/v1/token', {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'client_credentials'
    });
    return response.data.access_token;
};

const getUserTransactions = async (accessToken, userId) => {
    const response = await axios.get(`https://api.setu.co/v1/accounts/${userId}/transactions`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response.data;
};

// Endpoint to get user transactions
app.get('/transactions/:userId', async (req, res) => {
    try {
        const accessToken = await getAccessToken();
        const userId = req.params.userId; // Get userId from the request
        const transactions = await getUserTransactions(accessToken, userId);
        res.status(200).json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching transactions' });
    }
});

mongodb();
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))


app.listen(port,()=>
{
    console.log(`listening on port ${port}`);
})






