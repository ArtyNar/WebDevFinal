// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
import 'bootstrap'
//TODO

import { info } from './info'
let featured_picture = document.querySelector('.featured')
for(let i of info)
{
    if(i.id == document.getElementById("counter").innerHTML || i.id == (parseInt(document.getElementById("counter").innerHTML)+1))
    {
        let picture_thumb = document.getElementById('i'+i.id)
        picture_thumb.onclick = function()
    {
        selectPicture(i)
    }
    }
}

function selectPicture(i)
{
    featured_picture.innerHTML = 
    `
    <p class="p-3">${i.description}</p>
    <div class="container pb-3 text-center" style="width:100%">
    <img src="${i.pic}" alt"image" class="shadow-lg" style="width: 60%">
    </div>
    `
}
