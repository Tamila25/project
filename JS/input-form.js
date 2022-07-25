
document.addEventListener('DOMContentLoaded', function () {
    const validation = new JustValidate('#form-contact');
    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);

    new JustValidate('#form', {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 20,
               

            },

            phone: {
                required: true,



                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue();
                    return Number(phone) && phone.length === 10
                }
            },


        },

        messages: {
            name: {
                required: 'Введите имя',
                minLength: 'Поле должно содержать минимум 2 символа'
            },
            phone: {
                required: 'Укажите ваш телефон',
                function: 'Телефон должен состоять из 10 символов'
            },


        },
    });

})