var d1 = document.getElementById("Abord");//Card 1 for Dealer
var d2 = document.getElementById("Bbord");//Card 2 for Dealer
var d3 = document.getElementById("Cbord");//Card 3 for Dealer
var d4 = document.getElementById("Dbord");//Card 4 for Dealer
var d5 = document.getElementById("Ebord");//Card 5 for Dealer

var p1 = document.getElementById("A1bord");//Card 1 for Player
var p2 = document.getElementById("B1bord");//Card 2 for Player
var p3 = document.getElementById("C1bord");//Card 3 for Player
var p4 = document.getElementById("D1bord");//Card 4 for Player
var p5 = document.getElementById("E1bord");//Card 5 for Player


var audio =  new Audio('https://preview-downloads.customer.envatousercontent.com/files/116708201/preview.mp3?response-content-disposition=attachment;filename=9918208_tribal-win-game-sound-2_by_gamechestaudio_preview.mp3&Expires=1910331141&Signature=VHFiAKHjeaR4vhSRchruSdC-vhK4T0GB0aoEbgeK~buFz0dY~Xj2HJtT-6RgqdV5FkqPuVZEbCsH~nKWO5zuAQuIdaIkLte2gqw~qabv8Y8NVHy47BuLP~9Uof8F0sAZ2eKXAFkQ9Avbiv1CvkCrkVZoxKLa7~vhT5vNvvrtlPoN2peKQeLymCacSMV82aZ4SYrmBN4Hi~61nOcCt8f--bYSIsQ1YBD3w96ylx-998DRetF2XpqGLERoxX72BjFG-IsMV-DK-Tahs~JjT9TAPuAtEtoHc2Eh6SpNOVr0bUjatYkENhOjT1EKqypjKD9~fXH6S~8EGijbbx-y9dLHu4ZnEWk9MgTwSh313O9ktZ~Wtd~9bEuuTvow2WArfjfnz7adx3v-k3surSTSC~qhdkONORtg4z7BZt3ORCgsvu0Zhap3ZPwro3mkE3AX4vNOzX~sjuMOBETrrOkRTb19q9WCVjS2Yp8c4sRg5joimptPCacsIpyyeSgqSZ7Afgy0KhAepAbflxDyphwgKfVoebPWfj40pDt-grYCqW-UEWndu~hFytbye14ChIli0kprMLnfCO6JUh7jyBNJwh0Gf0bzYol9u6tdnV3um1AU5rFjVgUNw~EPoldRb3iJWK1gnr69ydE5fh-Vny2akmCU~htvwhSGfCL3F-wWyVtWS38_&Key-Pair-Id=APKAJRP2AVKNFZOM4BLQ');
//Audio Represents Audio Played When Player Wins
var audio1 =  new Audio('https://preview-downloads.customer.envatousercontent.com/files/268015654/preview.mp3?response-content-disposition=attachment;filename=24195413_you-lose-game-over-cartoon-sound_by_phillipmariani_preview.mp3&Expires=1909404070&Signature=isrETSf97dP4tM6dMLq45n4BS-kDj51hyRJ4b3nkaGh~XMEAjNvcZSW0eNLPB1P-OLkEyl-QDIV1QxnziHbdNeNrLEWoTq0JeyRU9UeFMGqQxrM~ScBCp~phdUprJtMh3A~cdPKgOZ4bARRhgi6SAm2B7VMpojzcmJTKTxYmAzMHC~GVUbq7Uw-PCyCJHJWvFmUDf~R5bd7w1q52ulp5ytw7Lwr5oi~fwPS2Agg3k6rZVHLwRtzAjUW1fB~yvUMpKs2Xeu9ox2h0zP7slAYlz5f0ktaPtU0l~8E5Yewy6VWSYh9fY9eP14tKpKRSV4OvgrCfNnpsSR4rsjETUrmv9HinL4Ko4xqFtcpEvr-lP6FeZYN~YGrhG9f0leKriO372LzipECBjo-LcdXXRldK9DYRu5r6hgI4aW6bth~K~9VCWXNJuOPEOtSRxOCrTU5ue4sYXi9hBGQAbJR0xm95MWhNa6WwdyAroRU0wxviz3P1kRp2S2linjycYATYtlg6i1inHMjlat14RarexSf0~qTSC97HsncVNMpA~xwuEMmRa1ftXzDBVZVuFnWZwZ9VLkCzFdSHFKPPLx5itzPCRvXcCSZKc7PJIKba2LDFhv~xt61wj0PKdLsEgEzCqvmHfFeGdVRdOmp7N-dq-hw2CnYGymXl3XFMFZdxyjLEzGo_&Key-Pair-Id=APKAJRP2AVKNFZOM4BLQ');
//Audio1 Represents Audio Played When Player Looses

var win = document.getElementById("win");//Displays The Results
var bet_won = document.getElementById("bet_won");//Displays Amount Player Wins Or Looses

var hint = document.getElementById("warn");//Displays Note

document.getElementById("overlay").style.display = "block";//Displays Overlay

function off()//Function Turns Off The Overlay (Funcvtion Is Called With Onclick attribute of HTML)
{
    document.getElementById("overlay").style.display = "none";//Sets Display To None For Overlay Which Opens The Game Window
}

if(localStorage.length==0)//Sets Value Of Balance First Time On Every Machine when length is 0
{
    localStorage.setItem("money",100000);//Money Is Set To 300000
}



function off1()// Off Function For Overlay1 When user Clicks On Play Again Button
{  
    document.getElementById("overlay1").style.display = "none";
    location.reload();//Game Reloads
    a = localStorage.getItem("money1");//value of money1 value is retrived and set to a
    localStorage.setItem("money",a);//Value of money is Replaced With money1
    Balance.innerHTML = a;//Balance Is Displayed
}


var score_p = [];//Stores Player Scores
var score_d = [];//Stores Dealer Scores

var cnt = 0;//Variable To Check Cases For Every Time Player Clicks Hit Button

var cnt1 = 0;//Variable To Check Cases For Every Time Player Clicks Stand Button

var sum_player = 0;//Checks For Each Time Score Of Player To Call Winner Function

var sum_dealer = 0;//Checks For Each Time Score Of Dealer To Call Winner Function


var names = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];//Card Names
var suits = ["♥","♦","♠","♣"];//Card Suits
var card = [];//Stores Cards in an Array
var shuffled_cards = [];//To Store Shuffled Cards

function cards(val,name1,suit)//Constructor To Initialize Cards Values Works Randomly And Returns Object
{
    this.val = val;//Sets Value To val Parameter
    this.name1 = name1;//Sets Name Of Card To name1 Parameter
    this.suit = suit;//Sets Suit Of Card TO suit Parameter
    this.weight = val;//Weight Of Card Is Set To Value
}


for (let i = 0; i < suits.length; i++) //For Loop That Works For Each Suit i.e Generates All Cards With Each Suit For Each Cards
{
    for (let j = 0; j < names.length; j++)//To Iterate Over Each Name i.e(A,2,3,4,....,Q,K)
    {
        card.push(new cards(j+1,names[j],suits[i]))//Pushes Each Card into New Array And Every Time Constructor Is Called
    }   
}
//The Above Loop Creats Cards Deck in Array Of Objects

for (let j = 0; j < card.length; j++)//Each Same Card Is Pushed Into Shuffled_cards Array 
{
    shuffled_cards.push(card[j]);    
}

function shuffle(arr)//Function Shuffle Shuffles The Cards inside Shuffled_cards Array
{
    arr.sort(function()
    {
        return  Math.random() - 0.5; 
    });
}

shuffle(shuffled_cards);//Function Shuffle Is Called Here

function insert(d_p,c)//Insert Function Inserts Name And Suits To Cards That Are Displayed Onto Game Page
{
    //Here d_p represents Array Of Children of HTML Tag Every Time Insert Function Is Called
    //Here c represents Card Object That Is Passed Every Time Insert Function Is Called
    var x = c;
    for(var i=0; i < d_p.length;i++)//Iterates Over Each Array Element (3 Elements In Each Array)
    {
        if(i!=1)//(0th and 2nd Element Represent Name Of Card)
        {
            d_p[i].innerHTML = x.name1;//If i not equal to 1 insert Name Value
        }
        else
        {
            d_p[i].innerHTML = x.suit;//Else Inserts Suit Value
        }
    }    
}

function color(arr,x)//Function Color Is Used To Color Suits And Names
{
    for(var i=0;i<arr.length;i++)//Iterates Over Each Element In Array here Array Is Children Elements Of Each HTML Tag
    {
        if(x.suit == "♥" || x.suit =="♦")//If Suit Is Heart Or Diamond Make Each Name And Suit Black
        {
            arr[i].style.color = "red";
        }
        else//Make Name And Suit Black
        {
            arr[i].style.color = "black";    
        }
    }
}

var d = true;//Dealer Value Is Set To True
var p = false;//Player Value Is Set To False

function weight(x,boo)//Weight Function Is Used To Get Scores And Push Scores Inside Array
{
    if(x.name1=="J" || x.name1 =="Q" || x.name1 == "K")//If Name is J,Q,or K The Weight And Scores Is Set To 10
    {
        x.weight = 10;
        if(boo)//Here boo For Player is Always False So IF False Is In The Parameter Score is pushed in Dealer Array
        score_d.push(x.weight);
        else//Else It Is Inserted Into Player Score Array
        score_p.push(x.weight);
    }
    else if(x.name1 == "A")//If Name is A The Weight And Scores Is Set To 11
    {
        x.weight = 11;
        if(boo)//Same As Above
        score_d.push(x.weight);
        else
        score_p.push(x.weight);
    }
    else 
    {
        x.weight = x.val;//If Name Is Not A,J,Q,K Then Value is set Inside Weight
        if(boo)//Same As Above
        score_d.push(x.weight);
        else
        score_p.push(x.weight);
    }
}

var start = document.getElementById("Deal");//Main Button That Starts The Game
start.addEventListener("click",game_start);//When Clicked Game Start Function Is Called
start.disabled = "true";//On Game Load The Deal Button Is Disabled

var b1 = document.getElementById("c1");//Accessing Chips Button
var b2 = document.getElementById("c2");//Accessing Chips Button
var b3 = document.getElementById("c3");//Accessing Chips Button
var b4 = document.getElementById("c4");//Accessing Chips Button
var b5 = document.getElementById("c5");//Accessing Chips Button
var b6 = document.getElementById("c6");//Accessing Chips Button

     /* start game */

function game_start()//Starts The Game
{
    b1.disabled = true;//Disabling Chip 50
    b2.disabled = true;//Disabling Chip 100
    b3.disabled = true;//Disabling Chip 200
    b4.disabled = true;//Disabling Chip 500
    b5.disabled = true;//Disabling Chip 1000
    b6.disabled = true;//Disabling Chip 2000

    
    hint.hidden=true;
    stand_btn.disabled = false;//Here Stand Button Is Disabled
    
    hit_btn.disabled = false;//Here Hit Button Is Enabled
    const deal1 = d1.children;//Children Elements Are inserted into Deal1 
    var x = shuffled_cards.pop();//Card Is Popped
    insert(deal1,x);//Insert Function is called And array and card is passed
    weight(x,d);//In Weight Function Card is Passed and Boolean to check if it is Player or Dealer
    color(deal1,x);//color is called and array is passed with card
    cnt1++;//cnt1 is incremented for cases
    score();//Score Function is called to calculate scores


    const play1 = p1.children;//Children Elements Are inserted into play1
    var x1 = shuffled_cards.pop();//Card Is Popped
    insert(play1,x1);//Insert Function is called And array and card is passed
    weight(x1,p);//In Weight Function Card is Passed and Boolean to check if it is Player or Dealer
    cnt++;//cnt1 is incremented for cases of Player
    color(play1,x1);//color is called and array is passed with card



    const play2 = p2.children;//Same As Above
    var x2 = shuffled_cards.pop();//Same As Above
    insert(play2,x2);//Same As Above
    weight(x2,p);//Same As Above
    cnt++;//Same As Above
    color(play2,x2);//Same As Above



    start.hidden = true;//After Deal Button Is Clicked The  Deal Button Is Hidden
      sum_player = x1.weight + x2.weight;//Player Score Is Stored in this variable
    if(sum_player==21)//Winner Function is called if sum reaches 21
    winner();
    if(sum_player>21)//Winner Function is called if sum exceeds 21
    winner();
}


var hit_btn = document.getElementById("Hit");//Hit Button Is Accessed Using DOM
hit_btn.disabled = "true";//Button Is Disabled At Run
hit_btn.addEventListener("click",function()//When Button Is Clicked Following Function is executed
{
    hit(++cnt);//Function Is Called with cnt value which is pre-increamented value that starts with 3
    setTimeout(function () 
    {
        if(sum_player>21)
        {
        winner();
        document.getElementById("overlay1").style.display = "block"; 
        }
    },1000);//Each Time After One second Timeout function is called and each time checked for winner



    setTimeout(function () 
    {
     if(sum_player==21)
        {
        winner();
        document.getElementById("overlay1").style.display = "block";  
        }
    },1000);//Each Time After One second Timeout function is called and each time checked for winner
});




function hit(cnt) 
{
    if(sum_player<21)//Checks If Sum of Played is less than 21 so execute
    {
        var n = shuffled_cards.pop();//Card is Popped
        switch(cnt)//Switch for each case i.e for each card 3rd 4th and 5th
        {
        case 3:
            var play3 = p3.children;//Children Elements Are inserted into play3
            insert(play3,n);//Insert Function is called And array and card is passed
            weight(n,p);//In Weight Function Card is Passed and Boolean to check if it is Player or Dealer
            color(play3,n);//color is called and array is passed with card
            cnt++;//Increased Value to get into switch
            sum_player += n.weight;//sum player is also increased with current weight and checks after every hit
            break;



        case 4:
            var play4 = p4.children;//Same As Above
            insert(play4,n);//Same As Above
            weight(n,p);//Same As Above
            color(play4,n);//Same As Above
            cnt++;//Same As Above
            sum_player += n.weight;//Same As Above
            break;



        case 5:
            var play5 = p5.children;//Same As Above
            insert(play5,n);//Same As Above
            weight(n,p);//Same As Above
            color(play5,n);//Same As Above
            cnt++;//Same As Above
            console.log(n);//Same As Above
            sum_player += n.weight;//Same As Above
            break;
        }
    }
}

var stand_btn = document.getElementById("Stand");//Stand Button Is Accessed Using DOM
stand_btn.disabled = "true";//Button Is Disabled At Run


stand_btn.addEventListener("click",function ()//When Button Is Clicked Following Function is executed
{
    setInterval(function()//Stand Function is called after 0.5 seconds that gives out Dealers card in 0.5 seconds 
    {
    if(sum_dealer<19 && sum_dealer < sum_player)//If Score of dealer is less than 19 and less than player then function is called
    {
        stand(++cnt1);//calling Stand Function with pre increased cnt1 value to get into switch cases
    }
    },500);

    setTimeout(winner,2600);//winner Function is called after 2.6 seconds(0.5 for 5 cards takes 2.5 to show all dealer cards)
});



function stand(cnt1)//Stand Function
{
    hit_btn.disabled = true;//Hit Button Is Disabled As when Player Clicks Stand so player cannot get more cards
    if(sum_dealer<19)//If sum of dealer is less then 19 then switch is executed
    {
        var n = shuffled_cards.pop();//card is popped
        switch(cnt1)
        {
        case 2:
            var deal2 = d2.children;//Children Elements Are inserted into deal2
            insert(deal2,n);//Insert Function is called And array and card is passed
            weight(n,d);//In Weight Function Card is Passed and Boolean to check if it is Player or Dealer
            color(deal2,n);//color is called and array is passed with card
            cnt1++;//Increased Value to get into switch
            score();//score function is called
            break;



        case 3:
            var deal3  = d3.children;//Same As Above
            insert(deal3,n);//Same As Above
            weight(n,d);//Same As Above
            color(deal3,n);//Same As Above
            cnt1++;//Same As Above
            score();//Same As Above
            break;



        case 4:
            var deal4  = d4.children;//Same As Above
            insert(deal4,n);//Same As Above
            weight(n,d);//Same As Above
            color(deal4,n);//Same As Above
            cnt1++;//Same As Above
            score();//Same As Above
            break;

        case 5:
            var deal5 = d5.children;//Same As Above
            insert(deal5,n);//Same As Above
            weight(n,d);//Same As Above
            color(deal5,n);//Same As Above
            cnt1++;//Same As Above
            score();//Same As Above
            break;
        }
    }
}



function score()//Function Score is used only for Dealer,Here Weight of A is 11 and if sum exceeds 21 then make score to 1
{
    var  sum2 = 0;//Sum Is Set To Zero
    var arr = [];//Array Initialized
    for(var i = 0;i<score_d.length;i++)//To Iterate Over Score Of Dealer Array
    {
        if(score_d[i]==11)//If Score Of Dealer is equal to 11
        {
            sum2+=1;//so sum is set to 1
            arr.push(score_d[i]);//and the value i.e 11 is pushed to array
        }
        else
        {
            sum2+=score_d[i];//else score is set to the value
        }
    }  
    if(sum2<=11 && arr.length>=1)//here if sum is less than 11 and array has length greater than 1 then
    //10 is added to the value of sum as the value will be below 21 to get the game rules right 
    {
        sum2+=10;
    }
    sum_dealer = sum2;//Here the sum_dealer is set value of sum
}


function winner()//Checks For Winner
{
    var a = 0;//To Get Score of Player 
    for (let i = 0; i < score_p.length; i++)//Iterates Over Array Of Player Scores
    {
        a += score_p[i];//value is added to 'a' variable
    }



    var b = 0;//Initialized To 0
    b = sum_dealer;//To assign The Score of Dealer For Comparison
    if(a>b && a<=21)//If Player Score Is Greater Than Dealer and Score Of Player is Less Than 21 Then Player Wins
    {
        win.innerHTML = "🎉Winner Is Player 🎉";//Player Wins
        audio.play();//Audio Is Player
        bal.innerText = Number(bal.innerText) + (total_bet * 2);//Balance is Added with Total_bet player placed * 2 
        bet_won.innerHTML = "You've Won 🤑 $" + total_bet ;//Displays How Much bet Player won
        bet_player.innerText = 0;//Bet Value is set to 0
    }



    else if(b>a && b<=21)//If Dealer Score Is Greater Than Player and Score Of Dealer is Less Than 21 Then Dealer Wins
    {
        win.innerHTML = "🎉Winner Is Dealer 🎉";//Dealer Wins
        audio1.play();//Audio is played
        bet_won.innerHTML = "You've Lost 😢 $" + total_bet ;//Displays How Much Bet Player looses
    }



    else if(a==b)//If Both Scores Are Same Then it's A Tie
    {
        win.innerHTML = "🤜🏻🤛🏻It's A Tie🤜🏻🤛🏻";//Shows It's A Tie
        bal.innerText = Number(bal.innerText) + total_bet;//Balance is set and placed bet is returned to player
        bet_player.innerText = 0;//bet is set to 0
    }
    


    if(a>21)//if Score of Player Exceeds 21 automatically Dealer Wins 
    {
        audio1.play();//Audio Played
        win.innerHTML = "🎉Winner Is Dealer 🎉";//Shows Dealer Wins
        bet_won.innerHTML = "You've Lost 😢 $" + total_bet ;//Shows How Much Bet Player Lost
    }
    if(b>21)//If Score Of Dealer Exceeds 21 Then Automatically Player Wins
    {
        audio.play();//Audio Is Played
        win.innerHTML = " 🎉Winner Is Player 🎉";//Shows Player Wins
        bal.innerText = Number(bal.innerText) + (total_bet * 2);//Balance is Added with Total_bet player placed * 2 
        bet_won.innerHTML = "You've Won 🤑 $" + total_bet ;//Displays How Much bet Player won
        bet_player.innerText = 0;//Bet Value is set to 0
    }

    document.getElementById("overlay1").style.display = "block";//Second Overlay is displayed That Shows Winner And Bet Won
    var mon = Number(bal.innerText);//Each time bet is won or lost the value of balance is stored in local storage and it is
    //replaced with the original value
    localStorage.setItem("money1",mon);//Another Value stores updated value
}

var bet_player = document.getElementById("bet1");//Access bet1 using DOM
var bal = document.getElementById("Balance");//Access Balance using DOM
var x = localStorage.getItem("money");//Every Time Page Refreshes The Money value is accessed from LocalStorage And Displayed
bal.innerHTML = x;//Displays The Balance Left
var total_bet = 0;//Bet is Set To 0



var free = document.getElementById("free");
free.disabled = true;


function bet(n)//Function Is Firstly Executed As Bet Is Placed First...Function is called on with HTML Attribute OnClick
{
    if(Number(bal.innerHTML)>=n)//If balance is greater than or equal to bet clicled then bet is increased
    {
    hint.innerHTML = " Hint:-👻 Please Click On Deal To Start The Game 👻 ";//Hint Is Displayed That Click On Deal To Get Cards
    start.disabled = false;//Here Deal Button Is Enabled
    var temp = bet_player.innerText;//Taking Value of balance into temp
    bet_player.innerText = Number(temp) + n;//Displaying Bet Of Player in Bet Container with adding n i.e bet on each click
    total_bet = Number(bet_player.innerText);//Gets The Last Value OF Bet Placed And is used for calculation of balance in 
    //winner function that if player wins total_bet * 2 is added into balance and if ties total_bet is added
    var org_bal = bal.innerText;//Original Balance Is Stored
    bal.innerText = Number(org_bal) - n;//On Each Click the balance is decreased by n
    }   


    else if(Number(bal.innerHTML)==0 && bet_player.innerHTML=="")//Checks if Balance and bet is equal to 0 and Null
    {
        free.disabled = false;
        alert("Insufficient Funds Click On Free Coins To Get $500");//This Says That The Balance Is Null So you Cannot Place More Bets
        free.addEventListener("click",function()
        {
            localStorage.clear();//clear localStorage
            localStorage.setItem("money1",500);//set money1 to 30000and money key in Storage 
            //is assigned with money1 in off1 function
            document.getElementById("overlay1").style.display = "block";//if there is no balance display is blocked
        });
    }

    
    else if(Number(bal.innerHTML)==0)//checks for each time if there is no balance
    {
        alert("Insufficient Funds");//This Says That The Balance Is Null So you Cannot Place More Bets
    }
}
