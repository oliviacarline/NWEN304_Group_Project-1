module.exports = function (app, pool) {
    app.post('/search', function (request, response) {
        let keyword = request.body.keyword;

        let pageData = {
            title: 'Search Result',
            description: "Search Result",
            results: {
                products: []
            }
        };

        let sqls = [
            "SELECT * FROM products WHERE LOWER(productname) LIKE $1"
        ];

        Promise.all(sqls.map(sql => {
            return pool.query(sql, ['%' + keyword + '%']);
        })).then(arrayOfResult => {
            pageData.results.products.push(...arrayOfResult[0].rows);

            response.set({
                'Cache-Control': 'public, no-cache, must-revalidate'
            }).render('search_results', pageData);
        }).catch(error => {
            pageData.error = "Database error occurred";
            response.render('search_results', pageData);
            console.error('[ERROR] Query error:', error.message, error.stack);
        });
    });
};


