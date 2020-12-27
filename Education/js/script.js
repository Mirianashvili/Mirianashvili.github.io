const contentDOM = document.getElementById('content');
const ulDOM = document.getElementById('ul');
let SELECTED_TAG = 'ALL';

const get_tuts = (tuts, tag = 'All') => {
    if (tag === 'ALL') {
        return tuts;
    }

    return tuts.filter(x => x.tag === tag);
}


const get_tags = (tuts) => {
    let tags = new Set();
    let list = ['ALL']
    tuts.forEach((item) => {
        tags.add(item.tag);
    })

    tags.forEach(v => list.push(v));

    return list;
}

const onTagClick = (tag) => {
    SELECTED_TAG
        = tag;
    view_tags(ulDOM, tuts_list, SELECTED_TAG
    );
    view_links(contentDOM, tuts_list, SELECTED_TAG
    );
}

const view_tags = (dom, tuts, select = 'ALL') => {
    dom.innerHTML = '';
    get_tags(tuts).forEach((item) => {
        if (select !== item) {
            dom.innerHTML += `
                <li><a onClick="onTagClick('`+ item + `')">` + item + `</a></li>
            `;
        } else {
            dom.innerHTML += `
                <li class="is-active"><a onClick="onTagClick('`+ item + `')">` + item + `</a></li>
            `;
        }
    })
}



const view_links = (dom, tuts, select = 'ALL') => {
    dom.innerHTML = ''
    get_tuts(tuts, select).forEach((item) => {
        console.log(item)
        dom.innerHTML += `
             <li><a href="`+ item.link + `" target="_blank">` + item.name + `</a></li>
        `
    })
}


view_tags(ulDOM, tuts_list, SELECTED_TAG);
view_links(contentDOM, tuts_list, SELECTED_TAG);
