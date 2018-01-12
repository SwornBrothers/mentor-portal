$(function ()
{
    $.validator.addMethod('validTitle',function (value, element) {
        return value.length<=120 ;

    },'title must be less than 120 characteras')

    $.validator.addMethod('longDes',function (value, element) {
        return value.length<500 ;

    },'too long description')

    $.validator.addMethod('shortDes',function (value, element) {
        return value.length>100 ;

    },'too short description')


    $("#post-form").validate({
        rules:
        {
            title:{
                required: true,
                validTitle:true
            },
            description:{
                required:true,
                longDes:true,
                shortDes:true

            },
            language:{
                valueNotEquals: "notselected"
            },
            area:{
                valueNotEquals: "notselected"
            }




        },
        message:{
            title:{
                required: "post must contain a title",
                validTitle:"title must be less than 120 characters"
            },
            description:{
                required:"post must contain a description",

            },
            area:{
                valueNotEquals:"you must select an area"
            },
            language:{
                valueNotEquals:"you must select a language"
            }
        }

    });

});
