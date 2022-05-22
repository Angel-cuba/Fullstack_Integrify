import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import  'dotenv/config';
import keys from './config/keys';

// Importing routes
import productRoutes from './routers/product';
import userRoutes from './routers/user';

//initializations
const app = express();


//settings
app.set('port', keys.PORT || 4000);

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//include passport as middleware

//routes
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.use('/products', productRoutes);
app.use('/users', userRoutes);


export default app;