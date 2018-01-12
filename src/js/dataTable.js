$(document).ready(function() {
    $(".email-table__howManyShow").change(function(){
        $("[name='pagination-page']").val($(".pagination__number.active").text());
        $("[type=submit]").click();
    })

    $(".pagination__number").click(function(){
        $("[name='pagination-page']").val($(this).text());
        $(this).addClass("active");
        $("[type=submit]").click();
    })
});
