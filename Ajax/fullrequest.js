function handleSuccess () { 
  console.log( this.responseText ); 
// the HTML of https://unsplash.com/
}

function handleError () { 
  console.log( 'An error occurred \uD83D\uDE1E' );
}

const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open('GET', 'https://unsplash.com');
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();
