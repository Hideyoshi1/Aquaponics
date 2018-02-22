// ==UserScript==
// @name         tilapia feed chart script
// @namespace    tilapia ratios
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://tilapiafarmingbrazil.blogspot.de/2015/04/feeding-chart-for-tilapia.html
// @grant        none
// ==/UserScript==

function Feed_Weight_Ratio(){
    para = document.createElement("th");
    $(".tableizer-table  tbody tr:nth-child(2)").append(para);
    t = document.createTextNode("Feed-Weight Ratio");
    para.appendChild(t);
    $(".tableizer-table  tbody tr:nth-child(1)").append(para);

    x=(document.getElementsByTagName('tr').length); // 33
    for (i=3;i<x;i++){
        weight=$(".tableizer-table  tbody tr:nth-child("+i+") td:nth-child(2)");
        weight=Number(weight.innerHTML.substring(weight.innerHTML.indexOf("-") + 1));
        feed=$(".tableizer-table  tbody tr:nth-child("+i+") td:nth-child(5)").innerHTML;
        feed_mesurment = feed.replace(/[^a-zA-Z]+/g, '');
        feed = feed.replace(/\D/g,'');
        if (feed_mesurment=="kgs"){
            feed=Number(feed)/10;
        }else
            feed=Number(feed)/1000;
        result=((feed/weight)*100); // $(".tableizer-table  tbody tr:nth-child("+i+") td:nth-child(4)").innerHTML
        para = document.createElement("td");
        t = document.createTextNode(result);
        para.appendChild(t);
        $(".tableizer-table  tbody tr:nth-child("+i+")").append(para);
    }
}

function Feed_Conversion_Ratio(){
    para = document.createElement("th");
    $(".tableizer-table  tbody tr:nth-child(2)").append(para);
    t = document.createTextNode("Feed-Conversion Ratio");
    para.appendChild(t);
    $(".tableizer-table  tbody tr:nth-child(1)").append(para);

    prev_weight=0;
    x=(document.getElementsByTagName('tr').length); // 33
    for (i=3;i<x;i++){
        weight=$(".tableizer-table  tbody tr:nth-child("+i+") td:nth-child(2)");
        weight=Number(weight.innerHTML.substring(weight.innerHTML.indexOf("-") + 1));
        feed=$(".tableizer-table  tbody tr:nth-child("+i+") td:nth-child(5)").innerHTML;
        feed_mesurment = feed.replace(/[^a-zA-Z]+/g, '');
        feed = feed.replace(/\D/g,'');
        if (feed_mesurment=="kgs"){
            feed=Number(feed)/10;
        }else
            feed=Number(feed)/1000;
        result=((feed/(weight-prev_weight))*100); // $(".tableizer-table  tbody tr:nth-child("+i+") td:nth-child(4)").innerHTML
        para = document.createElement("td");
        t = document.createTextNode(result);
        para.appendChild(t);
        $(".tableizer-table  tbody tr:nth-child("+i+")").append(para);
        prev_weight=weight;
    }
}

Feed_Weight_Ratio();
Feed_Conversion_Ratio();
