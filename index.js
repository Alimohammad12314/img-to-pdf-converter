var newimg,showimg

        function loadfile(event){
            showimg=document.getElementById('showimg')
        
            showimg.src=URL.createObjectURL(event.target.files[0]);
        
            newimg=document.createElement('img')
            newimg.src=URL.createObjectURL(event.target.files[0]);
        
            showimg.onload= function(){
                URL.revokeObjectURL(showimg.src)
            }
        }
        
        function pdfDownload(){
            window.jsPDF=window.jspdf.jsPDF
                 console.log(newimg)
                 var doc =new jsPDF();
                 doc.addImage(newimg,10,10)
                 doc.save('img.pdf')
        
        }