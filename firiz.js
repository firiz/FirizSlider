jQuery.fn.firizify = function()

{   

    this.each(function()

    {

        var slider = $(this);

        var ul = slider.children('ul');

        var li = ul.children('li');

        var img = li.children('img');



        slider.append('<div class="right"></div>');

        slider.append('<div class="left"></div>');

        slider.append('<div class="count" style="display: none"></div>');

        slider.append('<div class="current" style="display: none"></div>');



        var right = slider.children('.right');

        var left = slider.children('.left');



        slider.css('width', '100%');

        slider.css('overflow', 'hidden');



        var count = li.size();

        slider.children('.count').html(count);

        slider.children('.current').html(0);



        var percent = 100/count;



        ul.css('list-style-type', 'none');

        ul.css('width', slider.children('.count').html() + '00%');

        ul.css('padding', '0px');

        ul.css('margin', '0px');

        ul.css('height', '100%');



        li.css('padding', '0px');

        li.css('margin', '0px');

        li.css('float', 'left');

        li.css('width', percent + '%');



        img.css('padding', '0px');

        img.css('margin', '0px');

        img.css('width', '100%');

        img.css('display', 'block');



        var height = slider.height();



        right.css('width', '0');

        right.css('height', '0');

        right.css('cursor', 'pointer');

        right.css('opacity', '0.5');

        right.hover(

            function()

            { 

                right.css('opacity', '1'); 

            },

            function()

            {

                right.css('opacity', '0.5');

            }

        );

        right.css('border-left', '30px solid white');

        right.css('border-top', '15px solid transparent');

        right.css('border-bottom', '15px solid transparent');

        right.css('position', 'relative');

        right.css('left', '100%');

        right.css('margin-left', '-40px');

        right.css('top', height/2);

        right.css('margin-top', '-20px');





        left.css('width', '0');

        left.css('height', '0');

        left.css('cursor', 'pointer');

        left.css('opacity', '0.5');

        left.hover(

            function(){ left.css('opacity', '1'); },

            function(){ left.css('opacity', '0.5'); }

        );

        left.css('border-right', '30px solid white');

        left.css('border-top', '15px solid transparent');

        left.css('border-bottom', '15px solid transparent');

        left.css('position', 'relative');

        left.css('left', '0%');

        left.css('margin-left', '10px');

        left.css('top', height/2);

        left.css('margin-top', '-20px');



        img.first().one('load', function()

        {

            var right = slider.children('.right');

            var left = slider.children('.left');

            var height = slider.height();

            left.css('top', height/2);

            right.css('top', height/2);

        });

    }); 



    $('.slider').on('click', '.right', function()

    {

        var slider = $(this).parent();

        var ul = slider.children('ul');

        var count = slider.children('.count');

        var current = slider.children('.current');



        if(current.html() < count.html() - 1)

        {

            current.html(parseInt(current.html()) + 1);

            ul.animate({marginLeft: '-' + current.html() + '00%'}, 1000);
		
		ga('send', 'event', {'eventCategory': 'Slider', 'eventAction': 'Right'});

        }

    });



    $('.slider').on('click', '.left', function()

    {

        var slider = $(this).parent();

        var ul = slider.children('ul');

        var count = slider.children('.count');

        var current = slider.children('.current');



        if(current.html() > 0)

        {

            current.html(parseInt(current.html()) - 1);

            ul.animate({marginLeft: '-' + current.html() + '00%'}, 1000);

		ga('send', 'event', {'eventCategory': 'Slider', 'eventAction': 'Left'});

        } 

    });



    $(window).resize(function()

    {

        $('.slider').each(function()

        {

            var slider = $(this);



            var right = slider.children('.right');

            var left = slider.children('.left');



            var height = slider.height();



            left.css('top', height/2);

            right.css('top', height/2);

        });

    });

};