import {db} from '../utils/db.js';

export default {
    getProvidersInCity: (req, res) => {
    //    select distinct name
        // from provider, provideraddresses
        // where provider_id = Provider_provider_id and city = "تهران";
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