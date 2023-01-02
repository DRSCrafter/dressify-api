export default (connection) => ({
    getProducts: (req, res) => {
        connection.query(
            'SELECT * FROM colors',
            (err, results) => {
                if (err) return console.log(err);
                res.send(results); // results contains rows returned by server
            }
        );
    }, // 1
    getCategories: (req, res) => {
    }, // 3
    getTopWeek: (req, res) => {
    }, // 6
    getTopMonth: (req, res) => {
    }, // 6
    getSpecialOff: (req, res) => {
    }, // 7
    getProviders: (req, res) => {
    }, // 8
    getCheapestProvider: (req, res) => {
    }, // 9
    getComments: (req, res) => {
    }, // 12
    getBestComments: (req, res) => {
    }, // 13
    getWorstComments: (req, res) => {
    }, // 14
    getSalesStats: (req, res) => {
    }, // 15
    getAverageSales: (req, res) => {
    }, // 16
    postProduct: (req, res) => {
    }, // 20
    editProduct: (req, res) => {
    }, // 20
    deleteProduct: (req, res) => {
    }, // 20
})