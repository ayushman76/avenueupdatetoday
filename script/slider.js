section = () => {
    var body = document.getElementById('body');
    var section = document.createElement('section');
    body.appendChild(section);
    section.innerHTML += '<div class="container"><div class="row"></div><!--//row--></div><!--//container-->'

    var slider_jason = [{
        heading: 'Website Development Company',
		 para01: '“Websites promote you 24/7: No employee will do that."',
        para: 'With a concrete belief in delivering the best software development solutions that can help your business carve a niche for itself in this tough competition, Avenue Design is the right source to turn your visions into a reality with total success. Offering a wide array of web and mobile outsourcing services such as Web development, Android development, iOS development, SEO Services, JS Programming, etc.|',
        btn: '8224973413'
    }, {
        img: 'images/slider.gif'
    }]

    document.querySelector('section>.container>.row').innerHTML += `
        <div class="col-md-6"> 
            <div class="myslider_content">
                <h2><b>${slider_jason[0].heading}</b></h2>
				<p>${slider_jason[0].para01}</p>
                <p>${slider_jason[0].para}</p>
                <a href="tel:${slider_jason[0].btn}" class="my_btn">Call Now</a>
            </div>
        </div>
        <!--//col-md-6-->
        <div class="col-md-6"> 
            <div class="pad-10">
                <img src="${slider_jason[1].img}" class="img-responsive">
            </div>
        </div>
        <!--//col-md-6-->
    `;
}

section();