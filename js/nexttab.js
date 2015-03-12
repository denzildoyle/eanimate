$(document).ready(function(){
var tabContents = $(".tabContent").hide(), 
    tabs = $("ul.tabs li");

tabs.first().addClass("active").show();
tabContents.first().show();

tabs.click(function() {
    var $this = $(this), 
        activeTab = $this.find('a').attr('href');
    if(!$this.hasClass('active')){
        $this.addClass('active').siblings().removeClass('active');
        tabContents.hide().filter(activeTab).fadeIn();
    }
    return false;
});

$(".tabbutton").click(function(){
    var nextTab = parseInt($("li.active").attr("id"), 10) + 1;
    if(nextTab === 4){ nextTab = 1; }
    $("#"+nextTab).click();
});
});


