var a = document.getElementById("imap"); //get image.svg

a.addEventListener("load",function(){
    // get the inner DOM of image.svg
    var svgDoc = a.contentDocument ? a.contentDocument : a.contentWindow.document;
    // get the inner element by id
   function Area(obj, area){
       obj.onmouseover = function () {
        this.style.fill = "#FFFF99";
        area.style.background = "#FFFF99"
    }
        obj.onmouseout = function () {
            this.style.fill = "#fdfcea";
            area.style.background = ""
          }
        area.onmouseover = function () {
            this.style.background = "#FFFF99";
            obj.style.fill = "#FFFF99"
        }
        area.onmouseout = function () {
                this.style.background = "";
                obj.style.fill = "#fdfcea"
              }
   }
   
    var delta = svgDoc.getElementById("path7227");//Vinnecka
    var area = document.getElementById('path7227');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7241");//Volynska
    var area = document.getElementById('path7241');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7083");//Dnipropetr
    var area = document.getElementById('path7083');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7067");//Donecka
    var area = document.getElementById('path7067');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7229");//Zhytomyrska
    var area = document.getElementById('path7229');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7247");//Zakarpatska
    var area = document.getElementById('path7247');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7075");//Zaporyzka
    var area = document.getElementById('path7075');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7239");//Ivano-Frankivsk
    var area = document.getElementById('path7239');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7183");//Kyivska
    var area = document.getElementById('path7183');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7147");//Kirovohrad
    var area = document.getElementById('path7147');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7065");//Lyhanska
    var area = document.getElementById('path7065');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7243");//Lvivska
    var area = document.getElementById('path7243');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7135");//Mykolaivska
    var area = document.getElementById('path7135');
    var obl = new Area(delta, area);

    var odesa = svgDoc.getElementById("path7223");//Odeska
    var odesa1 = svgDoc.getElementById("path7191");

    var odsArea = document.getElementById('path7191');
    
        odesa.onmouseover = function () {
            this.style.fill = "#FFFF99";
            odesa1.style.fill = "#FFFF99";
            odsArea.style.background = "#FFFF99"
        }
        
        odesa.onmouseout = function () {
                this.style.fill = "#fdfcea";
                odesa1.style.fill = "#fdfcea";
                odsArea.style.background = ""
            }
    
          odesa1.onmouseover = function () {
            this.style.fill = "#FFFF99";
            odesa.style.fill = "#FFFF99";
            odsArea.style.background = "#FFFF99"
        }
        
            odesa1.onmouseout = function () {
                    this.style.fill = "#fdfcea";
                    odesa.style.fill = "#fdfcea";
                    odsArea.style.background = ""
                }
               
        odsArea.onmouseover = function () {
            odsArea.style.background = "#FFFF99";
            odesa.style.fill = "#FFFF99"
            odesa1.style.fill = "#FFFF99"

        }
        odsArea.onmouseout = function () {
                this.style.background = "";
                odesa.style.fill = "#fdfcea"
                odesa1.style.fill = "#fdfcea"
              }
   

    var delta = svgDoc.getElementById("path7103");//Poltavska
    var area = document.getElementById('path7103');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7233");//Rivnenska
    var area = document.getElementById('path7233');
    var obl = new Area(delta, area);
    

    var delta = svgDoc.getElementById("path7079");//Sumska
    var area = document.getElementById('path7079');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7235");//Ternopil
    var area = document.getElementById('path7235');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7071");//Harkivska
    var area = document.getElementById('path7071');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7111");//Hersonska
    var area = document.getElementById('path7111');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7231");//Hmelnytska
    var area = document.getElementById('path7231');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7149");//Cherkaska
    var area = document.getElementById('path7149');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7237");//Chernivetska
    var area = document.getElementById('path7237');
    var obl = new Area(delta, area);

    var delta = svgDoc.getElementById("path7129");//Chernihivska
    var area = document.getElementById('path7129');
    var obl = new Area(delta, area);

//    function Click(tableins,tableId, alpha ){
//     tableId.addEventListener('click', function() {
//         tableins.classList.toggle('active');
//         alpha.classList.toggle('active');
//         tableins.classList.toggle('non');


//       }, false);
//       alpha.addEventListener('click', function() {
//         tableins.classList.toggle('active');
//       }, false);
//    }

//     var  tableins= document.getElementById('olol');
//     var tableId = document.getElementById('path7227')
//     var alpha = svgDoc.getElementById("path7227");
//      var cli = new Click(tableins,tableId,alpha);
    
//      var  tableins= document.getElementById('olol1');
//       var cli = new Click(tableins,tableId,alpha);
 function Click(tableins,tableId, alpha ){
    tableId.addEventListener('click', function() {
        tableins.classList.toggle('active');
        headIns.classList.toggle('active');
        alpha.classList.toggle('active');
        tableins.classList.toggle('non');


      }, false);
      alpha.addEventListener('click', function() {
        tableins.classList.toggle('non');
        alpha.classList.toggle('active');
        tableins.classList.toggle('active');
      }, false);
      tableins.addEventListener('click', function() {
        alert("Тут буде перехід на сайт дільниці");
      }, false);
   }

    var  tableins= document.getElementById('Vovo11');
    var headIns = document.getElementById('headIns');
    var tableId = document.getElementById('path7227')
    var alpha = svgDoc.getElementById("path7227");
     var cli = new Click(tableins,tableId,alpha, headIns);
    
     var  tableins= document.getElementById('headIns');
      var cli = new Click(tableins,tableId,alpha, headIns);

      var  tableins= document.getElementById('Vovo12');
      var cli = new Click(tableins,tableId,alpha, headIns);
});