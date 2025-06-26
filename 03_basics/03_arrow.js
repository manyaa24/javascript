const user={
    username:"manya",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`); //this refers to a current context
    }

}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()