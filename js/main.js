const Main = (() => {
    return {
        callPage: (pageName) => {
            $.ajax({
                url: 'pages/' + pageName,
                type: "GET",
                dataType: "html",
                beforeSend: function () {
                    $('body').addClass("loading");
                },
                success: function (response) {
                    console.log(`Request ${pageName}`);
                    $("#display").html(response);
                },

                error: function (error) {
                    console.log(`The page was no loaded`, error);
                },

                complete: function (response) {
                    console.log(`The request has conpleted`);
                    setTimeout(function () {
                        $('body').removeClass("loading");
                    }, 200);
                }
            });
        },

        fetchRecipes: (keywords = '') => {
            const baseUrl = 'http://localhost:3000';
            $.ajax({
                url: `${baseUrl}/foods/recipe/${keywords}`,
                type: "GET",
                beforeSend: function (request) {
                    request.setRequestHeader("token", localStorage.getItem('token'));
                },
                data: {
                    "food": keywords
                },
                success: function (result) {
                    console.log(result);
                }
            });
        }
    };
})();