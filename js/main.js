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

                error: function (response) {
                    console.log(`The page was no loaded`, error);
                },

                complete: function (response) {
                    console.log(`The request has conpleted`);
                    setTimeout(function () {
                        $('body').removeClass("loading");
                    }, 1200);
                }
            });
        }
    };
})();