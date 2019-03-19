const m = require('mithril');
let a = ['Home', 'About', 'Work', 'Contact']
let b
module.exports = {


    view: function () {
        return m('div.tabs.is-right.is-large.tab-effect',
            [
                
                m('ul.bar',a.map(function(item){
                    return m('li',m('a',{onclick: ()=>{
                        b = document.getElementById(item)
                        b.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
                    }},item))
                })
                    
                )
            ]
        )

    }
};