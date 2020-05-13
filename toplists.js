//----------------------------------------------------------------------------
//---------------- Starts requesting data from the GitHub API ----------------
//----------------------------------------------------------------------------

document.getElementById('getalldata').addEventListener('click', e => {
  //starts loading animation and data fetching
  startLoading("toplist");
  getAllCommits();
  getAllCreated();
  getAllCompleted();
  getAllComments();
})

// Array containing all students in the course
const studentArray = [
  {username: 'd18mohal', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'b17carbr', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18geoge', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a17chrka', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'd17marle', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a17rutpe', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a16vikva', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18abuah', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18eliek', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18wilis', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18filkr', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18jakme', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a16silph', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'b18gussv', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18marax', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18ismca', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'b18alegu', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18sebka', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'b18jonli', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18eripi', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'b18veran', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'c14jonfr', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a17pioja', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'b18fella', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18matna', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18viksa', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18oscte', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18oscba', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18felen', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18fayha', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18jonkl', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18jenro', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a17towan', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'b18emigu', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18mahkh', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'b18jenli', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18jimol', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18jonsj', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18lukto', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'b18phibe', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'b18mikfr', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a17robhe', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'b18simla', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18jonpe', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18andtu', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18kaswi', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18conch', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18petha', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'o18marka', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'g18marma', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18frior', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
  {username: 'a18antsv', commits: 0, issuescreated: 0, issuescompleted: 0, comments: 0},
];

//----------------------------------------------------------------------------
//============== functions for requesting data from GitHub API ==============
//----------------------------------------------------------------------------

// function for getting commit data for each student in studentArray
function getAllCommits(repeatStudent, page){
  const repeat = repeatStudent || false;
  const pageAllCommits = page+1 || 1;
  if(!repeat){
    studentArray.forEach(student => {
      fetch('https://api.github.com/repos/HGustavs/LenaSYS/commits?author='+student.username+'&since=2020-03-30T00:00:00Z&page='+pageAllCommits+'&per_page=100', headers)
      .then(response => response.json())
      .then(data => {
        data.forEach(commit => {
          studentArray[studentArray.indexOf(student)].commits++;
        })
        if(data.length === 100){
          getAllCommits(studentArray[studentArray.indexOf(student)], pageAllCommits);
        }
      })
    });
  } else{
    fetch('https://api.github.com/repos/HGustavs/LenaSYS/commits?author='+repeatStudent.username+'&since=2020-03-30T00:00:00Z&page='+pageAllCommits+'&per_page=100', headers)
      .then(response => response.json())
      .then(data => {
        data.forEach(commit => {
          studentArray[studentArray.indexOf(repeatStudent)].commits++;
        })
        if(data.length === 100){
          getAllCommits(studentArray[studentArray.indexOf(repeatStudent)], pageAllCommits);
        }
      }) 
  }  
}




// function for getting issuescreated data for each student in studentArray
function getAllCreated(repeatStudent, page){
  const repeat = repeatStudent || false;
  const pageAllCreated = page+1 || 1;
  if(!repeat){
    studentArray.forEach(student => {
      fetch('https://api.github.com/repos/HGustavs/LenaSYS/issues?since=2020-03-30T00:00:00Z&state=all&per_page=100&page='+pageAllCreated+'&creator='+student.username+'', headers)
      //fetch('https://api.github.com/repos/HGustavs/LenaSYS/commits?author='+student.username+'&since=2020-03-30T00:00:00Z&page='+page+'&per_page=100', headers)
      .then(response => response.json())
      .then(data => {
        data.forEach(issue => {
          if(issue['html_url'].includes('issues')){
            studentArray[studentArray.indexOf(student)].issuescreated++;
          }
        })
        if(data.length === 100){
          getAllCreated(studentArray[studentArray.indexOf(student)], pageAllCreated);
        }
      })
    });
  } else{
    fetch('https://api.github.com/repos/HGustavs/LenaSYS/issues?since=2020-03-30T00:00:00Z&state=all&per_page=100&page='+pageAllCreated+'&creator='+repeatStudent.username+'', headers)
    //fetch('https://api.github.com/repos/HGustavs/LenaSYS/commits?author='+repeatStudent.username+'&since=2020-03-30T00:00:00Z&page='+page+'&per_page=100', headers)
      .then(response => response.json())
      .then(data => {
        data.forEach(issue => {
          if(issue['html_url'].includes('issues')){
            studentArray[studentArray.indexOf(student)].issuescreated++;
          }
        })
        if(data.length === 100){
          getAllCreated(studentArray[studentArray.indexOf(repeatStudent)], pageAllCreated);
        }
      }) 
  }  
}

// function for getting issuescompleted data for each student in studentArray
function getAllCompleted(repeatStudent, page){
  const repeat = repeatStudent || false;
  const pageAllCompleted = page+1 || 1;
  if(!repeat){
    studentArray.forEach(student => {
      fetch('https://api.github.com/repos/HGustavs/LenaSYS/issues?since=2020-03-30T00:00:00Z&state=closed&per_page=100&page='+pageAllCompleted+'&assignee='+student.username+'', headers)
     // fetch('https://api.github.com/repos/HGustavs/LenaSYS/issues?since=2020-03-30T00:00:00Z&state=all&per_page=100&page='+page+'&creator='+student.username+'', headers)
      //fetch('https://api.github.com/repos/HGustavs/LenaSYS/commits?author='+student.username+'&since=2020-03-30T00:00:00Z&page='+page+'&per_page=100', headers)
      .then(response => response.json())
      .then(data => {
        data.forEach(issue => {
          if(issue['html_url'].includes('issues')){
            studentArray[studentArray.indexOf(student)].issuescompleted++;
          }
        })
        if(data.length === 100){
          getAllCreated(studentArray[studentArray.indexOf(student)], pageAllCompleted);
        }
      })
    });
  } else{
    fetch('https://api.github.com/repos/HGustavs/LenaSYS/issues?since=2020-03-30T00:00:00Z&state=closed&per_page=100&page='+pageAllCompleted+'&assignee='+student.username+'', headers)
    //fetch('https://api.github.com/repos/HGustavs/LenaSYS/issues?since=2020-03-30T00:00:00Z&state=all&per_page=100&page='+page+'&creator='+repeatStudent.username+'', headers)
    //fetch('https://api.github.com/repos/HGustavs/LenaSYS/commits?author='+repeatStudent.username+'&since=2020-03-30T00:00:00Z&page='+page+'&per_page=100', headers)
      .then(response => response.json())
      .then(data => {
        data.forEach(issue => {
          if(issue['html_url'].includes('issues')){
            studentArray[studentArray.indexOf(student)].issuescompleted++;
          }
        })
        if(data.length === 100){
          getAllCompleted(studentArray[studentArray.indexOf(repeatStudent)], pageAllCompleted);
        }
      }) 
  }  
}



// function for getting comment data. fetches ALL comments since start of project and increments student comment count accordingly
function getAllComments(page){
  const pageAllComments = page+1 || 1;
    fetch('https://api.github.com/repos/HGustavs/LenaSYS/issues/comments?since=2020-03-30T00:00:00Z&page='+pageAllComments+'&per_page=100', headers)
    //fetch('https://api.github.com/repos/HGustavs/LenaSYS/issues?since=2020-03-30T00:00:00Z&state=closed&per_page=100&page='+page+'&assignee='+student.username+'', headers)
    // fetch('https://api.github.com/repos/HGustavs/LenaSYS/issues?since=2020-03-30T00:00:00Z&state=all&per_page=100&page='+page+'&creator='+student.username+'', headers)
    //fetch('https://api.github.com/repos/HGustavs/LenaSYS/commits?author='+student.username+'&since=2020-03-30T00:00:00Z&page='+page+'&per_page=100', headers)
    .then(response => response.json())
    .then(data => {
      data.forEach(issue => {
        let student = studentArray.find(element => element.username === issue['user']['login']);
        if(student){
          student.comments++;
        }
      });
      if(data.length === 100){
        getAllComments(pageAllComments);
      }else{
        //this starts the "chain" of Toplist-functions. probably not the best way to handle this but it seems to work (getAllComments takes the most time to finish out of all the fetch functions)
        makeCommentsToplist();
      }
    }) 
}



//----------------------------------------------------------------------------
//========= functions for creating toplists from data in studentArray ========
//----------------------------------------------------------------------------

// creates/fills the comment toplist with data from studentArray
function makeCommentsToplist(){
  studentArray.sort(function (a, b) {
    return b.comments - a.comments;
  });
  let str = "";
  for(let i = 0; i <= 9; i++){
    const student = studentArray[i];
    str+= `<li>${student.username} - ${student.comments} issue comments</li>`;
  }
  document.getElementById('toplistcomments').innerHTML = str;
  const username = document.getElementById('username').value;
  const myIndex = (studentArray.findIndex(element => element.username === username));
  const myPlacement = myIndex+1;
  const myComments = (studentArray[myIndex].comments);
  document.getElementById('mycomments').innerHTML = `${myPlacement}. ${username} - ${myComments} issue comments`;
  document.getElementById('mycomments').style.display = 'block';

  setTimeout(makeCommitToplist, 1000);
}

// creates/fills the commit toplist with data from studentArray
function makeCommitToplist(){
  studentArray.sort(function (a, b) {
    return b.commits - a.commits;
  });
  let str = "";
  for(let i = 0; i <= 9; i++){
    const student = studentArray[i];
    str+= `<li>${student.username} - ${student.commits} commits</li>`;
  }
  document.getElementById('toplistcommits').innerHTML = str;
  const username = document.getElementById('username').value;
  const myIndex = (studentArray.findIndex(element => element.username === username));
  const myPlacement = myIndex+1;
  const myCommits = (studentArray[myIndex].commits);
  document.getElementById('mycommits').innerHTML = `${myPlacement}. ${username} - ${myCommits} commits`;
  document.getElementById('mycommits').style.display = 'block';

  setTimeout(makeCreatedToplist, 1000);
}

// creates/fills the issues created toplist with data from studentArray
function makeCreatedToplist(){
  studentArray.sort(function (a, b) {
    return b.issuescreated - a.issuescreated;
  });
  let str = "";
  for(let i = 0; i <= 9; i++){
    const student = studentArray[i];
    str+= `<li>${student.username} - ${student.issuescreated} issues created</li>`;
  }
  document.getElementById('toplistcreated').innerHTML = str;
  const username = document.getElementById('username').value;
  const myIndex = (studentArray.findIndex(element => element.username === username));
  const myPlacement = myIndex+1;
  const myCreated = (studentArray[myIndex].issuescreated);
  document.getElementById('mycreated').innerHTML = `${myPlacement}. ${username} - ${myCreated} issues created`;
  document.getElementById('mycreated').style.display = 'block';

  setTimeout(makeCompletedToplist, 1000);
}

// creates/fills the issues completed toplist with data from studentArray
function makeCompletedToplist(){
  studentArray.sort(function (a, b) {
    return b.issuescompleted - a.issuescompleted;
  });
  let str = "";
  for(let i = 0; i <= 9; i++){
    const student = studentArray[i];
    str+= `<li>${student.username} - ${student.issuescompleted} issues completed</li>`;
  }
  document.getElementById('toplistcompleted').innerHTML = str;
  const username = document.getElementById('username').value;
  const myIndex = (studentArray.findIndex(element => element.username === username));
  const myPlacement = myIndex+1;
  const myCompleted = (studentArray[myIndex].issuescompleted);
  document.getElementById('mycompleted').innerHTML = `${myPlacement}. ${username} - ${myCompleted} issues completed`;
  document.getElementById('mycompleted').style.display = 'block';

  //stops the loading animation which in turn will display the toplists on screen (see script.js)
  setTimeout(stopLoading("toplist"), 1000);
}