hide(0);
vetor per = getElementsByClass
vetor res = getElementsByClass
vetor icon = getElementsByClass

function hide(p){
        let x = res[p];

        if(x.style.display === 'block'){
          x.style.display = 'none';
          per[p].style = 'font-weight: normal'
        }else{
          x.style.display = 'block';
          per[p].style = 'font-weight: bold'
        }
      	
}
/*****************************************************************************/

      if(q == 'q1'){
        let x = document.getElementById('q-1');

        if(x.style.display === 'block'){
          x.style.display = 'none';
          document.getElementById('q1').style = 'font-weight: normal'
        }else{
          x.style.display = 'block';
          document.getElementById('q1').style = 'font-weight: bold'
        }
      }

      if(q == 'q2'){
        let x = document.getElementById('q-2');
        if(x.style.display === 'block'){
          x.style.display = 'none';
          document.getElementById('q2').style = 'font-weight: normal'
        }else{
          x.style.display = 'block';
          document.getElementById('q2').style = 'font-weight: bold'
        }
      }

      if(q == 'q3'){
        let x = document.getElementById('q-3');
        if(x.style.display === 'block'){
          x.style.display = 'none';
          document.getElementById('q3').style = 'font-weight: normal'
        }else{
          x.style.display = 'block';
          document.getElementById('q3').style = 'font-weight: bold'
        }
      }

      if(q == 'q4'){
        let x = document.getElementById('q-4');
        if(x.style.display === 'block'){
          x.style.display = 'none';
          document.getElementById('q4').style = 'font-weight: normal'
        }else{
          x.style.display = 'block';
          document.getElementById('q4').style = 'font-weight: bold'
        }
      }

      if(q == 'q5'){
        let x = document.getElementById('q-5');
        if(x.style.display === 'block'){
          x.style.display = 'none';
          document.getElementById('q5').style = 'font-weight: normal'
        }else{
          x.style.display = 'block';
          document.getElementById('q5').style = 'font-weight: bold'
        }
      }
