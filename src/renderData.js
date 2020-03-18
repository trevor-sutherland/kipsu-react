import $ from 'jquery';

var guestJSON = $.ajax({
    'url': "/Guests.json",
    'dataType': "json",
    'success': function(data) {
      var guestData = '';
      $.each(data, function(key, value){
            guestData += '<option>' +value.reservation.roomNumber+'</option>';
        });
        $("#guestSelect").append(guestData);  
    }
  });

var companiesJSON = $.ajax({
    'url': "/Companies.json",
    'dataType': "json",
    'success': function(data) {
    var companyData = '';
        $.each(data, function(key, value){
              companyData += '<option>' +value.company+'</option>';
        });
        $("#companySelect").append(companyData);
}
});

export { guestJSON, companiesJSON };