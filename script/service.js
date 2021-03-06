service = () => {
    var body = document.getElementById('body');
    var article = document.createElement('article');
    body.appendChild(article);
    article.setAttribute('class', 'article');
    article.innerHTML += '<div class="container"><div class="row"><h3 class="text-center">Services We Provided</h3><!--//row--></div></div><!--//container-->';

    var service_json = [{

        img: '<i class="fa fa-cloud icon" style="font-size:28px"></i>',
        text: 'Web Hosting Service',
    }, {
        img: '<i class="fa fa-mobile-phone icon" style="font-size:28px"></i>',
        text: 'App Development',
    }, {

        img: '<i class="fa fa-television icon" style="font-size:28px"></i>',
        text: 'Website  Development',
    }, {

        img: '<i class="fa fa-pie-chart icon" style="font-size:28px"></i>',
        text: 'Search Engine Optimization',
    }, {

        img: '<i class="fa fa-line-chart icon" style="font-size:28px"></i>',
        text: 'Digital Marketing Services',
    }, {

        img: '<i class="fa fa-television icon" style="font-size:28px"></i>',
        text: 'Wordpress Development',
    }, {

        img: '<i class="fa fa-search icon" style="font-size:28px"></i>',
        text: 'Wordpress SEO',
    }, {

        img: '<i class="fa fa-paint-brush icon" style="font-size:28px"></i>',
        text: 'Logo Design & Visiting Card',
    }]

    service_json.forEach(i => {
        document.querySelector('article>.container>.row').innerHTML += `
          <div class="col-md-3">
              <div class="my_service">
                  ${i.img}
                  <p>${i.text}</p>
              </div>
          </div>
          <!--//col-md-3-->
       `;
    })
}
service();