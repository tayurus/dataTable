$(document).ready(function() {
    $(".email-table__howManyShow").change(function(){
        $("[name='pagination-page']").val($(this).text());
        $("[type=submit]").click();
    })

    $(".pagination__number").click(function(){
        $("[name='pagination-page']").val($(this).text());
        $("[type=submit]").click();
    })
});
