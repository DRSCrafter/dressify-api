import {db} from '../services/db.js';

export default {
    getProvidersInCity: (req, res) => {
        db.query(
            `select distinct name 
                 from provider, provideraddresses 
                 where provider_id = Provider_provider_id and city = "${req.params.city}";`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    },
}