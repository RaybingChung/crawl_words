let statched_word_list = []
let next_page_button = $(".index_pageContainer__2l7E1").last().children().last();

let stop_id = setInterval(function() {
    let next_page_button = $(".index_pageContainer__2l7E1").last().children().last();
    let word_list = $(".index_wordName__1lkbV")
    let chinese_list = $(".index_bottom__XLoPQ")
    let word_len = word_list.length
    for(let i=0; i<word_len;i++){
        statched_word_list.push({"word":$(word_list[i]).text(), "chinese":$(chinese_list[i]).text()})
    }
    
    
    if(next_page_button.attr('class')==''){ 
        next_page_button.click()  
    }else{
        clearInterval(stop_id)
    }
}, 1000)



var a = window.document.createElement('a');
a.href = window.URL.createObjectURL(new Blob(['\ufeff', JSON.stringify(statched_word_list)], {type: 'text/plain'}));
a.download = 'word_list.csv';

// Append anchor to body.
document.body.appendChild(a);
a.click();

// Remove anchor from body
document.body.removeChild(a)


