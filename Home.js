const m = require('mithril');
const tabs = require('./tab.js');
const about = require('./About.js');
const work = require('./Work.js')
// console.log(tabs);
let yourName = '';
let yourEmail = '';
let yourMassage = '';
let invalidEmail = false;
let emptyName = false;
let atposition = ''
let dotposition = ''
let emailSuccess = false
let emailSend = function (e) {
    e.preventDefault();
   
    atposition = yourEmail.indexOf("@")
    dotposition = yourEmail.indexOf(".")
    if(yourName == ''){
        emptyName = true;
    }else{
        console.log('hit2')
        if(yourEmail == ''){
            invalidEmail = true;
        }else{
            console.log('hit1')
            if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= yourEmail.length){
                invalidEmail = true;
            }else{
                console.log('hit')
                m.request({
                    method: "POST",
                    url: "https://formcarry.com/s/PFwXXNjHu8v",
                    data: {
                        name: yourName,
                        email: yourEmail,
                        massage: yourMassage
                    },
                    
                })
                .then(function (data) {
                    if (data.status == 'success'){
                        emailSuccess = true
                    }
                })
            }
        }
    }

   
}
let TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
let home = {
   
    port: ['my Portfoilo', 'Siddharth'],
    period: '2000',


   
    oncreate:function(){
        let elements = document.getElementsByClassName('txt-rotate');
        console.log(elements)
        console.log(elements.length)
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data_rotate');
            console.log(toRotate)
            console.log('hello')
            var period = elements[i].getAttribute('data_period');
            
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
          }
    },

    view: function () {
        return [
            m(tabs),
            m("div", {
                    id: 'Home'
                },

                m('div.body',

                    m('div.typewriter',
                        m('h1.name', 'This is ', 
                        m('span',
                        {
                            class:"txt-rotate",
                            data_period:"2000",
                            data_rotate:'[ "my Portfoilo", "Siddharth" ]'
                        }))
                    )



                )
            ),
            m(about),
            m(work),
            m('div.footer', {
                    id: 'Contact'
                },
                m('form.footer-form',
                    m('div.footer-div',
                        m('lable', 'Name'),
                        m("input.footer-input[type=text]", {
                            required: true,
                            oninput: m.withAttr("value", function (value) {
                                yourName = value
                            }),
                            value: yourName
                        })
                       
                    ),
                    emptyName? m('div.valid', "Fill the Name") : '',   
                    m('div.footer-div',
                        m('lable', 'Email'),
                        m("input.footer-input[type=text]", {
                            required: true,
                            oninput: m.withAttr("value", function (value) {
                                yourEmail = value
                            }),
                            value: yourEmail
                        })
                       
                    ),
                    invalidEmail ? m('div.valid', "invalid email id") : '',
                    m('div.footer-div',
                        m('lable', 'Massage'),
                        m("textarea.footer-input",{
                            required: true,
                            oninput: m.withAttr("value", function (value) {
                                yourMassage = value
                            }),
                            value: yourMassage
                        }

                        ),



                    ),
                    m('div', m('input.footer-button.button is-normal[type=submit]', {
                        onclick: emailSend,
                        value: "Send"
                    })),
                    emailSuccess ? m('div.succ', "email send success") : '',
                ))
        ]
    }

}

m.mount(document.body, home)