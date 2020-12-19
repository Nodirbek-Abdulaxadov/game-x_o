var start = true;
function bos()
{
    if(start) 
    {
        suf();
        start = false;
    }
    else 
    {
        toza();
        start = true;
    }
}

var key = true;
function suf() 
{ 
    if(key)
    {
        var doc =  "";
        var num = 0;
        for (var i=0; i<3; i++)
        {
            for(var j=0; j<3; j++)
            {
                doc += '<input type="button" value=" " class="xo" onclick="klik(this)" name="'+num+'">';
                num++;
            }
            doc += '<br />';
        }
        document.getElementById('jadval').innerHTML += doc;
        key = false;
    }
}

var k=0;
var nums = ['1','2','3','4','5','6','7','8','9'];

function klik(kirish) 
    {
        if((k%2==0) && (kirish.value == " "))
        {
            kirish.value = "X";
            k++;
            nums[kirish.name] = "X";
        }
        else if (kirish.value == " ")
        {
            kirish.value = "O";
            k++;
            nums[kirish.name] = "O";
        }
        if(((nums[0] == nums[1])&&(nums[0] == nums[2])) || ((nums[3] == nums[4])&&(nums[4] == nums[5])) ||
        (((nums[6] == nums[7])&&(nums[7] == nums[8]))) || ((nums[0] == nums[3])&&(nums[0] == nums[6])) ||
        ((nums[1] == nums[4])&&(nums[1] == nums[7])) || ((nums[2] == nums[5])&&(nums[2] == nums[8])) ||
        ((nums[0] == nums[4])&&(nums[0] == nums[8])) || ((nums[6] == nums[4])&&(nums[6] == nums[2])))
        if(k%2==2) alert("1-o'yinchi yutdi!");
        else alert("2-o'yinchi yutdi!");
        document.getElementById('start').value = "Tozalash";
    }
function toza()
{
    document.getElementById('start').value = "Boshlash";
    suf();
}