
//----------------------------------------------------------------------------
//----- Please replace X with your own Personal Access Token from GitHub -----
//----------- If you do not do this the application will not work ------------
//----------------------------------------------------------------------------
const headers = {
  headers: {
     Authorization: 'Token c272532b4f55fe668a5777c1ba6cbd36c0803c1e'
  }};





function startLoading(page){
  if(page === "toplist"){
    document.getElementById('loader').style.transitionDuration = "250ms";
    document.getElementById('loader').style.opacity = 1;
  }else{
    document.getElementById('loader').style.transitionDuration = "250ms";
    document.getElementById('loader').style.opacity = 1;
    document.getElementById('progressbar').style.opacity = 0;
  }
  
}

function stopLoading(page){
  if(page === "toplist"){
    document.getElementById('loader').style.opacity = 0;
    document.getElementById('topcommits').style.opacity = 1;
    document.getElementById('topcreated').style.opacity = 1;
    document.getElementById('topcompleted').style.opacity = 1;
    document.getElementById('topcomments').style.opacity = 1;
  }
  else{
    if(loading === 4){
      document.getElementById('loader').style.opacity = 0;
      document.getElementById('progressbar').style.opacity = 1;
      setTimeout(fillProgress, 1000);
    }
  }

}