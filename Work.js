const m = require('mithril');



module.exports = {
    view: function () {
        return [
            m('div.work',{id:'Work'},
                m('div.workSide',

                    m('div.workfiled',
                        m('div.sec-text.is-size-5', 'Application Developed'),
                        m('div..pading-box',
                        
                            m('a.work-box',
                            {
                                href:'http://www.idaosejaipur.com/',
                                target: "_blank"   
                            
                        },

                                m('div.worktitle',
                                m('div', 'IDASON Website'),
                                m('span.sec-text', 'Aug-2018 - Now')
                            ),
                               
                                m('div', 'Descprition : this is'),
                                m('div','Technologies use :  Java-Script,Mithril,My-SQL,Express,Node-JS')
                            ),
                            m('a.work-box.work-box-magin',
                            {
                                href:'https://empman.herokuapp.com/login',
                                target: "_blank"   
                            
                        },

                            m('div.worktitle',
                            m('div', 'Employer Management'),
                            m('span.sec-text', 'Aug-2018 - Now')
                        ),
                                m('div', 'Descprition : this is'),
                                m('div','Technologies use :  Java-Script,Mithril,My-SQL,Express,Node-JS')
                            ),
                            m('a.work-box.work-box-magin',


                            m('div.worktitle',
                            m('div', 'Chat-Box'),
                            m('span.sec-text', 'Aug-2018 - Now')
                        ),
                                m('div', 'Descprition : this is'),
                                m('div','Technologies use :  Java-Script,Mithril,My-SQL,Express,Node-JS,Socket')
                            ),
                        )

                    )

                )
            )
        ]
    }
}