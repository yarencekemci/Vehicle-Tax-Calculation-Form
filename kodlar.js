function yillar()
{
    var tarih=new Date();
    var yil=tarih.getFullYear();

    for(var i=yil;i>=1950;i--)
    {
        var secenek=document.createElement("option");
        document.getElementById("aracModeli").options.add(secenek);
        secenek.text=i;
        secenek.value=i;
    }
}
function vergiHesapla()
{
    var aracTipi,aracGucu,aracYili;
    var odenecekVergi;
    var i;

    for(i=0;i<document.getElementById("aracTipi").length;i++)
    {
        if(document.getElementById("aracTipi").options[i].selected)
        {
            aracTipi=document.getElementById("aracTipi").options[i].value;
        }
    }
    console.log(aracTipi);

    for(i=0;i<document.getElementsByName("motorGucu").length;i++)
    {
        if(document.getElementsByName("motorGucu")[i].checked)
        {
            aracGucu=document.getElementsByName("motorGucu")[i].value;
        }
    }
    console.log(aracGucu);

    for(i=0;i<document.getElementById("aracModeli").length;i++)
    {
        if(document.getElementById("aracModeli").options[i].selected)
        {
            aracYili=document.getElementById("aracModeli").options[i].value;
        }
    }
    console.log(aracYili);

    if(aracTipi=="motorsiklet")
    {
        odenecekVergi=100;
    }
    else if(aracTipi=="otomobil")
    {
        odenecekVergi=200;
    }


    if(aracGucu=="1000cc-1600cc")
    {
        odenecekVergi=odenecekVergi+50;
    }
    else if(aracGucu=="1601cc-2000cc")
    {
        odenecekVergi=odenecekVergi+100;
    }
    else if(aracGucu=="2001cc")
    {
        odenecekVergi=odenecekVergi+150;
    }

    if(aracYili<=2000)
    {
        odenecekVergi=odenecekVergi-25;
    }

    document.getElementById("sonuc").innerHTML="Ödenecek vergi tutarı: "+odenecekVergi;

    console.log(odenecekVergi);

}