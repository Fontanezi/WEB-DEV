const  pass = "Macaco123"

let access = prompt("Enter your password:")

while( access !== pass){
    alert("Access denied")
    access = prompt("Enter your password:")
}
alert("Access granted!")

