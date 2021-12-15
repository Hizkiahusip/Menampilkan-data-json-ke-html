$.ajax({
    url         : " https://api.openbrewerydb.org/breweries",
    type        : "GET",
    dataType    : "json",
    data        : {get_param : 'value'},
    success     : function(data){
        //menghitung jumlah data
        jmlData = data.length;
        
        //variabel untuk menampung tabel yang akan digenerasikan
        buatTabel = "";
        
        //perulangan untuk menayangkan data dalam tabel
        for(a = 0; a < jmlData; a++){
            
            //mencetak baris baru
            buatTabel += "<tr>"
            
                        //membuat penomoran
                        + "<td>" + (a+1) + "</td>"
                        
                          //mencetak id 
                        + "<td>" + data[a]["id"] + "</td>"
                        
                          //mencetak nama 
                        + "<td>" + data[a]["name"] + "</td>"
                         
                         //mencetak type
                        + "<td>" + data[a]["brewery_type"] + "</td>"
                        
                        //mencetak street
                        + "<td>" + data[a]["street"] + "</td>"
                         
                        //mencetak addres_2
                        + "<td>" + data[a]["address_2"] + "</td>"
                        
                        //mencetak addres_2
                        + "<td>" + data[a]["address_3"] + "</td>"
                                                                      //mencetak city
                        + "<td>" + data[a]["city"] + "</td>"
          
                         //mencetak state
                        + "<td>" + data[a]["state"] + "</td>"
          
                  //mencetak county_province
                        + "<td>" + data[a]["county_province"] + "</td>"
          
                      //mencetak postal_code
                        + "<td>" + data[a]["postal_code"] + "</td>"
      
                         //mencetak country
                        + "<td>" + data[a]["country"] + "</td>"
          
                         //mencetak longitude
                        + "<td>" + data[a]["longitude"] + "</td>"
          
                         //mencetak latitude
                        + "<td>" + data[a]["latitude"] + "</td>"
          
                         //mencetak phone
                        + "<td>" + data[a]["phone"] + "</td>"

                       //mencetak website_url
                       + "<td>" + data[a]["website_url"] + "</td>"
          
                       //mencetak updated_at
                       + "<td>" + data[a]["updated_at"] + "</td>"
         
                       //mencetak created_at
                       + "<td>" + data[a]["created_at"] + "</td>"                      

          
          
            //tutup baris baru
                + "<tr/>";
        }
        //menayangkan jumlah data
        document.getElementsByTagName('textarea')[0].value = jmlData;
        //mencetak tabel
        document.getElementsByTagName("table")[0].innerHTML += buatTabel;
    }
});