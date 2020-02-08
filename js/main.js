let skill;
let template;
let rmvButton;

$('.submit').on('click', function(e) {
    e.preventDefault();
    let skill = $('#new-skill').val();
    console.log(skill);
    template =
    `<div class="skill">
        <button class="delete">X</button>
        <p>${skill}</p>
    </div>`
    $('section').append(template);
    console.log($(this));
});

rmvButton = $('.skills').on('click', 'button', function (){
    $(this).closest('.skill').remove();
})