jQuery(function () {
  jQuery('.node-26 img').eq(0).add('.node-27 img').attr('src' , "/kwealth/sites/default/files/foopdf.png");
  jQuery('.node-26 img').eq(1).attr('src' , "/kwealth/sites/default/files/64xls.png");
  jQuery('.node-26 img').eq(2).attr('src' , "/kwealth/sites/default/files/64xls.png");
  jQuery('<img src="/sites/default/files/Contact.png" />')
  .insertBefore('#contact-site-form div:first');

jQuery('.page-admin-people #content #user-admin-account div table tr:last').empty();
jQuery('.page-admin-people #content h1').text('Cooperative Members');
jQuery('#user-admin-account table thead tr th a').attr('href', '#');

});

