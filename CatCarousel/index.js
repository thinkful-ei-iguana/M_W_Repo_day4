'use strict'

// $('.thumbnail').on('click', e => {
//     $('.hero').attr("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat2.jpg"));
//     console.log(e.target);
//     console.log('i am here');
// };

function catClicks() {
  $('.thumbnail').on('click', e => {
    let thumbnailSrc = $(e.currentTarget).find('img').attr('src');
    let thumbnailAlt = $(e.currentTarget).find('img').attr('alt');
    console.log(thumbnailAlt);
    $('.hero img').attr('src', thumbnailSrc).attr('alt', thumbnailAlt);
  });
};

$(catClicks);