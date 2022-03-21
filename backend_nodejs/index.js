import 'dotenv/config';
import app from './app.js';

app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'), () => {
    console.log('Server on port:',app.get('PORT') )
});