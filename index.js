var p1=Math.random()
p1*=6;
p1=Math.floor(p1)+1;
var p2=Math.random()*6;
p2=Math.floor(p2)+1;
if (p1>p2)
    {
        document.querySelector("h1").innerHTML="Player 1 win!";
    }
else if(p2>p1)
{
    document.querySelector("h1").innerHTML="Player 2 win!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}
if (p1==1)
    {
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
    }
else if(p1==2)
    {
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
    }
    else if(p1==3)
        {
            document.querySelector(".img1").setAttribute("src","images/dice3.png");
        }
        else if(p1==4)
            {
                document.querySelector(".img1").setAttribute("src","images/dice4.png");
            }
            else if(p1==5)
                {
                    document.querySelector(".img1").setAttribute("src","images/dice5.png");
                }
                else 
                    {
                        document.querySelector(".img1").setAttribute("src","images/dice6.png");
                    }
if (p2==1)
     {
                document.querySelector(".img2").setAttribute("src","images/dice1.png");
     }
    else if(p2==2)
                        {
                            document.querySelector(".img2").setAttribute("src","images/dice2.png");
                        }
                        else if(p2==3)
                            {
                                document.querySelector(".img2").setAttribute("src","images/dice3.png");
                            }
                            else if(p2==4)
                                {
                                    document.querySelector(".img2").setAttribute("src","images/dice4.png");
                                }
                                else if(p2==5)
                                    {
                                        document.querySelector(".img2").setAttribute("src","images/dice5.png");
                                    }
                                    else 
                                        {
                                            document.querySelector(".img2").setAttribute("src","images/dice6.png");
                                        }