

$(document).ready(function () {
    $(".building").hide();
    
    $("#residentialNbAppartments").on('keyup', function(event) {
      var residentialValue = $("#residentialNbAppartments").val();
      console.log("residentialValue is:", residentialValue);
    });
    $("#residentialNbFloors").on('keyup', function(event) {
      var residentialValue = $("#residentialNbFloors").val();
      console.log("residentialValue is:", residentialValue);
    });
    $("#residentialNbBasements").on('keyup', function(event) {
      var residentialValue = $("#residentialNbBasements").val();
      console.log("residentialValue is:", residentialValue);
    });
    
    
      $("#commercialNbBusinesses").on('keyup', function(event) {
      var commercialValue = $("#commercialNbBusinesses").val();
      console.log("commercialValue is:", commercialValue);
    });
    $("#commercialNbFloors").on('keyup', function(event) {
      var commercialValue = $("#commercialNbFloors").val();
      console.log("commercialValue is:", commercialValue);
    });
    $("#commercialNbBasements").on('keyup', function(event) {
      var commercialValue = $("#commercialNbBasements").val();
      console.log("commercialValue is:", commercialValue);
    });
    $("#commercialNbParking").on('keyup', function(event) {
      var commercialValue = $("#commercialNbParking").val();
      console.log("commercialValue is:", commercialValue);
    });
    $("#commercialNbElevator").on('keyup', function(event) {
      var commercialValue = $("#commercialNbElevator").val();
      console.log("commercialValue is:", commercialValue);
    });
    
    
    $("#corporateNbCompanies").on('keyup', function(event) {
      var corporateValue = $("#corporateNbCompanies").val();
      console.log("corporateValue is:", corporateValue);
    });
    $("#corporateNbFloors").on('keyup', function(event) {
      var corporateValue = $("#corporateNbFloors").val();
      console.log("corporateValue is:", corporateValue);
    });
    $("#corporateNbBasements").on('keyup', function(event) {
      var corporateValue = $("#corporateNbBasements").val();
      console.log("corporateValue is:", corporateValue);
    });
    $("#corporateNbParking").on('keyup', function(event) {
      var corporateValue = $("#corporateNbParking").val();
      console.log("corporateValue is:", corporateValue);
    });
    $("#corporateNbOccupants").on('keyup', function(event) {
      var corporateValue = $("#corporateNbOccupants").val();
      console.log("corporateValue is:", corporateValue);
    });
    
    
    $("#hybridNbBusinesses").on('keyup', function(event) {
      var hybridValue = $("#hybridNbBusinesses").val();
      console.log("hybridValue is:", hybridValue);
    });
    $("#hybridNbFloors").on('keyup', function(event) {
      var hybridValue = $("#hybridNbFloors").val();
      console.log("hybridValue is:", hybridValue);
    });
    $("#hybridNbBasements").on('keyup', function(event) {
      var hybridValue = $("#hybridNbBasements").val();
      console.log("hybridValue is:", hybridValue);
    });
    $("#hybridNbParking").on('keyup', function(event) {
      var hybridValue = $("#hybridNbParking").val();
      console.log("hybridValue is:", hybridValue);
    });
    $("#hybridNbOccupants").on('keyup', function(event) {
      var hybridValue = $("#hybridNbOccupants").val();
      console.log("hybridValue is:", hybridValue);
    });
    $("#hybridNbHours").on('keyup', function(event) {
      var hybridValue = $("#hybridNbHours").val();
      console.log("hybridValue is:", hybridValue);
    });

    $('input[type="radio"]').click(function () {
        console.log("test");
    
        if ($(this).attr("value") == "residential") {
            console.log("residential");
            $(".building").hide();
            $(".residential").show();
        }
        if ($(this).attr("value") == "commercial") {
          console.log("commercial");
            $(".building").hide();
            $(".commercial").show();
        }
        if ($(this).attr("value") == "corporate") {
          console.log("corporate");
            $(".building").hide();
            $(".corporate").show();
        }
        if ($(this).attr("value") == "hybrid") {
          console.log("hybrid");
            $(".building").hide();
            $(".hybrid").show();
        }
    });
}); 