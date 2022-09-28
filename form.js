

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

      $("#amountOfElevatorsNeeded").val(commercialValue);
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

    $('input[name="elevator-type"]').click(function () {
      console.log("test");
              
        if ($(this).attr("value") == "standard") {
            $("#priceUnitElevators").val(7565);
            $("#priceAllElevators").val($("#amountOfElevatorsNeeded").val() * $("#priceUnitElevators").val());
            $("#installationFees").val($("#priceAllElevators").val() * 0.10);
            
            var final =
              parseInt($("#priceAllElevators").val()) +
              parseInt($("#installationFees").val());
            $("#finalPrice").val(final);
        }
        if ($(this).attr("value") == "premium") {
            $("#priceUnitElevators").val(12345);
            $("#priceAllElevators").val($("#amountOfElevatorsNeeded").val() * $("#priceUnitElevators").val());
            $("#installationFees").val($("#priceAllElevators").val() * 0.13);

            var final =
              parseInt($("#priceAllElevators").val()) +
              parseInt($("#installationFees").val());
            $("#finalPrice").val(final);
        }
        if ($(this).attr("value") == "excelium") {
            $("#priceUnitElevators").val(15400);
            $("#priceAllElevators").val($("#amountOfElevatorsNeeded").val() * $("#priceUnitElevators").val());
            $("#installationFees").val($("#priceAllElevators").val() * 0.16);

            var final =
              parseInt($("#priceAllElevators").val()) +
              parseInt($("#installationFees").val());
            $("#finalPrice").val(final);
        }
    });

    //RESIDENTIAL
    $("#residentialNbApartments, #residentialNbFloors").each(function () {
      $(this).keyup(function () {
        var residentialNbFloors = $("#residentialNbFloors").val();
        if (residentialNbFloors > 0) {
          var average = $("#residentialNbApartments").val() / residentialNbFloors;
          console.log(average);
          $("#amountOfElevatorsNeeded").val(Math.ceil(average));
        }
      });
    });
    //RESIDENTIAL

    //CORPORATE/HYBRID
    $("#corporateNbOccupants, #corporateNbFloors, #corporateNbBasements").each(function () {
      $(this).keyup(function () {
        var nbFloors = $("#corporateNbFloors").val()
        var nbBasements = $("#corporateNbBasements").val()
        var nbOccupants = $("#corporateNbOccupants").val()

        //Elevators
        var occupantsFloors = (nbOccupants * nbFloors);
        var occupantsBasements = (nbOccupants * nbBasements);
        var totalOccupants = (+occupantsFloors) + (+occupantsBasements);
        var elevatorsNeeded = (totalOccupants / 1000);
        
        //Total Columns
        var columnsFloors = (nbFloors / 20);
        var columnsBasements = (nbBasements / 20);
        var totalColumns = (+columnsFloors) + (+columnsBasements);

        //Elevators per Column
        var elevatorsPerColumn = (elevatorsNeeded / totalColumns);

        //Total Elevators!!!
        var totalElevators = (elevatorsPerColumn * totalColumns)
        $("#amountOfElevatorsNeeded").val(totalElevators);
      });
    });
    
  }); 