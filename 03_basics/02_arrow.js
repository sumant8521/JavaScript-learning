const user= {

    username: "Sumant",
    Price: 999,
    displayMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }

}

// console.log(user.displayMessage());
// user.username = 'Sam'
// console.log(user.displayMessage());

// console.log(this);



//**********************IIFE ***************/

( function chai(){
    console.log(`welcome`);
    
} )();

(()=>{
    console.log(`welcome`);
    
})();