*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
nav{
    width: 100%;
    /* padding: 0 20px; */
    height: 50px;
    background-color: hsl(0, 0%, 10%);
    display: flex;
    justify-content: center;
    gap: 230px;
}

nav .wrapper1{
   display: flex;
   justify-content: center; 
   align-items: center;
}

nav .wrapper3{
   display: flex;
   justify-content: center; 
   align-items: center;
}
.search-container {
    display: flex;
    align-items: center;
    width: 400px; 
    position: relative;
}
.search-icon {
    position: absolute;
    left: 10px;
}
.search-input {
    width: calc(100% - 30px); 
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #616161;
    outline: none;
    border-radius: 5px;
    padding-left: 40px; 
    font-size: 15px;
    background-color:#303030;
    color: #fff;
}
.search-input:hover {
   border: 1px solid #E1E1E1;
}
.search-input:focus {
   border: 2px solid #FFFFFF;
}

.wrapper2{
   display: flex;
   justify-content: space-between;
   gap: 15px;
   align-items: center;
}
.wrapper2 .notification-wrapper{
    background-color: #303030; 
    border-radius: 12px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper2 .user-wrapper{
    border-radius: 12px;
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    background-color: #303030; 
    gap: 10px;
}
.wrapper2 .user-wrapper span{
    color: #E3E3E3; 
}

.wrapper2 .user-wrapper .user-profile span{
    color: #209761;
    background-color: #36FBA1;
    padding: 7px 10px;
    border-radius: 6px;
}

.container{
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
.container .wrapper{
    display: flex;
    gap: 20px;
    flex-direction: column;
}
.container .wrapper .box1{
    background-color: green;
    padding: 30px 220px;
    border-radius: 12px;
}
.container .wrapper .box2{
    background-color: red;
    border-radius: 12px;
    padding: 50px 220px;

}