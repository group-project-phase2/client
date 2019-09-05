const Main = (() => {
    return {
        callPage: (pageName) => {
            $.ajax({
                url: pageName,
                type: "GET",
                dataType: "html",
                success: function (response) {
                    console.log(`Request ${pageName}`);
                    $("#display").html(response);
                },

                error: function (response) {
                    console.log(`The page was no loaded`, error);
                },

                complete: function (response) {
                    console.log(`The request has conpleted`);
                }
            });
        }
    };
})();