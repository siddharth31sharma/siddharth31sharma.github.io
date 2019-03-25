const m = require('mithril');



module.exports = {
    view: function () {
        return [
            m('div.work', {
                    id: 'Work'
                },
                m('div.workSide',

                    m('div.workfiled',
                        m('div.sec-text.is-size-5', 'Application Developed'),
                        m('div..pading-box',

                            m('a.work-box', {
                                    href: 'http://www.idaosejaipur.com/',
                                    target: "_blank"

                                },

                                m('div.worktitle',
                                    m('div', 'IDASON Website'),
                                    m('span.sec-text', 'Aug-2018 - Now')
                                ),

                                m('div', 'Descprition : This web site provides online course for student. It contains student records and student can also take quiz and get study material.'),
                                m('div', 'Technologies use :  Java-Script,Mithril,My-SQL,Express,Node-JS')
                            ),
                            m('a.work-box.work-box-magin', {
                                    href: 'https://empman.herokuapp.com/login',
                                    target: "_blank"

                                },

                                m('div.worktitle',
                                    m('div', 'Employer Management'),
                                    m('span.sec-text', 'Aug-2018 - Now')
                                ),
                                m('div', 'Descprition : This Application keep the records of employees. We can add new employee keep records of there working hours. We can search employee bye their name finds how many employees works on a particular date. We can also see the total wages to pay and many more'),
                                m('div', 'Technologies use :  Java-Script,Mithril,My-SQL,Express,Node-JS')
                            ),
                            m('a.work-box.work-box-magin',


                                m('div.worktitle',
                                    m('div', 'Chat-Box'),
                                    m('span.sec-text', 'Aug-2018 - Now')
                                ),
                                m('div', 'Descprition : This is chat application whaere randaom people can chat with each other by choosing there interest from list.'),
                                m('div', 'Technologies use :  Java-Script,Mithril,My-SQL,Express,Node-JS,Socket')
                            ),
                        )

                    )

                )
            )
        ]
    }
}