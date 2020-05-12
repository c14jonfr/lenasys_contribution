let loading = 0;

const headers = {
  headers: {
     Authorization: 'Token x' // replace "x" with your own Personal Access Token from GitHub
  }};

function getData(username){
  startLoading();
  getCommits(username);
  getComments(username);
  getCreatedIssues(username);
  getCompletedIssues(username);
}

function fillProgress(){
  document.getElementById('progressbar').style.display = "flex";
  const total = commitcount+commentcount+issuescompletedcount+issuescreatedcount;
  const commit = commitcount/total;
  const comment = commentcount/total;
  const completed = issuescompletedcount/total;
  const created = issuescreatedcount/total;
  document.getElementById('commit').style.width = commit*100+"%";
  //document.getElementById('commit').innerHTML = commitcount;
  document.getElementById('created').style.width = created*100+"%";
  //document.getElementById('created').innerHTML = issuescreatedcount;
  document.getElementById('completed').style.width = completed*100+"%";
  //document.getElementById('completed').innerHTML = issuescompletedcount;
  document.getElementById('comment').style.width = comment*100+"%";
  //document.getElementById('comment').innerHTML = commentcount;
}

document.getElementById('getdata').addEventListener('click', (e) => {
  document.getElementById('commits').innerHTML = 0;
  document.getElementById('issuescreated').innerHTML = 0;
  document.getElementById('issuecomments').innerHTML = 0;
  document.getElementById('issuescompleted').innerHTML = 0;
  
  //sets the value of the text field to "guest" always. used for demonstrative purposes
  document.getElementById('username').value = "guest";

  if(document.getElementById('username').value === "guest"){
    commitcount = 73;
    commentcount = 54;
    issuescreatedcount = 31;
    issuescompletedcount = 28;
    document.getElementById('commits').innerHTML = commitcount;
    document.getElementById('issuescreated').innerHTML = issuescreatedcount;
    document.getElementById('issuecomments').innerHTML = commentcount;
    document.getElementById('issuescompleted').innerHTML = issuescompletedcount;
    document.getElementById('progressbar').style.display = "flex";
    document.getElementById('progressbar').style.opacity = "1";
    startLoading();
    loading = 4;
    setTimeout(stopLoading, 5000);
  }else{
    commitcount = 0;
    commitpagenr = 1;
    commentcount = 0;
    commentpagenr = 1;
    issuescreatedcount = 0;
    issuescreatedpagenr = 1;
    issuescompletedcount = 0;
    issuescompletedpagenr = 1;
    getData(document.getElementById('username').value);
  }
  
})

let commitpagenr = 1;
let commitcount = 0;


function getCommits(username){
  fetch('https://api.github.com/repos/HGustavs/LenaSYS/commits?author='+username+'&since=2020-03-30T00:00:00Z&page='+commitpagenr+'&per_page=100', headers)
  .then(response => response.json())
  .then(data => {
    console.log()
    data.forEach(element => {
      commitcount++;
    });
    if(data.length === 100){
      commitpagenr++;
      getCommits(username);
    }else{
      loading++;
      stopLoading();
    }
    document.getElementById('commits').innerHTML = commitcount;
    //fillProgress();
  });
}

let issuescreatedcount = 0;
let issuescreatedpagenr = 1;

function getCreatedIssues(username){
  fetch('https://api.github.com/repos/HGustavs/LenaSYS/issues?since=2020-03-30T00:00:00Z&state=all&per_page=100&page='+issuescreatedpagenr+'&creator='+username+'', headers)
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      if(element['user']['login'] === username){
        if(element['html_url'].includes('issues')){
          issuescreatedcount++;
        }
      }
    });
    if(data.length === 100){
      issuescreatedpagenr++;
      getCreatedIssues(username);
    }else{
      loading++;
      stopLoading();
    }
    document.getElementById('issuescreated').innerHTML = issuescreatedcount;
    //fillProgress();
  });
}

let commentcount = 0;
let commentpagenr = 1;

function getComments(username){
  fetch('https://api.github.com/repos/HGustavs/LenaSYS/issues/comments?since=2020-03-30T00:00:00Z&page='+commentpagenr+'&per_page=100&author='+username+'', headers)
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      if(element['user']['login'] === username){
        commentcount++;
      }
    });
    if(data.length === 100){
      commentpagenr++;
      getComments(username);
    }else{
      loading++;
      stopLoading();
    }
    //fillProgress();
    document.getElementById('issuecomments').innerHTML = commentcount;
    
  });
}

let issuescompletedcount = 0;
let issuescompletedpagenr = 1;

function getCompletedIssues(username){
  fetch('https://api.github.com/repos/HGustavs/LenaSYS/issues?since=2020-03-30T00:00:00Z&state=closed&per_page=100&page='+issuescompletedpagenr+'&assignee='+username+'', headers)
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      for(let i = 0; i < element['assignees'].length; i++){
        if(element['assignees'][i]['login'] === username){
          if(element['html_url'].includes('issues')){
            issuescompletedcount++;
          } 
        }
      }
    });
    if(data.length === 100){
      issuescompletedpagenr++;
      getCreatedIssues(username);
    }else{
      loading++;
      stopLoading();
    }
    //fillProgress();
    document.getElementById('issuescompleted').innerHTML = issuescompletedcount;
  });
}

function startLoading(){
  document.getElementById('loader').style.opacity = 1;
  document.getElementById('progressbar').style.opacity = 0;
}

function stopLoading(){
  if(loading === 4){
    document.getElementById('loader').style.opacity = 0;
    document.getElementById('progressbar').style.opacity = 1;
    setTimeout(fillProgress, 1000);
  }
  

}