let regex = /[@gmail.com]$/g;

function emailChecker(){
  if(!regex.test(email)){
    console.log('Please enter a valid email address');
  };
}