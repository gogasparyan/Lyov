(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $(".navbar-brand").text("");
      $(".navbar-brand").addClass("logo");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $(".navbar-brand").removeClass("logo");
      $(".navbar-brand").text("Finum");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });


//    myedit
    var langHideOnScroll = function() {
//        var myHeight = $(window).height
        if($(".dropdown-menu").hasClass("show")) {
            $(".dropdown-menu").removeClass("show");
            $(".dropdown").removeClass("show");
            $(".btn-outline-dark").css(":active", "background-color: #9D4B41 !important;");
        }
    };
    $(window).scroll(langHideOnScroll);

    
    var arrLnag = {
    'hy': {
        "about": "Մեր մասին",
        "services": "Ծառայություններ",
        "contact": "Կապ",
    
        "slogan1": "Անվճար նախաճաշեր չեն լինում",
        "slogan2": "Համոզված եղեք, որ ի դեմս Ֆինում ՍՊԸ-ի, Դուք կատարել եք ճիշտ ընտրություն:",
    
        "button1": "Իմանալ ավելին",
    
        "about_text": "«Ֆինում» ՍՊ Ընկերության գործունեությունը նպատակաուղղված է բարձրացնելու մեր գործընկերների ակտիվների կառավարման արդյունավետությունը, մշակելու արդի շուկայական տնտեսության պայմաններին համապատասխան մրցունակ և ճկուն ռազմավարություն՝ միաժամանակ ապահովելով ֆինանսական հաշվետվությունների արժանահավատության բարձր մակարդակ և հարկային ու ֆինանսական նվազագույն ռիսկեր:",
    
        "services1": "Հաշվապահական հաշվառում",
        "services1_text": "աշվապահական հաշվառման վարման ծառայությունները ներառում են անհրաժեշտ փաստաթղթերի դասակարգումը, լրացումը, պրոֆեսիոնալ հաշվապահական ծրագրի օգնությամբ համապատասխան հաշվապահական գրանցումների վերլուծումը և համապատասխանեցումը։",
    
        "services2": "Հարկային հաշվառում և պլանավորում",
        "services2_text": "Կազմակերպության կողմից մատուցվող հաշվապահական ծառայության կարևոր մասն է կազմում հարկային հաշվառման ճշգրիտ և գրագետ վարումը, ինչը հնարավորություն է տալիս թեթևացնել և օպտիմալացնել հարկային բեռը:",
    
        "services3": "Հաշվետվությունների կազմում",
        "services3_text": "Պարտադիր ներկայացման ենթակա հաշվարկներից և հաշվետվություններից բացի բաժնետերերի պահանջով պատրաստվում են նաև կոնսոլիդացված հաշվետվություններ: Վերլուծական հաշվետվությունը պատրաստվում է տարբեր լեզուներով, և կարող են հաշվի առնվել նաև հաշվապահական տարբեր համակարգերի միջև եղած տարբերությունները:",
    
        "services4": "Հաշվապահական խորհրդատվություն",
        "services4_text": "Այս ընթացքում մենք հասցրել ենք ձեռք բերել մեր գործընկերների վստահությունն ու գոհունակությունը մեր կողմից մատուցվող հաշվապահական ծառայության որակի և պրոֆեսիոնալիզմի շնորհիվ։ Կազմակերպությունը տրամադրում է ինչպես պարբերական հաշվապահական ծառայություններ, այնպես էլ ապահովում է մեկանգամյա առանձնահատուկ խնդիրների լուծում:",
        
        "contactSlogan": "Կապվե՛ք մեզ հետ",
    },
    
    'ru': {
        "about": "О нас",
        "services": "Услуги",
        "contact": "Связь",
    
        "slogan1": "Бесплатных завтраков не бывает",
        "slogan2": "Выбрав ООО “Финум”, Вы не ошибетесь.",
    
        "button1": "Узнать больше",
    
        "about_text": "Цель деятельности ООО “Финум” – увеличивать эффективность управления активами наших партнеров, разрабатывать конкурентоспособную и гибкую стратегию, соответствующую текущему состоянию рынка, в то же время гарантируя высокую финансовую надежность, минимальную налоговую нагрузку и минимальные финансовые риски.",
    
        "services1": "Бухгалтерский учет",
        "services1_text": "Бухгалтерские услуги включают в себя заполнение, классификацию и анализ бухгалтерских отчетов и необходимых документов с помощью профессионального бухгалтерского программного обеспечения.",
    
        "services2": "Налоговое планирование и учет ",
        "services2_text": "Важная часть бухгалтерских услуг, предоставляемая организацией, является точный и компетентный налоговый учет, который позволяет упростить и оптимизировать налоговое бремя.",
    
        "services3": "Составление отчетов",
        "services3_text": "Кроме счетов и подвергающихся обязательному подчинению отчетов, сводные отчеты также могут быть сделаны по запросу акционеров. Аналитический отчет представляется на различных языках, и могут быть рассмотрены различия между системами учета.",
    
        "services4": "Бухгалтерская консультация",
        "services4_text": "Нам уже удалось заслужить доверие наших партнеров благодаря качеству и профессионализму нашей бухгалтерской услуги. Организация предоставляет не только регулярные бухгалтерские услуги, но также и одноразовые решения определенных проблем.",
        
        "contactSlogan": "Свяжитесь с нами!",
    },
    
    'en': {
        "about": "About Us",
        "services": "Services",
        "contact": "Contacts",
    
        "slogan1": "There's no such thing as a free lunch",
        "slogan2": "Be assured that “Finum” LLC is your right choice!",
    
        "button1": "find out more",
    
        "about_text": "“Finum” LLC aims to increase the effectiveness of our partners' asset management, develop a competitive and flexible strategy corresponding to current market conditions, at the same time ensuring high financial reliability and minimal tax and financial risks.",
    
        "services1": "Accounting",
        "services1_text": "Accounting services include classification, completion and analyses of reports and necessary documentation by means of professional accounting software.",
    
        "services2": "Tax accounting and planning",
        "services2_text": "An important part of the accounting service provided by the organization is the accurate and competent tax accounting, which helps to simplify and optimize the tax burden.",
    
        "services3": "Reporting",
        "services3_text": "Apart from calculations and reports subject to mandatory submission, consolidated reports  are also made at the shareholders' request. The analytical report is presented in different languages and differences between accounting systems may also be considered.",
    
        "services4": "Accounting consultation",
        "services4_text": "We have already managed to gain the trust of our partners due to the quality and professionalism of our accounting service. The organization provides not only regular accounting services but also one-off solutions to specific problems.",
        
        "contactSlogan": "Contact with us",
    }
};
 
    var changeLang = function() {
        $(".dropdown-item").click(function() {
            var lang = $(this).attr("key");
            
            
            var prevLang = $(".btn-outline-dark").text();
            var prevLangKey = $(".btn-outline-dark").attr("key");
//            console.log("prevLangKey: " + prevLangKey);
            var currentLang = $(this).text();
            var currentLangKey = $(this).attr("key");
            
            $(this).text(prevLang);
            $(this).attr("key", prevLangKey);
            
            $(".btn-outline-dark").text(currentLang);
            $(".btn-outline-dark").attr("key", currentLangKey);
            
            
//            $("*[data-localize]").each(function(index, element){
            $("*[data-localize]").each(function(index){
                $(this).text(arrLnag[lang][$(this).attr("data-localize")])
            });
        });
    };
    changeLang();
    
    
})(jQuery); // End of use strict
