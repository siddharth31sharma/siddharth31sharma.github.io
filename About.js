const m = require('mithril');
let lang = ['Java-Script', 'HTML', 'CSS', 'Mithril', 'NodeJS', 'MYSQL', 'ReactJS','Postgre-Sql']
let otherLang = ['Webpack','Express','Socket']
let interest = ['Gardening','Music','Bicycling','Swimming']
module.exports = {
    view: function () {
        return [
            m('div.about',{id:'About'},
            m('div',
                m('div.about1',
                    m('div.aboutme',
                        m('p.title-small ', 'About me'),
                        m('h1.title', 'Hello ! I am Siddharth Sharma'),
                        m('p.about-text', 
                        'This is my portfoilo , I am... Application designer and developer from Rajasthan, currently based in Jaipur, I have studied designing and creating webpages')
                    ),
                    m('div.history',
                        m('div', 'Employment history'),
                        m('a.work-box',
                        {
                            href:'https://www.balefire.co/',
                            target: "_blank"   
                        

                        },
                            m('div.text-font', 'Full-Stack Developer   ', m('span.text-font.left.sec-text', 'Aug-18 - Feb-28'), ),

                            m('div.sec-text.text-font', 'Balefire Labs Pvt Ltd India')
                        )
                    )
                ),
                m('div.about2',
                    m('div.sec-text.is-size-5', 'Experience of technologies'),
                    m('div.about2-lang', lang.map(function (item) {
                        return m('div.box2',
                            m('div.text-font', item)

                        )
                    }))

                ),
                m('div.about3',

                m('div',
                m('div.sec-text.is-size-5','Other Technologies'),
                m('div.about3-text',
                otherLang.map(function(item){
                    return m('span.pading-text',item)
                })
            )
            ),
            m('div',
            m('div.sec-text.is-size-5','Eduction'),
            m('div.about3-text',
        
             m('span.pading-text','Rajasthan University( BCA ,2013-2015)'),
             m('spac.pading-text','Rajasthan Technical University( MCA ,2015-2018)')
            
        )
        ),
        m('div.sec-text.is-size-5','Interests'),
        m('div.about3-text',
        interest.map(function(item){
            return m('span.pading-text',item)
        })
    ),
    m('div.sec-text.is-size-5','Profile'),
    m('div.about3-text',
    
     m('span.pading-text','Stackoverflow'),
     m('span.pading-text','Github'),
     

    
)
            

            )
        )
            )
        ]
    }
}