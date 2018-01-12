$(function ()
{
    $.validator.addMethod('validPassword',function (value, element) {
        return value.length>=6 && /\d/.test(value) && /[a-z]/i.test(value) ;

    },'password must be at least 6 character long and contain atleast one digit and one character')

    $.validator.addMethod('validUserName',function (value, element) {
        return value.length>=4 ;

    },'user name must be at least 4 character long')


    $("#registration-form").validate({
        rules:
        {
            email:{
                required: true,
                email : true
            },
            userName:{
                required: true,
                nowhitespace: true,
                lettersonly:true,
                validUserName:true

            },
            password:{
                required:true,
                validPassword:true

            },
            confirmPassword:{
                required:true,
                equalTo: "#password"
            },
            terms:{
                required: true
            }


        },
        message:{
            email:{
                required:"please enter an email",
                email: "please enter a valid email"
            },
            userName:{
                required:"user name is required",
                nowhitespace:"user name cannot contain any white space",
                lettersonly:"user name should contain only letters no digit"


            },
            password:{
                required:"password is required"
            },
            confirmPassword:{
                required:"confirm password is required",
                equalTo:"confirm password didn't match with password"
            },
            terms:
            {
                required:"check the box"

            }
        }

    });

});
