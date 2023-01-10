import connection from '../utils/db.js';

export default {
    getProvidersInCity: (req, res) => {
    //    select distinct name
        // from provider, provideraddresses
        // where provider_id = Provider_provider_id and city = "تهران";
        connection.query(
            `select distinct name 
                 from provider, provideraddresses 
                 where provider_id = Provider_provider_id and city = "${req.body.city}";`,
            (err, results) => {
                if (err) return console.log(err);
                res.send(results);
            }
        )
    },
}