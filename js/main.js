$(document).ready(function () {
    $("#myButton").on("click", function () {
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + $("#search").val(),
            type: "GET",
            /* dataType: "json", */
            contentType: "application/json",
            /* data: JSON.stringify({pregunta: $("").val()}), */
            success: function (data) {
                console.log(data.held_items)
                $("#ca").fadeOut();
                /* $("#image_pokemon").html(`<img src="${data.sprites.other.home.front_default}">`) */


                $("#button").on("click", function () {
                    $("#ca").fadeIn();

                })
                    
                var activeIndex = $('#carouselExample').find('.carousel-item.active').index();

                if (activeIndex === 1 || activeIndex === 2) {
                    $('#carouselExample').carousel(0);
                }

                //Carrusel de items
                if (data.held_items.length === 0) {
                    $("#sin").fadeIn();
                } else if (data.held_items.length === 1) {
                    $("#im2").remove();
                    $("#im3").remove();
                    item1()
                } else if (data.held_items.length === 2) {
                    item1()
                    item2()
                    $("#im3").remove();
                    if ($("#im2").length === 0) {
                        $('.carousel-inner').append('<div class="carousel-item" id="im2"></div>');
                        $("#im3").remove();
                    }
                } else if (data.held_items.length === 3) {
                    item1()
                    item2()
                    item3()
                    if($("#im2").length === 0){
                        $('.carousel-inner').append('<div class="carousel-item" id="im2"></div>');
                    }if($("#im3").length === 0){
                        $('.carousel-inner').append('<div class="carousel-item" id="im3"></div>');
                    }
                }

                //Imágenes de items
                function item1() {
                    $.ajax({
                        url: data.held_items[0].item.url,
                        type: "GET",
                        contentType: "application/json",
                        success: function (itemData) {
                            const spriteUrl = itemData.sprites.default;
                            $("#im1").html(`<img src="${spriteUrl}"style="width:120px; height: auto;">`);
                        },
                    })
                }

                function item2() {
                    $.ajax({
                        url: data.held_items[1].item.url,
                        type: "GET",
                        contentType: "application/json",
                        success: function (itemData) {
                            const spriteUrl = itemData.sprites.default;
                            $("#im2").html(`<img src="${spriteUrl}"style="width:120px; height: auto;">`);
                        },
                    })
                }

                function item3() {
                    $.ajax({
                        url: data.held_items[2].item.url,
                        type: "GET",
                        contentType: "application/json",
                        success: function (itemData) {
                            const spriteUrl = itemData.sprites.default;
                            $("#im3").html(`<img src="${spriteUrl}"style="width:120px; height: auto;">`);
                        },
                    })
                }

            }
        })
    })
})
/* cubone,kabuto,kabutops,anorith,armaldo,skorupi,ekans,gloom */